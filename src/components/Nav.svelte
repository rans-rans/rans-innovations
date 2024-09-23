<script>
  import { page } from "$app/stores";
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
          md:hover:text-lg md:hover:border md:hover:border-solid md:hover:border-black hover:p-1 hover:font-extrabold
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
</div>
