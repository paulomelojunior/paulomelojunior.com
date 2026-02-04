// GSAP
import { gsap } from 'gsap'
import { ScrollTrigger, CustomEase, DrawSVGPlugin } from 'gsap/all'

gsap.registerPlugin(
  CustomEase,
  DrawSVGPlugin,
  ScrollTrigger
)

gsap.defaults({
  duration: 1,
  ease: CustomEase.create('custom', '.75,0,.5,1'),
})
