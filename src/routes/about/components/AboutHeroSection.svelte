<script>
  import { bio } from "../data";
</script>

<div
  class="grid p-4 gap-[3.5rem] items-start w-full justify-center
 md:flex md:justify-center
"
>
  <div>
    <p class="text-[64px] font-bold">About</p>
    <p class="text-[#828282] text-[24px] my-[20px]">
      Something interesting to read
    </p>
    <p class="font-[500] text-justify min-w-[200px]">
      {bio}
    </p>
  </div>
  <img
    src="me_hero.jpg"
    alt=""
    class="w-[250px] sm:w-[300px] md:w-[350px]"
  />
</div>