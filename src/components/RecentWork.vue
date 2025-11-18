<template>
  <div class="recent-work-container relative group/container perspective-1000">
    <!-- Floating Cards Effect -->
    <div class="relative z-10 h-[240px] w-full flex justify-center items-center">
      <div 
        v-for="(project, index) in recentProjects" 
        :key="index"
        class="project-card absolute w-full bg-gray-900/90 backdrop-blur-md border border-gray-800 rounded-2xl overflow-hidden transition-all duration-500 ease-out shadow-2xl"
        :class="{
          'z-30 scale-100 translate-y-0': index === 0,
          'z-20 scale-95 translate-y-4 opacity-60 group-hover/container:translate-y-20 group-hover/container:scale-100 group-hover/container:opacity-100 group-hover/container:rotate-2': index === 1,
          'z-10 scale-90 translate-y-8 opacity-30 group-hover/container:translate-y-40 group-hover/container:scale-100 group-hover/container:opacity-100 group-hover/container:-rotate-2': index === 2
        }"
      >
        <div class="flex items-center p-4 gap-4">
          <!-- Thumbnail -->
          <div class="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-gray-800 border border-gray-700">
            <img :src="project.image" :alt="project.name" class="w-full h-full object-cover" />
          </div>
          
          <!-- Content -->
          <div class="flex-1 min-w-0 text-left">
            <h4 class="text-white font-semibold truncate text-lg">{{ project.name }}</h4>
            <p class="text-sm text-gray-400 mb-2">{{ project.type }}</p>
            <a :href="project.url" target="_blank" class="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1 font-medium">
              View Project
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- View All Link (Below the stack) -->
    <div class="text-center mt-12 opacity-0 group-hover/container:opacity-100 transition-opacity duration-500 delay-100">
      <a href="#projects" class="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
        View all projects
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>

    <!-- Decorative Glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none opacity-50 group-hover/container:opacity-80 transition-opacity duration-700"></div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { designerProjects } from '../data/projects';

// Get top 3 projects
const recentProjects = computed(() => {
  return designerProjects.slice(0, 3);
});
</script>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}
</style>
