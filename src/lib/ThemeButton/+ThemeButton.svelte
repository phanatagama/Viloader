<script>
    import { onMount } from 'svelte';

    let theme = 'light';

    onMount(() => {
        theme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', theme);
    });

    function toggleTheme() {
        theme = theme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }
</script>



<button on:click={toggleTheme}>
    {#if theme === 'light'}
        🌞
    {:else}
        🌜
    {/if}
</button>

<style>
    :global([data-theme='light']) {
        --background-color: white;
        --text-color: black;
    }

    :global([data-theme='dark']) {
        --background-color: black;
        --text-color: white;
    }
    :global(html) {
        background-color: var(--background-color);
        color: var(--text-color);
        transition: background-color 0.5s, color 0.5s;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 1.5rem;
    }
</style>