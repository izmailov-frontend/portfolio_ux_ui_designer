<template>
  <div class="appmainpage">
    <div class="content pt-3 box-border px-6">
      <hr class="content-hr max-w-[1360px] bg-[#D9D9D9] h-1" />
      <welcome-card class="max-w-[1130px] mb-28"></welcome-card>
      <app-skills class="skills max-w-[1130px]"></app-skills>
      <!-- Я добавляю в класс компонента класс margin-zero, если индекс итерируемого элемента равен последнему элементу -->

      <app-keyses
        v-for="(work, index) in projects"
        :key="work.id"
        class="max-w-[1130px]"
        :class="{ 'margin-zero': index === projects.length - 1 }"
        :title="work.name"
        :description="work.description"
        :date="work.date"
        :img="work.img"
        :link="work.link"
      >
      </app-keyses>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

import AppKeyses from "./AppKeyses.vue";
import AppSkills from "./AppSkills.vue";
import WelcomeCard from "./WelcomeCard.vue";

export default {
  setup() {
    const projects = ref([
      {
        id: 1,
        name: "Биржа строительства и ремонта",
        description:
          "Мобильное приложение для поиска специалистов в области строительства и ремонта",
        date: 2024,
        img: require("@/assets/img/appmobile.png"),
        link: "/other-1",
      },
      {
        id: 2,
        name: "Мобильное приложение для управление станками с ЧПУ",
        description:
          "Мобильное приложение для управления ЧПУ-контроллерами по беспроводному интерфейсу Bluetooth",
        date: 2024,
        img: require("@/assets/img/mobileapp.png"),
        link: "/mobile-cnc",
      },
      {
        id: 3,
        name: "Интернет-магазин для продажи станков с ЧПУ на Tilda",
        description:
          "Сайт для сбора и обработки заявок на покупку фрезерных станков с ЧПУ (числовым программным управлением)",
        date: 2023,
        img: require("@/assets/img/salescnc.png"),
        link: "/other",
      },
    ]);

    return {
      projects,
    };
  },

  components: {
    WelcomeCard,
    AppSkills,
    AppKeyses,
  },
};
</script>

<style scoped lang="scss">
.appmainpage {
  background: #6e6e6e;
  max-width: 1920px;

  .content {
    margin: 0 auto;

    .header {
      margin: 0 auto 37px;
    }
  }

  .margin-zero {
    margin: 0 auto 5rem;
  }

  .content-hr {
    margin: 0 auto 38px;
  }
}
</style>
