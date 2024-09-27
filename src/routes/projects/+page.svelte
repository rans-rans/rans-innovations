<script>
  import Project from "./components/project.svelte";
  import { PROGRAMMINGTOOLS } from "./data";
</script>

<div class="flex flex-col gap-12">
  <Project
    title="Jace SterilApp"
    description={`An innovative Flutter application designed to control IoT devices.
  Utilized Arduino with HC-06 Bluetooth module for device communication.
  Notable features include: Custom-built Bluetooth communication using the
  "all_bluetooth" plugin authored by myself. Timer functionality. Data
  storage capabilities`}
    image={"images/jace.png"}
    techStack={"Flutter"}
  />
  <Project
    title="Betz"
    description={`The Flutter Music Player App is a mobile application designed to provide a seamless music 
listening experience on Android devices using functionalitiies provided from the android 
side(Kotlin to be precise). Leveraging Flutter's versatility and Kotlin's power on the Android 
platform, this app integrates various functionalities through method channels for optimal 
performance and user satisfaction.`}
    image={"images/beatz.jpg"}
    techStack={"Flutter"}
    codeLink={"https://github.com/rans-rans/beatz"}
  />
  <Project
    title="Nutfs Decides"
    description={`A voting website allows users to cast votes on specific topics, polls, or elections in a secure 
and transparent manner. It includes features such as user authentication, real-time vote 
tallying, and data visualization of results. Built using React, the site ensures a responsive, 
interactive UI with dynamic updates and can integrate with Supabase as backend and hosted 
with firebase hosting.`}
    image={"images/nutfs.jpg"}
    techStack={"React"}
    codeLink={"https://nutfs-b0f19.web.app/login"}
  />
  <section class="tools_created">
    <p class="p-2 font-bold text-[32px]">Tools Created</p>
    <div class="flex gap-4 flex-wrap p-6">
      {#each PROGRAMMINGTOOLS as tool}
        <div
          class="flex gap-[1rem] items-center max-w-[550px] p-1 border border-black border-solid"
        >
          <div class="w-[55%] flex flex-col gap-1">
            <img alt="" class="w-full" src={tool.imgUrl} />
            <a href={tool.toolLink} target="_blank">
              <div
                class="p-1 rounded-[5px] border border-black border-solid flex justify-center items-center"
              >
                View
              </div>
            </a>
          </div>
          <p class="w-[45%] text-justify">{tool.description}</p>
        </div>
      {/each}
    </div>
  </section>
</div>
