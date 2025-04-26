<template>
  <!-- About Section -->
  <div id="about" class="py-24 px-8 transition-colors duration-300"
       :class="{'bg-gradient-to-b from-gray-900 to-black': isDarkMode, 'bg-gradient-to-b from-gray-200 to-white': !isDarkMode}">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div class="animate-on-scroll fade-left">
          <h2 class="text-3xl md:text-5xl font-medium text-white mb-8">About Me</h2>
          <p class="text-xl text-gray-300 mb-8">
            Passionate Product Designer with over 5 years of experience specializing in UI/UX design for 
            educational platforms and digital applications.
          </p>
          <p class="text-gray-400 mb-8">
            Skilled in leading end-to-end design processes—from user research and wireframing to high-fidelity prototyping—with 
            a focus on creating intuitive, accessible, and culturally resonant user experiences. Demonstrated expertise in 
            designing complex admin dashboards and user-friendly interfaces for educational content management.
          </p>
          
          <!-- Skills -->
          <div class="mb-12">
            <h3 class="text-2xl font-medium text-white mb-6">Technical Skills</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-4">
              <div class="flex items-center">
                <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span>UX/UI Design</span>
              </div>
              <div class="flex items-center">
                <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span>Figma / Adobe XD</span>
              </div>
              <div class="flex items-center">
                <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span>Photoshop / Illustrator</span>
              </div>
              <div class="flex items-center">
                <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span>HTML / CSS</span>
              </div>
              <div class="flex items-center">
                <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span>JavaScript (Vue.js)</span>
              </div>
              <div class="flex items-center">
                <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span>User Research</span>
              </div>
              <div class="flex items-center">
                <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span>Wireframing / Prototyping</span>
              </div>
              <div class="flex items-center">
                <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span>Data Visualization</span>
              </div>
            </div>
          </div>
          
  
        </div>
        
        <!-- Profile Column -->
        <div class="relative animate-on-scroll fade-right">
          <!-- Decorative elements -->
          <div class="absolute top-10 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div class="absolute bottom-10 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
          
          <!-- Profile Container -->
          <div class="relative bg-gray-900/70 backdrop-blur-lg rounded-3xl p-8 border border-gray-800/50">
            <!-- Profile Image -->
            <div class="relative w-32 h-32 mx-auto mb-6">
              <div class="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 overflow-hidden">
                <!-- Updated with the new Cloudinary image URL -->
                <img src="https://res.cloudinary.com/duzntb8tw/image/upload/v1745612424/IMG_4487_1080x1080_jbdwfi.png" alt="Collins Odeny" class="w-full h-full object-cover object-center" />
              </div>
            </div>
            
            <!-- Profile Information -->
            <div class="text-center mb-10">
              <h3 class="text-2xl font-medium text-white mb-2">Collins Odeny Otieno</h3>
              <p class="text-blue-400 mb-4">Product Designer & Developer</p>
              <p class="text-gray-400">Bachelor of Science in Information Technology</p>
              <p class="text-gray-400">Microsoft Technology Associate</p>
            </div>
            
            <!-- Contact Information -->
            <div class="space-y-4 mb-8">
              <div class="flex items-center">
                <div class="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-xl mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V3zm2 2v10h14V5H4zm3 3a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1zm4-1a1 1 0 011 1v4a1 1 0 01-2 0V8a1 1 0 011-1zm4-1a1 1 0 00-1 1v6a1 1 0 002 0V7a1 1 0 00-1-1z" />
                  </svg>
                </div>
                <span class="text-gray-300">+254 741 414 271</span>
              </div>
              <div class="flex items-center">
                <div class="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-xl mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <span class="text-gray-300">collinskreation@gmail.com</span>
              </div>
            </div>
            
            <!-- Social Links -->
            <div id="contact" class="flex justify-center space-x-4">
              <a href="https://www.linkedin.com/in/collins-odeny-844449159/" target="_blank" rel="noopener noreferrer" class="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-blue-700 rounded-xl transition-colors duration-300">
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://github.com/Kollynce" target="_blank" rel="noopener noreferrer" class="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded-xl transition-colors duration-300">
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/>
                </svg>
              </a>
              <a href="https://www.behance.net/collinskreation" target="_blank" rel="noopener noreferrer" class="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-blue-800 rounded-xl transition-colors duration-300">
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.363 14.947c0-1.848-.879-3.214-2.695-3.726 1.325-.631 2.016-1.587 2.016-3.074 0-2.932-2.192-3.647-4.721-3.647H0v14.721h7.36c2.725 0 5.003-1.342 5.003-4.274zM3.356 7.21h3.046c1.171 0 2.225.328 2.225 1.682 0 1.25-.82 1.753-1.958 1.753H3.356V7.21zm0 9.458v-3.975h3.46c1.397 0 2.262.647 2.262 2.055 0 1.408-1.04 1.92-2.305 1.92H3.356zm13.096-9.929h4.915v1.455h-4.915V6.74z M18.52 12.86c-1.687 0-2.303 1.012-2.42 2.094h4.782c-.236-1.38-1.03-2.094-2.362-2.094zM18.365 17.772c-1.253 0-2.278-.58-2.278-1.96h6.958c.086-2.902-1.122-5.045-4.563-5.045-2.853 0-4.702 2.144-4.702 4.908 0 2.839 1.765 4.825 4.78 4.825 2.247 0 4.05-1.055 4.5-3.055h-2.42c-.193.715-.941 1.327-2.275 1.327z" />
                </svg>
              </a>
              <a href="https://dribbble.com/Kryme" target="_blank" rel="noopener noreferrer" class="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-pink-700 rounded-xl transition-colors duration-300">
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm7.063 5.531c1.27 1.562 2.027 3.535 2.09 5.672-1.066-.211-2.086-.336-3.086-.336-.551 0-1.105.031-1.66.094-.121-.281-.246-.555-.379-.82a22.108 22.108 0 0 0-.152-.297c1.461-.625 2.754-1.484 3.887-2.578.102-.86.211-.172.3-.265zM12 1.848a10.16 10.16 0 0 1 5.922 1.906c-.094.071-.18.148-.273.23-1.02 1-2.223 1.802-3.582 2.41a20.39 20.39 0 0 0-3.355-5.261 10.188 10.188 0 0 1 1.288-.285zM7.88 1.875A21.673 21.673 0 0 1 11.282 7.5c-2.305.664-4.844 1.082-7.5 1.121A10.176 10.176 0 0 1 7.88 1.875zM1.852 12c0-.098.004-.191.011-.281 3.2-.004 6.125-.508 8.774-1.383.152.316.282.61.393.895-3.11 1-5.739 2.973-7.774 5.886-1.472-1.93-2.297-4.356-2.297-6.843zM12 22.152c-2.496 0-4.778-.887-6.559-2.36 1.723-2.691 4.055-4.542 6.899-5.454 1.406 3.707 2.383 7.782 2.82 12.164-.957.422-2 .657-3.14.7zM14.184 12c.855 0 1.73.07 2.613.215a18.3 18.3 0 0 1 2.21 5.988c-1.394 1.406-3.32 2.316-5.453 2.434-.417-4.02-1.304-7.723-2.59-11.09 1.086-.348 2.156-.547 3.22-.547zM22.047 12c0 2.05-.504 3.98-1.387 5.683-1.117-1.937-2.621-3.583-4.399-4.773.192-.536.348-1.067.465-1.59.625-.075 1.239-.114 1.836-.114.852 0 1.73.113 2.622.34a9.888 9.888 0 0 1 .863.454z" clip-rule="evenodd"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/channel/UCR95dEic6II-bRZUyTBGsng" target="_blank" rel="noopener noreferrer" class="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-red-700 rounded-xl transition-colors duration-300">
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

// Define the props
const props = defineProps({
  isDarkMode: {
    type: Boolean,
    default: true
  }
});
</script>