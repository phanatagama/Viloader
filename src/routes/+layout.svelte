<script lang="ts">
  import Header from "$lib/Header/+Header.svelte";
  import Footer from "$lib/Footer/+Footer.svelte";
  let { children } = $props();
  import "../app.css";
</script>

<main class="max-w-[1200px] mx-auto px-4">
  <Header />
  {@render children()}
  <Footer />
</main>

<style>
  @reference "tailwindcss/theme";

  /* main {
    min-height: calc(100vh - 4rem);
  } */
</style>
