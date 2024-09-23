<script>
  import SocialButtons from "./SocialButtons.svelte";
</script>

<div class="contact-wrapper">
  <div
    class="block sm:grid p-[0.5rem] grid-cols-[1fr] sm:grid-cols-[5fr_3fr] items-center gap-[1rem]"
  >
    <form action="">
      <p class="text-[48px] md:text-[64px] font-bold mb-[1.5rem] mt-0">
        Tell me something
      </p>
      <div
        class="form_fields
        grid p-[0.5rem] gap-[1.5rem]"
      >
        <div style="grid-area:firstname">
          <label for="firstname" class="font-bold">First name</label>
          <input
            type="text"
            placeholder="Ransford"
            id="firstname"
            name="firstname"
          />
        </div>
        <div style="grid-area:lastname">
          <label for="lastname" class="font-bold">Last name</label>
          <input
            type="text"
            placeholder="Owusu-Ansah"
            id="lastname"
            name="lastname"
          />
        </div>
        <div style="grid-area:emailaddress">
          <label for="email" class="font-bold">Email Address</label>
          <input
            type="email"
            placeholder="someone@email.com"
            id="email"
            name="email"
          />
        </div>
        <div style="grid-area:message">
          <label for="message" class="font-bold">Your message </label>
          <textarea
            type="text"
            placeholder="Say something nice"
            id="message"
            name="message"
            class="block resize-none w-[100%] h-[150px] border-solid border-[1px] border-black  rounded-[5px]"
          />
        </div>
      </div>
      <button
        id="submitbtn"
        style="
      grid-area:submitbtn;
      width:100%;
      color:white;
      background-color:black;
      height:65px;
      border:none;
      ">Submit</button
      >
    </form>
    <div
      class="contact_aside_img"
      style="
    display:flex;
    justify-content:center;
    align-items:center;
    "
    >
      <img
        src="https://www.shutterstock.com/image-illustration/contact-me-handwritten-onto-white-260nw-98035142.jpg"
        class="h-[60vh] rounded-[10px] md:max-w-[400px] hidden sm:block"
        alt=""
      />
    </div>
  </div>

  <div
    style="
    display:flex;
    justify-content:center;
    align-items:center;
  "
  >
    <hr
      style="
      height:1px;
      width:80%;
      color:black;
      background:black;
      margin:5rem 1rem;
    "
    />
  </div>
  <div
    style="
      display:flex;
      justify-content:center;
      align-items:center;
      font-size:36px;
      font-weight:500;
"
  >
    <p>Socials</p>
  </div>
  <SocialButtons />
</div>

<style>
  .form_fields {
    grid-template-areas:
      "firstname  lastname"
      "emailaddress  emailaddress"
      "message  message"
      "submitbtn  submitbtn";
  }
  input {
    height: 55px;
    padding: 5px;
    border: 1px solid grey;
    border-radius: 5px;
    width: 100%;
    display: block;
  }
</style>
