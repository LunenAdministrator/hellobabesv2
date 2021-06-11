<template>
	<div>
		<v-footer color="white lighten-1" padless>

			<v-row justify="center"  no-gutters>
				<Privacy class="my-2"/>

				<v-btn
					v-for="link in links"
					:key="link"
					color="primary500"
					text
					rounded
					class="my-2 font-weight-regular text-capitalized caption"
				>
					{{ link }}
				</v-btn>
				<v-col
					class="primary lighten-2 py-4 text-center white--text"
					cols="12"
				>
					{{ new Date().getFullYear() }}—<strong>@Hellobabestore</strong>
				</v-col>
			</v-row>
		</v-footer>
	</div>
</template>

<script>
import Privacy from '../Privacy.vue'
	export default {
		name: 'Footer',
        data:() => ({
            links: [
                'Terms & Condition',
                'Privacy Policy',
                'Shipping & Payment Info',
                'Return Policy',
                'About Us',
            ]
        }),
		components: {
			Privacy:() => import ('@/components/Privacy')
		}
	}
</script>

<style lang="sass" scoped></style>
