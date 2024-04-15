<template>
  <NuxtLayout name="form">
    <div
      class="card shadow-sm bg-gradient-to-tr from-white from-40% to-purple-300 rounded-lg p-8"
    >
      <h1 class="text-2xl mb-4">Register Form</h1>
      <form class="flex flex-col gap-4">
        <div class="form-group flex flex-col gap-2">
          <label for="email">Email</label>
          <input
            class="w-[450px] rounded-lg p-2 border-[0.5px] focus:outline-purple-500"
            type="email"
            id="email"
            placeholder="Masukkan Email anda"
            required
          />
        </div>
        <div class="form-group flex flex-col gap-2">
          <label for="username">Username</label>
          <input
            class="w-[450px] rounded-lg p-2 border-[0.5px] focus:outline-purple-500"
            type="text"
            id="username"
            placeholder="Masukkan Username anda"
            required
          />
        </div>
        <div class="form-group flex flex-col gap-2">
          <label for="nama_lengkap">Nama Lengkap</label>
          <input
            class="w-[450px] rounded-lg p-2 border-[0.5px] focus:outline-purple-500"
            type="text"
            id="nama_lengkap"
            placeholder="Masukkan Nama Lengkap anda"
            required
          />
        </div>
        <div class="form-group flex flex-col gap-2">
          <label for="password">Password</label>
          <input
            class="w-[450px] rounded-lg p-2 border-[0.5px] focus:outline-purple-500"
            type="password"
            id="password"
            placeholder="Masukkan Password anda"
            required
          />
        </div>
        <div class="form-group flex flex-col gap-2">
          <label for="alamat">Alamat</label>
          <textarea
            class="w-[450px] rounded-lg p-2 border-[0.5px] focus:outline-purple-500"
            id="alamat"
            placeholder="Masukkan Alamat anda"
            cols="5"
          ></textarea>
        </div>
        <div class="form-submit">
          <button
            class="text-lg bg-purple-500 bgHover text-white px-4 py-1 rounded-lg"
          >
            Register
          </button>
        </div>
      </form>
    </div>
    <div class="register text-sm gap-1 flex items-center justify-center p-4">
      <p>Sudah punya akun?</p>
      <nuxt-link to="/" class="text-purple-500"> Login sekarang!</nuxt-link>
    </div>
  </NuxtLayout>
</template>

<script lang="ts">
export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
