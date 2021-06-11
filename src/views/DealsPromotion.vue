<template>
	<div class="my-16 py-5">
		<h1 class="primary200--text text-center text-md-h1 text-h3  mb-5">
			Promotions
		</h1>

		<v-container fluid>
			<v-row dense>
				<v-col
					v-for="card in cards"
					:key="card.title"
					:cols="card.flex"
				>
					<v-card color="white" flat>
						<v-img :src="card.src" height="100%"> </v-img>
						<v-card-title
							v-text="card.title"
							class="black--text align-end"
						></v-card-title>
						<v-card-text
							v-text="card.content"
							class="black--text align-end"
						>
						</v-card-text>
						<h5 class="primary300--text text-center">
							{{ card.date }}
						</h5>
						<v-card-actions>
							<v-spacer></v-spacer>

							<v-spacer></v-spacer>
							<v-btn v-if="card.buy" text color="primary700">
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
	export default {
		name: 'DealsPromotion',
		mounted() {
			document.title = '| Promotion | Hellobabes |'
		},
		data: () => ({
			cards: [
				{
					title: 'Hello Babes Buy & Win MCO 3.0',
					content:
						'Purchase one box of Hello Babes Hair Vitamin from our website and get 1 Hair Scrunchie and 1 Hello Babes Green Envelopes. Purchase 2 Boxes or more and get 1 Hello Babes Limited Edition Paperbag, 1 Hair Scrunchie, and 1 Hello Babes Green Envelopes with "Duit Raya" worth up to RM200!. Wait no more!',
					date: 'Contest period is from 5th till 11th June 2021.',
					src:
						'https://lh3.googleusercontent.com/xny1drX4gLoKaKrhcWfybYjdDYKcVRGSJfoNO9evGb_plBrwZgzZSogdYx3j1pABsfhmMj7YyoFbc6NHK6wjqk1zDO3hv6A_wVVooUv5ljuNa7FP5KUcVoaiqDHYmNz3QMNe1dnhLg=w2400',
					flex: 12,
					buy: true,
				},
				{
					title: 'Paper Bag',
					src:
						'https://lh3.googleusercontent.com/_r5T4CCaZ2BSv75cdtCM8HUHMexZZ_ERRJuhRl5HmsQx5O1rmwEOimQo85sYpD-kLps5sENO_8aSrmIWcoJ-jHrd8DygP9dsRYE75wabeqRqyqojAalGGYdXFpgVOPsauVe0DlR3Ug=w2400',
					flex: 6,
					buy: false,
				},
				{
					title: 'Sampul Raya',
					src:
						'https://lh3.googleusercontent.com/QdYahuCwvVj4TM5IT7BwPUpkE3PGS7yI7SMzO1mLYfIISbJcpI2H0JYkO4AReF-stIWV7poQ3n7QYNTs1wYWPGZ6J78y0NTeJ0TaFC_s3hXRW9ShW3bQryAhwr_gvx60BaknIs8nDQ=w2400',
					flex: 6,
					buy: false,
				},
			],
		}),
	}
</script>
