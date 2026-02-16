import gsap from 'gsap'
import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import classNames from 'classnames'

@customElement('menu-item')
export class MenuItem extends LitElement {
  @property({ type: String }) classNames = ''
  @property({ type: String }) href: string = ''
  @property({ type: String }) label: string = ''

  firstUpdated() {
    const navItems = document.querySelectorAll('.menu-item')

    navItems.forEach((item) => {
      const target = item.firstElementChild
      gsap.set(target, {
        clipPath: 'inset(0% 0% 100% 0%)',
      })
    })

    function handleEnter(this: HTMLElement) {
      const target = this.firstElementChild
      gsap.to(target, {
        duration: 0.2,
        clipPath: 'inset(0% 0% 0% 0%)',
      })
    }

    function handleLeave(this: HTMLElement) {
      if (this.classList.contains('active')) return

      const target = this.firstElementChild
      if (!target) return

      gsap.to(target, {
        duration: 0.2,
        clipPath: 'inset(100% 0 0 0)',
        onComplete: () => {
          gsap.set(target, {
            clipPath: 'inset(0% 0% 100%)',
          })
        },
      })
    }

    navItems.forEach((item) => {
      item.addEventListener('mouseenter', handleEnter)
      item.addEventListener('mouseleave', handleLeave)
    })
  }

  render() {
    const baseClasses = classNames(
      `font-medium relative flex justify-center leading-none pt-2 pb-2.5 px-4 text-zinc-300 text-[.875rem] items-center rounded-full hover:text-zinc-50 hover:bg-zinc-50/10 transition-all duration-[200ms] active:scale-95 active:bg-zinc-50/20`
    )

    return html`<a
      class="${baseClasses} ${this.classNames}"
      href="${this.href}"
      data-label="${this.label}"
    >
      ${this.label}
    </a>`
  }

  createRenderRoot() {
    return this
  }
}
