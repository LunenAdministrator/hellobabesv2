<template>
	<div class="my-16 py-5">
		<v-container>
			<h1 class="primary200--text text-center text-md-h1 text-h3  mb-5">
				FAQ
			</h1>
			<v-card>
				<v-toolbar flat color="primary" dark>
					<v-toolbar-title
						>Everything you need to know</v-toolbar-title
					>
				</v-toolbar>
				<v-tabs vertical>
					<v-tab>
						<v-icon left>
							di-heart-o
						</v-icon>
						What
					</v-tab>
					<v-tab>
						<v-icon left>
							mdi-information-outline
						</v-icon>
						How
					</v-tab>
					<v-tab>
						<v-icon left>
							mdi-account-box-outline
						</v-icon>
						Who
					</v-tab>
					<v-tab>
						<v-icon left>
							mdi-checkbox-marked-circle-outline
						</v-icon>
						Do
					</v-tab>
					<v-tab>
						<v-icon left>
							mdi-block-helper
						</v-icon>
						Dont's
					</v-tab>

					<v-tab-item>
						<v-card flat>
							<v-card-text>
								<h2 class="mb-5 primary300--text text-h6">
									Hellobabes Hair Vitamin
								</h2>
								<p class="text-body-2 mb-5">
									Hair Supplement
								</p>
								<p class="text-body-2 mb-5">
									Is a Powdered Supplement
								</p>
								<p class="text-body-2 mb-5">
									Supplement Improve, Cure & Protect Your Hair
									Problem
								</p>
							</v-card-text>
						</v-card>
					</v-tab-item>
					<v-tab-item>
						<v-card flat>
							<v-card-text>
								<h2 class="mb-5 primary300--text text-h6">
									Instruction for consuming
								</h2>
								<p class="text-body-2 mb-5">
									1 Sachet in the Morning or Night (
									Preferably 30 Minute before Breakfast/Bed).
								</p>
								<p class="text-body-2 mb-5">
									Can Consume Directly or Mixes With Water
								</p>
								<p class="text-body-2 mb-5">
									One Day One Sachet Only for 2Week/14Days.
								</p>
							</v-card-text>
						</v-card>
					</v-tab-item>

					<v-tab-item>
						<v-card flat>
							<v-card-text>
								<h2 class="mb-5 primary300--text text-h6">
									Who can consume Hellobabes
								</h2>
								<p class="text-body-2 mb-5">
									Product Suitable for Male & Female
								</p>

								<p class="text-body-2 mb-5">
									Age of 17 & Above
								</p>

								<p class="text-body-2 mb-5">
									4 days After Menstrual Cycle
								</p>
								<p class="text-body-2 mb-5">
									After 3-6 Month Maternal Abstinence
								</p>
							</v-card-text>
						</v-card>
					</v-tab-item>
					<v-tab-item>
						<v-card flat>
							<v-card-text>
								<h2 class="mb-5 primary300--text text-h6">
									Tips for Better Results
								</h2>

								<p class="text-body-2 mb-5">
									Encouraged Detox on the Body Before Taking
									Hellobabe
								</p>

								<p class="text-body-2 mb-5">
									Drink 8 Glasses Water a Day
								</p>
							</v-card-text>
						</v-card>
					</v-tab-item>
					<v-tab-item>
						<v-card flat>
							<v-card-text>
								<h2 class="mb-5 primary300--text text-h6">
									Things to Avoid
								</h2>
								<p class="text-body-2 mb-5">
									Avoid Taking Pregnancy and Menstruation(
									first 4 days )
								</p>

								<p class="text-body-2 mb-5">
									Avoid Caffeine or take 3-4 hours Before
									taking Hellobabes
								</p>

								<p class="text-body-2 mb-5">
									Avoid Intake if Surrering from Chronic
									Diseases & Allergies to Avoid any
									Complication
								</p>
							</v-card-text>
						</v-card>
					</v-tab-item>
				</v-tabs>
			</v-card>
		</v-container>
	</div>
</template>

<script>
	export default {
		name: 'FAQ',
		mounted() {
			document.title = '| FAQ | Hellobabes |'
		},
	}
</script>
