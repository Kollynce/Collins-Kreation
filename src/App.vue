<template>
  <div class="min-h-screen text-white font-sans overflow-x-hidden bg-gradient-to-b from-black to-gray-900">
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 bg-black/80 backdrop-blur-lg border-gray-800/50">
      <div class="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full overflow-hidden border-2 border-white/10">
            <img src="https://res.cloudinary.com/duzntb8tw/image/upload/v1745612424/IMG_4487_1080x1080_jbdwfi.png" alt="Collins Odeny" class="w-full h-full object-cover" />
          </div>
          <div class="text-2xl font-semibold tracking-tight text-white">Collins Kreation</div>
        </div>
        <div class="hidden md:flex items-center">
          <div class="space-x-8 mr-8">
            <a href="#services" class="hover:text-blue-500 transition-colors text-gray-400 hover:text-white">Services</a>
            <a href="#pricing" class="hover:text-blue-500 transition-colors text-gray-400 hover:text-white">Pricing</a>
            <a href="#projects" class="hover:text-blue-500 transition-colors text-gray-400 hover:text-white">Projects</a>
            <a href="#about" class="hover:text-blue-500 transition-colors text-gray-400 hover:text-white">About</a>
          </div>
          <button
            @click="openBookingModal"
            class="px-6 py-2 rounded-lg font-medium transition-all duration-300 bg-blue-600 hover:bg-blue-700 text-white"
          >
            Book a Call
          </button>
          <!-- Theme toggle button -->
          <!-- <button 
            @click="toggleDarkMode" 
            class="p-2 rounded-full transition-colors duration-300"
            :class="{'bg-gray-800 hover:bg-gray-700': isDarkMode, 'bg-gray-200 hover:bg-gray-300': !isDarkMode}"
            aria-label="Toggle dark/light mode"
          >
            <svg v-if="isDarkMode" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          </button> -->
        </div>
        
          <!-- Mobile menu button -->
          <div class="md:hidden flex items-center space-x-3">
            <button 
              @click="isMenuOpen = !isMenuOpen"
            class="rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle menu"
          >
            <svg 
              v-if="!isMenuOpen" 
              xmlns="http://www.w3.org/2000/svg" 
              class="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            <svg 
              v-else 
              xmlns="http://www.w3.org/2000/svg" 
              class="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <div 
        v-if="isMenuOpen" 
        class="md:hidden absolute top-full left-0 right-0 border-b transition-colors duration-300 bg-black/95 backdrop-blur-lg border-gray-800/50"
      >
        <div class="p-6 space-y-4">
          <a 
            href="#services" 
            @click="isMenuOpen = false" 
            class="block py-2 transition-colors hover:text-blue-500 text-gray-300 hover:text-white"
          >
            Services
          </a>
          <a 
            href="#pricing" 
            @click="isMenuOpen = false" 
            class="block py-2 transition-colors hover:text-blue-500 text-gray-300 hover:text-white"
          >
            Pricing
          </a>
          <a 
            href="#projects" 
            @click="isMenuOpen = false" 
            class="block py-2 transition-colors hover:text-blue-500 text-gray-300 hover:text-white"
          >
            Projects
          </a>
          <a 
            href="#about" 
            @click="isMenuOpen = false" 
            class="block py-2 transition-colors hover:text-blue-500 text-gray-300 hover:text-white"
          >
            About
          </a>
          <button
            @click="openBookingModal(); isMenuOpen = false;"
            class="w-full py-2 px-4 rounded-lg font-medium transition-all duration-300 bg-blue-600 hover:bg-blue-700 text-white text-left"
          >
            Book a Call
          </button>
        </div>
      </div>
    </nav>
    
    <!-- Main sections using modular components -->
    <Hero @open-booking="openBookingModal" />

    <Services />
    
    <Pricing @open-booking="openBookingModal" />

    <FAQ @open-booking="openBookingModal" />

    <Testimonials />
    
    <Projects 
      :designer-projects="designerProjectsList"
      :developer-projects="developerProjectsList"
    />
    
    <AboutMe />
    
    <!-- Booking Modal -->
    <BookingModal 
      :is-open="isBookingModalOpen" 
      @close="closeBookingModal"
    />
    
    <!-- Footer -->
    <div class="max-w-7xl mx-auto py-8 px-8 transition-colors duration-300 border-t border-gray-800">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-500">© {{ new Date().getFullYear() }} Collins Kreation. All rights reserved.</p>
        <div class="flex space-x-6 mt-4 md:mt-0">
          <a href="https://www.linkedin.com/in/collins-odeny-844449159/" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors duration-300">
            <span class="sr-only">LinkedIn</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="https://github.com/Kollynce" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors duration-300">
            <span class="sr-only">GitHub</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/>
            </svg>
          </a>
          <a href="https://www.behance.net/collinskreation" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors duration-300">
            <span class="sr-only">Behance</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.363 14.947c0-1.848-.879-3.214-2.695-3.726 1.325-.631 2.016-1.587 2.016-3.074 0-2.932-2.192-3.647-4.721-3.647H0v14.721h7.36c2.725 0 5.003-1.342 5.003-4.274zM3.356 7.21h3.046c1.171 0 2.225.328 2.225 1.682 0 1.25-.82 1.753-1.958 1.753H3.356V7.21zm0 9.458v-3.975h3.46c1.397 0 2.262.647 2.262 2.055 0 1.408-1.04 1.92-2.305 1.92H3.356zm13.096-9.929h4.915v1.455h-4.915V6.74z M18.52 12.86c-1.687 0-2.303 1.012-2.42 2.094h4.782c-.236-1.38-1.03-2.094-2.362-2.094zM18.365 17.772c-1.253 0-2.278-.58-2.278-1.96h6.958c.086-2.902-1.122-5.045-4.563-5.045-2.853 0-4.702 2.144-4.702 4.908 0 2.839 1.765 4.825 4.78 4.825 2.247 0 4.05-1.055 4.5-3.055h-2.42c-.193.715-.941 1.327-2.275 1.327z" />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Back to top button -->
    <button 
      @click="scrollToTop" 
      class="fixed right-6 bottom-6 p-3 rounded-full shadow-lg z-50 transition-all duration-300 transform hover:scale-110 bg-gray-800 hover:bg-gray-700 text-white"
      :class="{
        'translate-y-0 opacity-100': showBackToTop,
        'translate-y-16 opacity-0': !showBackToTop
      }"
      aria-label="Back to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Hero from './components/Hero.vue';
