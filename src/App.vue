<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { ref, watch, onMounted } from 'vue'

const route = useRoute()
const theme = ref('light')

const applyTheme = (value) => {
  const root = document.documentElement
  if (value === 'dark') {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }
}

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'light'

  const stored = window.localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark') {
    return stored
  }

  // Fall back to system preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }

  return 'light'
}

onMounted(() => {
  theme.value = getInitialTheme()
  applyTheme(theme.value)
})

watch(theme, (value) => {
  applyTheme(value)
  window.localStorage.setItem('theme', value)
})

const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
}

const isActive = (path) => {
  return route.path === path
}
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-gray-100">
    <nav class="border-b border-gray-200 dark:border-gray-700">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- LEFT: NAV LINKS -->
          <div class="flex space-x-8">
            <RouterLink
              to="/resume"
              class="px-3 py-2 text-sm font-medium transition-colors relative"
              :class="isActive('/resume') 
                ? 'text-indigo-600 dark:text-indigo-400' 
                : 'text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white'"
            >
              Resume
              <span 
                v-if="isActive('/resume')"
                class="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 dark:bg-indigo-400"
              ></span>
            </RouterLink>
            <RouterLink
              to="/projects"
              class="px-3 py-2 text-sm font-medium transition-colors relative"
              :class="isActive('/projects') 
                ? 'text-indigo-600 dark:text-indigo-400' 
                : 'text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white'"
            >
              Projects
              <span 
                v-if="isActive('/projects')"
                class="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 dark:bg-indigo-400"
              ></span>
            </RouterLink>
            <RouterLink
              to="/about"
              class="px-3 py-2 text-sm font-medium transition-colors relative"
              :class="isActive('/about') 
                ? 'text-indigo-600 dark:text-indigo-400' 
                : 'text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white'"
            >
              About
              <span 
                v-if="isActive('/about')"
                class="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 dark:bg-indigo-400"
              ></span>
            </RouterLink>
          </div>

          <!-- RIGHT: SUN / TOGGLE / MOON -->
          <div class="flex items-center space-x-3">
            <!-- Sun icon (always visible, highlighted in light mode) -->
            <i
              class="fa-sharp-duotone fa-regular fa-sun-bright text-lg transition-opacity transition-colors"
              :class="theme === 'light' ? 'opacity-100 text-yellow-400' : 'opacity-50 text-gray-500 dark:text-gray-400'"
            ></i>

            <!-- Toggle pill -->
            <button
              type="button"
              @click="toggleTheme"
              aria-label="Toggle theme"
              class="relative inline-flex h-6 w-11 items-center rounded-full
                     bg-gray-300 dark:bg-gray-600 transition-colors focus:outline-none focus:ring-2
                     focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-900"
            >
              <span
                class="inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform"
                :class="theme === 'dark' ? 'translate-x-5' : 'translate-x-1'"
              ></span>
            </button>

            <!-- Moon icon (always visible, highlighted in dark mode) -->
            <i
              class="fa-sharp-duotone fa-regular fa-moon-star text-lg transition-opacity transition-colors"
              :class="theme === 'dark' ? 'opacity-100 text-indigo-400' : 'opacity-50 text-gray-500 dark:text-gray-400'"
            ></i>
          </div>
        </div>
      </div>
    </nav>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
</style>
