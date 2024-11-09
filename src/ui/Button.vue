<script setup>
const props = defineProps({
  label: String
});
</script>

<template>
  <button class="btn-minutda">
    {{ props.label }}
  </button>
</template>

<style scoped lang="scss">
.btn-minutda {
  padding: 6px 16px;
  font-size: .875rem;
  line-height: 1.5rem;
  font-weight: 600;
  color: #FFFFFF;
  background: #0A0A0A;
  font-family: Mona Sans, sans-serif;
  border-radius: 9999px;
  letter-spacing: 0.5px;
  display: inline-flex;
}
</style>