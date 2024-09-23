<script>
  export let toolTip;

  let showTooltip = false;

  function handleHover(show) {
    showTooltip = show;
  }
</script>

<div
  class="relative"
  tabindex=""
  role="button"
  aria-haspopup="true"
  aria-expanded={showTooltip}
  aria-describedby="tooltip"
  on:mouseenter={() => handleHover(true)}
  on:mouseleave={() => handleHover(false)}
>
  <slot></slot>
  <span
    id="tooltip"
    role="tooltip"
    class="h-[fit-content] w-[max-content] transition bg-black text-white p-1
        rounded top-[auto] mt-2 absolute inset-0 justify-center z-20
        hover:bg-transparent hover:text-black hover:border-solid hover:border-black hover:border-[1px]
        {showTooltip ? 'visible' : 'invisible'}
      "
  >
    {toolTip}
  </span>
</div>
