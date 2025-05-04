<template>
  <!-- Projects Section -->
  <div id="projects" class="py-20 px-8 transition-colors duration-300"
       :class="{'bg-black': isDarkMode, 'bg-gray-100': !isDarkMode}">
    <div class="max-w-7xl mx-auto">
      <div class="mb-16 animate-on-scroll fade-up">
        <h2 class="text-3xl md:text-5xl font-medium mb-4"
            :class="{'text-white': isDarkMode, 'text-gray-900': !isDarkMode}">UI/UX Design Projects</h2>
        <p class="text-xl mb-12"
           :class="{'text-gray-400': isDarkMode, 'text-gray-600': !isDarkMode}">A showcase of my design expertise and creative process</p>
      </div>
      
      <!-- UI/UX Design Projects - Card Layout -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div 
          v-for="project in designerProjects" 
          :key="project.name" 
          class="relative flex flex-col sm:flex-row gap-6 animate-on-scroll fade-up"
        >
          <!-- Project Image - Outside Left -->
          <div class="w-full sm:w-1/4 flex-shrink-0 rounded-lg overflow-hidden shadow-lg shadow-blue-900/20 relative z-10">
            <div class="w-full pb-[100%] relative">
              <img 
                :src="project.image" 
                :alt="project.name" 
                class="absolute inset-0 w-full h-full object-cover object-center transform transition-all duration-700 hover:scale-105"
              />
            </div>
          </div>
          
          <!-- Project Card - Right Side -->
          <div class="w-full sm:w-3/4 bg-gray-900/70 backdrop-blur-lg rounded-2xl p-8 hover:bg-gray-800 transition-all duration-500 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/20">
            <div class="mb-4">
              <h3 class="text-2xl font-medium text-white">{{ project.name }}</h3>
            </div>
            <p class="text-gray-400 mb-6" v-if="project.description">{{ project.description }}</p>
            <div class="flex items-center">
              <a 
                :href="project.url" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="text-blue-400 hover:text-blue-300 flex items-center transition-colors duration-300"
              >
                View on Behance
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Developer Projects -->
      <div class="mt-24 mb-10 animate-on-scroll fade-up">
        <h2 class="text-3xl md:text-5xl font-medium text-white mb-4">Developer Projects</h2>
        <p class="text-xl text-gray-400 mb-12">A showcase of my coding expertise and development capabilities</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div 
            v-for="project in developerProjects" 
            :key="project.name" 
            class="group bg-gray-900/70 backdrop-blur-lg rounded-2xl p-8 hover:bg-gray-800 transition-all duration-500 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/20 animate-on-scroll fade-up"
          >
            <div class="flex justify-between items-start mb-6">
              <h3 class="text-2xl font-medium text-white">{{ project.name }}</h3>
              <div class="text-sm px-3 py-1 rounded-full" 
                  :class="{
                    'bg-green-500/20 text-green-400': project.status === 'Live',
                    'bg-blue-500/20 text-blue-400': project.status === 'Beta',
                    'bg-purple-500/20 text-purple-400': project.status === 'Coming Soon'
                  }">
                {{ project.status }}
              </div>
            </div>
            <p class="text-gray-400 mb-6" v-if="project.description">{{ project.description }}</p>
            <div class="flex items-center">
              <a 
                :href="project.url" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="text-blue-400 hover:text-blue-300 flex items-center transition-colors duration-300"
              >
                Visit Project
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
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

// Define the props with renamed properties
const props = defineProps({
  isDarkMode: {
    type: Boolean,
    default: true
  },
  designerProjects: {
    type: Array,
    required: true
  },
  developerProjects: {
    type: Array,
    required: true
  }
});
</script>