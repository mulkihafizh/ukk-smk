<template>
  <aside
    class="w-[300px] fixed flex flex-col bg-white shadow-[rgba(0,0,0,0.1)_5px_0px_4px_0px] from-white from-70% via-purple-200 to-[#a955f7bd] h-screen"
  >
    <header class="flex justify-center gap-2 px-8 py-4 items-center border-b">
      <NuxtImg src="/logo.png" height="50" />
      <h1 class="font-semibold text-2xl">Librify</h1>
    </header>
    <main class="py-20 text-lg">
      <nav class="flex flex-col gap-4 p-8">
        <NuxtLink
          v-for="i in items"
          :to="i.url"
          active-class="bg-gray-200"
          class="item flex gap-2 items-center hover:bg-gray-200 duration-300 rounded-lg p-2"
        >
          <Icon class="text-purple-500" :name="i.icon" size="28" />
          <p>{{ i.name }}</p>
        </NuxtLink>
      </nav>
    </main>
    <div
      class="logout text-lg justify-end flex flex-col pb-12 grow px-8 text-red-500"
    >
      <div
        class="item cursor-pointer flex gap-4 hover:bg-gray-200 duration-300 rounded-lg p-2"
      >
        <Icon name="ic:round-logout" size="28" />
        <p>Logout</p>
      </div>
    </div>
  </aside>
</template>

<script lang="ts">
export default defineComponent({
  setup() {
    let items = [
      { url: "/dashboard-admin", name: "Dashboard", icon: "ph:house-fill" },
      {
        url: "/dashboard-admin/user",
        name: "User",
        icon: "material-symbols:group",
      },
      {
        url: "/dashboard-admin/kategori",
        name: "Kategori",
        icon: "ph:books-fill",
      },
      {
        url: "/dashboard-admin/peminjaman",
        name: "Peminjaman",
        icon: "ph:book-fill",
      },
      { url: "/dashboard-admin/buku", name: "Buku", icon: "ph:book-fill" },
    ];

    return { items };
  },
});
</script>

<style scoped></style>
