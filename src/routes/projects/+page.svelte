<script>
  import Project from "./components/project.svelte";

  import jaceImage from "/src/assets/images/jace.png";
  import beatzImage from "/src/assets/images/beatz.jpg";
  import nutfsImage from "/src/assets/images/nutfs.jpg";
  import allBluetooth from "/src/assets/images/all_bluetooth.png";
  import cleanArc from "/src/assets/images/clean_arc.png";

  const PROGRAMMINGTOOLS = [
    {
      name: "all_bluetooth",
      description: `This is a flutter plugin for communicating with bluetooth devices. It offers features such as, onnecting to a bluetooth devices, returning a list of bonded devices is supported ,retrieving the Bluetooth state (on/off) as either a future or a stream. ,starting a bluetooth server, listening to the state of a bluetooth connection`,
      imgUrl: allBluetooth,
      toolLink: "https://pub.dev/packages/all_bluetooth",
    },
    {
      name: "New Clean Architecture Feature",
      description: `This VS Code extension allows Flutter developers to quickly scaffold a feature-driven clean architecture structure in their projects. The extension creates folders and files based on the Clean Architecture pattern, helping to maintain a modular and scalable codebase.`,
      imgUrl: cleanArc,
      toolLink:
        "https://marketplace.visualstudio.com/items?itemName=RansfordOwusu-Ansah.create-fca-feature",
    },
  ];
</script>

<div class="flex flex-col gap-12">
  <Project
    title="Jace SterilApp"
    description={`An innovative Flutter application designed to control IoT devices.
  Utilized Arduino with HC-06 Bluetooth module for device communication.
  Notable features include: Custom-built Bluetooth communication using the
  "all_bluetooth" plugin authored by myself. Timer functionality. Data
  storage capabilities`}
    image={jaceImage}
    techStack={"Flutter"}
  />
  <Project
    title="Betz"
    description={`The Flutter Music Player App is a mobile application designed to provide a seamless music 
listening experience on Android devices using functionalitiies provided from the android 
side(Kotlin to be precise). Leveraging Flutter's versatility and Kotlin's power on the Android 
platform, this app integrates various functionalities through method channels for optimal 
performance and user satisfaction.`}
    image={beatzImage}
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
    image={nutfsImage}
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
