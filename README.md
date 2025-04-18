# AXYN Portfolio Website

A premium fashion brand portfolio website featuring dynamic scroll-based image gallery animations and elegant design aesthetics.

## Overview

AXYN is a high-end fashion brand portfolio website that showcases the brand's collections through innovative scroll-triggered animations and a minimalist design approach. The site features multiple gallery-style layouts that transform as users scroll, creating an engaging and interactive experience.

## Features

- **Dynamic Scroll Animations** - Multiple grid layouts with GSAP-powered animations triggered on scroll
- **Responsive Design** - Fully responsive across all device sizes with optimized mobile experience
- **Performance Optimized** - Aggressive image preloading and critical CSS inline rendering for fast initial loads
- **Elegant Text Loader** - Custom text-based loading screen with animated typography
- **Smooth Scrolling** - Lenis-powered smooth scrolling for enhanced user experience
- **Mobile Navigation** - Touch-friendly hamburger menu with smooth transitions

## Technologies Used

- **HTML5/CSS3** - Modern semantic markup and advanced CSS styling
- **JavaScript (ES6+)** - Vanilla JavaScript with modular structure
- **GSAP (GreenSock Animation Platform)** - For advanced animations
- **ScrollTrigger** - For scroll-based animation triggering
- **Lenis** - For smooth scrolling effects
- **ImagesLoaded** - For handling image preloading
- **SVG** - Vector graphics for favicon with rounded corners

## Project Structure

```
/
├── css/                   # CSS stylesheets
│   ├── base.css           # Main stylesheet
│   └── 404.css            # Premium 404 page styling
├── js/                    # JavaScript files
│   ├── gsap.min.js        # GSAP animation library
│   ├── ScrollTrigger.min.js # GSAP ScrollTrigger plugin
│   ├── index.js           # Main JavaScript with animation logic
│   ├── text-loader.js     # Loading screen animations
│   ├── lenis.min.js       # Smooth scrolling library
│   ├── smoothscroll.js    # Smooth scrolling implementation
│   ├── link-fix.js        # Navigation link fix ensuring seamless navigation
│   └── utils.js           # Utility functions
├── img/                   # Image assets
│   ├── header.png         # Header background image
│   └── *.jpg              # Gallery images
├── axyn-favicon.svg       # SVG favicon with rounded corners
├── axyn-favicon-manifest.json # Web app manifest for favicon
├── AXYN.ico               # Fallback ICO favicon for older browsers
├── favicon-test.html      # Test page for favicon display
├── index.html             # Main homepage
└── 404-*.html             # 404 pages for different sections
```

## Favicon Implementation

The AXYN website uses a modern approach to favicons with rounded corners:

1. **SVG Favicon** - Primary favicon using SVG for perfect scaling and rounded corners
2. **Fallback ICO** - Legacy favicon for older browsers that don't support SVG
3. **Web App Manifest** - For PWA support and modern browsers

The SVG favicon was created using vector paths rather than text to ensure consistent display across all browsers, with a rounded rectangle background (100px radius) to achieve the rounded corner effect.

## Code Documentation

### HTML Structure

The HTML is organized in a semantic structure:

```html
<header class="frame">       <!-- Site header with navigation -->
<section class="content">    <!-- Content sections -->
<footer class="page-footer"> <!-- Site footer -->
```

### CSS Organization

- **Critical CSS** - Inlined in the head for faster initial rendering
- **Component-based styles** - Organized by UI component
- **CSS Variables** - Used for consistent theming (colors, spacing)

### JavaScript Modules

- **Loader** - Handles the initial loading sequence
- **Animations** - GSAP-powered scroll animations
- **Navigation** - Mobile menu functionality
- **Smooth Scrolling** - Enhanced scrolling experience
- **Link Fix** - Ensures navigation links work properly alongside smooth scrolling

### Performance Optimizations

- **Image Preloading** - Aggressive preloading of hero image
- **Deferred CSS Loading** - Non-critical CSS loaded after page render
- **Progressive Enhancement** - Core content visible without JavaScript
- **SVG Favicon** - Lightweight vector format for browser tab icon

## Key Animation Features

1. **Staggered Grid Animations** - Multiple grid layouts with different animation styles
2. **Perspective Transformations** - 3D rotations and perspective effects based on scroll position
3. **Parallax Scrolling** - Layered movement of elements at different speeds
4. **Zoom Effects** - Elements scaling and zooming as the user scrolls
5. **Text Animations** - Typography that animates in sequence with images
6. **Page Transitions** - Smooth fade transitions between pages
7. **404 Page Animations** - Premium animated elements on error pages

## Design Philosophy

AXYN's website embodies the brand's core values of elegance, precision, and premium quality. The design focuses on:

- **Intentional Restraint** - Minimalist approach where every element serves a purpose
- **Visual Hierarchy** - Clear content structure that guides the user experience
- **Refined Typography** - Careful font selection and text styling for optimal readability
- **Thoughtful Animations** - Motion that enhances rather than distracts from the content

## Setup and Installation

1. Clone the repository
2. No build process required - this is a static website
3. Open `index.html` in your browser or deploy to any static hosting service

## Browser Compatibility

The website is optimized for modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Credits

- Design & Development: Sparsh aka Alpha
- Photography: Various fashion photographers (see image credits in code)
- Libraries: GSAP, ScrollTrigger, Lenis, ImagesLoaded

## Favicon Testing

To test the favicon implementation, open `favicon-test.html` in various browsers to verify:

1. Rounded corners display correctly in modern browsers
2. Fallback to ICO works in older browsers
3. Favicon appears in browser tabs and bookmarks

## Premium 404 Pages

The website features elegantly designed 404 pages with:

- **Animated Elements** - Fade-in animations for a premium feel
- **Gradient Typography** - Animated gradient text for the 404 code
- **Smooth Button Interactions** - Subtle hover and click effects
- **Decorative Elements** - Minimal design accents that complement the content
- **Page Transitions** - Smooth fade-out when navigating away
- **Responsive Design** - Optimized for all device sizes
