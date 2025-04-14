// Modern text-based loader
const textLoader = () => {
    // IMMEDIATE - Force the header background to be visible from the start
    ensureHeaderImageIsVisible();
    
    // Create loader container
    const loaderContainer = document.createElement('div');
    loaderContainer.className = 'text-loader';
    
    // Function to ensure header image is visible
    function ensureHeaderImageIsVisible() {
      document.documentElement.classList.add('header-bg-ready');
      const headerBackground = document.querySelector('.frame__background');
      const headerBackgroundImg = headerBackground?.querySelector('img');
      
      // Apply direct styles for maximum browser compatibility
      if (headerBackground) {
        headerBackground.style.backgroundImage = 'url(img/header.png)';
        headerBackground.style.opacity = '1';
        headerBackground.style.visibility = 'visible';
        headerBackground.style.display = 'block';
        // Force immediate repaint
        void headerBackground.offsetHeight;
      }
      
      if (headerBackgroundImg) {
        headerBackgroundImg.style.opacity = '1';
        headerBackgroundImg.style.visibility = 'visible';
        void headerBackgroundImg.offsetHeight;
      }
    }
    
    // Array of creative photography-related words - reduced to just 3 for faster loading
    const words = [
      'AXYN',
      'Elegance',
      'Premium'
    ];
    
    // Create word elements
    words.forEach(word => {
      const wordElement = document.createElement('div');
      wordElement.className = 'text-loader__word';
      
      // Split each word into characters with spans
      word.split('').forEach(char => {
        const charSpan = document.createElement('span');
        charSpan.className = 'text-loader__char';
        charSpan.textContent = char;
        wordElement.appendChild(charSpan);
      });
      
      loaderContainer.appendChild(wordElement);
    });
    
    // Add the loading text
    const loadingText = document.createElement('div');
    loadingText.className = 'text-loader__status';
    loadingText.innerHTML = '<span>AXYN</span>';
    loaderContainer.appendChild(loadingText);
    
    // Add a loading progress indicator
    const progressWrapper = document.createElement('div');
    progressWrapper.className = 'text-loader__progress-wrapper';
    const progressBar = document.createElement('div');
    progressBar.className = 'text-loader__progress';
    progressWrapper.appendChild(progressBar);
    loaderContainer.appendChild(progressWrapper);
    
    // Add to DOM
    document.body.appendChild(loaderContainer);
    
    // Initialize loader animation
    const tl = gsap.timeline({
      onComplete: completeLoading
    });
    
    // Animate each word
    gsap.set('.text-loader__word', { opacity: 0, display: 'none' });
    gsap.set('.text-loader__progress', { scaleX: 0 });
    
    // Initial fade in of the loader
    tl.to('.text-loader', {
      opacity: 1,
      duration: 0.3
    });
    
    words.forEach((_, index) => {
      const word = document.querySelectorAll('.text-loader__word')[index];
      const chars = word.querySelectorAll('.text-loader__char');
      
      tl.set(word, { opacity: 1, display: 'block' }, index * 0.6);
      
      // Animate individual characters - duration reduced
      tl.fromTo(chars, {
        opacity: 0,
        y: gsap.utils.random(20, 40),
        rotationX: gsap.utils.random(-80, -40),
        scale: 0.8
      }, {
        opacity: 1,
        y: 0,
        rotationX: 0,
        scale: 1,
        stagger: 0.03, // reduced stagger time
        ease: "back.out(1.7)",
        duration: 0.3 // reduced duration
      }, index * 0.6);
      
      // Hold for a moment - reduced holding time
      tl.to(chars, {
        opacity: 1,
        duration: 0.1
      }, index * 0.6 + 0.3);
      
      // Fade out - reduced duration
      tl.to(chars, {
        opacity: 0,
        y: gsap.utils.random(-40, -20),
        rotationX: gsap.utils.random(40, 80),
        scale: 0.8,
        stagger: 0.02, // reduced stagger time
        ease: "back.in(1.7)",
        duration: 0.2 // reduced duration
      }, index * 0.6 + 0.4);
      
      tl.set(word, { opacity: 0, display: 'none' }, index * 0.6 + 0.6);
      
      // Update progress bar for each word
      tl.to('.text-loader__progress', {
        scaleX: (index + 1) / words.length,
        duration: 0.4,
        ease: "power1.inOut"
      }, index * 0.6 + 0.3);
    });
    
    function completeLoading() {
      // Ensure header image is visible before finishing
      ensureHeaderImageIsVisible();
      
      // When animation completes, fade out loader and initialize page
      // Add a reveal animation to make the transition smoother
      gsap.to('.text-loader', {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          document.body.classList.remove('loading');
          loaderContainer.remove();
          
          // Initialize the page animations with a reveal effect
          if (window.init) {
            // Final check to ensure header background is visible
            ensureHeaderImageIsVisible();
            
            // Create reveal animation for the first section
            const tl = gsap.timeline();
            
            // First reveal the header elements
            tl.fromTo('.frame__nav', {
              opacity: 0,
              y: -20
            }, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.out"
            });
            
            tl.fromTo('.frame__branding', {
              opacity: 0,
              scale: 0.95
            }, {
              opacity: 1,
              scale: 1,
              duration: 0.7,
              ease: "power2.out"
            }, "-=0.3");
            
            // Then reveal the intro section elements in sequence
            tl.fromTo('.intro > *', {
              opacity: 0,
              y: 30
            }, {
              opacity: 1,
              y: 0,
              stagger: 0.1,
              duration: 0.8,
              ease: "power2.out"
            }, "-=0.3");
            
            window.init();
            window.scrollTo(0, 0);
          }
        }
      });
    }
    
    // Set a timeout fallback to ensure loading doesn't exceed 2 seconds
    setTimeout(() => {
      if (document.body.classList.contains('loading')) {
        tl.progress(1); // Force the timeline to complete
      }
    }, 1800); // 1.8 seconds max
    
    return tl;
  };
  
  // Start the loader when the DOM is loaded but before images are loaded
  document.addEventListener('DOMContentLoaded', () => {
    // Only run if page has the loading class
    if (document.body.classList.contains('loading')) {
      textLoader();
    }
  }); 