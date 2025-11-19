<template>
  <!-- About Section -->
  <div id="about" class="py-24 px-8 transition-colors duration-300 relative overflow-hidden"
       :class="{'bg-gray-950': isDarkMode, 'bg-gray-100': !isDarkMode}">
    
    <!-- Background Texture/Noise -->
    <div class="absolute inset-0 opacity-[0.03] pointer-events-none" 
         :style="{ backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E\')' }">
    </div>

    <!-- Ambient Glows -->
    <div class="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
    <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto relative z-10">
      <div class="mb-16 text-center animate-on-scroll fade-up">
        <h2 class="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">About Me</h2>
        <p class="text-gray-400 max-w-2xl mx-auto text-lg">
          A glimpse into my world, my work, and my journey as a creator.
        </p>
      </div>

      <!-- Bento Grid Layout -->
      <!-- 4 Columns, auto rows. We aim for a solid rectangle. -->
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        <!-- 1. Profile Card (2x2) -->
        <div class="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-blue-500/30 transition-all duration-500 animate-on-scroll fade-up shadow-2xl flex flex-col">
          <div class="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div class="p-8 flex-grow flex flex-col relative z-10">
            <div class="flex items-start gap-6 mb-6">
              <div class="w-20 h-20 rounded-2xl overflow-hidden border-2 border-white/10 shadow-lg group-hover:border-blue-500/50 transition-colors flex-shrink-0">
                 <img src="https://res.cloudinary.com/duzntb8tw/image/upload/v1745612424/IMG_4487_1080x1080_jbdwfi.png" alt="Collins Odeny" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div>
                <h3 class="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">Collins Odeny</h3>
                <p class="text-blue-400 font-medium text-sm uppercase tracking-wider mb-2">Product Designer & Developer</p>
                <div class="flex gap-2">
                  <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span class="text-xs text-gray-400">Available for new projects</span>
                </div>
              </div>
            </div>
            
            <div class="flex-grow">
              <p class="text-gray-300 leading-relaxed mb-6 text-base">
                Passionate about bridging the gap between design and engineering. With over 5 years of experience, I specialize in building intuitive educational platforms and scalable digital applications that solve real problems.
              </p>
            </div>

            <div class="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
              <span class="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">UI/UX Design</span>
              <span class="px-3 py-1 text-xs font-medium rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">Frontend Dev</span>
              <span class="px-3 py-1 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">Design Systems</span>
            </div>
          </div>
        </div>

        <!-- 2. Tech Stack (2x2) - Expanded & Logos Added -->
        <div class="md:col-span-2 md:row-span-2 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:border-emerald-500/30 transition-all duration-300 animate-on-scroll fade-up delay-200 overflow-hidden relative group flex flex-col">
          <div class="absolute -right-10 -top-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-colors duration-500"></div>
          
          <div class="flex justify-between items-center mb-8 relative z-10">
            <h4 class="text-xl font-bold text-white flex items-center gap-2">
              <span class="text-emerald-400">⚡</span> Tech Stack
            </h4>
            <span class="text-xs text-gray-500 uppercase tracking-wider">My Arsenal</span>
          </div>

          <div class="grid grid-cols-4 gap-4 relative z-10 flex-grow content-center">
             <div v-for="tech in techStack" :key="tech.name" class="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-emerald-500/50 transition-all duration-300 group/item">
               <img :src="tech.icon" :alt="tech.name" class="w-8 h-8 filter grayscale group-hover/item:grayscale-0 transition-all duration-300" />
               <span class="text-[10px] text-gray-400 group-hover/item:text-white transition-colors font-medium">{{ tech.name }}</span>
             </div>
          </div>
        </div>

        <!-- 3. Stats Card: Experience (1x1) -->
        <div class="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 flex flex-col justify-center items-center text-center hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300 animate-on-scroll fade-up delay-100 group relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-b from-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-2 group-hover:scale-110 transition-transform duration-300 relative z-10">5+</div>
          <div class="text-sm text-gray-400 font-medium uppercase tracking-wide relative z-10">Years Exp.</div>
        </div>

        <!-- 4. Stats Card: Projects (1x1) -->
        <div class="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 flex flex-col justify-center items-center text-center hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300 animate-on-scroll fade-up delay-150 group relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-b from-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-2 group-hover:scale-110 transition-transform duration-300 relative z-10">50+</div>
          <div class="text-sm text-gray-400 font-medium uppercase tracking-wide relative z-10">Projects Done</div>
        </div>

        <!-- 6. Journey/Timeline (1x1) -->
        <div class="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:border-yellow-500/30 transition-all duration-300 animate-on-scroll fade-up delay-300 overflow-y-auto custom-scrollbar max-h-[200px] md:max-h-full group relative">
          <div class="absolute inset-0 bg-gradient-to-b from-transparent to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <h4 class="text-lg font-bold text-white mb-4 sticky top-0 bg-gray-900/0 backdrop-blur-sm py-2 z-10 flex items-center gap-2">
            <span class="text-yellow-400">🚀</span> My Journey
          </h4>
          <div class="space-y-6 relative border-l border-white/10 ml-2 pl-4 z-10">
            <div class="relative group/item">
              <div class="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-gray-900 group-hover/item:ring-blue-500/30 transition-all"></div>
              <p class="text-xs text-blue-400 font-mono mb-1">2023 - Present</p>
              <p class="text-sm text-white font-medium">Freelance Product Designer</p>
            </div>
            <div class="relative group/item">
              <div class="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-gray-600 ring-4 ring-gray-900 group-hover/item:ring-gray-500/30 transition-all"></div>
              <p class="text-xs text-gray-500 font-mono mb-1">2021 - 2023</p>
              <p class="text-sm text-gray-300">UI/UX Designer</p>
            </div>
            <div class="relative group/item">
              <div class="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-gray-600 ring-4 ring-gray-900 group-hover/item:ring-gray-500/30 transition-all"></div>
              <p class="text-xs text-gray-500 font-mono mb-1">2018 - 2021</p>
              <p class="text-sm text-gray-300">BSc. IT</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

// Define the props
const props = defineProps({
  isDarkMode: {
    type: Boolean,
    default: true
  }
});
const techStack = [
  { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma/F24E1E' },
  { name: 'Vue.js', icon: 'https://cdn.simpleicons.org/vue.js/4FC08D' },
  { name: 'Tailwind', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
  { name: 'Firebase', icon: 'https://cdn.simpleicons.org/firebase/FFCA28' },
  { name: 'Framer', icon: 'https://cdn.simpleicons.org/framer/0055FF' },
  { name: 'Illustrator', icon: import.meta.env.BASE_URL + 'icons/illustrator.svg' }
];
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.4);
}

/* Animation classes */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-on-scroll.fade-up {
  opacity: 0; /* Start hidden */
  animation: fadeUp 0.8s ease-out forwards;
}
.delay-100 { animation-delay: 0.1s; }
.delay-150 { animation-delay: 0.15s; }
.delay-200 { animation-delay: 0.2s; }
.delay-250 { animation-delay: 0.25s; }
.delay-300 { animation-delay: 0.3s; }
</style>