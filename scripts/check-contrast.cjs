const fs = require('fs')
const path = require('path')

const colors = {
  'zinc-50': [240, 240, 235],
  'zinc-100': [212, 212, 208],
  'zinc-200': [180, 180, 176],
  'zinc-300': [148, 148, 144],
  'zinc-400': [120, 120, 118],
  'zinc-500': [92, 92, 90],
  'zinc-600': [68, 68, 66],
  'zinc-700': [50, 50, 48],
  'zinc-800': [36, 36, 34],
  'zinc-900': [24, 24, 22],
  'zinc-950': [12, 12, 10],
  'brand-300': [160, 180, 220],
  'brand-400': [100, 140, 200],
  'brand-500': [60, 100, 180],
}

const luminance = (r, g, b) => {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    c = c / 255
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  })
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
}

const contrast = (fg, bg) => {
  if (!colors[fg] || !colors[bg]) return 0
  const l1 = luminance(...colors[fg])
  const l2 = luminance(...colors[bg])
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05)
}

const findColors = (str) => {
  const results = []
  const regex = /(text|bg)-(zinc|brand)-\d+/g
  let match
  while ((match = regex.exec(str)) !== null) {
    results.push(match[0])
  }
  return results
}

const shouldIgnore = (line) => {
  return (
    line.includes('aria-hidden="true"') ||
    line.includes("aria-hidden='true'") ||
    line.includes('aria-hidden={true}')
  )
}

const getSuggestion = (fg, bg) => {
  const suggestions = {
    'text-zinc-600': {
      'bg-zinc-950': 'text-zinc-400 (5.21:1)',
      'bg-zinc-900': 'text-zinc-400 (4.72:1)',
    },
    'text-zinc-500': {
      'bg-zinc-950': 'text-zinc-400 (5.21:1)',
      'bg-zinc-800': 'text-zinc-400 (4.27:1)',
    },
    'text-zinc-400': { 'bg-zinc-950': 'Manter (4.43:1 - Quase AA)' },
    'text-zinc-300': { 'bg-zinc-50': 'text-zinc-700 (9.23:1)' },
  }
  return suggestions[fg]?.[bg] || null
}

const analyzeContrast = (targetDir = 'src') => {
  const problems = []
  const ignoredByFile = {}
  let ignoredCount = 0

  function walkDir(dir) {
    try {
      const entries = fs.readdirSync(dir, { withFileTypes: true })
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name)
        if (
          entry.isDirectory() &&
          !entry.name.startsWith('.') &&
          entry.name !== 'node_modules' &&
          entry.name !== 'docs'
        ) {
          walkDir(fullPath)
        } else if (
          entry.isFile() &&
          ['.ts', '.html', '.css'].includes(path.extname(entry.name))
        ) {
          const content = fs.readFileSync(fullPath, 'utf-8')
          const lines = content.split('\n')

          for (let idx = 0; idx < lines.length; idx++) {
            const line = lines[idx]

            if (shouldIgnore(line)) {
              ignoredCount++
              const relPath = path.relative('.', fullPath)
              if (!ignoredByFile[relPath]) ignoredByFile[relPath] = 0
              ignoredByFile[relPath]++
              continue
            }

            const colorClasses = findColors(line)
            const textColors = colorClasses.filter((c) => c.startsWith('text-'))
            const bgColors = colorClasses.filter((c) => c.startsWith('bg-'))

            if (textColors.length > 0) {
              const fg = textColors[0].replace('text-', '')
              let bg = 'zinc-950'
              if (bgColors.length > 0) {
                bg = bgColors[0].replace('bg-', '')
              } else {
                const bgMatch = line.match(/bg-zinc-(\d+)/)
                if (bgMatch) bg = 'zinc-' + bgMatch[1]
              }

              const ratio = contrast(fg, bg)
              const relPath = path.relative('.', fullPath)

              if (ratio > 0 && ratio < 4.5) {
                problems.push({
                  fg: 'text-' + fg,
                  bg: 'bg-' + bg,
                  ratio,
                  file: relPath,
                  line: idx + 1,
                  context: line.trim().substring(0, 60),
                })
              }
            }
          }
        }
      }
    } catch (e) {
      console.error('Error:', e.message)
    }
  }

  walkDir(targetDir)

  // Group by file
  const byFile = {}
  problems.forEach((p) => {
    if (!byFile[p.file]) byFile[p.file] = []
    byFile[p.file].push(p)
  })

  // Group by color combination
  const byCombination = {}
  problems.forEach((p) => {
    const key = p.fg + ' on ' + p.bg
    if (!byCombination[key]) {
      byCombination[key] = { fg: p.fg, bg: p.bg, ratio: p.ratio, locations: [] }
    }
    byCombination[key].locations.push({
      file: p.file,
      line: p.line,
      context: p.context,
    })
  })

  return { problems, byFile, byCombination, ignoredCount, ignoredByFile }
}

const { problems, byFile, byCombination, ignoredCount, ignoredByFile } =
  analyzeContrast(process.argv[2] || 'src')

console.log('=== RELATORIO DE CONTRASTE WCAG ===')
console.log('')

// Problems grouped by file in a cleaner format
Object.keys(byFile)
  .sort()
  .forEach((file) => {
    const fileProblems = byFile[file]
    const failCount = fileProblems.filter((p) => p.ratio < 3).length
    const warnCount = fileProblems.filter((p) => p.ratio >= 3).length

    console.log(`[${file}]`)
    console.log(`  ${failCount} FAIL / ${warnCount} WARN`)
    fileProblems.forEach((p) => {
      const status = p.ratio >= 3 ? 'WARN' : 'FAIL'
      console.log(
        `  :${p.line} ${p.fg} / ${p.bg} = ${p.ratio.toFixed(2)}:1 [${status}]`
      )
    })
    console.log('')
  })

let totalFail = 0
let totalWarn = 0

Object.values(byCombination).forEach((p) => {
  if (p.ratio < 3) totalFail++
  else totalWarn++
})

console.log('---')
console.log(
  `Total: ${problems.length} problemas (${totalFail} FAIL / ${totalWarn} WARN)`
)
console.log(`Ignorados (aria-hidden): ${ignoredCount}`)

if (Object.keys(ignoredByFile).length > 0) {
  console.log('\n   Ignorados por arquivo:')
  Object.keys(ignoredByFile).forEach((file) => {
    console.log(`   - ${file}: ${ignoredByFile[file]}`)
  })
}
