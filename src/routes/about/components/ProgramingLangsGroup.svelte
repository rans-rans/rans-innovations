<script>
  import { progLangData } from "../data";
</script>

<div class="my-[4rem]">
  <p class="text-[36px] text-bold mb-[2rem]">Programming Languages</p>
  <div class="flex flex-wrap item-center gap-[0.7rem]">
    {#each progLangData as data}
      <div
        class="grid gap-[1rem]items-center max-w-[550px] p-[1rem] border-[1px] border-black border-solid"
      >
        <img src={data.url} alt="" class="h-[90px]" />
        <p class="w-[200px]">
          {data.description}
        </p>
      </div>
    {/each}
  </div>
</div>
