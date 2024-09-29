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
