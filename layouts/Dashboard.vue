<template>
  <div class="bg-slate-100 min-h-screen">
    <Sidebar />
    <div class="ml-[300px]">
      <header
        class="flex justify-between items-center border-b py-4 px-6 text-sm"
      >
        <nav class="flex gap-2">
          <span v-for="(i, index) in routePath"
            >{{ i }} <span v-if="index + 1 !== routePath.length">|</span></span
          >
        </nav>
        <NuxtImg
          class="avatar rounded-full"
          placeholder
          height="30"
          width="30"
          :src="`https://ui-avatars.com/api/?name=username`"
        />
      </header>
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  async setup() {
    const route = useRoute();
    const routeName = route.fullPath;

    let pathArray = routeName.split("/").filter(Boolean);
    let routePath = pathArray.map((word: string) => {
      return word.toUpperCase();
    });

    return {
      routePath,
    };
  },
});
</script>

<style scoped></style>
