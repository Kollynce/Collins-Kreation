<template>
  <!-- Projects Section -->
  <div id="projects" class="py-20 px-8 transition-colors duration-300 bg-black">
    <div class="max-w-7xl mx-auto">
      <div class="mb-12 text-center animate-on-scroll fade-up">
        <h2 class="text-3xl md:text-5xl font-bold mb-4 text-white">Featured Projects</h2>
        <p class="text-xl mb-8 text-gray-400 max-w-2xl mx-auto">A showcase of my design expertise and technical capabilities</p>
        
        <!-- Filter Buttons -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            v-for="filter in filters" 
            :key="filter"
            @click="activeFilter = filter"
            class="px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border"
            :class="activeFilter === filter 
              ? 'bg-white text-black border-white' 
              : 'bg-transparent text-gray-400 border-gray-700 hover:border-gray-500 hover:text-white'"
          >
            {{ filter }}
          </button>
        </div>
      </div>
      
      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="project in filteredProjects" 
          :key="project.name" 
          class="group bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-500 hover:-translate-y-1"
        >
          <!-- Project Image (if available) -->
          <div v-if="project.image" class="w-full h-64 overflow-hidden relative">
            <img 
              :src="project.image" 
              :alt="project.name" 
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
          </div>
          
          <!-- Project Content -->
          <div class="p-8">
            <div class="flex justify-between items-start mb-4">
              <div>
                <span class="text-xs font-bold tracking-wider uppercase text-blue-500 mb-2 block">
                  {{ project.category || (project.type ? 'Design' : 'Development') }}
                </span>
                <h3 class="text-2xl font-bold text-white mb-2">{{ project.name }}</h3>
              </div>
              <div v-if="project.status" class="text-xs px-2 py-1 rounded bg-gray-800 text-gray-300 border border-gray-700">
                {{ project.status }}
              </div>
            </div>
            
            <p class="text-gray-400 mb-6 line-clamp-3">{{ project.description }}</p>
            
            <div class="flex items-center gap-4 mt-auto">
              <a 
                v-if="project.url"
                :href="project.url" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="text-white hover:text-blue-400 font-medium flex items-center transition-colors"
              >
                View Project
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              
              <button 
                v-if="project.caseStudy"
                @click="openCaseStudy(project)"
                class="text-gray-400 hover:text-white font-medium flex items-center transition-colors"
              >
                Read Case Study
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Enhanced Case Study Modal -->
    <div v-if="selectedProject" class="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-4 overflow-y-auto">
      <div class="absolute inset-0 bg-black/95 backdrop-blur-md" @click="closeCaseStudy"></div>
      
      <div class="relative bg-gray-950 w-full max-w-5xl h-full md:h-[90vh] md:rounded-3xl overflow-y-auto shadow-2xl animate-fade-in flex flex-col">
        
        <!-- Close Button -->
        <button 
          @click="closeCaseStudy"
          class="fixed md:absolute top-6 right-6 z-50 p-3 rounded-full bg-black/50 text-white hover:bg-white hover:text-black transition-all backdrop-blur-sm border border-white/10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Hero Section -->
        <div class="relative h-[40vh] md:h-[50vh] w-full flex-shrink-0">
          <img 
            :src="selectedProject.image" 
            :alt="selectedProject.name" 
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent"></div>
          
          <div class="absolute bottom-0 left-0 w-full p-8 md:p-12">
            <span class="inline-block px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 text-xs font-bold tracking-wider uppercase mb-4 border border-blue-600/30">
              {{ selectedProject.category || 'Case Study' }}
            </span>
            <h2 class="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">{{ selectedProject.name }}</h2>
            <p class="text-xl text-gray-300 max-w-2xl">{{ selectedProject.description }}</p>
          </div>
        </div>

        <!-- Content Container -->
        <div class="flex-grow bg-gray-950 px-8 md:px-12 pb-12">
          
          <!-- Project Meta Grid -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-b border-gray-800 mb-12">
            <div>
              <h4 class="text-gray-500 text-xs uppercase tracking-wider mb-1">Role</h4>
              <p class="text-white font-medium">{{ selectedProject.category || 'Product Designer' }}</p>
            </div>
            <div>
              <h4 class="text-gray-500 text-xs uppercase tracking-wider mb-1">Timeline</h4>
              <p class="text-white font-medium">4 Weeks</p>
            </div>
            <div>
              <h4 class="text-gray-500 text-xs uppercase tracking-wider mb-1">Platform</h4>
              <p class="text-white font-medium">Web & Mobile</p>
            </div>
            <div>
              <h4 class="text-gray-500 text-xs uppercase tracking-wider mb-1">Status</h4>
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <p class="text-white font-medium">Completed</p>
              </div>
            </div>
          </div>

          <!-- Main Content Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <!-- Left Column: Narrative -->
            <div class="lg:col-span-2 space-y-16">
              
              <!-- The Challenge -->
              <div class="relative pl-8 border-l-2 border-gray-800">
                <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-red-500 border-4 border-gray-950"></div>
                <h3 class="text-2xl font-bold text-white mb-4">The Challenge</h3>
                <p class="text-gray-400 text-lg leading-relaxed">
                  {{ selectedProject.caseStudy.problem }}
                </p>
              </div>

              <!-- The Solution -->
              <div class="relative pl-8 border-l-2 border-gray-800">
                <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-gray-950"></div>
                <h3 class="text-2xl font-bold text-white mb-4">The Solution</h3>
                <p class="text-gray-400 text-lg leading-relaxed">
                  {{ selectedProject.caseStudy.solution }}
                </p>
              </div>

              <!-- Visual Gallery (Placeholders) -->
              <div>
                <h3 class="text-2xl font-bold text-white mb-6">Visual Exploration</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="aspect-video bg-gray-900 rounded-xl border border-gray-800 overflow-hidden group">
                    <div class="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                      <span class="text-gray-600 font-medium">Dashboard View</span>
                    </div>
                  </div>
                  <div class="aspect-video bg-gray-900 rounded-xl border border-gray-800 overflow-hidden group">
                    <div class="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                      <span class="text-gray-600 font-medium">Mobile Responsive</span>
                    </div>
                  </div>
                  <div class="aspect-video bg-gray-900 rounded-xl border border-gray-800 overflow-hidden group md:col-span-2">
                    <div class="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                      <span class="text-gray-600 font-medium">Design System Components</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- The Results -->
              <div class="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-blue-500/20">
                <h3 class="text-2xl font-bold text-white mb-4">Key Results</h3>
                <div class="flex items-start gap-4">
                  <div class="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <p class="text-xl text-white font-medium mb-2">{{ selectedProject.caseStudy.results }}</p>
                    <p class="text-sm text-gray-400">Achieved within the first month of launch.</p>
                  </div>
                </div>
              </div>

            </div>

            <!-- Right Column: Tech & CTA -->
            <div class="space-y-8">
              <div class="bg-gray-900/50 rounded-2xl p-6 border border-gray-800 sticky top-8">
                <h4 class="text-lg font-bold text-white mb-4">Technologies Used</h4>
                <div class="flex flex-wrap gap-2 mb-8">
                  <span 
                    v-for="tech in selectedProject.caseStudy.technologies" 
                    :key="tech"
                    class="px-3 py-1.5 bg-gray-800 text-gray-300 rounded-lg text-sm border border-gray-700"
                  >
                    {{ tech }}
                  </span>
                </div>

                <a 
                  :href="selectedProject.url" 
                  target="_blank"
                  class="block w-full py-4 bg-white text-black text-center rounded-xl font-bold hover:bg-gray-200 transition-colors mb-4"
                >
                  Visit Live Site
                </a>
                <p class="text-xs text-center text-gray-500">Opens in a new tab</p>
              </div>
            </div>

          </div>
        </div>
        
        <!-- Footer / Next Project -->
        <div class="bg-gray-900 border-t border-gray-800 p-8 md:p-12 flex justify-between items-center">
          <div>
            <p class="text-gray-500 text-sm mb-1">Next Project</p>
            <h4 class="text-white font-bold text-lg">Bug Bounty System</h4>
          </div>
          <button class="p-4 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineProps } from 'vue';

const props = defineProps({
  designerProjects: {
    type: Array,
    required: true
  },
  developerProjects: {
    type: Array,
    required: true
  }
});

const activeFilter = ref('All');
const filters = ['All', 'UI/UX Design', 'Web Development'];
const selectedProject = ref(null);

const allProjects = computed(() => {
  return [...props.designerProjects, ...props.developerProjects];
});

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') {
    return allProjects.value;
  }
  return allProjects.value.filter(project => {
    if (activeFilter.value === 'UI/UX Design') {
      return project.category === 'UI/UX Design' || project.type?.includes('Design');
    }
    if (activeFilter.value === 'Web Development') {
      return project.category === 'Web Development' || !project.type; // Fallback for dev projects
    }
    return true;
  });
});

function openCaseStudy(project) {
  selectedProject.value = project;
  document.body.style.overflow = 'hidden';
}

function closeCaseStudy() {
  selectedProject.value = null;
  document.body.style.overflow = '';
}
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.3s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.98); }
  to { opacity: 1; transform: scale(1); }
}

/* Custom Scrollbar for Modal */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #111; 
}
::-webkit-scrollbar-thumb {
  background: #333; 
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
</style>