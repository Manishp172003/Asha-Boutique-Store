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
  if (!contexts) return;

  const list = Array.isArray(contexts) ? contexts : [contexts];

  list.forEach(ctx => {
    if (ctx && typeof ctx.revert === 'function') {
      ctx.revert();
    }
  });
}

// ===== REUSABLE GSAP UTILITY FUNCTIONS =====

// Fade in animation for elements
export const fadeIn = (selector, ref, options = {}) => {
  const ctx = gsap.context(() => {
    gsap.fromTo(selector,
      { opacity: 0, y: options.y || 20 },
      {
        opacity: 1,
        y: 0,
        duration: options.duration || 0.8,
        delay: options.delay || 0,
        ease: options.ease || 'power2.out',
        scrollTrigger: options.scrollTrigger ? {
          trigger: ref.current,
          start: options.scrollTrigger.start || 'top 80%',
          end: options.scrollTrigger.end || 'top 40%',
          scrub: options.scrollTrigger.scrub || 1
        } : undefined
      }
    )
  }, ref)
  return ctx
}

// Stagger animation for lists/cards
export const staggerFadeIn = (selector, ref, options = {}) => {
  const ctx = gsap.context(() => {
    gsap.fromTo(selector,
      { opacity: 0, y: options.y || 30, scale: options.scale || 0.98 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: options.stagger || 0.1,
        duration: options.duration || 0.7,
        ease: options.ease || 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: options.start || 'top 85%',
          end: options.end || 'top 40%',
          scrub: options.scrub || 1
        }
      }
    )
  }, ref)
  return ctx
}

// Slide from left animation
export const slideFromLeft = (selector, ref, options = {}) => {
  const ctx = gsap.context(() => {
    gsap.fromTo(selector,
      { x: options.x || '-40vw', opacity: 0 },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ref.current,
          start: options.start || 'top 80%',
          end: options.end || 'top 30%',
          scrub: options.scrub || 1
        }
      }
    )
  }, ref)
  return ctx
}

// Slide from right animation
export const slideFromRight = (selector, ref, options = {}) => {
  const ctx = gsap.context(() => {
    gsap.fromTo(selector,
      { x: options.x || '40vw', opacity: 0 },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ref.current,
          start: options.start || 'top 80%',
          end: options.end || 'top 30%',
          scrub: options.scrub || 1
        }
      }
    )
  }, ref)
  return ctx
}

// Scale animation
export const scaleIn = (selector, ref, options = {}) => {
  const ctx = gsap.context(() => {
    gsap.fromTo(selector,
      { scale: options.fromScale || 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: options.duration || 0.6,
        ease: options.ease || 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: options.start || 'top 80%',
          end: options.end || 'top 40%',
          scrub: options.scrub || 1
        }
      }
    )
  }, ref)
  return ctx
}

// Shop page animations
export const animateShopPage = (refs) => {
  const contexts = []

  if (refs.heroRef) {
    contexts.push(fadeIn('.shop-hero', refs.heroRef, { y: 0, duration: 1 }))
  }

  if (refs.containerRef) {
    contexts.push(slideFromLeft('.shop-sidebar', refs.containerRef, { x: '-30vw' }))
  }

  if (refs.productGridRef) {
    contexts.push(staggerFadeIn('.product-card', refs.productGridRef, {
      y: 40,
      stagger: 0.08,
      start: 'top 85%'
    }))
  }

  if (refs.paginationRef) {
    contexts.push(fadeIn('.pagination', refs.paginationRef, { y: 20 }))
  }

  if (refs.newsletterRef) {
    contexts.push(scaleIn('.newsletter', refs.newsletterRef, { fromScale: 0.9 }))
  }

  return contexts
}

