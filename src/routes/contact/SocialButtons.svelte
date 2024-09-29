<script>
  import gitIcon from "/src/assets/icons/github.svg";
  import instaIcon from "/src/assets/icons/instagram.svg";
  import linkedinIcon from "/src/assets/icons/linkedin.svg";

  let socials = [
    {
      path: gitIcon,
      link: "https://github.com/rans-rans",
    },
    {
      path: instaIcon,
      link: "https://www.instagram.com/ransinnovations/",
    },
    {
      path: linkedinIcon,
      link: "www.linkedin.com/in/ransford-owusu-ansah-bb572b213",
    },
  ];
</script>

<div
  style="
    display:flex;
    justify-content:center;
    align-items:center;
    gap:1rem;
    margin-bottom:2rem;
"
>
  {#each socials as social}
    <div
      style="
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:36px;
    font-weight:500;
"
    >
      <a href={social.link} target="__blank">
        <img src={social.path} alt="" />
      </a>
    </div>
  {/each}
</div>
