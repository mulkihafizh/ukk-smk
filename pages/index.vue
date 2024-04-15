<template>
  <NuxtLayout name="form">
    <div
      class="card bg-gradient-to-tr shadow-sm from-white from-40% to-purple-300 p-8"
    >
      <h1 class="text-2xl mb-4">Login Form</h1>
      <form class="flex flex-col gap-4">
        <div class="form-group flex flex-col gap-2">
          <label for="email">Email</label>
          <input
            class="w-[450px] rounded-lg p-2"
            type="email"
            id="email"
            placeholder="Masukkan Email anda"
            required
          />
        </div>
        <div class="form-group flex flex-col gap-2">
          <label for="password">Password</label>
          <input
            class="w-[450px] rounded-lg p-2"
            type="password"
            id="password"
            placeholder="Masukkan Password anda"
            required
          />
        </div>

        <div class="form-submit">
          <button
            class="text-lg bg-purple-500 bgHover text-white px-4 py-1 rounded-lg"
          >
            Login
          </button>
        </div>
      </form>
    </div>
    <div class="register text-sm gap-1 flex items-center justify-center p-4">
      <p>Belum punya akun?</p>
      <nuxt-link to="/register" class="text-purple-500">
        Daftar sekarang!</nuxt-link
      >
    </div>
  </NuxtLayout>
</template>

<script lang="ts">
export default defineComponent({
  setup() {},
});
</script>

<style scoped></style>
