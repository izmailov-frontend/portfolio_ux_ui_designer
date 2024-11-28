<template>
	<div class="welcomecard flex items-center gap-32 ">
		<div class="text">
			<div 
			class="text-block flex flex-col justify gap-3 mb-10 relative">
				<h1 
				class="h1">
				Привет, я -<br> Хитрова Анна
			</h1>
			<div 
			class="art absolute left-[60%] top-[16%]">
				<img 
				:src="artText" 
				alt="">
			</div>
			<span class="subtitle">
				<ul class="flex gap-3">
					<li 
					class="text-[#cbd5e0] text-lg font-normal font-['Mulish'] " 
					v-for="(list,index) in listDev" 
					:key="list.id">
						<span class="text-hover" v-if="index > 0 && index < list.name.length -1">•</span>
						{{ list.name }}
					</li>
				</ul>
			</span>
			</div>
			
			<div class="button flex gap-x-5">
			<app-button
			class="btn btn-hover"
			:btnText="contactBtn"
			></app-button>
			<app-button
			class="btn btn-outline-secondary"
			:btnText="resumeText"
			></app-button>
		</div>
		</div>
		<!-- Правая колонка фото и описание  -->
		<div class="img w-72 relative">
			<img  class="w-72" :src="mainImg" alt="">
			<div style="white-space: pre-line" class="img-text bottom-6 text-slate-200 font-['Mulish'] w-80 absolute left-[60%]"> 
				{{description}}
		</div>
		</div>
		
	</div>
</template>


<script>
import { ref } from 'vue';
import AppButton from './AppButton.vue';


export default {
	setup(){

		const contactBtn = ref('Связаться со мной')
		const resumeText = ref('Резюме')
		const description = ref(`Решаю задачи вашего бизнеса, создавая функциональные интерфейсы, которые делают взаимодействие\nc продуктом простым и удобным`)
		const artText = ref(require('@/assets/img/outlining.png'))

		const listDev = ref([
			{name:'UX/UI', id:1},
			{name:'Веб-дизайн',id:2},
			{name:'Мобильные приложения',id:3}
		])

		const mainImg = ref(require('@/assets/img/Anna.png'))
		const outlining = ref(require('@/assets/img/outlining.png'))

		return {
			listDev,
			contactBtn,
			resumeText,
			mainImg,
			outlining,
			description,
			artText
		}
	},
		components:{AppButton}
	}
</script>


<style scoped>
 .welcomecard{
	margin: 0 auto 5rem;

 }
</style>