/// <reference types="vite/client" />

declare module '*.scss' {
  const content: { [className: string]: string }
  export default content
}

import Lenis from 'lenis'

declare global {
  interface Window {
    lenis: Lenis
  }
}

export {}
