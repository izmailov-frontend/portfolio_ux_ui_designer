<template>
  <div class="appfooter bg-[#686868] mx-[-1.5rem] px-6">
    <div class="content max-w-[1130px] py-20">
      <div class="text mb-[3.73rem]">
        <h1
          class="text-[#F7FAFC] font-unbounded text-36px font-fw-500 mb-3 leading-normal"
        >
          {{ title }}
        </h1>
        <div class="flex">
          <span
            class="text-gray-300 info font-ff-bt text-fz-18 font-400 inline-block"
            >{{ discription }}</span
          >
          <p
            class="inline-block rounded-[8px] bg-#DCF0BAE5 px-3 ml-auto transform rotate-[-4deg]"
          >
            {{ citation }}
          </p>
        </div>
      </div>
      <div class="btn-block flex max-w-[100%] gap-3 mb-10">
        <app-button
          class="btn btn-contacts !rounded-[16px] w-[100%] justify-center"
          v-for="name in btnName"
          :key="name.id"
          :btnText="name.name"
        >
        </app-button>
      </div>
      <div
        class="site-information flex text-[#F7FAFC] info font-ff-bt text-fz-18 font-400"
      >
        <span>{{ anhides }}</span>
        <span class="ml-auto">{{ privacyPolicy }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from "./AppButton.vue";
import { ref } from "vue";
export default {
  setup() {
    const title = ref(
      "Свяжитесь со мной и я разработаю дизайн, который отразит ваши идеи и бизнес-цели"
    );
    const discription = ref("На связи с 10:00 до 18:00 по Мск по будням");
    const citation = ref(
      "Не откладывайте на завтра то, что можно нарисовать сегодня 🫶"
    );
    const anhides = ref("@ Anhides 2024");
    const privacyPolicy = ref("Политика конфиденциальности");
    const btnName = ref([
      { id: 1, name: "Обсудить проект" },
      { id: 2, name: "Telegram" },
      { id: 3, name: "Whatsapp" },
      { id: 4, name: "Email" },
    ]);
    return {
      title,
      discription,
      citation,
      anhides,
      privacyPolicy,
      btnName,
    };
  },
  components: { AppButton },
};
</script>

<style scoped>
.content {
  margin: 0 auto;
}
</style>
