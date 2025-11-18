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

        <!-- 5. Socials (1x1) -->
        <div class="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 flex flex-col justify-center hover:border-pink-500/30 transition-all duration-300 animate-on-scroll fade-up delay-250 group">
          <h4 class="text-lg font-bold text-white mb-6 text-center group-hover:text-pink-400 transition-colors">Let's Connect</h4>
          <div class="flex justify-center gap-4">
            <a href="https://www.linkedin.com/in/collins-odeny-844449159/" target="_blank" class="p-3 rounded-2xl bg-white/5 text-gray-400 border border-white/5 hover:bg-blue-600 hover:text-white hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://github.com/Kollynce" target="_blank" class="p-3 rounded-2xl bg-white/5 text-gray-400 border border-white/5 hover:bg-gray-700 hover:text-white hover:border-gray-600 hover:shadow-lg hover:shadow-gray-500/20 transition-all duration-300 transform hover:-translate-y-1">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/></svg>
            </a>
            <a href="https://dribbble.com/Kryme" target="_blank" class="p-3 rounded-2xl bg-white/5 text-gray-400 border border-white/5 hover:bg-pink-600 hover:text-white hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 transform hover:-translate-y-1">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm7.063 5.531c1.27 1.562 2.027 3.535 2.09 5.672-1.066-.211-2.086-.336-3.086-.336-.551 0-1.105.031-1.66.094-.121-.281-.246-.555-.379-.82a22.108 22.108 0 0 0-.152-.297c1.461-.625 2.754-1.484 3.887-2.578.102-.86.211-.172.3-.265zM12 1.848a10.16 10.16 0 0 1 5.922 1.906c-.094.071-.18.148-.273.23-1.02 1-2.223 1.802-3.582 2.41a20.39 20.39 0 0 0-3.355-5.261 10.188 10.188 0 0 1 1.288-.285zM7.88 1.875A21.673 21.673 0 0 1 11.282 7.5c-2.305.664-4.844 1.082-7.5 1.121A10.176 10.176 0 0 1 7.88 1.875zM1.852 12c0-.098.004-.191.011-.281 3.2-.004 6.125-.508 8.774-1.383.152.316.282.61.393.895-3.11 1-5.739 2.973-7.774 5.886-1.472-1.93-2.297-4.356-2.297-6.843zM12 22.152c-2.496 0-4.778-.887-6.559-2.36 1.723-2.691 4.055-4.542 6.899-5.454 1.406 3.707 2.383 7.782 2.82 12.164-.957.422-2 .657-3.14.7zM14.184 12c.855 0 1.73.07 2.613.215a18.3 18.3 0 0 1 2.21 5.988c-1.394 1.406-3.32 2.316-5.453 2.434-.417-4.02-1.304-7.723-2.59-11.09 1.086-.348 2.156-.547 3.22-.547zM22.047 12c0 2.05-.504 3.98-1.387 5.683-1.117-1.937-2.621-3.583-4.399-4.773.192-.536.348-1.067.465-1.59.625-.075 1.239-.114 1.836-.114.852 0 1.73.113 2.622.34a9.888 9.888 0 0 1 .863.454z" clip-rule="evenodd"/></svg>
            </a>
          </div>
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
  { name: 'Adobe XD', icon: 'https://cdn.simpleicons.org/adobexd/FF61F6' },
  { name: 'Illustrator', icon: 'https://cdn.simpleicons.org/adobeillustrator/FF9A00' }
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