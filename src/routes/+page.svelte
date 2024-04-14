<script lang="ts">
  import MetaballPage from '$lib/components/util/MetaballPage.svelte';
  import Logo from '$lib/components/branding/logo/WideLogo.svelte';
  import GitHubLogo from '$lib/components/branding/logo/GitHubLogo.svelte';
</script>

<MetaballPage />

<svelte:head>
  <title>Script-Ware</title>
  <meta name="description" content="Accelerating what makes execution fun!" />
  <meta name="image" content="/favicon.png" />
  <meta name="og:image" content="/favicon.png" />
  <meta name="theme-color" content="#429bfb" />
</svelte:head>

<div
  class="header top-0 sticky w-screen flex items-center justify-between bg-black bg-opacity-20 backdrop-blur-xl px-8"
>
  <div class="flex-1"></div>
  <Logo height={75} />
  <div class="flex-1 flex justify-end">
    <a href="https://github.com/ScriptWare-Software" target="_blank" rel="noopener noreferrer" class="github-link">
      <GitHubLogo width={32} height={32} />
    </a>
  </div>
</div>

<div class="main w-screen min-h-[70vh]">
  <div
    class="hero h-[32rem] min-h-max max-h-screen flex items-center justify-center flex-col"
  >
    <div
      class="fixed top-[50vh] left-[50vw] translate-x-[-50%] translate-y-[-50%] flex items-center content-center flex-col backdrop-blur-xl rounded-xl p-8"
    >
      <h1 class="text-4xl font-bold -mb-4 -mt-8">
        <a href="https://discord.gg/scripting" target="_blank" rel="noopener noreferrer" class="discord-link">
          <Logo height={169} />
        </a>
      </h1>
      <p class="text-xl italic">Accelerating what makes execution fun!</p>
    </div>
  </div>
</div>

<style>
  .github-link:hover :global(svg) {
    filter: brightness(0.9);
  }

  .discord-link:hover :global(svg) {
    filter: brightness(0.9);
  }
</style>