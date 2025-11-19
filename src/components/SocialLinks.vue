<script setup>
const links = [
  { icon: "fa-brands fa-dev", href: "https://dev.to/dqfan2012" },
  { icon: "fa-brands fa-github", href: "https://github.com/dqfan2012" },
  { icon: "fa-brands fa-linkedin", href: "https://www.linkedin.com/in/samuelkstidham" },
  { icon: "fa-brands fa-stack-overflow", href: "https://stackoverflow.com/users/1318263/dqfan2012" },
  { icon: "fa-brands fa-wordpress", href: "https://samstidham.com" },
  { icon: "fa-brands fa-facebook", href: "https://www.facebook.com/dqfan2012" },
  { icon: "fa-brands fa-instagram", href: "https://www.instagram.com/stidham.samuel" },
  { icon: "fa-brands fa-mastodon", href: "https://mastodon.gamedev.place/@dqfan2012" },
  { icon: "fa-brands fa-twitter", href: "https://twitter.com/SamuelStidham" },
  { icon: "fa-brands fa-d-and-d-beyond", href: "https://www.dndbeyond.com/members/dqfan2012" },
  { icon: "fa-solid fa-chess", href: "https://www.chess.com/member/dqfan2012" },
  { icon: "fa-solid fa-chess-knight", href: "https://lichess.org/@/dqfan2012" },
  { icon: "fa-solid fa-microchip", href: "https://turingcomplete.game/profile/dqfan2012" },
];
</script>

<template>
  <!-- 3-column grid, evenly spaced, fits sidebar properly -->
  <div class="grid grid-cols-3 gap-4 mt-5 justify-items-center px-2">
    <a
      v-for="item in links"
      :key="item.href"
      :href="item.href"
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center justify-center w-10 h-10 text-xl text-white
             bg-neutral-700 border-2 border-neutral-700 rounded-full
             transition-colors hover:bg-slate-100 hover:text-neutral-700
             dark:hover:bg-gray-200 dark:hover:text-gray-900"
    >
      <i :class="['pt-1', item.icon]"></i>
    </a>
  </div>
</template>

<style scoped></style>
