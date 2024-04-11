<script lang="ts">
  import { Metaballs } from 'svelte-metaballs';
</script>

<div
  class="fixed top-0 left-0 w-screen h-screen bg-black flex items-center justify-center text-white"
>
  <div class="meatballs">
    <Metaballs />
  </div>
</div>

<style lang="scss">
  .meatballs {
    width: 100vw;
    height: 100vh;
    position: relative;
  }
</style>
