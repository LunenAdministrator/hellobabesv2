<template>
	<v-app id="hero">
		<v-carousel :show-arrows="false" height="100%" cycle>
			<v-carousel-item
				v-for="(item, i) in items"
				:key="i"
				:src="item.src"
				:aspect-ratio="16 / 9"
				min-width="100%"
				min-height="100%"
			>
			</v-carousel-item>
		</v-carousel>
	</v-app>
</template>

<script>
	export default {
		name: 'HeroSlider',
		data() {
			return {
				items: [
					{
						src:
							'https://lh3.googleusercontent.com/CJj78RazFNZMFauIQe3fToe-nq1m4HiNLsx6xeCeImOBQcJqzfVuZ5FRtTIWx8l6MPtj8PE_m7UV5lZDKF3Dhjg3ozFl3GSY9sgXmX6xZ2qYPYyI-VzVxLORLkna0LARCYoHg92yqA=w2400',
					},
					{
						src:
							'https://lh3.googleusercontent.com/4n0MCK50hrO9fU3W3uO2mG_kgufLstATZ5bVeRoRTsJaSMmWblz17-WGcAwoFpvqW1-PknSF9vCmTLVtPEgjXqhGIQsRJD09ak9vCPoHOAU_X4XoMcMT4As_Tfhx0ECtZmTGMQVYWw=w2400',
					},
				],
			}
		},
	}
</script>

<style lang="sass" scoped></style>
