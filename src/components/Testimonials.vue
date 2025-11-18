<template>
  <div id="testimonials" class="py-24 px-8 bg-black relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/5 rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
          What Clients Say
        </h2>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">
          Don't just take my word for it. Here's what people are saying about working with me.
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="(testimonial, index) in testimonials" 
          :key="index"
          class="p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-all duration-300"
        >
          <!-- Stars -->
          <div class="flex mb-6">
            <svg 
              v-for="i in 5" 
              :key="i" 
              class="w-5 h-5 text-yellow-500" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>

          <!-- Quote -->
          <p class="text-gray-300 mb-8 leading-relaxed">
            "{{ testimonial.quote }}"
          </p>

          <!-- Author -->
          <div class="flex items-center">
            <div class="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-xl font-bold text-white mr-4">
              {{ testimonial.initials }}
            </div>
            <div>
              <h4 class="text-white font-bold">{{ testimonial.name }}</h4>
              <p class="text-gray-500 text-sm">{{ testimonial.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const testimonials = ref([
  {
    quote: "Collins transformed our outdated website into a modern, high-converting landing page. The attention to detail and speed of delivery was impressive.",
    name: "Sarah Johnson",
    role: "Marketing Director, TechFlow",
    initials: "SJ"
  },
  {
    quote: "The subscription model is a game-changer for our startup. We get consistent design updates without the overhead of hiring a full-time designer.",
    name: "Michael Chen",
    role: "Founder, StartUp Inc",
    initials: "MC"
  },
  {
    quote: "Incredible backend expertise. He optimized our database queries and reduced our API response times by 50%. Highly recommended.",
    name: "David Smith",
    role: "CTO, DataSystems",
    initials: "DS"
  }
]);
</script>