// Product page animations
export const animateProductPage = (refs) => {
  const contexts = []
  
  if (refs.galleryRef) {
    contexts.push(slideFromLeft('.product-gallery', refs.galleryRef, { x: '-20vw' }))
  }
  
  if (refs.infoRef) {
    contexts.push(slideFromRight('.product-info', refs.infoRef, { x: '20vw' }))
  }
  
  if (refs.tabsRef) {
    contexts.push(fadeIn('.description-tabs', refs.tabsRef))
  }
  
  if (refs.relatedRef) {
    contexts.push(staggerFadeIn('.related-product-card', refs.relatedRef, { stagger: 0.1 }))
  }
  
  if (refs.recentlyRef) {
    contexts.push(staggerFadeIn('.recently-viewed-card', refs.recentlyRef, { stagger: 0.1 }))
  }
  
  return contexts
}

// Cart page animations
export const animateCartPage = (refs) => {
  const contexts = []
  
  if (refs.cartItemsRef) {
    contexts.push(staggerFadeIn('.cart-item', refs.cartItemsRef, { 
      y: 20, 
      stagger: 0.1,
      start: 'top 90%'
    }))
  }
  
  if (refs.orderSummaryRef) {
    contexts.push(fadeIn('.order-summary', refs.orderSummaryRef, { y: 30 }))
  }
  
  if (refs.recommendedRef) {
    contexts.push(staggerFadeIn('.recommended-product-card', refs.recommendedRef, { stagger: 0.1 }))
  }
  
  return contexts
}

// Checkout page animations
export const animateCheckoutPage = (refs) => {
  const contexts = []
  
  if (refs.formRef) {
    contexts.push(fadeIn('.checkout-form', refs.formRef, { y: 30 }))
  }
  
  if (refs.summaryRef) {
    contexts.push(fadeIn('.checkout-summary', refs.summaryRef, { y: 30, delay: 0.2 }))
  }
  
  return contexts
}

// Wishlist page animations
export const animateWishlistPage = (refs) => {
  const contexts = []
  
  if (refs.wishlistRef) {
    contexts.push(staggerFadeIn('.wishlist-card', refs.wishlistRef, { 
      y: 40, 
      stagger: 0.1 
    }))
  }
  
  return contexts
}

// Orders page animations
export const animateOrdersPage = (refs) => {
  const contexts = []
  
  if (refs.ordersRef) {
    contexts.push(staggerFadeIn('.order-card', refs.ordersRef, { 
      y: 30, 
      stagger: 0.12 
    }))
  }
  
  return contexts
}

// Order Details page animations
export const animateOrderDetailsPage = (refs) => {
  const contexts = []
  
  if (refs.breadcrumbRef) {
    contexts.push(fadeIn('.order-breadcrumb', refs.breadcrumbRef, { y: 10 }))
  }
  
  if (refs.detailsRef) {
    contexts.push(fadeIn('.order-details-section', refs.detailsRef, { y: 20 }))
  }
  
  if (refs.timelineRef) {
    contexts.push(staggerFadeIn('.timeline-item', refs.timelineRef, { 
      y: 20, 
      stagger: 0.15 
    }))
  }
  
  return contexts
}

// Profile page animations
export const animateProfilePage = (refs) => {
  const contexts = []
  
  if (refs.sidebarRef) {
    contexts.push(slideFromLeft('.account-sidebar', refs.sidebarRef, { x: '-20vw' }))
  }
  
  if (refs.contentRef) {
    contexts.push(staggerFadeIn('.profile-card', refs.contentRef, { 
      y: 30, 
      stagger: 0.1 
    }))
  }
  
  return contexts
}

// Addresses page animations
export const animateAddressesPage = (refs) => {
  const contexts = []
  
  if (refs.sidebarRef) {
    contexts.push(slideFromLeft('.account-sidebar', refs.sidebarRef, { x: '-20vw' }))
  }
  
  if (refs.headerRef) {
    contexts.push(fadeIn('.address-header', refs.headerRef, { y: 20 }))
  }
  
  if (refs.addressListRef) {
    contexts.push(staggerFadeIn('.address-card', refs.addressListRef, { 
      y: 30, 
      stagger: 0.1 
    }))
  }
  
  return contexts
}
