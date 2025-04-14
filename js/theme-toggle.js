// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu functionality
    const hamburgerButton = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.body;
    
    if (hamburgerButton && mobileMenu) {
      // Force header background to be visible on mobile
      const headerBg = document.querySelector('.frame__background');
      if (headerBg) {
        headerBg.style.opacity = 1;
      }
      
      // Save original position of hamburger button for mobile
      let originalPosition = null;
      
      hamburgerButton.addEventListener('click', () => {
        hamburgerButton.classList.toggle('open');
        mobileMenu.classList.toggle('open');
        body.classList.toggle('menu-open');
        
        // Adjust position for mobile devices
        if (window.innerWidth <= 768) {
          if (hamburgerButton.classList.contains('open')) {
            // Save original position
            originalPosition = {
              parent: hamburgerButton.parentNode,
              nextSibling: hamburgerButton.nextSibling
            };
            
            // Move to body for fixed positioning
            document.body.appendChild(hamburgerButton);
          } else if (originalPosition) {
            // Restore original position when closing
            if (originalPosition.nextSibling) {
              originalPosition.parent.insertBefore(hamburgerButton, originalPosition.nextSibling);
            } else {
              originalPosition.parent.appendChild(hamburgerButton);
            }
          }
        }
      });
      
      // Close menu when a link is clicked
      const mobileLinks = document.querySelectorAll('.mobile-menu__links a');
      mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
          hamburgerButton.classList.remove('open');
          mobileMenu.classList.remove('open');
          body.classList.remove('menu-open');
          
          // Restore hamburger button position
          if (originalPosition && window.innerWidth <= 768) {
            if (originalPosition.nextSibling) {
              originalPosition.parent.insertBefore(hamburgerButton, originalPosition.nextSibling);
            } else {
              originalPosition.parent.appendChild(hamburgerButton);
            }
          }
        });
      });
    }
  }); 