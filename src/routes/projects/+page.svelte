<script>
  import Project from "./components/project.svelte";
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
    codeLink={"https://github.com/rans-rans/beatzs"}
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
</div>
