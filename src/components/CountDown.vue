<template>
	<v-container>
		<v-sheet
			color="warning"
			elevation="2"
			height="97"
			outlined
			rounded
			shaped
			width="103"
		>
    {{ displayDays }}
    </v-sheet>
	</v-container>
</template>

<script>
	export default {
		name: 'CountDown',
		data() {
			return {
				items: [
					{
						displayDays: 0,
					},
					{
						displayHours: 0,
					},
					{
						displayMinutes: 0,
					},
					{
						displaySeconds: 0,
					},
				],
			}
		},
	}
</script>
