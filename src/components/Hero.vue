<template>
  <!-- Hero Section -->
  <div class="relative pt-32 pb-24 md:pt-44 md:pb-32 px-8 z-20">
    <!-- Background elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div class="absolute top-40 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow-reverse"></div>
      <div class="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-5xl mx-auto relative z-10">
      <div class="flex flex-col items-center text-center">
        <!-- Text Content -->
        <div class="animate-on-scroll fade-up max-w-3xl mx-auto">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 mx-auto">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span class="text-sm font-medium text-blue-400">Available for new projects</span>
          </div>

          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            Design & Development <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Subscriptions</span> for Startups
          </h1>
          <p class="text-xl md:text-2xl text-gray-400 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
            Replace unreliable freelancers and expensive agencies with a flat monthly fee. Pause or cancel anytime.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <!-- Primary CTA: Book a Call -->
            <button
              @click="$emit('open-booking')"
              class="group relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-indigo-600"></span>
              <span class="relative flex items-center justify-center gap-2">
                Book a 30-min Call
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </span>
            </button>

            <!-- Secondary CTA: View Projects -->
            <a
              href="#projects"
              class="px-8 py-4 rounded-xl font-medium text-gray-300 border border-gray-700 hover:border-gray-500 hover:text-white hover:bg-gray-800/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              View Projects
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </a>
          </div>
          
          <!-- Social Proof / Trust Indicators -->
          <div class="mt-16 flex flex-col items-center gap-6 animate-on-scroll fade-up delay-200">
            <p class="text-xs md:text-sm text-gray-500 uppercase tracking-widest font-medium">Trusted by innovative teams at</p>
            <div class="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
              <!-- TechFlow Logo -->
              <div class="h-8 text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer group">
                <svg viewBox="0 0 120 30" fill="currentColor" class="h-full w-auto">
                  <path d="M15 15L5 25V5L15 15Z" />
                  <path d="M20 5H30V25H20V5Z" />
                  <text x="40" y="22" font-family="sans-serif" font-weight="bold" font-size="20">TechFlow</text>
                </svg>
              </div>
              
              <!-- Nexus Logo -->
              <div class="h-8 text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer group">
                <svg viewBox="0 0 100 30" fill="currentColor" class="h-full w-auto">
                  <circle cx="15" cy="15" r="10" />
                  <text x="35" y="22" font-family="sans-serif" font-weight="bold" font-size="20">Nexus</text>
                </svg>
              </div>

              <!-- Circle Logo -->
              <div class="h-8 text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer group">
                <svg viewBox="0 0 100 30" fill="currentColor" class="h-full w-auto">
                  <rect x="5" y="5" width="20" height="20" rx="5" />
                  <text x="35" y="22" font-family="sans-serif" font-weight="bold" font-size="20">Circle</text>
                </svg>
              </div>

              <!-- FoxHub Logo -->
              <div class="h-7 text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer group">
                <svg viewBox="0 0 110 30" fill="currentColor" class="h-full w-auto">
                  <path d="M15 5L25 25H5L15 5Z" />
                  <text x="35" y="22" font-family="sans-serif" font-weight="bold" font-size="20">FoxHub</text>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <!-- Recent Work Showcase (Centered) -->
        <div class="w-full max-w-md animate-on-scroll fade-up delay-200 mt-16">
          <RecentWork />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';
import RecentWork from './RecentWork.vue';

// Define emits for booking modal
defineEmits(['open-booking']);
</script>

<style scoped>
.view-projects-btn {
  box-shadow: 0 0 15px rgba(59, 130, 246, 0.4);
}

.view-projects-btn:hover {
  box-shadow: 0 0 25px rgba(59, 130, 246, 0.6);
  transform: translateY(-2px);
}

@keyframes gradient-x {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-x 4s ease infinite;
}

/* Animations for background elements */
@keyframes pulse-slow {
  0%, 100% { transform: translate(-50%, 0) scale(1); opacity: 0.1; }
  50% { transform: translate(-50%, 0) scale(1.05); opacity: 0.15; }
}
.animate-pulse-slow {
  animation: pulse-slow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse-slow-reverse {
  0%, 100% { transform: scale(1); opacity: 0.1; }
  50% { transform: scale(1.05); opacity: 0.15; }
}
.animate-pulse-slow-reverse {
  animation: pulse-slow-reverse 10s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  animation-delay: 2s; /* Offset animation */
}

/* Define fade animations */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-on-scroll.fade-up {
  opacity: 0; /* Start hidden */
  animation: fadeUp 0.8s ease-out forwards;
}
.delay-200 {
  animation-delay: 0.2s;
}
</style>