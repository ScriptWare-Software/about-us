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
      class="inner max-w-[90vw] p-8 backdrop-blur-md rounded-xl flex items-center content-center flex-col"
    >
      <h1 class="text-4xl font-bold -mb-4 -mt-8">
        <Logo height={125} />
      </h1>
      <p>Accelerating what makes execution fun!</p>
    </div>
  </div>
</div>
