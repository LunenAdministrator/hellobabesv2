<template>
	<v-app>
		<div>
			<Header />
		</div>
		<div>
			<Body />
		</div>
		<div>
			<Footer />
		</div>
	</v-app>
</template>

<script>
	export default {
		name: 'App',

		components: {
			Header: () => import('@/components/base/Header'),
			Body: () => import('@/components/base/Body'),
			Footer: () => import('@/components/base/Footer'),
		},
	}
</script>
