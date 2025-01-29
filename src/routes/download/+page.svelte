<script lang="ts">
  import {copyToClipboard} from "$lib/copyToClipboard";
  import { source } from "$lib/appState.svelte.js";
  $inspect(source).with(console.trace);
  import { goto } from "$app/navigation";
  if (source.src === "") {
    goto("/");
  }

  let { data } = $props();
  const videoUrl = data.endpoint + "blob?src=" + source.src;

  let isLoading = $state(false);

  const downloadVideo = async () => {
    console.log(`downloaded ${videoUrl}`);
    isLoading = true;
    const response = await fetch(videoUrl);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "video.mp4";
    a.click();
    window.URL.revokeObjectURL(url);
    isLoading = false;
  };

  
</script>

<section class="flex flex-col items-center space-y-4 my-4">
  <form class="mb-8 flex w-full max-w-md items-center space-x-2">
    <div class="relative w-full">
      <input
        class="flex h-10 w-full rounded-md border border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 p-7 text-lg"
        type="text"
        placeholder="Enter video URL here..."
        value={source.src}
      />
      <!-- svelte-ignore a11y_consider_explicit_label -->
      <button
        type="button"
        onclick={() => copyToClipboard({url: source.src})}
        tabindex="0"
        class="inline-flex items-center justify-center rounded-md text-sm font-medium whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 w-10 absolute right-2 top-1/2 -translate-y-1/2 transform"
        data-umami-event="Clipboard paste button"
        data-button-root=""
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide-icon lucide lucide-clipboard-paste h-6 w-6 text-muted-foreground"
          ><path
            d="M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z"
          ></path><path
            d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10"
          ></path><path d="m17 10 4 4-4 4"></path></svg
        ></button
      >
    </div>
  </form>
  <!-- svelte-ignore a11y_media_has_caption -->
  <video
    width="360"
    height="480"
    controls
    autoplay
    class="m-auto rounded-4xl overflow-hidden shadow-red-400"
  >
    <source src={videoUrl} type="video/mp4" />
    Your browser does not support the <code>video</code> tag.
  </video>

  <button
    onclick={downloadVideo}
    class="font-semibold w-[360px] {isLoading ? 'bg-gray-400': 'bg-blue-500'} rounded-2xl p-2 my-4 hover:underline hover:decoration-wavy {isLoading
      ? 'hover:cursor-progress'
      : 'hover:cursor-pointer'}"
    disabled={isLoading}
    >{isLoading ? "Please wait..." : "Download Video"}</button
  >
</section>
