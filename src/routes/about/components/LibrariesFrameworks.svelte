<script>
  import Tooltip from "../../../components/Tooltip.svelte";
  import { frameworksAndLibraries } from "../data";
</script>

<div  class="mb-[5rem]">
  <p class="font-[500] text-[36px]">Frameworks and Libraries</p>
  <div
    class="grid gap-[4.5rem] grid-cols-[repeat(auto-fill,minmax(100px,1fr))] p-[2rem]"
  >
    {#each frameworksAndLibraries as data}
      <div class="relative">
        <Tooltip toolTip={data.name}>
          <img
            src={data.imgUrl}
            alt={data.name}
            class="max-h-[50px] absolute inset-0 flex items-center justify-center z-10"
          />
        </Tooltip>
      </div>
    {/each}
  </div>
</div>
