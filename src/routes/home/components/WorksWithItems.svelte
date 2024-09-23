<script>
  import { worksWithElements } from "../variables";
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
