<script setup>
import profileImage from '../assets/images/samuel-stidham.jpg'
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-gray-100">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Profile Card - Mobile (inline at top) -->
      <div class="flex flex-col items-center mb-12 lg:hidden">
        <div class="w-32 h-32 rounded-full overflow-hidden shadow-lg ring-4 ring-gray-200 dark:ring-gray-700 mb-4">
          <img 
            :src="profileImage" 
            alt="Samuel Stidham" 
            class="w-full h-full object-cover"
          >
        </div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100">Samuel Stidham</h1>
      </div>

      <!-- Profile Card - Desktop (floating left sidebar) -->
      <div class="hidden lg:block fixed left-6 top-1/2 -translate-y-1/2 z-10">
        <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-6 w-48 flex flex-col items-center">
          <div class="w-32 h-32 rounded-full overflow-hidden shadow-lg ring-4 ring-gray-200 dark:ring-gray-700 mb-4">
            <img 
              :src="profileImage" 
              alt="Samuel Stidham" 
              class="w-full h-full object-cover"
            >
          </div>
          <h2 class="text-xl font-bold text-gray-900 dark:text-gray-100 text-center">
            Samuel Stidham
          </h2>
        </div>
      </div>

      <!-- Desktop heading (hidden on mobile since profile card has it) -->
      <h1 class="hidden lg:block text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">About Me</h1>
      
      <div class="prose prose-lg dark:prose-invert max-w-none">
        <p class="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
          I'm <strong class="text-gray-900 dark:text-gray-100">Samuel Stidham</strong> — a software engineer with over a decade of experience building full-stack systems, cloud-native services, and large-scale backend solutions. I'm deeply passionate about Computer Science and Mathematics, and I spend most of my time designing clean architectures, automating workflows, and solving complex engineering problems.
        </p>

        <div class="mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Technologies & Tools</h2>
          <p class="text-gray-700 dark:text-gray-300 mb-4">
            My work spans a wide range of technologies including:
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium">PHP</span>
            <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium">JavaScript</span>
            <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium">Go</span>
            <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium">Python</span>
            <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium">C/C++</span>
            <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium">Zig</span>
            <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium">Ruby</span>
            <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium">Rails</span>
            <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium">Django</span>
            <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium">Laravel</span>
            <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium">Symfony</span>
            <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium">Kubernetes</span>
            <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium">GCP</span>
            <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium">Cloudflare</span>
            <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium">LaTeX</span>
            <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium">CI/CD</span>
          </div>
        </div>

        <div class="mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Personal Interests</h2>
          <p class="text-gray-700 dark:text-gray-300 mb-4">
            Outside of engineering, I'm a lifelong fan of video games including Dragon Quest, The Legend of Zelda, Hollow Knight, Stardew Valley, Minecraft, and 7 Days to Die. I love reading, writing, and listening to heavy metal and death metal while building things.
          </p>
          <p class="text-gray-700 dark:text-gray-300">
            My personal projects often explore NLP, LLM integrations, and developer tooling.
          </p>
        </div>

        <div class="mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Academic Goals</h2>
          <p class="text-gray-700 dark:text-gray-300 mb-4">
            My academic goal is to earn my <strong class="text-gray-900 dark:text-gray-100">B.S. in Computer Science (Software Engineering)</strong> with a <strong class="text-gray-900 dark:text-gray-100">Minor in Mathematics</strong>, followed by an <strong class="text-gray-900 dark:text-gray-100">M.S. in Computer Science (Artificial Intelligence)</strong> and a <strong class="text-gray-900 dark:text-gray-100">Master's in Mathematics</strong>.
          </p>
          <p class="text-gray-700 dark:text-gray-300">
            Long term, I want to combine my industry experience with teaching — working as a software engineer by day and teaching university courses in the evenings or online.
          </p>
        </div>

        <div class="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p class="text-gray-600 dark:text-gray-400 italic">
            This site is a work in progress — a place to host my resume, showcase my projects, and document my journey through software engineering, mathematics, and academia.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
