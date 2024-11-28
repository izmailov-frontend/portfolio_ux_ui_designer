<template>
  <div class="appkeyses">
    <div class="content max-w-[100%] flex p-8 gap-5">
      <!--  -->
      <div class="col flex-[0_1_50%] flex flex-col">
        <div class="text flex flex-col gap-3 mb-6">
          <!-- Заголовок  -->
          <h2
            class="text-gray-100 font-unbounded text-[28px] font-normal leading-normal"
          >
            {{ title }}
          </h2>
          <p class="text-gray-300 font-ff-bt text-18px">{{ description }}</p>
        </div>
        <router-link :to="link">
          <div class="btn-resume inline-block inline-flex">
            <app-button
              class="btn btn-outline-secondary"
              :btnText="nameBtn"
            ></app-button>
          </div>
        </router-link>

        <div
          class="data-publick mt-auto text-gray-300 font-unbounded font-normal leading-11 text-[22px]"
        >
          {{ date }}
        </div>
      </div>
      <div class="col-img flex-[0_1_50%]">
        <img :src="img" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from "./AppButton.vue";
import { ref } from "vue";

export default {
  props: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Number, required: true },
    img: { type: String, required: true },
    link: { type: String, required: true },
  },
  setup() {
    const nameBtn = ref("Смотреть проект");

    return {
      nameBtn,
    };
  },
  components: {
    AppButton,
  },
};
</script>

<style scoped lang="scss">
.appkeyses {
  margin: 0 auto;
  .content {
    border-radius: 40px;
    border: 1px solid #c9c6c6;
    background: rgba(248, 246, 246, 0.2);
  }
}

.margin-zero {
  margin: 0 auto 0;
}
</style>

<!-- Доделать отступы -->
