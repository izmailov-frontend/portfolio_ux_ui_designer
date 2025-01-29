<script>
import { ref } from "vue";
import { appMobileStore } from "../assets/store/index.js";
import frame from "../assets/img/img-analize/Frame.svg";
import longframe from "../assets/img/img-analize/longframe.svg";
import outlineSolid from "../assets/img/img-analize/outlinesolid.svg";
import designoutline from "../assets/img/img-analize/outlinedesign.svg";
import resultframe from "../assets/img/img-analize/resultframe.svg";
import backIcon from "../assets/img/img-analize/back-icon.svg";
import AppKeyses from "./AppKeyses.vue";
import lightBox from "fslightbox-vue/v3";

export default {
  components: { AppKeyses, lightBox },

  setup() {
    const store = appMobileStore();

    const titles = ref({
      viewProjectTitle: "Обзор проекта",
      target: "Цель:",
      task: "Задачи:",
      workProcess: "Процесс работы",
      usersAnalysisTitle: "Пользовательский анализ",
      competitiveAnalysisTitle: "Конкурентный анализ",
      cjmTitle: "CJM",
      userFlow: "UserFlow",
      designTitle: "Дизайн",
      resultTitle: "Результаты",
      resultText: "В результате я сделала:",
      otherMyProjectTitle: "Другие мои проекты",
    });

    const toggler = ref({
      usersAnalysisTitle: false,
      competitiveAnalysisTitle: false,
      cjm: false,
      userFlow: false,
      designTitle: false,
      resultTitle: false,
      resultText: false,
      otherMyProjectTitle: false,
    });

    const toggleLightbox = (image) => {
      toggler.value[image] = !toggler.value[image];
    };

    const otherProject = ref({
      name: "Интернет-магазин для продажи станков с ЧПУ на Tilda",
      description:
        "Сайт для сбора и обработки заявок на покупку фрезерных станков с ЧПУ (числовым программным управлением)",
      date: 2023,
      img: require("@/assets/img/salescnc.png"),
    });
    return {
      store,
      titles,
      frame,
      longframe,
      outlineSolid,
      otherProject,
      designoutline,
      resultframe,
      backIcon,
      toggler,
      toggleLightbox,
    };
  },
};
</script>

