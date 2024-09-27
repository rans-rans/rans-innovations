<!-- <script>
  import { onMount } from "svelte";
  
  let navs = [
    {
      title: "Projects",
      link: "/projects",
    },
    {
      title: "About",
      link: "/about",
      },
      {
        title: "Contact",
        link: "/contact",
        },
        ];
        
  $: activeRoute = $page.route.id;
  const positionInvisible = "-100vh";
  const positionVisible = "0";
  let navPosition = positionInvisible;
  
  function toggleNavDropdown(e) {
    if (navPosition === positionInvisible) {
      navPosition = positionVisible;
      } else {
        navPosition = positionInvisible;
        }
  }
  </script>

  <div class="h-24">
    <nav
    class="z-[1] top-0 w-full bg-white p-6 md:flex md:justify-between md:items-center"
  >
  <div class="flex justify-between items-center">
    <p class="text-lg font-ethnocentric">
      <a href="/" class="no-underline text-black">RANS INNOVATIONS</a>
      </p>
      <button
        on:click={() => toggleNavDropdown()}
        class="menu md:hidden block right-2 bg-white border-none"
      >
      <span class="h-[5px] w-[35px] bg-black block rounded-[2px] m-1"></span>
      <span class="h-[5px] w-[35px] bg-black block rounded-[2px] m-1"></span>
      <span class="h-[5px] w-[35px] bg-black block rounded-[2px] m-1"></span>
      </button>
      </div>
      <ul
      class="list-none gap-1 w-full mr-2 right-0 bg-[white] z-[2] px-[1.5rem] pt-[2rem] md:p-[7px] absolute left-0
      top-[{navPosition}] transition-all ease-in duration-500 animate-[key_2s]
      md:static md:flex md:items-centermd:text-black md:w-[auto] md:z-[auto]"
      >
      {#each navs as nav}
      <a
      class="text-xl duration-200 p-1
      {activeRoute == nav.link ? 'md:border-b md:border-y-black' : ''}
      md:hover:text-lg md:hover:border hover:border-solid hover:border-black hover:p-1 hover:font-extrabold
      "
      href={nav.link}
      >
      <li>
        {nav.title}
        </li>
        </a>
        {/each}
        </ul>
        </nav>
        </div> -->

<script>
  import { page } from "$app/stores";

  $: activeRoute = $page.route.id;
  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<nav class="w-full bg-white shadow-lg">
  <div class="container mx-auto px-4 py-3 flex justify-between items-center">
    <!-- Logo and Brand Name -->
    <p class="text-lg font-ethnocentric">
      <a href="/" class="no-underline text-black">RANS INNOVATIONS</a>
    </p>

    <!-- Button for Mobile View (Hidden on Medium and Larger Devices) -->
    <button
      class="md:hidden flex flex-col items-center justify-center space-y-1"
      on:click={toggleMenu}
    >
      <span class="block w-6 h-0.5 bg-gray-600"></span>
      <span class="block w-6 h-0.5 bg-gray-600"></span>
      <span class="block w-6 h-0.5 bg-gray-600"></span>
    </button>

    <!-- Navigation Links (Hidden on Small Devices) -->
    <ul class="hidden md:flex gap-6">
      <li>
        <a
          class="text-xl duration-150 p-1
      {activeRoute == '/projects' ? 'font-bold' : ''}
      hover:text-lg hover:p-1 hover:font-semibold
      "
          href="/projects"
        >
          <li>Projects</li>
        </a>
      </li>
      <li>
        <a
          class="text-xl duration-150 p-1
      {activeRoute == '/about' ? 'font-bold' : ''}
      hover:text-lg hover:p-1 hover:font-semibold
      "
          href="/about"
        >
          <li>About</li>
        </a>
      </li>
      <li>
        <a
          class="text-xl duration-150 p-1
        {activeRoute == '/contact' ? 'font-bold' : ''}
        hover:text-lg hover:p-1 hover:font-semibold
        "
          href="/contact"
        >
          <li>Contact</li>
        </a>
      </li>
    </ul>
  </div>

  <!-- Mobile Menu (Visible only when button is clicked) -->
  {#if isMenuOpen}
    <ul class="md:hidden bg-white px-4 py-2 space-y-2">
      <li>
        <a href="/" class="block text-gray-700 hover:text-blue-500">Home</a>
      </li>
      <li>
        <a href="/projects" class="block text-gray-700 hover:text-blue-500"
          >Projects</a
        >
      </li>
      <li>
        <a href="/about" class="block text-gray-700 hover:text-blue-500"
          >About</a
        >
      </li>
      <li>
        <a href="/contact" class="block text-gray-700 hover:text-blue-500"
          >Contact</a
        >
      </li>
    </ul>
  {/if}
</nav>

<style>
  /* Add any additional styles here */
</style>
