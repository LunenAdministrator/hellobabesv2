<template>
	<div class="my-16 py-5">
		<h1 class="primary200--text text-center text-md-h1 text-h3  mb-5">
			Contact Us
		</h1>
		<v-container>
			<iframe
				width="100%"
				height="100%"
				class="absolute inset-0"
				frameborder="0"
				title="map"
				marginheight="0"
				marginwidth="0"
				scrolling="yes"
				src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=setia%20alam%20&t=&z=13&ie=UTF8&iwloc=&output=embed"
				style="filter: "
			></iframe>
		</v-container>
		<h1 class="primary--text text-center text-md-h1 text-h5  mb-5">
			Please Contact Us
		</h1>
		<v-row justify="space-around">
			<v-btn href="tel:+0350320618" depressed>
				<v-icon large color="green darken-2">
					mdi-phone
				</v-icon>
			</v-btn>
			<v-btn href="mailto:lunenluch.MasterDomain@gmail.com" depressed>
				<v-icon large color="blue darken-2">
					mdi-email
				</v-icon>
			</v-btn>

			<v-btn href="https://wa.link/8rpy36" target="_blank" depressed>
				<v-icon large color="teal darken-2">
					mdi-whatsapp
				</v-icon>
			</v-btn>
			<v-btn href="https://www.instagram.com/hellobabes_official/?hl=en" target="_blank" depressed>
				<v-icon large color="orange darken-2">
					mdi-instagram
				</v-icon>
			</v-btn>
		</v-row>
	</div>
</template>

<script>
	export default {
		name: 'About',
		data:() => ({
			links : [
				{phone: 'tel:+0350320618'},
				{ email: 'mailto:lunenluch.MasterDomain@gmail.com'},
				{ whatsapp: 'https://wa.link/8rpy36'},
				{ instagram: 'https://www.instagram.com/hellobabes_official/?hl=en'}
			]

		}),
		mounted() {
			document.title = '| Find Us | Hellobabes |'
		},
	}
</script>
