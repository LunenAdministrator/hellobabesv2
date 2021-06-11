<template>
	<div class="my-5">
		<h1 class="primary200--text text-center text-md-h1 text-h2  mb-5">
			Best Seller's
		</h1>
		<v-row class="mb-6" justify="center" no-gutters>
			<v-col cols="12" md="auto" class="d-md-flex">
				<v-hover v-slot="{ hover }">
					<v-card
						class="mx-auto pa-2"
						color="primary200"
						prominent
						dense
						max-width="400"
						style="opacity:022;"
						flat
						outlined
						tile
					>
						<v-img
							class="white--text align-end"
							height="100%"
							src="https://i.pinimg.com/originals/4a/6e/46/4a6e46256035581957e7ddeaf7f21efb.png"
						>
							<v-fade-transition>
								<div
									v-if="hover"
									class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal text-h2 white--text"
									height="100%"
								>
									<img
										src="https://lh3.googleusercontent.com/2No_4XclP8oZIy_sH6AURy_oiZMdBFI4F8vRnFtXIMl5UPvQtk823ZSpRt8EFZxF8PXILsmioTmHs2PhRHGQVaMl4lnYhGm6ecxn2JnBvOUI72a2JJqoeVsnXf4U35e5PZ2HQm_eAw=w2400"
										alt=""
										max-height="400"
										width="400"
									/>
								</div>
							</v-fade-transition>
						</v-img>
					</v-card>
				</v-hover>

				<v-card class="pa-2" outlined tile>
					<v-card-title class="primary700--text"
						>Available For Pre Order(260)</v-card-title
					>
					<v-card-actions
					>
						<div class="d-flex">
							<div class="justify-start">
								<h1>Myr 79.00</h1>
							</div>
							<div class="justify-end">
								<div
									class="ecsp ecsp-SingleProduct-v2 ecsp-Product ec-Product-355318206"
									itemtype="http://schema.org/Product"
									data-single-product-id="355318206"
								>
									<div
										class="ecsp-title"
										itemprop="name"
										style="display:none;"
										content="Hellobabes hair vitamin"
									></div>
									<div customprop="addtobag"></div>
								</div>

							</div>
						</div>
					</v-card-actions>
					<v-card-subtitle
						><h2 class="primary300--text">
							Hellobabes Hair Vitamin
						</h2>
					</v-card-subtitle>

					<v-card-text class="black--text">
						<p>
							Inspired by Korean's formulation, Hellobabes Hair
							Vitamin is a hair supplements revolution made in
							Malaysia. This hair vitamin provides
							<span class="font-weight-bold"
								>better & healthy hair growth</span
							>
							besides
							<span class="font-weight-bold"
								>enhancing hair scalps
							</span>
							be redefine & moist. With the taste of candy
							berries, Hellobabes Hair Vitamin consists of 14
							sachets, consumable anytime & anywhere. Hair
							vitamins supplements that have botanical beverage
							Ingredients: <br />
							<span class="font-weight-bold">Mix berries</span>,
							<span class="font-weight-bold">Biotin</span>,<span
								class="font-weight-bold"
							>
								Amla extract</span
							>,
							<span class="font-weight-bold">Acid folic</span
							>,<span class="font-weight-bold"> Zinc</span>,
							Vitamin
							<span class="font-weight-bold">A</span>
							,Vitamin<span class="font-weight-bold"> B</span>,
							Vitamin<span class="font-weight-bold"> G</span>
							,Vitamin <span class="font-weight-bold">D</span>,
							Vitamin<span class="font-weight-bold"> C</span>,
							Vitamin <span class="font-weight-bold">E</span>
						</p>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</div>
</template>

<script>
	export default {
		name: 'ProductBox',
	}
</script>

<style lang="scss" scoped>
	v-card--reveal {
		align-items: center;
		bottom: 0;
		justify-content: center;
		opacity: 0.5;
		position: absolute;
		width: 100%;
	}
</style>
