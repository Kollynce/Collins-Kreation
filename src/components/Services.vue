<template>
  <div id="services" class="py-24 px-8 bg-black relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div class="absolute top-20 left-10 w-64 h-64 bg-blue-900/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-10 w-80 h-80 bg-purple-900/10 rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
          Comprehensive Services
        </h2>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">
          From concept to code, I handle the entire product lifecycle so you can focus on your business.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        <!-- Design -->
        <div class="p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/30 transition-all duration-300 group">
          <div class="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-white mb-4">UI/UX Design</h3>
          <ul class="space-y-3 text-gray-400">
            <li class="flex items-center">
              <span class="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
              Web & Mobile Apps
            </li>
            <li class="flex items-center">
              <span class="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
              Design Systems
            </li>
            <li class="flex items-center">
              <span class="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
              Prototyping
            </li>
            <li class="flex items-center">
              <span class="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
              Wireframing
            </li>
          </ul>
        </div>

        <!-- Development -->
        <div class="p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-purple-500/30 transition-all duration-300 group">
          <div class="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-white mb-4">Frontend Dev</h3>
          <ul class="space-y-3 text-gray-400">
            <li class="flex items-center">
              <span class="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></span>
              Vue.js / React
            </li>
            <li class="flex items-center">
              <span class="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></span>
              Tailwind CSS
            </li>
            <li class="flex items-center">
              <span class="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></span>
              Landing Pages
            </li>
            <li class="flex items-center">
              <span class="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></span>
              Interactive Websites
            </li>
          </ul>
        </div>

        <!-- Backend -->
        <div class="p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-green-500/30 transition-all duration-300 group">
          <div class="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-white mb-4">Backend Dev</h3>
          <ul class="space-y-3 text-gray-400">
            <li class="flex items-center">
              <span class="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></span>
              API Development
            </li>
            <li class="flex items-center">
              <span class="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></span>
              Database Design
            </li>
            <li class="flex items-center">
              <span class="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></span>
              Authentication
            </li>
            <li class="flex items-center">
              <span class="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></span>
              Server Management
            </li>
          </ul>
        </div>
      </div>

      <!-- Process Section -->
      <div class="mb-24">
        <h3 class="text-3xl font-bold text-white text-center mb-16">How It Works</h3>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Step 1 -->
          <div class="relative">
            <div class="text-8xl font-bold text-gray-800/50 absolute -top-10 -left-4 z-0">01</div>
            <div class="relative z-10">
              <h4 class="text-xl font-bold text-white mb-2">Subscribe</h4>
              <p class="text-gray-400">Choose a plan and get immediate access to your private Trello board.</p>
            </div>
          </div>
          <!-- Step 2 -->
          <div class="relative">
            <div class="text-8xl font-bold text-gray-800/50 absolute -top-10 -left-4 z-0">02</div>
            <div class="relative z-10">
              <h4 class="text-xl font-bold text-white mb-2">Request</h4>
              <p class="text-gray-400">Submit your design or development requests. Unlimited requests allowed.</p>
            </div>
          </div>
          <!-- Step 3 -->
          <div class="relative">
            <div class="text-8xl font-bold text-gray-800/50 absolute -top-10 -left-4 z-0">03</div>
            <div class="relative z-10">
              <h4 class="text-xl font-bold text-white mb-2">Receive</h4>
              <p class="text-gray-400">Get your delivery within 48 hours on average. Fast and efficient.</p>
            </div>
          </div>
          <!-- Step 4 -->
          <div class="relative">
            <div class="text-8xl font-bold text-gray-800/50 absolute -top-10 -left-4 z-0">04</div>
            <div class="relative z-10">
              <h4 class="text-xl font-bold text-white mb-2">Revise</h4>
              <p class="text-gray-400">Not 100% happy? I'll revise it until you are. Unlimited revisions.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Out of Scope -->
      <div class="max-w-3xl mx-auto bg-gray-900/30 rounded-2xl p-8 border border-gray-800">
        <h3 class="text-xl font-bold text-white mb-4 text-center">What's Out of Scope</h3>
        <div class="flex flex-wrap justify-center gap-4">
          <span class="px-4 py-2 bg-gray-800 rounded-full text-gray-400 text-sm">3D Modeling</span>
          <span class="px-4 py-2 bg-gray-800 rounded-full text-gray-400 text-sm">Complex Animations</span>
          <span class="px-4 py-2 bg-gray-800 rounded-full text-gray-400 text-sm">Video Editing</span>
          <span class="px-4 py-2 bg-gray-800 rounded-full text-gray-400 text-sm">Document Layouts</span>
          <span class="px-4 py-2 bg-gray-800 rounded-full text-gray-400 text-sm">Print Design</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No props or logic needed for this static component
</script>
