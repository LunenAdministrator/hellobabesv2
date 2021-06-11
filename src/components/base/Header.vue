<template>
	<div>
		<v-system-bar
			id="topbar"
			class="d-flex justify-center align-center"
			height="20"
			color="primary400"
			app
		>
			<p class="white--text text-center font-weight-medium mt-3">
				PRE ORDER 7th UNTIL 11th JUNE
			</p>
		</v-system-bar>

		<v-app-bar color="primary100" flat app>
			<v-container
				class="d-flex mx-auto align-center
			"
			>
				<v-app-bar-nav-icon
					x-large
					color="black"
					@click="drawer = !drawer"
				>
				</v-app-bar-nav-icon>

				<v-spacer></v-spacer>
				<v-btn icon to="/" depressed color="primary200">
					<v-img
						lazy-src="https://i.pinimg.com/originals/36/68/29/366829140ec2b01747e15deea330fadf.png"
						max-height="100"
						max-width="80"
						src="https://i.pinimg.com/originals/36/68/29/366829140ec2b01747e15deea330fadf.png"
					>
					</v-img>
				</v-btn>

				<v-spacer></v-spacer>
				<v-icon class="ec-cart-widget">
					mdi-dots-vertical
				</v-icon>
			</v-container>
		</v-app-bar>

		<v-navigation-drawer
			v-model="drawer"
			color="primary100"
			fixed
			temporary
		>
			<v-list-item>
				<v-list-item-content>
					<v-list-item-title class="text-h6">
						<v-img
							lazy-src="https://i.pinimg.com/originals/36/68/29/366829140ec2b01747e15deea330fadf.png"
							max-height="100"
							max-width="80"
							src="https://i.pinimg.com/originals/36/68/29/366829140ec2b01747e15deea330fadf.png"
						>
						</v-img>
					</v-list-item-title>
				</v-list-item-content>
			</v-list-item>

			<v-divider></v-divider>

			<v-list dense nav>
				<v-list-item v-for="item in items" :key="item.title" link>
					<v-btn
						:to="item.urls"
						class="d-flex primary--text"
						depressed
						color="primary100"
					>
						<v-list-item-icon>
							<v-icon>{{ item.icon }}</v-icon>
						</v-list-item-icon>

						<v-list-item-content>
							<v-list-item-title>{{
								item.title
							}}</v-list-item-title>
						</v-list-item-content>
					</v-btn>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
	</div>
</template>

<script>
	export default {
		name: 'Header',
		data: () => ({
			drawer: null,
			items: [
				{ title: 'Home', icon: 'mdi-home', urls: '/' },
				{
					title: 'Promotions',
					icon: 'mdi-sale',
					urls: '/dealspromotion',
				},
				{
					title: 'Product',
					icon: 'mdi-information-outline',
					urls: '/information',
				},
				{
					title: 'Whats new',
					icon: 'mdi-newspaper',
					urls: '/whatsnew',
				},
				{
					title: 'Find us',
					icon: 'mdi-map-marker-radius',
					urls: '/about',
				},
				{ title: 'FAQ', icon: 'mdi-help-box', urls: '/faq' },
			],
			right: null,
		}),
	}
</script>

<style lang="sass" scoped></style>
