<template>
	<div class="appbutton">
		{{ btnText }}
	</div>
</template>


<script>
	export default {
		props: {
			btnText:{
				type: String,
				required: true
			}
				
			},
		setup(props){
			console.log(props)
		}
	}
</script>


<style scoped>
 
</style>