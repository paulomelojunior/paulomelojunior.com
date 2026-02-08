import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import classNames from 'classnames'

@customElement('languages-button')
export class LanguagesButton extends LitElement {
  @property({ type: String }) baseClasses = ''
  @property({ type: String }) customClasses = ''
  @property({ type: String }) icon = ''
  @property({ type: String }) label = ''
  @property({ type: String }) title = ''

  render() {
    const baseClasses =
      'relative font-medium text-[.75rem] tracking-[0.04em] flex transition-all duration-[200ms] px-1 xl:px-1.5 gap-2 h-8 rounded-full leading-8.5 xl:items-center  hover:text-zinc-50 text-zinc-300  active:scale-95'
    const buttonClasses = classNames(baseClasses, this.customClasses)
     
    return html`
      <button class="${buttonClasses}" title="${this.title}">
        ${this.label}
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="h-8" viewBox="0 0 256 256"><path d="M247.15,212.42l-56-112a8,8,0,0,0-14.31,0l-21.71,43.43A88,88,0,0,1,108,126.93,103.65,103.65,0,0,0,135.69,64H160a8,8,0,0,0,0-16H104V32a8,8,0,0,0-16,0V48H32a8,8,0,0,0,0,16h87.63A87.76,87.76,0,0,1,96,116.35a87.74,87.74,0,0,1-19-31,8,8,0,1,0-15.08,5.34A103.63,103.63,0,0,0,84,127a87.55,87.55,0,0,1-52,17,8,8,0,0,0,0,16,103.46,103.46,0,0,0,64-22.08,104.18,104.18,0,0,0,51.44,21.31l-26.6,53.19a8,8,0,0,0,14.31,7.16L148.94,192h70.11l13.79,27.58A8,8,0,0,0,240,224a8,8,0,0,0,7.15-11.58ZM156.94,176,184,121.89,211.05,176Z"></path></svg>
      </button>
    `
  }

  createRenderRoot() {
    return this
  }
}
