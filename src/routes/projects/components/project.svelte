<script>
  export let title;
  export let description;
  export let techStack;
  export let image;
  export let codeLink = null;
</script>

<div
  class="m-4 md:m-[0] border-solid border-black border-[1px] md:border-none p-10 flex flex-col justify-center"
>
  <div class="flex flex-wrap justify-around">
    <div class="flex flex-col gap-3 max-w-[475px]">
      <p class="text-[18px] font-bold">{title}</p>
      <p>
        {description}
      </p>
      <div class="flex gap-4 md:block">
        <div>
          <p class="font-semibold text-[15px] underline">Tools</p>
          <p>{techStack}</p>
        </div>
        {#if codeLink}
          <a href={codeLink} class="text-white" target="_blank">
            <div
              class="p-3 rounded-[5px] bg-black w-[200px] flex justify-center items-center"
            >
              View Project
            </div>
          </a>
        {/if}
      </div>
      <div></div>
    </div>
    <img src={image} alt={`screenshot of ${title}`} class="w-[250px]" />
  </div>
</div>
