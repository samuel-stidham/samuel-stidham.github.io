<script setup>
import { resumeData } from '../data/resume.js'
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-gray-100">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <header class="mb-12">
        <h1 class="text-5xl font-bold text-gray-900 dark:text-white mb-2">
          {{ resumeData.contact.name }}
        </h1>
      </header>

      <!-- Table of Contents - Mobile (inline) -->
      <nav class="mb-12 pb-6 border-b border-gray-200 dark:border-gray-700 lg:hidden">
        <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Table of Contents</h2>
        <ul class="flex flex-wrap gap-4 text-sm">
          <li v-if="resumeData.summary && resumeData.summary.length > 0">
            <a href="#summary" class="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Career Summary
            </a>
          </li>
          <li v-if="resumeData.skills && resumeData.skills.length > 0">
            <a href="#skills" class="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Skills Summary
            </a>
          </li>
          <li v-if="resumeData.experience && resumeData.experience.length > 0">
            <a href="#experience" class="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Experience
            </a>
          </li>
          <li v-if="resumeData.education && resumeData.education.length > 0">
            <a href="#education" class="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Education
            </a>
          </li>
          <li v-if="resumeData.certifications && resumeData.certifications.length > 0">
            <a href="#certifications" class="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Certifications
            </a>
          </li>
        </ul>
      </nav>

      <!-- Table of Contents - Desktop (floating left sidebar) -->
      <nav class="hidden lg:block fixed left-6 top-1/2 -translate-y-1/2 z-10">
        <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 w-48">
          <h2 class="text-sm font-semibold text-gray-900 dark:text-white mb-3">Contents</h2>
          <ul class="space-y-2 text-sm">
            <li v-if="resumeData.summary && resumeData.summary.length > 0">
              <a href="#summary" class="block text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Career Summary
              </a>
            </li>
            <li v-if="resumeData.skills && resumeData.skills.length > 0">
              <a href="#skills" class="block text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Skills Summary
              </a>
            </li>
            <li v-if="resumeData.experience && resumeData.experience.length > 0">
              <a href="#experience" class="block text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Experience
              </a>
            </li>
            <li v-if="resumeData.education && resumeData.education.length > 0">
              <a href="#education" class="block text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Education
              </a>
            </li>
            <li v-if="resumeData.certifications && resumeData.certifications.length > 0">
              <a href="#certifications" class="block text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Certifications
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main>
        <!-- Career Summary -->
        <section id="summary" class="mb-10 scroll-mt-8" v-if="resumeData.summary && resumeData.summary.length > 0">
          <h2 class="text-3xl font-semibold text-gray-900 dark:text-white border-b-2 border-gray-200 dark:border-gray-700 pb-2 mb-4">
            Career Summary
          </h2>
          <p 
            v-for="(paragraph, index) in resumeData.summary" 
            :key="index"
            class="text-lg mb-2 text-gray-700 dark:text-gray-300"
          >
            {{ paragraph }}
          </p>
        </section>

        <!-- Skills Summary -->
        <section id="skills" class="mb-10 scroll-mt-8" v-if="resumeData.skills && resumeData.skills.length > 0">
          <h2 class="text-3xl font-semibold text-gray-900 dark:text-white border-b-2 border-gray-200 dark:border-gray-700 pb-2 mb-4">
            Skills Summary
          </h2>
          <ul class="space-y-2">
            <li v-for="(skill, index) in resumeData.skills" :key="index">
              <strong class="text-gray-900 dark:text-white">{{ skill.title }}:&nbsp;</strong> 
              <span class="text-gray-700 dark:text-gray-300">{{ skill.list }}</span>
            </li>
          </ul>
        </section>

        <!-- Experience -->
        <section id="experience" class="mb-10 scroll-mt-8" v-if="resumeData.experience && resumeData.experience.length > 0">
          <h2 class="text-3xl font-semibold text-gray-900 dark:text-white border-b-2 border-gray-200 dark:border-gray-700 pb-2 mb-4">
            Experience
          </h2>
          <div class="space-y-8">
            <div v-for="(job, index) in resumeData.experience" :key="index">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                {{ job.title }} | {{ job.role }}
              </h3>
              <p class="text-md font-medium text-gray-500 dark:text-gray-400 mb-2">
                {{ job.date }}
              </p>
              <ul class="list-disc list-outside ml-8 space-y-1 text-gray-700 dark:text-gray-300">
                <li v-for="(bullet, bulletIndex) in job.bullets" :key="bulletIndex">
                  {{ bullet }}
                </li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Education -->
        <section id="education" class="mb-10 scroll-mt-8" v-if="resumeData.education && resumeData.education.length > 0">
          <h2 class="text-3xl font-semibold text-gray-900 dark:text-white border-b-2 border-gray-200 dark:border-gray-700 pb-2 mb-4">
            Education
          </h2>
          <div class="space-y-6">
            <div v-for="(edu, index) in resumeData.education" :key="index">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                {{ edu.title }}
              </h3>
              <p class="text-md font-medium text-gray-500 dark:text-gray-400 mb-2">
                {{ edu.degree }}
              </p>
              <ul 
                v-if="edu.bullets && edu.bullets.length > 0"
                class="list-disc list-outside ml-8 space-y-1 text-gray-700 dark:text-gray-300"
              >
                <li v-for="(bullet, bulletIndex) in edu.bullets" :key="bulletIndex">
                  {{ bullet }}
                </li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Certifications -->
        <section id="certifications" class="mb-10 scroll-mt-8" v-if="resumeData.certifications && resumeData.certifications.length > 0">
          <h2 class="text-3xl font-semibold text-gray-900 dark:text-white border-b-2 border-gray-200 dark:border-gray-700 pb-2 mb-4">
            Certifications
          </h2>
          <div class="space-y-6">
            <div v-for="(cert, index) in resumeData.certifications" :key="index">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                {{ cert.title }}
                <span v-if="cert.issued" class="text-lg font-normal text-gray-500 dark:text-gray-400">
                  | {{ cert.issued }}
                </span>
              </h3>
              <ul 
                v-if="cert.bullets && cert.bullets.length > 0"
                class="list-disc list-outside ml-8 space-y-1 text-gray-700 dark:text-gray-300"
              >
                <li v-for="(bullet, bulletIndex) in cert.bullets" :key="bulletIndex">
                  {{ bullet }}
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<style scoped>
</style>
