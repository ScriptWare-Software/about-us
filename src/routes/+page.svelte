<script lang="ts">
  import MetaballPage from '$lib/components/util/MetaballPage.svelte';
  import Logo from '$lib/components/branding/logo/WideLogo.svelte';
  import GitHubLogo from '$lib/components/branding/logo/GitHubLogo.svelte';
  import { Icon } from '@3xpo/svelte-bootstrap-ico';
  import { keyToClick } from '$lib/util/keyToClick';

  let contentSection: HTMLDivElement | null = null;
</script>

<MetaballPage />

<svelte:head>
  <title>Script-Ware</title>
  <meta name="description" content="Accelerating what makes execution fun!" />
  <meta name="image" content="/favicon.png" />
  <meta name="og:image" content="/favicon.png" />
  <meta name="theme-color" content="#429bfb" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link
    rel="stylesheet"
    href="https://fonts.expo.moe/icon?family=Bootstrap%20Icons"
  />
  <link rel="canonical" href="https://script-ware.com/" />
</svelte:head>

<!-- TODO: use sticky in place of fixed, and make the next element account for the height of the titlebar -->
<div
  class="header top-0 fixed w-full flex items-center justify-between bg-black bg-opacity-20 backdrop-blur-xl px-4 sm:px-8 z-20"
>
  <div class="flex-1"></div>
  <Logo height={75} />
  <div class="flex-1 flex justify-end">
    <a
      href="https://github.com/ScriptWare-Software"
      target="_blank"
      rel="noopener noreferrer"
      class="github-link"
    >
      <GitHubLogo width={32} height={32} />
    </a>
  </div>
</div>

<div class="main w-full">
  <div
    class="hero h-screen flex items-center justify-center flex-col relative overflow-hidden"
  >
    <div
      class="hero-content flex items-center content-center flex-col backdrop-blur-xl rounded-xl p-4 sm:p-8 text-center"
    >
      <h1 class="text-3xl sm:text-4xl font-bold -mb-2 sm:-mb-4 -mt-4 sm:-mt-8">
        <a
          href="https://discord.gg/scripting"
          target="_blank"
          rel="noopener noreferrer"
          class="discord-link"
        >
          <Logo height={169} />
        </a>
      </h1>
      <p class="text-lg sm:text-xl italic mt-4">
        Accelerating what makes execution fun!
      </p>
    </div>
    <button
      class="scroll-hint absolute bottom-8 animate-pulse z-10 bg-transparent border-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-full p-2 transition-all"
      on:click={() => {
        contentSection?.scrollIntoView();
      }}
      on:keydown={keyToClick}
      aria-label="Scroll to content"
    >
      <Icon icon="chevron-down" class="text-white text-2xl font-bold" />
    </button>
  </div>

  <div
    bind:this={contentSection}
    class="content-section min-h-screen bg-gradient-to-b from-[#0005] via-[#070A10ee] to-gray-900 backdrop-blur-2xl flex items-center justify-center"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <div class="text-center mb-12 sm:mb-16">
        <h2
          class="text-3xl sm:text-5xl font-extrabold text-white mb-4 sm:mb-6 leading-tight"
        >
          Transforming Ideas into Reality
        </h2>
        <p
          class="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          At Script-Ware, we develop software experiences that push the
          boundaries of what's typical.
        </p>
      </div>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-16"
      >
        <div
          class="bg-gray-800 rounded-lg p-6 sm:p-8 transform hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col items-center text-center"
        >
          <div class="text-blue-400 -mt-5 -mb-2 text-[3.5rem]">
            <Icon icon="code" />
          </div>
          <h3 class="text-xl sm:text-2xl font-semibold text-white mb-4">
            Innovative Solutions
          </h3>
          <p class="text-gray-300">
            Innovative concepts made into usable software, Script-Ware was built
            through innovation and is at the forefront of it.
          </p>
        </div>

        <div
          class="bg-gray-800 rounded-lg p-6 sm:p-8 transform hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col items-center text-center"
        >
          <div class="text-green-400 -mt-5 -mb-2 text-[3.5rem]">
            <Icon icon="people" />
          </div>
          <h3 class="text-xl sm:text-2xl font-semibold text-white mb-4">
            Vibrant Community
          </h3>
          <p class="text-gray-300">
            Join a thriving ecosystem of individuals who have loved
            Script-Ware's software
          </p>
        </div>

        <div
          class="bg-gray-800 rounded-lg p-6 sm:p-8 transform hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col items-center text-center"
        >
          <div class="text-yellow-400 -mt-5 -mb-2 text-[3.5rem]">
            <Icon icon="lightning-charge" />
          </div>
          <h3 class="text-xl sm:text-2xl font-semibold text-white mb-4">
            Performance
          </h3>
          <p class="text-gray-300">
            Sleek, swift, and stress-free: software that simply works.
            Script-Ware prides itself on efficient, fun, solutions.
          </p>
        </div>
      </div>

      <div class="text-center">
        <a
          href="https://discord.gg/scripting"
          class="inline-block bg-blue-600 text-white font-bold py-3 px-8 sm:py-4 sm:px-10 rounded-full hover:bg-blue-700 transition-colors duration-300 text-base sm:text-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join our community now
        </a>
      </div>
    </div>
  </div>

  <footer class="bg-gray-800 text-white py-12">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="col-span-1 lg:col-span-2">
          <Logo height={50} />
          <p class="mt-4 text-gray-400">
            Accelerating what makes execution fun!<br />Established in 2020.
          </p>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li>
              <a
                href="https://discord.gg/scripting"
                class="text-gray-400 hover:text-white transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer">Discord</a
              >
            </li>
            <li>
              <a
                href="https://github.com/ScriptWare-Software"
                class="text-gray-400 hover:text-white transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer">GitHub</a
              >
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">Connect</h3>
          <ul class="space-y-2">
            <li>
              <a
                href="mailto:contact@script-ware.com"
                class="text-gray-400 hover:text-white transition-colors duration-300"
                >Contact Us</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div
        class="mt-8 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center"
      >
        <p class="text-gray-400 text-center sm:text-left">
          &copy; 2024 ScriptWare Software LTD. All rights reserved.
        </p>
        <div class="flex space-x-4 mt-4 sm:mt-0">
          <a
            href="mailto:contact@script-ware.com"
            aria-label="Email"
            class="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <Icon icon="envelope" class="text-xl" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</div>

<style lang="postcss">
  .github-link:hover :global(svg),
  .discord-link:hover :global(svg) {
    filter: brightness(0.9);
  }
  .scroll-hint {
    transition: opacity 0.3s ease-in-out;
    &:hover,
    &:focus {
      opacity: 0.7;
    }
  }
  .content-section {
    transition: transform 0.1s ease-out;
  }
</style>
