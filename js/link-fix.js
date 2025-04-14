/**
 * Link Fix Script
 * 
 * This script resolves issues with navigation links when using smooth scrolling libraries
 * like Lenis that might interfere with normal link behavior.
 * 
 * It explicitly handles navigation for important links like the "Return Home" button,
 * ensuring they work consistently across all browsers and with the smooth scrolling
 * implementation.
 * 
 * Added smooth transition animation when navigating away from 404 pages.
 */

(function() {
  // Execute immediately to avoid any delays
  initLinkFix();
  
  // Also run on DOMContentLoaded as a backup
  document.addEventListener('DOMContentLoaded', initLinkFix);
  
  function initLinkFix() {
    // Create overlay for smooth page transitions
    createTransitionOverlay();
    
    // Fix Return Home buttons with highest priority
    const returnHomeLinks = document.querySelectorAll('.content__error-link');
    
    if (returnHomeLinks.length > 0) {
      returnHomeLinks.forEach(link => {
        // Remove any existing listeners by cloning and replacing
        const newLink = link.cloneNode(true);
        link.parentNode.replaceChild(newLink, link);
        
        // Add hover animation class
        newLink.classList.add('animated-link');
        
        // Add our own listener
        newLink.addEventListener('click', function(event) {
          event.preventDefault();
          event.stopPropagation();
          
          const href = this.getAttribute('href') || 'index.html';
          
          // Trigger the transition animation
          const overlay = document.getElementById('page-transition-overlay');
          if (overlay) {
            // Show overlay with animation
            overlay.style.opacity = '1';
            overlay.style.visibility = 'visible';
            
            // Navigate after animation completes
            setTimeout(() => {
              window.location.href = href;
            }, 600); // Match this to the CSS transition duration
          } else {
            // Fallback if overlay doesn't exist
            window.location.href = href;
          }
        });
      });
    }
    
    // Also fix navigation links
    fixNavigationLinks('.frame__links a, .mobile-menu__links a');
  }
  
  function createTransitionOverlay() {
    // Only create if it doesn't exist yet
    if (!document.getElementById('page-transition-overlay')) {
      const overlay = document.createElement('div');
      overlay.id = 'page-transition-overlay';
      overlay.style.position = 'fixed';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.width = '100%';
      overlay.style.height = '100%';
      overlay.style.backgroundColor = '#0e0d0e';
      overlay.style.zIndex = '9999';
      overlay.style.opacity = '0';
      overlay.style.visibility = 'hidden';
      overlay.style.transition = 'opacity 0.6s ease-in-out';
      overlay.style.pointerEvents = 'none';
      
      document.body.appendChild(overlay);
    }
  }
  
  function fixNavigationLinks(selector) {
    const navLinks = document.querySelectorAll(selector);
    
    navLinks.forEach(link => {
      // Only handle internal links
      const href = link.getAttribute('href');
      if (href && (href.startsWith('index') || href.startsWith('404-'))) {
        // Remove any existing listeners by cloning and replacing
        const newLink = link.cloneNode(true);
        if (link.parentNode) {
          link.parentNode.replaceChild(newLink, link);
          
          // Add our own listener
          newLink.addEventListener('click', function(event) {
            event.preventDefault();
            
            // Trigger the transition animation
            const overlay = document.getElementById('page-transition-overlay');
            if (overlay) {
              // Show overlay with animation
              overlay.style.opacity = '1';
              overlay.style.visibility = 'visible';
              
              // Navigate after animation completes
              setTimeout(() => {
                window.location.href = href;
              }, 600); // Match this to the CSS transition duration
            } else {
              // Fallback if overlay doesn't exist
              window.location.href = href;
            }
          });
        }
      }
    });
  }
})(); 