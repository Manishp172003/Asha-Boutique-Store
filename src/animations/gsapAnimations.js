import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

// Hero section animations
export const animateHeroSection = (heroRef) => {
  const ctx = gsap.context(() => {
    // Hero entrance animation
    gsap.fromTo('.hero-image', 
      { opacity: 0, scale: 1.06 },
      { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }
    )
    gsap.fromTo('.hero-headline', 
      { opacity: 0, y: 26 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power2.out' }
    )
    gsap.fromTo('.hero-subheadline', 
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.4, ease: 'power2.out' }
    )
    gsap.fromTo('.hero-cta', 
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.5, ease: 'power2.out' }
    )
    gsap.fromTo('.hero-card', 
      { opacity: 0, y: 24, scale: 0.98 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, delay: 0.6, ease: 'power2.out' }
    )
  }, heroRef)

  return ctx
}

// New Arrivals section animations
export const animateNewArrivals = (newArrivalsRef) => {
  const ctx = gsap.context(() => {
    // Left image slides in from left
    gsap.fromTo('.new-arrivals-left',
      { x: '-60vw' },
      {
        x: 0,
        scrollTrigger: {
          trigger: newArrivalsRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1
        }
      }
    )
    
    // Right image slides in from right
    gsap.fromTo('.new-arrivals-right',
      { x: '60vw' },
      {
        x: 0,
        scrollTrigger: {
          trigger: newArrivalsRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1
        }
      }
    )
    
    // Center badge scales and rotates
    gsap.fromTo('.new-badge',
      { scale: 0.2, rotate: -12, opacity: 0 },
      {
        scale: 1, rotate: 0, opacity: 1,
        scrollTrigger: {
          trigger: newArrivalsRef.current,
          start: 'top 70%',
          end: 'top 30%',
          scrub: 1
        }
      }
    )
  }, newArrivalsRef)

  return ctx
}

// Curated Collection section animations
export const animateCuratedCollection = (curatedRef) => {
  const ctx = gsap.context(() => {
    // Image slides in from right
    gsap.fromTo('.curated-image',
      { x: '60vw', opacity: 0 },
      {
        x: 0, opacity: 1,
        scrollTrigger: {
          trigger: curatedRef.current,
          start: 'top 80%',
          end: 'top 30%',
          scrub: 1
        }
      }
    )
    
    // Text slides in from left
    gsap.fromTo('.curated-text',
      { x: '-40vw', opacity: 0 },
      {
        x: 0, opacity: 1,
        scrollTrigger: {
          trigger: curatedRef.current,
          start: 'top 80%',
          end: 'top 30%',
          scrub: 1
        }
      }
    )
  }, curatedRef)

  return ctx
}

// Atelier section animations
export const animateAtelier = (atelierRef) => {
  const ctx = gsap.context(() => {
    // Image slides in from left
    gsap.fromTo('.atelier-image',
      { x: '-70vw' },
      {
        x: 0,
        scrollTrigger: {
          trigger: atelierRef.current,
          start: 'top 80%',
          end: 'top 30%',
          scrub: 1
        }
      }
    )
    
    // Text slides in from right
    gsap.fromTo('.atelier-text',
      { x: '50vw', opacity: 0 },
      {
        x: 0, opacity: 1,
        scrollTrigger: {
          trigger: atelierRef.current,
          start: 'top 80%',
          end: 'top 30%',
          scrub: 1
        }
      }
    )
  }, atelierRef)

  return ctx
}

// Trending section animations
export const animateTrending = (trendingRef) => {
  const ctx = gsap.context(() => {
    // Product cards fade and scale up with stagger
    gsap.fromTo('.trending-card',
      { y: 40, opacity: 0, scale: 0.98 },
      {
        y: 0, opacity: 1, scale: 1,
        stagger: 0.08,
        scrollTrigger: {
          trigger: trendingRef.current,
          start: 'top 85%',
          end: 'top 40%',
          scrub: 1
        }
      }
    )
  }, trendingRef)

  return ctx
}

// Style Edit section animations
export const animateStyleEdit = (styleEditRef) => {
  const ctx = gsap.context(() => {
    // Image slides in from right
    gsap.fromTo('.style-image',
      { x: '60vw', opacity: 0 },
      {
        x: 0, opacity: 1,
        scrollTrigger: {
          trigger: styleEditRef.current,
          start: 'top 80%',
          end: 'top 30%',
          scrub: 1
        }
      }
    )
    
    // Text slides in from left
    gsap.fromTo('.style-text',
      { x: '-40vw', opacity: 0 },
      {
        x: 0, opacity: 1,
        scrollTrigger: {
          trigger: styleEditRef.current,
          start: 'top 80%',
          end: 'top 30%',
          scrub: 1
        }
      }
    )
  }, styleEditRef)

  return ctx
}

// Initialize all scroll animations
export const initializeScrollAnimations = (refs) => {
  const contexts = []
  
  if (refs.newArrivalsRef) {
    contexts.push(animateNewArrivals(refs.newArrivalsRef))
  }
  
  if (refs.curatedRef) {
    contexts.push(animateCuratedCollection(refs.curatedRef))
  }
  
  if (refs.atelierRef) {
    contexts.push(animateAtelier(refs.atelierRef))
  }
  
  if (refs.trendingRef) {
    contexts.push(animateTrending(refs.trendingRef))
  }
  
  if (refs.styleEditRef) {
    contexts.push(animateStyleEdit(refs.styleEditRef))
  }
  
  return contexts
}

// Cleanup function for all animations
export const cleanupAnimations = (contexts) => {
  contexts.forEach(ctx => ctx.revert())
}
