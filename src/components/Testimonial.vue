<template>
	<div class="my-5">
		<h1 class="primary200--text text-center text-md-h1 text-h2  mb-5">
			Testimonials
		</h1>
		<v-card max-width="400" class="mx-auto">
			<v-system-bar lights-out></v-system-bar>
			<v-carousel
				:continuous="true"
				cycle
				:show-arrows="false"
				hide-delimiter-background
				delimiter-icon="mdi-minus"
				height="300"
			>
				<v-carousel-item
					v-for="(item, i) in items"
					:key="i"
					:src="item.src"
				>
				</v-carousel-item>
			</v-carousel>

		</v-card>
	</div>
</template>

<script>
	export default {
		name: 'Testimonial',
		data() {
			return {
				colors: [
					'https://lh3.googleusercontent.com/52JTUwEtyjiYvaASc3-fG5DcNXcJGd_LaVR_vMXUECkGvyAGMgNpIzeMvZvTGej5iHBZcqUfifZ2KIJONulhyo_SozHR9ZyGq5nYWQBz4GorQz5JhevOIPYdB6hQWI-Gv_3-Dctsmw=w2400',
					'secondary',
					'yellow darken-4',
					'red lighten-2',
					'orange darken-1',
				],

				items: [
					{
						src:
							'https://lh3.googleusercontent.com/HMKmsKvVjd8T8Evs9VFlKAVaRbN7unZYXO8JUQ9QLqLD2hMtr5OMHKkRV_WJbPph0xOvSKtczfn4JpWO7KDCAy8mPcOgEOw93tUOxIndRZI5vlPJrWl_pRBSJ4SZwtUvjwz1lzIrJg=w2400',
					},
					{
						src:
							'https://lh3.googleusercontent.com/lVk2ylFceunZPXBQPt7TVfpbnDRDRNDM9OrB-EnJ1srSGFSSRJF5KdX6a-g4eMQHX7tRKJPRKKyneuhUzE-NLFfBD-oBGVJK_KIMATQmnUDFLhq94-Ke4GcpZSQPNhROhp_z6EbXZg=w2400',
					},
					{
						src:
							'https://lh3.googleusercontent.com/VXkD7B0Gp2eT2sEaLVZG48nwthQ6dlxtqVFBIKOCJHf-dn2ceQNCP5n8TI32qFS41-_6Ua1q7wkEjgbLaaCjNJw42qCLMadHEU8DlS-d5SWRK_z6ZjUsXtbEqnrxOqJsnHecoeioCw=w2400',
					},
				],
			}
		},
	}
</script>
