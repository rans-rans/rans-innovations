<script>

  const skillCardData = [
    {
      img: "https://www.dice.com/binaries/medium/content/gallery/dice/insights/2020/02/shutterstock_1490302805.jpg",
      text1: "Mobile App Developer",
      text2: "I create mobile application for both android and IOS platforms",
    },
    {
      img: "https://usa.bootcampcdn.com/wp-content/uploads/sites/108/2021/03/CDG_blog_post_image_01-850x412.jpg",
      text1: "Website Developer",
      text2:
        "For your responsive ecommerce, portfolios, personal blog, content creation or any other website, I've got you covered.",
    },
  ];
</script>

<section>
  <div
    class="mt-[5rem] p-[3rem]
    grid grid-cols-[1fr] gap-4 justify-around
    md:flex md:justify-start md:flex-wrap
    "
  >
    {#each skillCardData as skillData}
      <div
        class="
        skill_card
        relative text-white max-w-[420px] h-[450px] px-[1.2rem] py-[1.5rem] flex flex-col justify-between"
        style="--bg-url:url('{skillData.img}')"
      >
        <p class="font-bold text-[36px]">{skillData.text1}</p>
        <p class="text-[24px]">
          {skillData.text2}
        </p>
      </div>
    {/each}
  </div>
</section>

<style>
  .skill_card::before {
    content: "";
    background-image: var(--bg-url);
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 10px;
    position: absolute;
    background-size: cover;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    filter: brightness(0.4);

    z-index: -1;
  }
</style>
