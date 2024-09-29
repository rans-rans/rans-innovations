<script>
  const worksWithElements = [
    {
      img: "https://cdn-images-1.medium.com/max/1200/1*5-aoK8IBmXve5whBQM90GA.png",
      alt: "flutter logo",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNXgUcoFa2vndnzpgy5CjEub6o8KGoilwKc55u-AZ-NWl8c8ALlkIT5KZzQlNo9xRZ8-M&usqp=CAU",
      alt: "react logo",
    },
    {
      img: "https://www.webopedia.com/wp-content/uploads/2021/09/figma-logo-e1632519236382.png",
      alt: "figma logo",
    },
    {
      img: "https://miro.medium.com/v2/resize:fit:1400/1*i2fRBk3GsYLeUk_Rh7AzHw.png",
      alt: "express.js logo",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Svelte_logo_by_gengns.svg",
      alt: "svelte",
    },
  ];
</script>

<section class="my-[5rem] mx-[1.5rem] w-[90%]">
  <p class="text-[32px] font-bold ml-[50px]">Works with</p>

  <div
    class="w-full overflow-hidden"
    style="
  --width:115px;
  --height:115px;
  --quantity:{worksWithElements.length};
    height:var(--height)"
  >
    <div
      class="flex w-full relative"
      style="min-width: calc(var(--width)*var(--quantity));"
    >
      {#each worksWithElements as workElement, i}
        <div
          style="
          --position:{i};
          width:var(--width);
          height:var(--height);
          animation-delay:calc( ((10s/var(--quantity)) * ( var(--position) - 1 ) )
          "
          class="item flex justify-center items-center absolute right-full"
        >
          <img class="w-full" src={workElement.img} alt={workElement.alt} />
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .item {
    animation: autoRun 10s linear infinite;
  }
  @keyframes autoRun {
    from {
      right: 100%;
    }
    to {
      right: calc(var(--width) * -1);
    }
  }
</style>
