<script>
  import Faq from "$lib/Faq/+Faq.svelte";
  import Icon from "@iconify/svelte";
  import { source } from "$lib/appState.svelte";
  import { goto } from "$app/navigation";

  let videosource = $state("");

  const gotoDownload = () => {
    // validate the URL
    if (
      !videosource ||
      videosource === "" ||
      videosource === " " ||
      videosource === null ||
      videosource === undefined ||
      !(videosource.includes("tiktok.com") || videosource.includes("instagram.com"))
    ) {
      alert("Please enter the valid video URL");
      videosource = "";
      return;
    }

    try {
      const url = new URL(videosource);
    } catch (error) {
      alert("Invalid URL");
      return;
    }

    source.src = videosource;
    goto("/download");
  };
</script>

<svelte:head>
  <title>Viloader</title>
  <meta
    name="description"
    content="Viloader is a SvelteKit starter template with Tailwind CSS and TypeScript."
  />
  <meta
    name="keywords"
    content="video, downloader, instagram, tiktok, youtube"
  />
  <meta name="author" content="Cahyadi Setia Phanatagama" />
  <meta name="robots" content="index, follow" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<h1 class="font-black text-5xl text-center">Easy Video Downloader</h1>
<h3 class="font-black text-5xl text-center">
  With <span
    class="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent"
    >Viloader</span
  >
</h3>

<section class="flex my-24">
  <div class="flex-1 text-center sm:mr-2 flex justify-between">
    <Icon
      icon="akar-icons:instagram-fill"
      class="text-6xl text-red-500"
      width="100"
    ></Icon>
    <Icon icon="logos:tiktok-icon" width="256" height="300" />
    <Icon
      icon="akar-icons:youtube-fill"
      class="text-6xl text-red-500 self-end"
      width="100"
    ></Icon>
  </div>

  <div class="w-1/2 m-auto p-8 rounded-lg shadow-lg">
    <h1 class="text-4xl font-bold">Viloader</h1>
    <p class="text-lg">
      Enter the Video URL below and get your video with a single click.
    </p>
    <div class="flex flex-col lg:flex-row space-y-10 lg:space-y-0">
      <label for="videosource" class="w-full">
        <input
          bind:value={videosource}
          type="text"
          name="videosource"
          class="w-full p-2 border border-gray-300 rounded"
          placeholder="https://www.tiktok.com/@williesalim/video/7462962062231178504"
        />
      </label>
      <button
        onclick={gotoDownload}
        class="bg-blue-500 rounded-xl p-2 lg:mx-3 hover:underline hover:decoration-wavy hover:decoration-amber-300 hover:bg-blue-400 hover:cursor-pointer"
        >Download</button
      >
    </div>
  </div>
</section>
{#snippet features(
  /** @type {string} */ title,
  /** @type {string} */ description,
  /** @type {string} */ icon
)}
  <div class="p-8 border-2 rounded-2xl border-gray-500 space-y-3">
    <Icon {icon} class="text-3xl text-green-500"></Icon>
    <h3 class="text-xl font-semibold my-2">{title}</h3>
    <p>{description}</p>
  </div>
{/snippet}
<section class="mt-8 mx-4">
  <h1 class="text-3xl lg:text-5xl font-bold">Why use Viloader?</h1>
  <hr class="my-4" />
  <ul class="list-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <li>
      {@render features(
        "Fast downloader speed",
        "Download your video in seconds.",
        "akar-icons:thunder"
      )}
    </li>
    <li>
      {@render features(
        "No login required",
        "Download your video without login.",
        "material-symbols:account-circle-off-outline-rounded"
      )}
    </li>
    <li>
      {@render features(
        "No watermark",
        "Download without watermark",
        "mynaui:copyright-slash"
      )}
    </li>
  </ul>
</section>

<Faq />

