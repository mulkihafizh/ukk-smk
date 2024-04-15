<template>
  <NuxtLayout name="dashboard">
    <main class="p-6">
      <div class="grid grid-cols-5 gap-4">
        <Book v-for="i in 10" />
      </div>
    </main>
  </NuxtLayout>
</template>

<script lang="ts">
export default defineComponent({});
</script>

<style scoped></style>
