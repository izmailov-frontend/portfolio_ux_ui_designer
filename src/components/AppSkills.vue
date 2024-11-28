<template>
	<div class="appskills">
		<div class="title relative mb-6">
			<h2>{{ title }}</h2>

		</div>
		<div class="list-skills mb-20 ">
			<ul
			class="flex gap-[12px] flex-wrap "
			>
				<li
				v-for="(item, index) in listSkills" :key="index"
				class="bg-chips px-3 rounded-lg text-lg">
					{{ item.name }}
				</li>
			</ul>
		</div>
		<div class="keys-block mb-5 relative">
			<h2 class="font-unbounded">Кейсы</h2>
			<div class="img-otline absolute w-[263px] left-[-3rem] bottom-[-0.7rem]">
				<img :src="imgOutLine" alt="">
			</div>
		</div>
	</div>
</template>


<script>
import {ref} from 'vue'
	export default {
		setup(){
			const title = ref('Навыки')
			const img = ref(require('@/assets/img/outlineskills.png'))
			const imgOutLine = ref(require('@/assets/img/outlinekeys.png'))
			const listSkills = ([
				{name: 'Figma'},
				{name: 'Web-дизайн'},
				{name: 'Создание дизайн-макетов'},
				{name: 'UI kit'},
				{name: 'Прототипирование'},
				{name: 'UX/UI дизайн'},
				{name: 'CJM'},
				{name: 'HTML'},
				{name: 'Адаптивный дизайн'},
				{name: 'CSS'},
				{name: 'Работа с дизайн системой'},
				{name: 'Дизайн-ревью'},
				{name: 'Гайдлайн iOS'},
				{name: 'Гайдлайн Android'},
			])

			return {
				title,
				img,
				listSkills,
				imgOutLine
			}
		}

	}
</script>

<style scoped>
.appskills{
	margin:0 auto;
}

</style>