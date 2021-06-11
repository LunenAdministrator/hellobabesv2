<template>
	<div class="my-16">
		<v-container>
			<h1 class="primary200--text text-center text-md-h1 text-h2  mb-5">
				Pre Order Details
			</h1>

			<v-expansion-panels>
				<v-expansion-panel>
					<v-expansion-panel-header>
						Product Delivery
						<template v-slot:actions>
							<v-icon color="primary">
								mdi-truck
							</v-icon>
						</template>
					</v-expansion-panel-header>
					<v-expansion-panel-content>
						All purchase is a preorder & will be delivered on 10th
						June 2021. Free gifts will be posted out the same day as
						product postage.<br />
						* Depends On CMCO & Availability of the Courier Company
						*
					</v-expansion-panel-content>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-header disable-icon-rotate>
						All pre-order must be fully paid
						<template v-slot:actions>
							<v-icon color="primary">
								mdi-cash
							</v-icon>
						</template>
					</v-expansion-panel-header>
					<v-expansion-panel-content>
						No bookings or advanced payment.
					</v-expansion-panel-content>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-header disable-icon-rotate>
						Limited to 5,000 Boxes only
						<template v-slot:actions>
							<v-icon color="primary">
								mdi-clipboard-text
							</v-icon>
						</template>
					</v-expansion-panel-header>
					<v-expansion-panel-content>
						Due to CMCO and COVID-19, our stocks are very limited.
					</v-expansion-panel-content>
				</v-expansion-panel>
				<v-expansion-panel>
					<v-expansion-panel-header disable-icon-rotate>
						Durations for Pre Order
						<template v-slot:actions>
							<v-icon color="primary">
								mdi-calendar-clock
							</v-icon>
						</template>
					</v-expansion-panel-header>
					<v-expansion-panel-content>
						This offer & Pre Order is eligible until 11th June 2021.
					</v-expansion-panel-content>
				</v-expansion-panel>
			</v-expansion-panels>
		</v-container>
	</div>
</template>

<script>
	export default {
		name: 'WhatsNew',
		mounted() {
			document.title = '| Latest News | Hellobabes |'
		},
	}
</script>
