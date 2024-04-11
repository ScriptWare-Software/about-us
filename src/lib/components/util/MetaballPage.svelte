<script lang="ts">
  import { Metaballs } from 'svelte-metaballs';
</script>

<div
  class="fixed top-0 left-0 w-screen h-screen flex items-center justify-center text-white -z-10"
>
  <div
    class="meatballs relative w-screen h-screen pointer-events-none -z-10 bg-background-pure"
  >
    <Metaballs
      cornerColors={[
        [0x31, 0xbc, 0xd8, 0xff],
        [0x42, 0x9b, 0xfb, 0xff],
        [0x31, 0xbc, 0xd8, 0xff],
        [0x42, 0x9b, 0xfb, 0xff],
      ]}
    />
  </div>
</div>
