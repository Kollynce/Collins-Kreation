<template>
  <!-- Hero Section -->
  <div class="relative pt-32 pb-32 md:pt-44 md:pb-40 px-8 overflow-hidden">
    <!-- Background elements -->
    <div class="absolute -top-20 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
    <div class="absolute top-40 right-10 md:right-40 w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-10 md:opacity-20 blur-3xl"></div>
    <div class="absolute bottom-0 -right-20 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow-reverse"></div>

    <div class="max-w-7xl mx-auto relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <!-- Left Column: Text and View Projects Button -->
        <div class="animate-on-scroll fade-right">
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            UI/UX Designer<br /> & Developer
          </h1>
          <p class="text-xl md:text-2xl text-gray-400 font-light mb-10 max-w-xl">
            Bridging the gap between design and development, creating beautiful user experiences and functional applications.
          </p>
          <div class="flex">
            <a
              href="#projects"
              class="view-projects-btn group relative px-8 py-3 rounded-lg transition-all duration-300 font-medium text-center text-white overflow-hidden inline-flex items-center justify-center"
            >
              <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-500 animate-gradient-x"></span>
              <span class="absolute inset-0 w-full h-full bg-black opacity-40 group-hover:opacity-30 transition-opacity duration-300"></span>
              <span class="absolute inset-0 w-full h-full animate-shine opacity-50 group-hover:opacity-80 transition-opacity duration-300"></span>
              <span class="relative flex items-center justify-center">
                View Projects
                <svg class="hand-animation ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 15l-6 6m0 0l-6-6m6 6V9a6 6 0 0 1 6-6h0"></path>
                </svg>
              </span>
            </a>
            <!-- Contact Me button removed -->
          </div>
        </div>

        <!-- Right Column: Interactive Prompt -->
        <div class="animate-on-scroll fade-left">
          <InteractivePrompt />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import InteractivePrompt from './InteractivePrompt.vue';
// No additional props or state needed for the Hero component
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

@keyframes shine {
  0% { mask-position: -150%; }
  100% { mask-position: 250%; }
}

.animate-shine {
  mask-image: linear-gradient(60deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%);
  mask-size: 200% 100%;
  animation: shine 2.5s linear infinite;
}

@keyframes pointDown {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(4px); }
}

.hand-animation {
  animation: pointDown 1.5s ease-in-out infinite;
}

/* Animations for background elements */
@keyframes pulse-slow {
  0%, 100% { transform: scale(1); opacity: 0.1; }
  50% { transform: scale(1.05); opacity: 0.15; }
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
@keyframes fadeRight {
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0); }
}
.animate-on-scroll.fade-right {
  opacity: 0; /* Start hidden */
}
.animate-on-scroll.fade-right.animate {
  animation: fadeRight 0.8s ease-out forwards;
}

@keyframes fadeLeft {
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1; transform: translateX(0); }
}
.animate-on-scroll.fade-left {
  opacity: 0; /* Start hidden */
}
.animate-on-scroll.fade-left.animate {
  animation: fadeLeft 0.8s ease-out forwards;
  animation-delay: 0.2s; /* Stagger animation */
}
</style>