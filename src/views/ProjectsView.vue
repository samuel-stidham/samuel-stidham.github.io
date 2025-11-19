<script setup>
import { projectsData } from '../data/projects.js'
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-gray-100">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 class="text-4xl font-bold mb-12 text-gray-900 dark:text-gray-100">Projects</h1>

      <div class="space-y-8">
        <div
          v-for="(project, index) in projectsData"
          :key="index"
          class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
        >
          <div class="flex items-start justify-between mb-4">
            <div>
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {{ project.title }}
              </h2>
              <span
                v-if="project.category"
                class="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium"
              >
                {{ project.category }}
              </span>
              <span
                v-if="project.featured"
                class="inline-block ml-2 px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm font-medium"
              >
                Featured
              </span>
            </div>
            <a
              v-if="project.url"
              :href="project.url"
              target="_blank"
              rel="noopener noreferrer"
              class="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
            >
              <i class="fa-sharp-duotone fa-regular fa-external-link text-lg"></i>
            </a>
          </div>

          <ul
            v-if="project.bullets && project.bullets.length > 0"
            class="list-disc list-outside ml-6 space-y-2 text-gray-700 dark:text-gray-300"
          >
            <li v-for="(bullet, bulletIndex) in project.bullets" :key="bulletIndex">
              {{ bullet }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
