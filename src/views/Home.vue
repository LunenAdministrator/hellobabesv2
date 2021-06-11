<template>
	<div>
		<div>
			<HeroSlider />
		</div>
		<v-container>
			<Intro />
		</v-container>
		<v-container>
			<ProductBox />
		</v-container>
		<div>
			<Promo />
		</div>
		<v-container>
			<Testimonial />
		</v-container>
		<v-container>
			<SocialFeed />
		</v-container>
	</div>
</template>

<script>
	export default {
		name: 'Home',
		mounted(){
			document.title ='| Home | Hellobabes |'
		},
		data() {
			return {
				colors: [
					'green',
					'secondary',
					'yellow darken-4',
					'red lighten-2',
					'orange darken-1',
				],

				slides: ['First', 'Second', 'Third', 'Fourth', 'Fifth'],
			}
		},

		components: {
			ProductBox: () => import('@/components/ProductBox'),
			HeroSlider: () => import('@/components/HeroSlider'),
			Intro: () => import('@/components/Intro'),
			Promo: () => import('@/components/Promo'),
			SocialFeed: () => import('@/components/SocialFeed'),
			Testimonial: () => import('@/components/Testimonial'),
		},
	}
</script>
