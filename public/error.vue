<template>
  <div
    class="flex flex-col gap-4 h-screen items-center justify-center font-poppins bg-gradient-to-tr from-white from-10% to-purple-400"
  >
    <NuxtImg
      src="/404.png"
      class="absolute z-[10] top-40"
      height="200"
      width="500"
    />
    <div class="text flex flex-col text-center relative z-[20]">
      <h1
        class="text-9xl font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
      >
        {{ error.statusCode }}
      </h1>
      <h3 class="text-xl">
        {{ error.message }}
      </h3>
    </div>
    <nuxt-link
      to="/dashboard"
      class="border-purple-500 rounded-lg border text-purple-500 p-2"
      >Kembali ke Dashboard</nuxt-link
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const error = useError();

    const handleError = () => {
      clearError({
        redirect: "/dashboard",
      });
    };
    return {
      error,
      handleError,
    };
  },
});
</script>
