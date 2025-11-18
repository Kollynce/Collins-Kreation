<template>
  <div id="faq" class="py-24 px-8 bg-black relative overflow-hidden">
    <div class="max-w-4xl mx-auto relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
          Frequently Asked Questions
        </h2>
        <p class="text-xl text-gray-400">
          Everything you need to know about the service and how it works.
        </p>
      </div>

      <!-- FAQ Accordion -->
      <div class="space-y-4">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index"
          class="border border-gray-800 rounded-2xl bg-gray-900/30 overflow-hidden transition-all duration-300 hover:border-gray-700"
        >
          <button 
            @click="toggleFaq(index)"
            class="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none"
          >
            <span class="text-lg font-medium text-white pr-8">{{ faq.question }}</span>
            <span 
              class="flex-shrink-0 w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center transition-transform duration-300"
              :class="{ 'rotate-45': faq.isOpen }"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
            </span>
          </button>
          
          <div 
            v-show="faq.isOpen"
            class="px-8 pb-8 text-gray-400 leading-relaxed"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>
      
      <!-- Still have questions CTA -->
      <div class="mt-16 text-center">
        <p class="text-gray-400 mb-6">Still have questions?</p>
        <button
          @click="$emit('open-booking')"
          class="px-8 py-3 rounded-lg font-medium transition-all duration-300 bg-gray-800 hover:bg-gray-700 text-white"
        >
          Book a 30-min Call
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

defineEmits(['open-booking']);

const faqs = ref([
  {
    question: "How does the subscription work?",
    answer: "It's simple! Once you subscribe, you get access to a private Trello board where you can add as many design or development requests as you'd like. I work on them one by one (or two at a time for the Pro plan) and deliver them to you. You can pause or cancel your subscription at any time.",
    isOpen: true
  },
  {
    question: "How fast will I receive my designs or code?",
    answer: "On average, most requests are completed in just two days or less. However, more complex requests like full website builds or complex backend logic can take longer. I'll always provide a realistic timeline for larger tasks.",
    isOpen: false
  },
  {
    question: "What if I don't like the design?",
    answer: "No problem! Revisions are unlimited. I'll keep refining the design until you're 100% satisfied with the result.",
    isOpen: false
  },
  {
    question: "What if I only have a single request?",
    answer: "That's fine. You can pause your subscription when active and resume it when you have more design needs. There's no penalty for pausing.",
    isOpen: false
  },
  {
    question: "Are there any refunds if I don't like the service?",
    answer: "Due to the high-quality nature of the work, there will be no refunds issued. However, you can cancel your subscription at any time if you're not satisfied.",
    isOpen: false
  },
  {
    question: "What software and tech stack do you use?",
    answer: "For design, I primarily use Figma. For development, I specialize in Vue.js, React, Tailwind CSS, and Node.js/Firebase for backend work.",
    isOpen: false
  },
  {
    question: "How do we communicate?",
    answer: "We communicate primarily through Trello for requests and updates. For quick questions or clarifications, we can use Slack or email. This keeps everything organized and in one place.",
    isOpen: false
  }
]);

function toggleFaq(index) {
  faqs.value[index].isOpen = !faqs.value[index].isOpen;
}
</script>
