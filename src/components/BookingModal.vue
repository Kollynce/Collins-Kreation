<template>
  <!-- Booking Modal -->
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        @click.self="closeModal"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

        <!-- Modal Content -->
        <div
          class="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl bg-gray-900 border border-gray-800"
        >
          <!-- Header -->
          <div class="flex items-center justify-between p-6 border-b border-gray-800">
            <div>
              <h2 class="text-2xl font-bold text-white">
                Book a Call
              </h2>
              <p class="text-gray-400 mt-1">
                Schedule a 30-minute intro call to discuss your project
              </p>
            </div>
            <button
              @click="closeModal"
              class="p-2 rounded-lg transition-colors duration-200 hover:bg-gray-800 text-gray-400 hover:text-white"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Calendly Embed -->
          <div class="overflow-y-auto" style="max-height: calc(90vh - 100px);">
            <div
              ref="calendlyContainer"
              class="calendly-inline-widget"
              :data-url="calendlyUrl"
              style="min-width:320px;height:700px;"
            ></div>
          </div>
          
          <!-- Fallback Link -->
          <div class="p-4 text-center border-t border-gray-800 bg-gray-900">
            <p class="text-gray-400 text-sm">
              Having trouble with the calendar? 
              <a 
                :href="calendlyUrl" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-blue-500 hover:text-blue-400 underline transition-colors"
              >
                Book directly on Calendly
              </a>
            </p>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, watch, onMounted, defineProps, defineEmits } from 'vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmits(['close']);

// Get Calendly URL from environment variable or use placeholder
const calendlyUrl = import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/collinskreation/15min';

const calendlyContainer = ref(null);
let calendlyScriptLoaded = false;

// Load Calendly script
const loadCalendlyScript = () => {
  if (calendlyScriptLoaded) return;

  const script = document.createElement('script');
  script.src = 'https://assets.calendly.com/assets/external/widget.js';
  script.async = true;
  script.onload = () => {
    calendlyScriptLoaded = true;
  };
  document.head.appendChild(script);

  // Also load Calendly CSS
  const link = document.createElement('link');
  link.href = 'https://assets.calendly.com/assets/external/widget.css';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
};

// Initialize Calendly widget
const initCalendly = () => {
  if (window.Calendly && calendlyContainer.value) {
    window.Calendly.initInlineWidget({
      url: calendlyUrl,
      parentElement: calendlyContainer.value
    });
  }
};

// Close modal function
const closeModal = () => {
  emit('close');
};

// Handle escape key
const handleEscape = (e) => {
  if (e.key === 'Escape' && props.isOpen) {
    closeModal();
  }
};

// Watch for modal open/close
watch(() => props.isOpen, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden';
    loadCalendlyScript();
    // If script is already loaded, re-init widget after DOM update
    if (calendlyScriptLoaded) {
      setTimeout(initCalendly, 100);
    }
  } else {
    document.body.style.overflow = '';
  }
});

onMounted(() => {
  // Add escape key listener
  window.addEventListener('keydown', handleEscape);
  
  // Cleanup
  return () => {
    window.removeEventListener('keydown', handleEscape);
    document.body.style.overflow = '';
  };
});
</script>

<style scoped>
/* Modal transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .relative,
.modal-leave-active .relative {
  transition: transform 0.3s ease;
}

.modal-enter-from .relative,
.modal-leave-to .relative {
  transform: scale(0.95);
}

/* Custom scrollbar for modal */
.overflow-y-auto::-webkit-scrollbar {
  width: 8px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: rgba(59, 130, 246, 0.5);
  border-radius: 4px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: rgba(59, 130, 246, 0.8);
}
</style>
