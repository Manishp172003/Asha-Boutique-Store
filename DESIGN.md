# Asha Boutique Store - Complete Design Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Architecture](#architecture)
5. [Component Architecture](#component-architecture)
6. [State Management](#state-management)
7. [Styling System](#styling-system)
8. [Animation System](#animation-system)
9. [Features & Functionality](#features--functionality)
10. [Data Models](#data-models)
11. [API Integration](#api-integration)
12. [Routing & Navigation](#routing--navigation)
13. [Form Handling](#form-handling)
14. [Responsive Design](#responsive-design)
15. [Performance Optimization](#performance-optimization)
16. [Development Workflow](#development-workflow)
17. [Deployment](#deployment)
18. [Browser Support](#browser-support)
19. [Accessibility](#accessibility)
20. [Future Enhancements](#future-enhancements)

---

## Project Overview

**Project Name:** Asha Boutique Store  
**Type:** Single-Page Application (SPA)  
**Domain:** E-commerce / Fashion Boutique  
**Architecture:** Client-side React application with Vite build tool

**Business Purpose:**
A modern, elegant boutique e-commerce website for Asha Boutique, featuring:
- Product catalog with category filtering
- Shopping cart functionality
- Appointment booking system
- Smooth scroll-triggered animations
- Responsive design for mobile and desktop

**Key Design Principles:**
- Minimalist, elegant UI with warm color palette
- Smooth, scroll-linked animations using GSAP
- Mobile-first responsive design
- Accessible components built on Radix UI primitives
- Fast development with Vite's HMR

---

## Tech Stack

### Core Framework
- **React 19.2.0** - UI library with concurrent features
- **React DOM 19.2.0** - React DOM renderer
- **Vite 7.2.4** - Build tool and development server with HMR

### UI Component Library
- **shadcn/ui** - Component library built on Radix UI primitives
- **Radix UI** (20+ packages) - Headless, accessible UI primitives:
  - `@radix-ui/react-accordion`
  - `@radix-ui/react-alert-dialog`
  - `@radix-ui/react-aspect-ratio`
  - `@radix-ui/react-avatar`
  - `@radix-ui/react-checkbox`
  - `@radix-ui/react-collapsible`
  - `@radix-ui/react-context-menu`
  - `@radix-ui/react-dialog`
  - `@radix-ui/react-dropdown-menu`
  - `@radix-ui/react-hover-card`
  - `@radix-ui/react-label`
  - `@radix-ui/react-menubar`
  - `@radix-ui/react-navigation-menu`
  - `@radix-ui/react-popover`
  - `@radix-ui/react-progress`
  - `@radix-ui/react-radio-group`
  - `@radix-ui/react-scroll-area`
  - `@radix-ui/react-select`
  - `@radix-ui/react-separator`
  - `@radix-ui/react-slider`
  - `@radix-ui/react-slot`
  - `@radix-ui/react-switch`
  - `@radix-ui/react-tabs`
  - `@radix-ui/react-toggle`
  - `@radix-ui/react-toggle-group`
  - `@radix-ui/react-tooltip`

### Styling
- **Tailwind CSS 3.4.19** - Utility-first CSS framework
- **PostCSS 8.5.6** - CSS transformation tool
- **Autoprefixer 10.4.23** - CSS vendor prefixing
- **tailwindcss-animate 1.0.7** - Tailwind animation utilities
- **tw-animate-css 1.4.0** - Additional CSS animations
- **class-variance-authority 0.7.1** - Component variant management
- **clsx 2.1.1** - Conditional class name utility
- **tailwind-merge 3.4.0** - Tailwind class merging utility

### Animation
- **GSAP 3.14.2** - Professional animation library
- **GSAP ScrollTrigger** - Scroll-based animation plugin

### Form Handling & Validation
- **react-hook-form 7.70.0** - Form state management
- **@hookform/resolvers 5.2.2** - Form validation resolvers
- **zod 4.3.5** - Schema validation library

### Data Visualization
- **recharts 2.15.4** - Chart library for data visualization
- **embla-carousel-react 8.6.0** - Carousel/slider component

### Utilities & Enhancements
- **lucide-react 0.562.0** - Icon library (1000+ icons)
- **sonner 2.0.7** - Toast notification system
- **date-fns 4.1.0** - Date manipulation utilities
- **react-day-picker 9.13.0** - Date picker component
- **cmdk 1.1.1** - Command palette (cmdk)
- **vaul 1.1.2** - Drawer/sheet component
- **next-themes 0.4.6** - Theme management (dark/light mode)
- **react-resizable-panels 4.2.2** - Resizable panel components
- **input-otp 1.4.2** - One-time password input

### Development Tools
- **ESLint 9.39.1** - Code linting
- **@eslint/js 9.39.1** - ESLint JavaScript configuration
- **eslint-plugin-react-hooks 7.0.1** - React hooks linting
- **eslint-plugin-react-refresh 0.4.24** - React refresh linting
- **globals 16.5.0** - Global variables for ESLint
- **@vitejs/plugin-react 5.1.1** - Vite React plugin
- **kimi-plugin-inspect-react 1.0.3** - React component inspection

---

## Project Structure

```
Asha-Boutique-Store/
├── public/                          # Static assets
│   └── images/                      # Product images, avatars, etc.
├── src/
│   ├── animations/                  # GSAP animation configurations
│   │   └── gsapAnimations.js        # Scroll animation definitions
│   ├── components/                  # React components
│   │   └── ui/                      # shadcn/ui components (53 files)
│   │       ├── accordion.jsx
│   │       ├── alert-dialog.jsx
│   │       ├── alert.jsx
│   │       ├── aspect-ratio.jsx
│   │       ├── avatar.jsx
│   │       ├── badge.jsx
│   │       ├── button.jsx
│   │       ├── calendar.jsx
│   │       ├── card.jsx
│   │       ├── carousel.jsx
│   │       ├── chart.jsx
│   │       ├── checkbox.jsx
│   │       ├── collapsible.jsx
│   │       ├── command.jsx
│   │       ├── context-menu.jsx
│   │       ├── dialog.jsx
│   │       ├── drawer.jsx
│   │       ├── dropdown-menu.jsx
│   │       ├── hover-card.jsx
│   │       ├── input-otp.jsx
│   │       ├── input.jsx
│   │       ├── label.jsx
│   │       ├── menubar.jsx
│   │       ├── navigation-menu.jsx
│   │       ├── pagination.jsx
│   │       ├── popover.jsx
│   │       ├── progress.jsx
│   │       ├── radio-group.jsx
│   │       ├── resizable.jsx
│   │       ├── scroll-area.jsx
│   │       ├── select.jsx
│   │       ├── separator.jsx
│   │       ├── sheet.jsx
│   │       ├── sidebar.jsx
│   │       ├── skeleton.jsx
│   │       ├── slider.jsx
│   │       ├── sonner.jsx
│   │       ├── switch.jsx
│   │       ├── table.jsx
│   │       ├── tabs.jsx
│   │       ├── textarea.jsx
│   │       ├── toast.jsx
│   │       ├── toggle-group.jsx
│   │       ├── toggle.jsx
│   │       ├── tooltip.jsx
│   │       └── (additional UI components)
│   ├── hooks/                       # Custom React hooks
│   │   └── use-mobile.ts            # Mobile viewport detection
│   ├── lib/                         # Utility functions
│   │   └── utils.ts                 # cn() class merging utility
│   ├── App.css                      # Global custom styles
│   ├── App.jsx                      # Main application component (64KB)
│   ├── index.css                    # Base styles + Tailwind directives
│   └── main.jsx                     # Application entry point
├── index.html                       # HTML template
├── package.json                     # Dependencies and scripts
├── vite.config.js                   # Vite configuration
├── tailwind.config.js               # Tailwind CSS configuration
├── postcss.config.js                # PostCSS configuration
├── eslint.config.js                 # ESLint configuration
├── components.json                  # shadcn/ui configuration
└── DESIGN.md                        # This design document
```

---

## Architecture

### Application Architecture Pattern
**Pattern:** Single-Page Application (SPA) with Component-Based Architecture

**Key Characteristics:**
- Client-side rendering with React
- No server-side rendering (SSR)
- State managed through React hooks (useState, useEffect)
- No global state management library (Redux/Context not used)
- All business logic contained in App.jsx
- Component composition with shadcn/ui primitives

### Data Flow
```
User Interaction → Event Handler → State Update → Re-render → UI Update
```

**State Flow:**
1. User actions (click, form submit) trigger event handlers
2. Event handlers update local component state via useState
3. State changes trigger React re-render
4. Updated state flows down to child components via props
5. UI reflects new state

### Component Hierarchy
```
App (main.jsx)
├── Toaster (sonner)
└── App.jsx
    ├── Navigation (Header)
    │   ├── Logo
    │   ├── Desktop Menu
    │   ├── Mobile Menu Button
    │   ├── Cart Icon with Badge
    │   └── User Actions (Login/Logout)
    ├── Hero Section
    │   ├── Hero Image
    │   ├── Headline
    │   ├── Subheadline
    │   └── CTA Button
    ├── New Arrivals Section
    ├── Curated Collection Section
    ├── Atelier Section
    ├── Trending Products Section
    ├── Style Edit Section
    ├── Product Catalog
    │   ├── Filter Buttons
    │   └── Product Grid
    │       └── Product Cards
    ├── Testimonials Section
    ├── Footer
    ├── Dialogs (Modals)
    │   ├── Booking Dialog
    │   ├── Cart Dialog
    │   ├── Product Preview Dialog
    │   ├── Login Dialog
    │   ├── Checkout Dialog
    │   └── Order History Dialog
    └── Mobile Menu (Sheet)
```

---

## Component Architecture

### shadcn/ui Components (53 total)

All UI components follow the shadcn/ui pattern:
- Built on Radix UI primitives for accessibility
- Styled with Tailwind CSS
- Use class-variance-authority for variants
- Support forwardRef for composition
- TypeScript originally, converted to JavaScript

**Component Categories:**

#### 1. Layout Components
- **Sheet** - Mobile drawer/slide-over panel
- **Sidebar** - Collapsible sidebar with keyboard navigation
- **Separator** - Visual divider/horizontal rule
- **Scroll Area** - Custom styled scrollable container
- **Resizable** - Resizable panel layouts

#### 2. Form Components
- **Button** - Primary, secondary, ghost, outline variants
- **Input** - Text input with variants
- **Textarea** - Multi-line text input
- **Label** - Form field labels
- **Select** - Dropdown select with trigger and content
- **Checkbox** - Checkbox input
- **Radio Group** - Radio button group
- **Switch** - Toggle switch
- **Slider** - Range slider
- **Input OTP** - One-time password input
- **Form** - Form wrapper with react-hook-form integration

#### 3. Data Display Components
- **Card** - Container with header, content, footer
- **Badge** - Status/label badges
- **Avatar** - User avatar with fallback
- **Table** - Data table with sorting/pagination
- **Skeleton** - Loading placeholder
- **Progress** - Progress bar
- **Pagination** - Pagination controls
- **Chart** - Recharts integration for data viz

#### 4. Feedback Components
- **Dialog** - Modal dialog
- **Alert** - Alert messages
- **Alert Dialog** - Confirmation dialog
- **Toast (Sonner)** - Toast notifications
- **Tooltip** - Hover tooltip
- **Popover** - Click-triggered popover
- **Hover Card** - Hover-triggered card

#### 5. Navigation Components
- **Dropdown Menu** - Dropdown menu
- **Context Menu** - Right-click context menu
- **Menubar** - Top menu bar
- **Navigation Menu** - Navigation menu
- **Command** - Command palette (cmdk)
- **Drawer** - Bottom drawer (vaul)
- **Breadcrumb** - Breadcrumb navigation

#### 6. Interactive Components
- **Accordion** - Collapsible accordion
- **Collapsible** - Collapsible content
- **Tabs** - Tab navigation
- **Toggle** - Toggle button
- **Toggle Group** - Toggle button group
- **Carousel** - Image carousel (embla-carousel-react)

#### 7. Advanced Components
- **Calendar** - Date picker calendar
- **Aspect Ratio** - Aspect ratio container
- **Command** - Command palette for search

### Custom Components

#### App.jsx Sections
The main App.jsx file contains all page sections as inline components:
- **Navigation** - Header with logo, menu, cart, user actions
- **Hero** - Landing hero with animations
- **NewArrivals** - Featured new products
- **CuratedCollection** - Curated product selection
- **Atelier** - Tailoring services section
- **Trending** - Trending products grid
- **StyleEdit** - Style editorial section
- **ProductCatalog** - Full product catalog with filters
- **Testimonials** - Customer testimonials
- **Footer** - Site footer with links and info

---

## State Management

### State Architecture
**Pattern:** Local component state using React hooks

**No global state management** - All state is local to App.jsx component

### State Variables (App.jsx)

```javascript
// Dialog/Modal States
const [bookingOpen, setBookingOpen] = useState(false)
const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
const [cartOpen, setCartOpen] = useState(false)
const [productPreview, setProductPreview] = useState(null)
const [loginOpen, setLoginOpen] = useState(false)
const [checkoutOpen, setCheckoutOpen] = useState(false)
const [orderHistoryOpen, setOrderHistoryOpen] = useState(false)

// User State
const [user, setUser] = useState(null)

// Product Catalog State
const [filter, setFilter] = useState('All')

// Shopping Cart State
const [cart, setCart] = useState([])

// Order Management State
const [orders, setOrders] = useState([])
const [currentOrder, setCurrentOrder] = useState(null)

// Checkout Form State
const [shippingInfo, setShippingInfo] = useState({
  name: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  country: 'India'
})

// Booking Form State
const [bookingForm, setBookingForm] = useState({
  name: '',
  phone: '',
  email: '',
  service: '',
  date: '',
  time: '',
  notes: ''
})

// Login Form State
const [loginForm, setLoginForm] = useState({
  email: '',
  password: ''
})
```

### State Update Patterns

**Cart Operations:**
- Add to cart: Check if item exists, increment quantity or add new
- Remove from cart: Filter out item by ID
- Update quantity: Map through cart and update specific item
- Clear cart: Set to empty array

**User Authentication:**
- Login: Set user state with user object
- Logout: Set user state to null
- Persist: Currently in-memory (no localStorage)

**Order Management:**
- Create order: Generate order ID, timestamp, items, total
- Store order: Add to orders array
- Track current order: Set currentOrder state

---

## Styling System

### Design Tokens

#### Color Palette (CSS Variables)
```css
:root {
  --background: 30 23% 95%;        /* #F6F2EE - Cream/Beige */
  --foreground: 15 24% 14%;        /* #2B1E1A - Dark Brown */
  --card: 0 0% 100%;               /* White */
  --card-foreground: 15 24% 14%;  /* Dark Brown */
  --popover: 0 0% 100%;            /* White */
  --popover-foreground: 15 24% 14%;
  --primary: 15 24% 14%;           /* Dark Brown */
  --primary-foreground: 30 23% 95%;
  --secondary: 28 16% 90%;        /* #E9E3DD - Light Beige */
  --secondary-foreground: 15 24% 14%;
  --muted: 28 16% 90%;
  --muted-foreground: 18 13% 42%;  /* #7A655D - Medium Brown */
  --accent: 9 72% 61%;             /* #E46A53 - Terracotta/Red */
  --accent-foreground: 0 0% 100%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 0 0% 98%;
  --border: 28 16% 85%;
  --input: 28 16% 85%;
  --ring: 9 72% 61%;               /* Terracotta focus ring */
  --radius: 1.375rem;              /* 22px border radius */
}
```

#### Typography
```css
/* Font Families */
.font-serif  → 'Cormorant Garamond', Georgia, serif
.font-sans   → 'Inter', system-ui, sans-serif
.font-mono   → 'IBM Plex Mono', monospace

/* Font Loading */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
```

#### Spacing & Layout
- Border radius: 1.375rem (22px) - rounded corners
- Container max-width: Not explicitly defined, uses Tailwind defaults
- Grid layouts: Responsive using Tailwind grid system

### Tailwind Configuration

**Custom Extensions:**
- CSS variables for colors (HSL values)
- Custom border radius values (xl, lg, md, sm, xs)
- Custom box shadow (xs)
- Custom keyframes (accordion-down, accordion-up, caret-blink)
- Custom animations (accordion-down, accordion-up, caret-blink)

**Content Paths:**
```javascript
content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}']
```

**Plugins:**
- tailwindcss-animate - for animation utilities

### Global Styles

**Custom Scrollbar:**
```css
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: #F6F2EE; }
::-webkit-scrollbar-thumb { background: #E9E3DD; border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: #d4ccc4; }
```

**Selection:**
```css
::selection {
  background: rgba(228, 106, 83, 0.3);  /* Terracotta tint */
  color: #2B1E1A;
}
```

**Focus:**
```css
*:focus-visible {
  outline: 2px solid rgba(228, 106, 83, 0.5);
  outline-offset: 2px;
}
```

### Component Styling Pattern

**shadcn/ui Pattern:**
```javascript
// 1. Define variants using class-variance-authority
const buttonVariants = cva(
  "base classes",
  {
    variants: {
      variant: {
        default: "variant-specific classes",
        destructive: "destructive classes",
        // ...
      },
      size: {
        default: "size classes",
        sm: "small classes",
        // ...
      }
    }
  }
)

// 2. Merge classes with cn() utility
const className = cn(buttonVariants({ variant, size }), className)

// 3. Use forwardRef for composition
const Button = React.forwardRef(({ className, variant, size, ...props }, ref) => {
  return <button className={className} ref={ref} {...props} />
})
```

---

## Animation System

### GSAP Integration

**Plugin Registration:**
```javascript
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
```

### Animation Functions

#### 1. Hero Section Animation
**Trigger:** Component mount (no scroll trigger)
**Animations:**
- Hero image: opacity 0→1, scale 1.06→1 (duration: 1s)
- Headline: opacity 0→1, y 26px→0 (duration: 0.8s, delay: 0.2s)
- Subheadline: opacity 0→1, y 18px→0 (duration: 0.8s, delay: 0.4s)
- CTA button: opacity 0→1, y 18px→0 (duration: 0.8s, delay: 0.5s)
- Hero card: opacity 0→1, y 24px→0, scale 0.98→1 (duration: 0.8s, delay: 0.6s)

#### 2. New Arrivals Animation
**Trigger:** Scroll (trigger: section top at 80% viewport)
**Animations:**
- Left image: x -60vw→0 (scrub: 1)
- Right image: x 60vw→0 (scrub: 1)
- Center badge: scale 0.2→1, rotate -12°→0°, opacity 0→1 (scrub: 1)

#### 3. Curated Collection Animation
**Trigger:** Scroll (trigger: section top at 80% viewport)
**Animations:**
- Image: x 60vw→0, opacity 0→1 (scrub: 1)
- Text: x -40vw→0, opacity 0→1 (scrub: 1)

#### 4. Atelier Animation
**Trigger:** Scroll (trigger: section top at 80% viewport)
**Animations:**
- Image: x -70vw→0 (scrub: 1)
- Text: x 50vw→0, opacity 0→1 (scrub: 1)

#### 5. Trending Animation
**Trigger:** Scroll (trigger: section top at 85% viewport)
**Animations:**
- Product cards: y 40px→0, opacity 0→1, scale 0.98→1 (stagger: 0.08s, scrub: 1)

#### 6. Style Edit Animation
**Trigger:** Scroll (trigger: section top at 80% viewport)
**Animations:**
- Image: x 60vw→0, opacity 0→1 (scrub: 1)
- Text: x -40vw→0, opacity 0→1 (scrub: 1)

### Animation Lifecycle

**Initialization:**
```javascript
useEffect(() => {
  const heroCtx = animateHeroSection(heroRef)
  const scrollContexts = initializeScrollAnimations({
    newArrivalsRef,
    curatedRef,
    atelierRef,
    trendingRef,
    styleEditRef
  })

  return () => {
    heroCtx.revert()
    cleanupAnimations(scrollContexts)
  }
}, [])
```

**Cleanup:**
- All GSAP contexts reverted on component unmount
- Prevents memory leaks
- Ensures animations don't persist after navigation

### Animation Performance

**Optimizations:**
- Uses GSAP context for scoped animations
- ScrollTrigger with scrub for smooth scroll-linked animations
- Staggered animations for multiple elements
- Hardware-accelerated transforms (x, y, scale, opacity)

---

## Features & Functionality

### 1. Navigation

**Desktop Navigation:**
- Logo (left)
- Menu links: Home, Shop, Atelier, About, Contact
- Cart icon with badge (right)
- User actions: Login/Logout, Order History

**Mobile Navigation:**
- Hamburger menu button
- Sheet/drawer component for menu
- Same links as desktop
- Cart icon always visible

**Features:**
- Smooth scroll to sections
- Active state indication
- Responsive breakpoint at 768px

### 2. Product Catalog

**Product Data Structure:**
```javascript
{
  id: number,
  name: string,
  price: string (formatted with ₹),
  image: string (path),
  category: 'Tops' | 'Dresses' | 'Tailoring' | 'Accessories',
  description: string,
  fabric: string,
  fit: string,
  care: string,
  delivery: string,
  stock: number
}
```

**Features:**
- 8 sample products
- Category filtering (All, Tops, Dresses, Tailoring, Accessories)
- Product cards with hover effects
- Product preview dialog with full details
- Add to cart functionality
- Stock display

### 3. Shopping Cart

**Features:**
- Add items to cart
- Quantity adjustment (+/-)
- Remove items
- Total price calculation
- Cart badge count in navigation
- Cart dialog with item list
- Checkout button (opens checkout dialog)

**Cart Dialog:**
- Product image, name, price
- Quantity controls
- Remove button
- Subtotal, total
- Checkout button

### 4. Appointment Booking

**Booking Form Fields:**
- Name (text input)
- Phone (text input)
- Email (email input)
- Service type (select dropdown)
- Preferred date (date picker)
- Preferred time (time input)
- Additional notes (textarea)

**Features:**
- Form validation
- Success toast notification
- Dialog-based form
- Service options: Tailoring, Alterations, Consultation, Measurements

### 5. User Authentication

**Current Implementation:**
- Mock authentication (no backend)
- Login form with email/password
- User state management
- Logout functionality
- Order history for logged-in users

**Login Form:**
- Email (email input)
- Password (password input)
- Submit button

**User Actions:**
- View order history
- Logout

### 6. Checkout System

**Checkout Form Fields:**
- Name
- Email
- Phone
- Address
- City
- State
- ZIP code
- Country (default: India)

**Features:**
- Order summary
- Shipping form
- Place order button
- Order confirmation
- Order saved to history

### 7. Order Management

**Order Structure:**
```javascript
{
  id: string (timestamp-based),
  date: Date,
  items: Array of cart items,
  total: number,
  shipping: Object,
  status: 'Confirmed' | 'Processing' | 'Shipped' | 'Delivered'
}
```

**Features:**
- Order history dialog
- Order status tracking
- Order details view
- Timestamp-based order IDs

### 8. Testimonials

**Testimonial Data:**
```javascript
{
  id: number,
  quote: string,
  name: string,
  avatar: string (image path)
}
```

**Features:**
- 3 sample testimonials
- Avatar display
- Quote and name
- Clean card layout

---

## Data Models

### Product Model
```javascript
{
  id: 1,                          // Unique identifier
  name: 'Pleat-Front Blouse',     // Product name
  price: '₹2,400',               // Formatted price string
  image: '/images/product1.jpg',  // Image path
  category: 'Tops',                // Category enum
  description: '...',             // Product description
  fabric: 'Cotton-silk blend',    // Fabric information
  fit: 'Relaxed shoulder...',     // Fit information
  care: 'Gentle hand wash...',    // Care instructions
  delivery: 'Ready to ship...',   // Delivery timeline
  stock: 20                       // Stock quantity
}
```

### Cart Item Model
```javascript
{
  id: 1,                          // Product ID
  name: 'Pleat-Front Blouse',
  price: '₹2,400',
  image: '/images/product1.jpg',
  quantity: 1,                    // Cart quantity
  category: 'Tops'
}
```

### User Model
```javascript
{
  email: string,
  name: string,
  // Additional user fields can be added
}
```

### Order Model
```javascript
{
  id: 'ORD-1704067200000',        // Timestamp-based ID
  date: new Date(),               // Order date
  items: [CartItem],              // Array of cart items
  total: 2400,                    // Total amount (number)
  shipping: {
    name: string,
    email: string,
    phone: string,
    address: string,
    city: string,
    state: string,
    zip: string,
    country: string
  },
  status: 'Confirmed'             // Order status
}
```

### Booking Model
```javascript
{
  name: string,
  phone: string,
  email: string,
  service: string,
  date: string,
  time: string,
  notes: string
}
```

### Testimonial Model
```javascript
{
  id: 1,
  quote: "They altered my mother's saree blouse in a day. Perfect fit.",
  name: 'Priya D.',
  avatar: '/images/avatar1.jpg'
}
```

---

## API Integration

### Current State
**No Backend Integration** - All data is client-side mock data

### Data Sources

**Static Data:**
- Products: Hardcoded array in App.jsx
- Testimonials: Hardcoded array in App.jsx
- Categories: Enum values in filter state

**State Management:**
- Cart: In-memory state (no persistence)
- Orders: In-memory state (no persistence)
- User: In-memory state (no persistence)
- Forms: Component state

### Future API Integration Points

**Potential Endpoints:**
```
GET    /api/products          - Fetch product catalog
GET    /api/products/:id      - Fetch single product
POST   /api/cart              - Add to cart
GET    /api/cart              - Get cart items
PUT    /api/cart/:id          - Update cart item
DELETE /api/cart/:id          - Remove from cart
POST   /api/orders            - Create order
GET    /api/orders            - Get user orders
GET    /api/orders/:id        - Get single order
POST   /api/auth/login        - User login
POST   /api/auth/logout       - User logout
POST   /api/booking           - Submit booking
GET    /api/testimonials      - Fetch testimonials
```

**Authentication:**
- JWT tokens recommended
- Authorization header: `Bearer <token>`
- Protected routes for orders, cart

---

## Routing & Navigation

### Current Routing
**No Router** - Single-page application with scroll-based navigation

**Navigation Method:**
- Anchor links to section IDs
- Smooth scroll behavior (CSS)
- Dialog-based views (no URL changes)

### Section IDs
```javascript
#hero           - Hero section
#new-arrivals   - New arrivals
#curated        - Curated collection
#atelier        - Atelier/tailoring
#trending       - Trending products
#style-edit     - Style editorial
#shop           - Product catalog
#testimonials   - Testimonials
#contact        - Contact/footer
```

### Future Routing (if needed)
**Recommended:** React Router v6

**Potential Routes:**
```
/                    - Home page
/shop                - Product catalog
/shop/:id            - Product details
/cart                - Shopping cart
/checkout            - Checkout
/account             - User account
/account/orders      - Order history
/booking             - Appointment booking
/atelier             - Atelier services
/about               - About page
/contact             - Contact page
```

---

## Form Handling

### Form Libraries
- **react-hook-form** - Form state management
- **zod** - Schema validation
- **@hookform/resolvers** - Integration between react-hook-form and zod

### Current Forms

#### 1. Booking Form
**Fields:**
- name (text, required)
- phone (text, required)
- email (email, required)
- service (select, required)
- date (date, required)
- time (time, required)
- notes (textarea, optional)

**Validation:**
- Required field validation
- Email format validation
- Phone number format validation

#### 2. Checkout Form
**Fields:**
- name (text, required)
- email (email, required)
- phone (text, required)
- address (text, required)
- city (text, required)
- state (text, required)
- zip (text, required)
- country (select, default: India)

**Validation:**
- All fields required
- Email format validation
- Phone format validation

#### 3. Login Form
**Fields:**
- email (email, required)
- password (password, required)

**Validation:**
- Email format validation
- Password required

### Form Submission Pattern

```javascript
const handleSubmit = (e) => {
  e.preventDefault()
  
  // Validation
  if (!validateForm()) {
    toast.error('Please fill all required fields')
    return
  }
  
  // Process form data
  processFormData(formData)
  
  // Show success message
  toast.success('Form submitted successfully')
  
  // Reset form
  resetForm()
  
  // Close dialog
  setDialogOpen(false)
}
```

### Toast Notifications

**Library:** Sonner

**Configuration:**
```javascript
<Toaster 
  position="top-center"
  toastOptions={{
    style: {
      background: '#F6F2EE',
      color: '#2B1E1A',
      border: '1px solid #E9E3DD',
    },
  }}
/>
```

**Usage:**
```javascript
toast.success('Item added to cart')
toast.error('Please fill all required fields')
toast.info('Order confirmed')
```

---

## Responsive Design

### Breakpoints
**Mobile Detection:** 768px (use-mobile hook)

**Tailwind Default Breakpoints:**
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Responsive Patterns

**Mobile-First Approach:**
- Base styles for mobile
- `md:` and `lg:` prefixes for larger screens

**Common Responsive Classes:**
```javascript
// Grid layouts
grid-cols-1 md:grid-cols-2 lg:grid-cols-4

// Text sizes
text-sm md:text-base lg:text-lg

// Spacing
p-4 md:p-6 lg:p-8

// Display
hidden md:block
block md:hidden

// Navigation
// Mobile: Sheet/drawer
// Desktop: Horizontal menu
```

### Mobile-Specific Features
- Hamburger menu
- Touch-friendly interactions
- Bottom sheet for cart (optional)
- Optimized images for mobile
- Simplified layouts

### Desktop-Specific Features
- Horizontal navigation
- Hover effects
- Larger product grids
- More detailed views

---

## Performance Optimization

### Current Optimizations

**Build Tool:**
- Vite for fast HMR
- ES modules for efficient loading
- Tree-shaking for unused code

**Code Splitting:**
- Not currently implemented
- Can be added with React.lazy() for routes

**Image Optimization:**
- Static images in public folder
- No lazy loading currently
- Can implement with loading="lazy"

**Animation Performance:**
- GSAP uses hardware-accelerated transforms
- ScrollTrigger for efficient scroll-linked animations
- Context-based cleanup prevents memory leaks

### Recommended Optimizations

**1. Code Splitting:**
```javascript
const ProductDialog = React.lazy(() => import('./ProductDialog'))
```

**2. Image Optimization:**
- Use next/image or react-image
- Implement lazy loading
- Serve WebP format
- Use responsive images (srcset)

**3. Bundle Analysis:**
```bash
npm run build
npm run preview
```

**4. Memoization:**
```javascript
const ProductCard = React.memo(({ product }) => {
  // Component code
})
```

**5. Virtual Scrolling:**
- For large product lists
- Use react-window or react-virtualized

**6. Service Worker:**
- Implement PWA features
- Offline support
- Cache assets

---

## Development Workflow

### Available Scripts

```bash
npm run dev      # Start development server (localhost:5173)
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Development Server
- **URL:** http://localhost:5173
- **HMR:** Enabled (Vite)
- **Port:** 5173 (default)

### Code Style

**Linting:** ESLint with React plugins

**Configuration:**
```javascript
// eslint.config.js
- @eslint/js
- eslint-plugin-react-hooks
- eslint-plugin-react-refresh
- globals
```

**Rules:**
- React hooks rules
- React refresh for HMR
- No TypeScript (converted to JS)

### Component Development

**shadcn/ui Pattern:**
1. Install component: `npx shadcn-ui@latest add [component]`
2. Component added to `src/components/ui/`
3. Import and use in App.jsx

**Custom Components:**
1. Create component in appropriate directory
2. Follow React best practices
3. Use Tailwind for styling
4. Export as default

### Git Workflow (Recommended)

**Branch Strategy:**
- `main` - Production
- `develop` - Development
- `feature/*` - Feature branches

**Commit Convention:**
```
feat: add new feature
fix: fix bug
style: formatting changes
refactor: code refactoring
docs: documentation
chore: maintenance
```

---

## Deployment

### Build Process

**Production Build:**
```bash
npm run build
```

**Output:** `dist/` directory

**Build Contents:**
- Optimized JavaScript bundles
- Minified CSS
- HTML file
- Static assets

### Deployment Options

**1. Vercel (Recommended)**
```bash
npm install -g vercel
vercel
```

**2. Netlify**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

**3. GitHub Pages**
```bash
# Update vite.config.js
base: '/repository-name/'

npm run build
# Deploy dist/ to gh-pages branch
```

**4. Static Hosting**
- AWS S3 + CloudFront
- Firebase Hosting
- Any static file host

### Environment Variables

**Current:** No environment variables used

**Future:**
```bash
VITE_API_URL=https://api.ashaboutique.com
VITE_STRIPE_PUBLIC_KEY=pk_...
VITE_GOOGLE_ANALYTICS_ID=GA_...
```

---

## Browser Support

### Target Browsers
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Required Features
- ES6+ JavaScript
- CSS Grid
- CSS Flexbox
- CSS Custom Properties (variables)
- Intersection Observer (for ScrollTrigger)

### Polyfills (if needed)
- core-js for older browsers
- regenerator-runtime for async/await

---

## Accessibility

### shadcn/ui Accessibility
- Built on Radix UI primitives
- ARIA attributes included
- Keyboard navigation support
- Focus management
- Screen reader support

### Current Accessibility Features
- Semantic HTML
- ARIA labels on interactive elements
- Keyboard navigation for dialogs
- Focus trapping in modals
- Focus visible styles

### Recommended Improvements
- Add skip to main content link
- Implement proper heading hierarchy
- Add alt text to all images
- Ensure color contrast ratios
- Add aria-live regions for dynamic content
- Test with screen readers

---

## Future Enhancements

### Phase 1: Backend Integration
- Connect to real API
- Implement authentication (JWT)
- Database integration (MongoDB/PostgreSQL)
- Persistent cart (localStorage/database)
- Real-time inventory

### Phase 2: E-commerce Features
- Payment gateway integration (Stripe/Razorpay)
- Order tracking
- Wishlist functionality
- Product reviews/ratings
- Search functionality
- Advanced filtering (price, size, color)

### Phase 3: User Experience
- Product image gallery
- Size guide
- Related products
- Recently viewed
- Email notifications
- SMS notifications

### Phase 4: Admin Features
- Admin dashboard
- Product management
- Order management
- Analytics dashboard
- Inventory management

### Phase 5: Performance & Scale
- Server-side rendering (Next.js)
- Image CDN integration
- Caching strategy
- Load balancing
- CDN deployment

### Phase 6: Advanced Features
- AI-powered recommendations
- Virtual try-on
- Augmented reality
- Social commerce
- Multi-language support
- Multi-currency support

---

## Development Guidelines

### Code Conventions

**File Naming:**
- Components: PascalCase (e.g., ProductCard.jsx)
- Utilities: camelCase (e.g., utils.js)
- Hooks: camelCase with use prefix (e.g., useMobile.js)

**Component Structure:**
```javascript
// 1. Imports
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

// 2. Component definition
function ComponentName({ prop1, prop2 }) {
  // 3. Hooks
  const [state, setState] = useState()
  
  // 4. Event handlers
  const handleClick = () => {}
  
  // 5. Effects
  useEffect(() => {}, [])
  
  // 6. Render
  return (
    <div>
      {/* JSX */}
    </div>
  )
}

// 7. Export
export default ComponentName
```

**Styling:**
- Use Tailwind classes for styling
- Use cn() utility for conditional classes
- Avoid inline styles
- Use semantic HTML

### Best Practices

**React:**
- Use functional components
- Use hooks for state and effects
- Avoid prop drilling (use context if needed)
- Memoize expensive computations
- Clean up effects

**Performance:**
- Lazy load components
- Optimize images
- Use React.memo for pure components
- Avoid unnecessary re-renders
- Use code splitting

**Accessibility:**
- Use semantic HTML
- Add ARIA labels
- Ensure keyboard navigation
- Test with screen readers
- Maintain color contrast

**Security:**
- Validate all inputs
- Sanitize user data
- Use HTTPS in production
- Implement CORS properly
- Secure API endpoints

---

## Troubleshooting

### Common Issues

**1. GSAP Animations Not Working:**
- Check if ScrollTrigger is registered
- Verify element refs are set correctly
- Check z-index of animated elements
- Ensure elements are in DOM when animation runs

**2. Tailwind Classes Not Applying:**
- Check Tailwind config content paths
- Verify PostCSS is configured
- Check for CSS conflicts
- Ensure Tailwind directives are in CSS

**3. Import Errors:**
- Check Vite alias configuration
- Verify file paths
- Check for case sensitivity
- Ensure file extensions are correct

**4. State Not Updating:**
- Check for stale closures
- Verify useState usage
- Check for mutation of state
- Ensure proper dependency arrays in useEffect

**5. Build Errors:**
- Check for TypeScript remnants
- Verify all imports are valid
- Check for circular dependencies
- Review ESLint errors

---

## Conclusion

This design document provides a comprehensive overview of the Asha Boutique Store project, including:

- Complete tech stack with all dependencies
- Project structure and file organization
- Component architecture and patterns
- State management approach
- Styling system with design tokens
- Animation system using GSAP
- All features and functionality
- Data models and structures
- Development workflow and guidelines

The project is a modern, React-based e-commerce application with:
- 53 shadcn/ui components
- GSAP scroll animations
- Shopping cart functionality
- Appointment booking system
- Responsive design
- Mock data (no backend)

For questions or clarifications, refer to the source code in `src/App.jsx` and component files in `src/components/ui/`.

---

**Document Version:** 1.0  
**Last Updated:** July 2026  
**Project Status:** Development  