<template>
  <div class="appmobilecnc max-w-[1130px] px-[20px]">
    <div>
      <div class="flex gap-2 pt-5">
        <img :src="backIcon" alt="" />
        <span class="text-[#CBD5E0] font-[Mulish] text-18px"
          >Ко всем проектам</span
        >
      </div>
    </div>
    <div class="content pt-9">
      <h1 class="h1 mb-8">{{ store.title }}</h1>
      <div class="flex gap-[106px] mb-9">
        <div class="flex-[0_1_50%]">
          <h2 class="subtitle">{{ titles.viewProjectTitle }}</h2>
          <div class="mb-4">
            <div class="relative">
              <h3 class="font-unbounded text-[#EDF2F7] text-[24px] mb-2">
                {{ titles.target }}
                <img
                  class="absolute top-[-10px] left-[-20px]"
                  :src="frame"
                  alt=""
                />
              </h3>
            </div>

            <p class="text-[#CBD5E0] font-[Mulish] text-18px font-[400]">
              {{ store.sectionViewProject.target.text }}
            </p>
          </div>
          <div>
            <div class="relative">
              <h3 class="font-unbounded text-[#EDF2F7] text-[24px] mb-2">
                {{ titles.task }}
              </h3>
              <img
                class="absolute top-[-10px] left-[-20px]"
                :src="frame"
                alt=""
              />
            </div>
            <div class="flex gap-2">
              <ul>
                <li
                  v-for="task in store.sectionViewProject.tasks.list"
                  :key="task.id"
                  class="text-[#CBD5E0] font-[Mulish] text-18px font-[400]"
                >
                  {{ task.id + "." }}
                </li>
              </ul>
              <ul>
                <li
                  v-for="task in store.sectionViewProject.tasks.list"
                  :key="task.id"
                  class="text-[#CBD5E0] font-[Mulish] text-18px font-[400]"
                >
                  {{ task.text }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <img
            class="w-[100%]"
            :src="store.sectionViewProject.img"
            alt="Фото проекта"
          />
        </div>
      </div>
      <div class="mb-5">
        <h2 class="mb-5">
          {{ titles.workProcess }}
        </h2>
        <div class="mb-block">
          <div class="relative">
            <h3 class="font-unbounded text-[#EDF2F7] text-[24px] mb-2">
              {{ titles.usersAnalysisTitle }}
              <img
                class="absolute top-[-10px] left-[17.4rem]"
                :src="frame"
                alt=""
              />
            </h3>
          </div>

          <ul class="mb-5">
            <li
              class="text-[#CBD5E0] font-[Mulish] text-18px font-[400]"
              v-for="item in store.workProcess.list"
              :key="item.id"
            >
              {{ item.text }}
            </li>
          </ul>

          <div class="flex gap-5">
            <div
              v-for="item in store.workProcess.image"
              :key="'work-' + item.id"
            >
              <button @click="toggleLightbox('work-' + item.id)">
                <img :src="item.src" alt="" />
              </button>
              <light-box
                :toggler="toggler['work-' + item.id]"
                :sources="[item.src]"
              ></light-box>
            </div>
          </div>
        </div>
        <div class="relative mb-block">
          <h3 class="font-unbounded text-[#EDF2F7] text-[24px] mb-5">
            {{ titles.competitiveAnalysisTitle }}
          </h3>

          <img
            class="absolute top-[-10px] left-[-20px]"
            :src="longframe"
            alt=""
          />
          <div class="flex gap-5">
            <div
              v-for="item in store.competitiveAnalize.image"
              :key="'analise-' + item.id"
            >
              <button @click="toggleLightbox('analise-' + item.id)">
                <img :src="item.src" alt="" />
              </button>
              <light-box
                :toggler="toggler['analise-' + item.id]"
                :sources="[item.src]"
              ></light-box>
            </div>
          </div>
        </div>
        <div class="flex gap-5 mb-block">
          <div class="flex-[0_1_50%]">
            <h3 class="font-unbounded text-[#EDF2F7] text-[24px] mb-2">
              {{ titles.cjmTitle }}
            </h3>
            <div>
              <div class="mb-10">
                <button @click="toggleLightbox('cjm')">
                  <img
                    class="rounded-[20px]"
                    :src="store.sectionCJM.image"
                    alt=""
                  />
                </button>
                <light-box
                  :toggler="toggler.cjm"
                  :sources="[store.sectionCJM.image]"
                />
              </div>
              <div class="relative">
                <p
                  class="text-[#CBD5E0] font-[Mulish] text-18px font-[400] relative"
                >
                  {{ store.sectionCJM.text }}
                </p>
                <img
                  class="absolute top-[52px] left-[3.6rem]"
                  :src="outlineSolid"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="flex-[0_1_50%]">
            <div class="relative">
              <h3 class="font-unbounded text-[#EDF2F7] text-[24px] mb-2">
                {{ titles.userFlow }}
              </h3>
              <img
                class="absolute top-[-10px] left-[-0.4rem]"
                :src="frame"
                alt=""
              />
            </div>
            <div>
              <button @click="toggleLightbox('userFlowImage')">
                <img :src="store.sectionUserFlow.image" alt="" />
              </button>
              <light-box
                :toggler="toggler.userFlowImage"
                :sources="[store.sectionUserFlow.image]"
              />
            </div>
          </div>
        </div>
        <div class="design mb-20">
          <div class="relative">
            <h2 class="mb-5">
              {{ titles.designTitle }}
            </h2>
            <img
              class="absolute top-[-10px] left-[-0.4rem]"
              :src="designoutline"
              alt=""
            />
          </div>
          <div>
            <button @click="toggleLightbox('sectionDesign')">
              <img :src="store.sectionDesign.image" alt="" />
            </button>
            <light-box
              :toggler="toggler.sectionDesign"
              :sources="[store.sectionDesign.image]"
            />
          </div>
        </div>
        <div class="result mb-20">
          <h2 class="mb-5">
            {{ titles.resultTitle }}
          </h2>
          <div class="flex gap-5">
            <div class="flex-[0_1_50%]">
              <img :src="store.sectionResult.image" alt="" />
            </div>
            <div class="text flex-[0_1_50%]">
              <div class="relative">
                <h3 class="font-unbounded text-[#EDF2F7] text-[24px] mb-2">
                  {{ titles.resultText }}
                </h3>
                <img
                  class="absolute top-[-11px] left-[23px]"
                  :src="resultframe"
                  alt=""
                />
              </div>

              <div class="flex gap-2">
                <ul>
                  <li
                    class="text-[#CBD5E0] font-[Mulish] text-18px font-[400] flex gap-2"
                    v-for="item in store.sectionResult.list"
                    :key="item.id"
                  >
                    <span>{{ item.id + "." }}</span>

                    {{ item.text }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="other-project mb-[5.3rem]">
          <h2 class="mb-5">{{ titles.otherMyProjectTitle }}</h2>
          <app-keyses
            :title="otherProject.name"
            :description="otherProject.description"
            :date="otherProject.date"
            :img="otherProject.img"
          >
          </app-keyses>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.appmobilecnc {
  max-width: 1920px;
  background: #6e6e6e;

  .header {
    margin: 0 auto;
  }

  .center-margin-title {
    margin: 0 auto 2rem;
  }

  .center-margin {
    margin: 0 auto;
  }
  .mb-block {
    margin-bottom: 40px;
  }
}
</style>
