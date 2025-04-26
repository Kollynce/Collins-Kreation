<template>
  <div class="interactive-prompt-container relative bg-gray-900/60 backdrop-blur-xl rounded-3xl p-8 border border-blue-900/30 shadow-2xl shadow-blue-900/20 transition-all duration-500 hover:shadow-blue-900/30 overflow-hidden">
    <!-- Subtle animated border -->
    <div class="absolute inset-0 border-2 border-transparent rounded-3xl animate-pulse-border pointer-events-none"></div>

    <h3 class="text-xl font-medium text-white mb-6 text-center relative z-10 animate-fade-in-delay">What can I build for you?</h3>

    <div v-if="!selectedAction" class="grid grid-cols-2 gap-4 relative z-10">
      <button
        v-for="(action, index) in actions"
        :key="action.id"
        @click="selectAction(action.id)"
        :style="{ animationDelay: `${index * 0.1}s` }"
        class="action-button relative group overflow-hidden p-4 bg-gray-800/70 rounded-xl text-center transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 opacity-0 animate-fade-in-up"
      >
        <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x"></span>
        <span class="relative z-10">
          <span class="block text-4xl mb-2 transition-transform duration-300 group-hover:scale-110">{{ action.icon }}</span>
          <span class="text-sm font-medium text-gray-300">{{ action.label }}</span>
        </span>
      </button>
    </div>

    <div v-else class="text-center animate-fade-in relative z-10">
       <p class="text-gray-300 mb-6">{{ selectedAction.prompt }}</p>
      <a
        :href="selectedAction.link"
        target="_blank"
        rel="noopener noreferrer"
        class="cta-button group inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/40"
      >
        {{ selectedAction.cta }}
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
      <button
        @click="resetSelection"
        class="mt-4 px-4 text-sm text-gray-500 hover:text-gray-300 transition-colors duration-300 underline"
      >
        Choose another option
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const actions = ref([
  { id: 'design', icon: '🎨', label: 'Design UI/UX', prompt: 'Need an intuitive and beautiful design? Let\'s discuss your vision.', cta: 'Start Design Talk', link: 'mailto:collinskreation@gmail.com?subject=UI/UX Design Inquiry' },
  { id: 'develop', icon: '💻', label: 'Develop Web App', prompt: 'Looking for a functional and performant web application? Let\'s build it.', cta: 'Discuss Development', link: 'mailto:collinskreation@gmail.com?subject=Web Development Inquiry' },
  { id: 'prototype', icon: '📱', label: 'Create Prototype', prompt: 'Want to visualize your idea? I can create interactive prototypes.', cta: 'Request Prototype', link: 'mailto:collinskreation@gmail.com?subject=Prototyping Inquiry' },
  { id: 'consult', icon: '💡', label: 'General Inquiry', prompt: 'Have something else in mind or just want to connect?', cta: 'Send Message', link: 'mailto:collinskreation@gmail.com?subject=General Inquiry' },
]);

const currentActionId = ref(null);

const selectedAction = computed(() => {
  return actions.value.find(action => action.id === currentActionId.value);
});

function selectAction(id) {
  currentActionId.value = id;
}

function resetSelection() {
  currentActionId.value = null;
}
</script>

<style scoped>
.interactive-prompt-container {
  /* Add a subtle glow */
   box-shadow: 0 0 30px rgba(59, 130, 246, 0.15), 0 0 50px rgba(128, 0, 128, 0.1);
}

.interactive-prompt-container:hover {
   box-shadow: 0 0 40px rgba(59, 130, 246, 0.25), 0 0 60px rgba(128, 0, 128, 0.15);
}

/* Animated border effect */
@keyframes pulse-border {
  0%, 100% { border-color: rgba(59, 130, 246, 0.2); }
  50% { border-color: rgba(168, 85, 247, 0.3); } /* Purple */
}
.animate-pulse-border {
  animation: pulse-border 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Entry animations */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}
.animate-fade-in-delay {
  opacity: 0;
  animation: fadeIn 0.5s ease-out 0.2s forwards; /* Delay title */
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up {
  /* Applied via class binding for stagger */
  animation: fadeInUp 0.5s ease-out forwards;
}

/* Gradient animation like Hero button */
@keyframes gradient-x {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-x 4s ease infinite;
}

/* Remove default background on hover when gradient is active */
.action-button:hover {
  background-color: transparent; /* Or adjust as needed */
}

/* Enhanced button hover */
.action-button:hover .text-4xl {
  transform: scale(1.15) rotate(-5deg);
}

.cta-button:hover svg {
    transform: translateX(4px);
}

</style>