import Services from './components/Services.vue';
import Pricing from './components/Pricing.vue';
import FAQ from './components/FAQ.vue';
import Testimonials from './components/Testimonials.vue';
import Projects from './components/Projects.vue';
import AboutMe from './components/AboutMe.vue';
import BookingModal from './components/BookingModal.vue';
import { designerProjects, developerProjects } from './data/projects.js';

// Featured projects from Behance is now designerProjects
const designerProjectsList = ref(designerProjects);

// Developer projects is now developerProjects
const developerProjectsList = ref(developerProjects);

const isMenuOpen = ref(false);
const showBackToTop = ref(false);
const isBookingModalOpen = ref(false);

// Booking modal functions
function openBookingModal() {
  isBookingModalOpen.value = true;
}

function closeBookingModal() {
  isBookingModalOpen.value = false;
}

// Initialize scroll reveal animation functionality
onMounted(() => {
  // Select all elements with the animate-on-scroll class
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  
  // Create Intersection Observer instance
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Add the animate class when element is in view
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        // Optionally stop observing the element after it's animated
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1, // Trigger when at least 10% of the element is visible
    rootMargin: '0px 0px -50px 0px' // Slightly adjust trigger point
  });
  
  // Start observing each element
  animateElements.forEach(el => {
    observer.observe(el);
  });
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100, // Offset for fixed header
          behavior: 'smooth'
        });
        
        // If mobile menu is open, close it
        isMenuOpen.value = false;
      }
    });
  });
  
  // Add scroll event listener for back-to-top button
  window.addEventListener('scroll', handleScroll);
});

// Clean up event listeners when component is unmounted
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

// Show back-to-top button when user has scrolled down
function handleScroll() {
  showBackToTop.value = window.scrollY > 500;
}

// Scroll to top function
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

:root {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
  --text-primary: #ffffff;
  --text-secondary: #a0aec0;
  --text-tertiary: #718096;
  --bg-primary: #000000;
  --bg-secondary: #1a202c;
  --accent-primary: #3b82f6;
  --accent-secondary: #8b5cf6; 
}

/* Light mode theme variables */
:root.light-mode {
  --text-primary: #1a202c;
  --text-secondary: #4a5568;
  --text-tertiary: #718096;
  --bg-primary: #f7fafc;
  --bg-secondary: #edf2f7;
  --accent-primary: #3182ce;
  --accent-secondary: #6b46c1;
}

/* Animation classes */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Apply animation to elements */
.animate-on-scroll {
  opacity: 0;
}

.animate-on-scroll.animate {
  animation-duration: 0.8s;
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
}

.animate-on-scroll.animate.fade-up {
  animation-name: fadeInUp;
}

.animate-on-scroll.animate.fade-left {
  animation-name: fadeInLeft;
}

.animate-on-scroll.animate.fade-right {
  animation-name: fadeInRight;
}

.animate-on-scroll.animate.scale-in {
  animation-name: scaleIn;
}

/* Apply staggered delay to child elements */
.stagger-children > * {
  opacity: 0;
}

.stagger-children.animate > *:nth-child(1) {
  animation: fadeInUp 0.6s 0.1s forwards;
}
.stagger-children.animate > *:nth-child(2) {
  animation: fadeInUp 0.6s 0.2s forwards;
}
.stagger-children.animate > *:nth-child(3) {
  animation: fadeInUp 0.6s 0.3s forwards;
}
.stagger-children.animate > *:nth-child(4) {
  animation: fadeInUp 0.6s 0.4s forwards;
}
.stagger-children.animate > *:nth-child(5) {
  animation: fadeInUp 0.6s 0.5s forwards;
}
.stagger-children.animate > *:nth-child(6) {
  animation: fadeInUp 0.6s 0.6s forwards;
}
.stagger-children.animate > *:nth-child(7) {
  animation: fadeInUp 0.6s 0.7s forwards;
}
.stagger-children.animate > *:nth-child(8) {
  animation: fadeInUp 0.6s 0.8s forwards;
}

::selection {
  background-color: rgba(59, 130, 246, 0.5);
  color: white;
}

/* Accessibility improvements */
:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* Improved button and interaction states */
button, a {
  transition: all 0.2s ease;
}

button:focus-visible, a:focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* Scrollbar styling */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
}

::-webkit-scrollbar-thumb {
  background: rgba(59, 130, 246, 0.5);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(59, 130, 246, 0.8);
}
</style>
