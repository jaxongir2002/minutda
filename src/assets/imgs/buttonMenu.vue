<script setup>
const emit = defineEmits(['openNavigation'])
</script>

<template>
  <button @click="emit('openNavigation')" type="button" aria-expanded="false" aria-controls=":r4t:"
          class="group -m-2.5 rounded-full p-2.5 transition hover:bg-neutral-950/10" aria-label="Toggle navigation">
    <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 fill-neutral-950 group-hover:fill-neutral-700">
      <path d="M2 6h20v2H2zM2 16h20v2H2z"></path>
    </svg>
  </button>
</template>

<style scoped lang="scss">

</style>