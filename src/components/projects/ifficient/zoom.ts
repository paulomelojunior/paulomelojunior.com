import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import Lenis from 'lenis'

interface LenisInstance {
  start(): void
  stop(): void
}

@customElement('img-zoom')
export class ImgZoom extends LitElement {
  @property({ type: Array }) images: {
    src: string
    width: number
    height: number
    class?: string
  }[] = []

  private overlayLenis?: Lenis
  private overlayRafId = 0

  connectedCallback(): void {
    super.connectedCallback()
    ;(window.lenis as LenisInstance | undefined)?.stop()
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', this.onKeydown)
  }

  disconnectedCallback(): void {
    super.disconnectedCallback()
    if (this.overlayRafId) cancelAnimationFrame(this.overlayRafId)
    this.overlayLenis?.destroy()
    this.overlayLenis = undefined
    ;(window.lenis as LenisInstance | undefined)?.start()
    document.body.style.overflow = ''
    document.removeEventListener('keydown', this.onKeydown)
  }

  private onKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') this.close()
  }

  private onBackdropClick = (e: MouseEvent) => {
    if ((e.target as HTMLElement).classList.contains('zoom-overlay')) {
      this.close()
    }
  }

  private close = () => {
    this.remove()
  }

  firstUpdated(): void {
    const wrapper = this.querySelector<HTMLElement>('.zoom-overlay')
    const content = this.querySelector<HTMLElement>('.zoom-content')
    if (!wrapper || !content) return

    this.overlayLenis = new Lenis({ wrapper, content })

    const raf = (time: number) => {
      this.overlayLenis?.raf(time)
      this.overlayRafId = requestAnimationFrame(raf)
    }
    this.overlayRafId = requestAnimationFrame(raf)
  }

  render() {
    return html`
      <button
        class="fixed top-5 right-5 z-60 flex h-8 items-center gap-1 rounded-full px-3 pe-2 tracking-wider text-xs/none leading-none text-zinc-100 uppercase transition-all hover:bg-zinc-100 hover:text-zinc-950"
        @click=${this.close}
      >
        Esc
        <span class="text-2xl/none font-extralight">
          &times;
        </span>
      </button>
      <div
        class="zoom-overlay fixed inset-0 z-50 overflow-auto overscroll-contain bg-zinc-50/20 backdrop-blur backdrop-brightness-50"
        @click=${this.onBackdropClick}
      >
        <div class="zoom-content container my-24 max-w-[1280px]">
          <picture>
            ${this.images.map(
              (img, i) => html`
                <img
                  src=${img.src}
                  width=${img.width}
                  height=${img.height}
                  loading=${i === 0 ? 'eager' : 'lazy'}
                  class="${img.class ?? ''} block w-full"
                />
              `
            )}
          </picture>
        </div>
      </div>
    `
  }

  createRenderRoot() {
    return this
  }
}
