<script lang="ts">
  import MetaballPage from '$lib/components/util/MetaballPage.svelte';
  import Logo from '$lib/components/branding/logo/WideLogo.svelte';
</script>

<MetaballPage />

<div
  class="header top-0 sticky w-screen flex items-center justify-center bg-black bg-opacity-20 backdrop-blur-xl"
>
  <Logo height={75} />
</div>
<div class="main w-screen min-h-[70vh]">
  <div
    class="hero h-[32rem] min-h-max max-h-screen flex items-center justify-center flex-col"
  >
    <div
      class="fixed top-[50vh] left-[50vw] translate-x-[-50%] translate-y-[-50%] flex items-center content-center flex-col backdrop-blur-xl rounded-xl p-8"
    >
      <h1 class="text-4xl font-bold -mb-4 -mt-8">
        <Logo height={169} />
      </h1>
      <p class="text-xl">Accelerating what makes execution fun!</p>
    </div>
  </div>
</div>
