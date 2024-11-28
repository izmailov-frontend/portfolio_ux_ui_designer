<template>
	<div class="appheaderlink">
		<ul class="flex gap-x-3">
			<li class="text-linkNavDef font-ff-bt px-1" v-for="link in menuLinks"	:key="link.id">
				<span>{{ link.name }}</span>
				</li>
		</ul>
	</div>
</template>


<script>
import {ref} from 'vue'

	export default {
		setup(){
	const menuLinks = ref([
		{name: 'Портфолио', isActive:true, id:1},
		{name: 'Обо мне', isActive:false, id:2},
		{name: 'Менторство', isActive:false, id:3},
		{name: 'Блог', isActive:false, id:4}
		])


		return {
			menuLinks
		}
	
}
	}
</script>


<style scoped>
 
</style>