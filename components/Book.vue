<template>
  <div class="card flex flex-col gap-2">
    <NuxtImg
      class="rounded-lg h-[340px] object-cover"
      src="https://royalasiaticsociety.org/wp-content/uploads/bookcover-placeholder.jpg"
    />
    <h1 class="font-semibold text-lg truncate">Hitams</h1>
    <div class="actions flex gap-2 flex-wrap">
      <button class="bg-purple-500 rounded-lg bgHover text-white px-2">
        Pinjam
      </button>
      <button class="bg-purple-500 rounded-lg bgHover text-white px-2">
        Kembalikan
      </button>
      <nuxt-link
        :to="`/buku/1`"
        class="rounded-lg border text-purple-500 border-purple-500 px-2"
      >
        Detail
      </nuxt-link>
      <button class="grow justify-end flex">
        <Icon
          class="text-purple-500"
          name="ic:outline-bookmark-add"
          size="24"
        />
        <Icon
          class="text-purple-500"
          name="ic:round-bookmark-remove"
          size="24"
        />
      </button>
      <button
        class="basis-full text-center rounded-lg border text-purple-500 border-purple-500 px-2"
      >
        Ulas Buku
      </button>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({});
</script>

<style scoped></style>
