<template>
  <!-- Pricing Section -->
  <div id="pricing" class="py-24 px-8 transition-colors duration-300 bg-gradient-to-b from-black to-gray-900">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-on-scroll fade-up">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 text-white">
          Simple, Transparent Pricing
        </h2>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">
          Choose the plan that works best for you. No hidden fees, pause or cancel anytime.
        </p>
      </div>

      <!-- Pricing Toggle -->
      <div class="flex justify-center mb-12 animate-on-scroll fade-up">
        <div class="inline-flex rounded-lg p-1 transition-colors duration-300 bg-gray-800">
          <button
            @click="pricingType = 'subscription'"
            class="px-6 py-2 rounded-md font-medium transition-all duration-300"
            :class="pricingType === 'subscription' 
              ? 'bg-blue-600 text-white shadow-lg' 
              : 'text-gray-400 hover:text-white'"
          >
            Subscription
          </button>
          <button
            @click="pricingType = 'project'"
            class="px-6 py-2 rounded-md font-medium transition-all duration-300"
            :class="pricingType === 'project' 
              ? 'bg-blue-600 text-white shadow-lg' 
              : 'text-gray-400 hover:text-white'"
          >
            Project-Based
          </button>
        </div>
      </div>

      <!-- Subscription Plans -->
      <div v-if="pricingType === 'subscription'" class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Standard Plan -->
        <div class="pricing-card group relative rounded-2xl p-8 transition-all duration-300 bg-gray-900/50 border border-gray-800 hover:border-blue-500/50">
          <div class="mb-6">
            <h3 class="text-2xl font-bold mb-2 text-white">
              Standard
            </h3>
            <p class="text-gray-400">Perfect for small teams</p>
          </div>
          
          <div class="mb-6">
            <div class="flex items-baseline">
              <span class="text-5xl font-bold text-white">
                $2,995
              </span>
              <span class="text-gray-400 ml-2">/month</span>
            </div>
          </div>

          <ul class="space-y-4 mb-8">
            <li class="flex items-start">
              <svg class="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-gray-300">
                One request at a time
              </span>
            </li>
            <li class="flex items-start">
              <svg class="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-gray-300">
                Average 48-hour delivery
              </span>
            </li>
            <li class="flex items-start">
              <svg class="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-gray-300">
                Unlimited revisions
              </span>
            </li>
            <li class="flex items-start">
              <svg class="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-gray-300">
                Unlimited brands
              </span>
            </li>
            <li class="flex items-start">
              <svg class="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-gray-300">
                Pause or cancel anytime
              </span>
            </li>
          </ul>

          <button
            @click="$emit('open-booking')"
            class="w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            :class="{'bg-blue-600 hover:bg-blue-700 text-white': true}"
          >
            Book a Call
          </button>
        </div>

        <!-- Pro Plan (Featured) -->
        <div class="pricing-card group relative rounded-2xl p-8 transition-all duration-300 transform md:-translate-y-4"
             :class="{'bg-gradient-to-br from-blue-600 to-purple-600': true}">
          <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span class="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
              MOST POPULAR
            </span>
          </div>
          
          <div class="mb-6">
            <h3 class="text-2xl font-bold text-white mb-2">
              Pro
            </h3>
            <p class="text-blue-100">For growing businesses</p>
          </div>
          
          <div class="mb-6">
            <div class="flex items-baseline">
              <span class="text-5xl font-bold text-white">
                $4,995
              </span>
              <span class="text-blue-100 ml-2">/month</span>
            </div>
          </div>

          <ul class="space-y-4 mb-8">
            <li class="flex items-start">
              <svg class="h-6 w-6 text-yellow-300 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-white font-medium">
                Two requests at a time
              </span>
            </li>
            <li class="flex items-start">
              <svg class="h-6 w-6 text-yellow-300 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-white">
                Average 48-hour delivery
              </span>
            </li>
            <li class="flex items-start">
              <svg class="h-6 w-6 text-yellow-300 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-white">
                Unlimited revisions
              </span>
            </li>
            <li class="flex items-start">
              <svg class="h-6 w-6 text-yellow-300 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-white">
                Unlimited brands
              </span>
            </li>
            <li class="flex items-start">
              <svg class="h-6 w-6 text-yellow-300 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-white">
                Priority support
              </span>
            </li>
            <li class="flex items-start">
              <svg class="h-6 w-6 text-yellow-300 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-white">
                Pause or cancel anytime
              </span>
            </li>
          </ul>

          <button
            @click="$emit('open-booking')"
            class="w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 bg-white text-blue-600 hover:bg-gray-100"
          >
            Book a Call
          </button>
        </div>

        <!-- Enterprise Plan -->
        <div class="pricing-card group relative rounded-2xl p-8 transition-all duration-300 bg-gray-900/50 border border-gray-800 hover:border-blue-500/50">
          <div class="mb-6">
            <h3 class="text-2xl font-bold mb-2 text-white">
              Enterprise
            </h3>
            <p class="text-gray-400">For large organizations</p>
          </div>
          
          <div class="mb-6">
            <div class="flex items-baseline">
              <span class="text-3xl font-bold text-white">
                Custom
              </span>
            </div>
            <p class="text-gray-400 text-sm mt-2">Contact for pricing</p>
          </div>

          <ul class="space-y-4 mb-8">
            <li class="flex items-start">
              <svg class="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-gray-300">
                Unlimited requests
              </span>
            </li>
            <li class="flex items-start">
              <svg class="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-gray-300">
                Dedicated support
              </span>
            </li>
            <li class="flex items-start">
              <svg class="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-gray-300">
                Custom SLA
              </span>
            </li>
            <li class="flex items-start">
              <svg class="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-gray-300">
                Team training
              </span>
            </li>
            <li class="flex items-start">
              <svg class="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-gray-300">
                Flexible terms
              </span>
            </li>
          </ul>

          <button
            @click="$emit('open-booking')"
            class="w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 bg-gray-800 hover:bg-gray-700 text-white"
          >
            Contact Us
          </button>
        </div>
      </div>

      <!-- Project-Based Pricing -->
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Landing Page -->
        <div class="pricing-card group relative rounded-2xl p-8 transition-all duration-300 bg-gray-900/50 border border-gray-800 hover:border-blue-500/50">
          <div class="mb-6">
            <h3 class="text-2xl font-bold mb-2 text-white">
              Landing Page
            </h3>
            <p class="text-gray-400">Single page websites</p>
          </div>
          
          <div class="mb-6">
            <div class="flex items-baseline">
              <span class="text-gray-400 text-lg mr-2">Starting at</span>
              <span class="text-5xl font-bold text-white">
                $1,500
              </span>
            </div>
          </div>

          <ul class="space-y-4 mb-8">
            <li class="flex items-start">
              <svg class="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-gray-300">
                Custom design
              </span>
            </li>
            <li class="flex items-start">
              <svg class="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-gray-300">
                Responsive layout
              </span>
            </li>
            <li class="flex items-start">
              <svg class="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-gray-300">
                Contact form integration
              </span>
            </li>
            <li class="flex items-start">
              <svg class="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-gray-300">
                SEO optimization
              </span>
            </li>
            <li class="flex items-start">
              <svg class="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-gray-300">
                2 rounds of revisions
              </span>
            </li>
          </ul>

          <button
            @click="$emit('open-booking')"
            class="w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 bg-blue-600 hover:bg-blue-700 text-white"
          >
            Get Started
          </button>
        </div>

        <!-- Full Website -->
        <div class="pricing-card group relative rounded-2xl p-8 transition-all duration-300 transform md:-translate-y-4"
             :class="{'bg-gradient-to-br from-blue-600 to-purple-600': true}">
          <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span class="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
              MOST POPULAR
            </span>
          </div>
          
          <div class="mb-6">
            <h3 class="text-2xl font-bold text-white mb-2">
              Full Website
            </h3>
            <p class="text-blue-100">Multi-page websites</p>
          </div>
          
          <div class="mb-6">
            <div class="flex items-baseline">
              <span class="text-blue-100 text-lg mr-2">Starting at</span>
              <span class="text-5xl font-bold text-white">
                $5,000
              </span>
            </div>
          </div>

          <ul class="space-y-4 mb-8">
            <li class="flex items-start">
              <svg class="h-6 w-6 text-yellow-300 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-white">
                Up to 10 pages
              </span>
            </li>
            <li class="flex items-start">
              <svg class="h-6 w-6 text-yellow-300 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-white">
                Custom design system
              </span>
            </li>
            <li class="flex items-start">
              <svg class="h-6 w-6 text-yellow-300 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-white">
                CMS integration
              </span>
            </li>
            <li class="flex items-start">
              <svg class="h-6 w-6 text-yellow-300 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-white">
                Advanced SEO
              </span>
            </li>
            <li class="flex items-start">
              <svg class="h-6 w-6 text-yellow-300 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-white">
                3 rounds of revisions
              </span>
            </li>
            <li class="flex items-start">
              <svg class="h-6 w-6 text-yellow-300 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-white">
                30 days support
              </span>
            </li>
          </ul>

          <button
            @click="$emit('open-booking')"
            class="w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 bg-white text-blue-600 hover:bg-gray-100"
          >
            Get Started
          </button>
        </div>

        <!-- Web Application -->
        <div class="pricing-card group relative rounded-2xl p-8 transition-all duration-300 bg-gray-900/50 border border-gray-800 hover:border-blue-500/50">
          <div class="mb-6">
            <h3 class="text-2xl font-bold mb-2 text-white">
              Web Application
            </h3>
            <p class="text-gray-400">Complex web apps</p>
          </div>
          
          <div class="mb-6">
            <div class="flex items-baseline">
              <span class="text-gray-400 text-lg mr-2">Starting at</span>
              <span class="text-5xl font-bold text-white">
                $10,000
              </span>
            </div>
          </div>

          <ul class="space-y-4 mb-8">
            <li class="flex items-start">
              <svg class="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-gray-300">
                Full-stack development
              </span>
            </li>
            <li class="flex items-start">
              <svg class="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-gray-300">
                Database design
              </span>
            </li>
            <li class="flex items-start">
              <svg class="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-gray-300">
                API development
              </span>
            </li>
            <li class="flex items-start">
              <svg class="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-gray-300">
                User authentication
              </span>
            </li>
            <li class="flex items-start">
              <svg class="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-gray-300">
                Custom quote based on scope
              </span>
            </li>
          </ul>

          <button
            @click="$emit('open-booking')"
            class="w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 bg-gray-800 hover:bg-gray-700 text-white"
          >
            Contact Us
          </button>
        </div>
      </div>

      <!-- Trust Badge -->
      <div class="mt-16 text-center animate-on-scroll fade-up">
        <p class="text-gray-400 mb-4">Trusted by startups and enterprises worldwide</p>
        <div class="flex justify-center items-center space-x-8 flex-wrap">
          <div class="flex items-center space-x-2">
            <svg class="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <span class="text-gray-400">No hidden fees</span>
          </div>
          <div class="flex items-center space-x-2">
            <svg class="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <span class="text-gray-400">Pause anytime</span>
          </div>
          <div class="flex items-center space-x-2">
            <svg class="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <span class="text-gray-400">Money-back guarantee</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

defineEmits(['open-booking']);

const pricingType = ref('subscription');
</script>

<style scoped>
.pricing-card {
  backdrop-filter: blur(10px);
}

.pricing-card:hover {
  transform: translateY(-4px);
}
</style>
