<template>
  <div class="appheaderlink">
    <ul class="flex gap-x-3">
      <li
        class="text-linkNavDef font-ff-bt px-1"
        v-for="link in menuLinks"
        :key="link.id"
      >
        <router-link v-if="link.path" :to="link.path">
          {{ link.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const menuLinks = ref([
      { name: "Портфолио", isActive: true, id: 1, path: "/portfolio" },
      { name: "Обо мне", isActive: false, id: 2, path: "/test" },
      { name: "Менторство", isActive: false, id: 3, path: "/mentor" },
      { name: "Блог", isActive: false, id: 4, path: "/blog" },
    ]);

    return {
      menuLinks,
    };
  },
};
</script>

<style scoped></style>
