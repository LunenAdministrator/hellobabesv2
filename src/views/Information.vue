<template>
	<div class="my-16">
		<v-container>
			<h1 class="primary200--text text-center text-md-h1 text-h3  mb-5">
				Main Ingredients
			</h1>
			<v-timeline :dense="$vuetify.breakpoint.smAndDown">
				<v-timeline-item color="primary lighten-2" fill-dot right>
					<v-card>
						<v-card-title class="primary lighten-2">
							<v-icon dark size="42" class="mr-4">
								mdi-shield-outline
							</v-icon>
							<h2 class="text-h4 white--text font-weight-light">
								Mix berries
							</h2>
						</v-card-title>
						<v-container>
							<v-row>
								<v-img
									src="https://lh3.googleusercontent.com/MZk-KIsczyh4iUR_HQ2gIoQc4uOOPHolBcMOAydcHKpx_11adIvMh5D16C2PVTrNyW7GfVyjFWOvEd2FSKiYMPMDHpMAHDzEqRESrAbWB7extETWDTfDcgHQnMXoTKDr6YJ7fnV6ug=w2400"
									height="100%"
								>
								</v-img>
								<v-col cols="12" md="10">
									Berries are loaded with beneficial compounds
									and vitamins that may promote hair growth.
									This includes vitamin C, which has strong
									antioxidant properties. Antioxidants can
									help protect hair follicles against damage
									from harmful molecules called free radicals
								</v-col>
							</v-row>
						</v-container>
					</v-card>
				</v-timeline-item>

				<v-timeline-item color="primary lighten-1" fill-dot left small>
					<v-card>
						<v-card-title class="primary lighten-1 justify-end">
							<h2
								class="text-h4 mr-4 white--text font-weight-light"
							>
								Biotin
							</h2>
							<v-icon dark size="42">
								mdi-pulse
							</v-icon>
						</v-card-title>
						<v-container>
							<v-row>
								<v-img
									src="https://lh3.googleusercontent.com/8xNZHgPbPAhqwKm3YaxDsdJD_f0a4h7yOSVf6aHeWmMvYlcFrRfuTCPDP6JbAu3yipK2dmx2D7w4oTPl849TM664ykasgJRgqTGl7DSgTBdXXtuVECl2I3Pyg3ZIDHqTMvbNEqao3Q=w2400"
									height="100%"
								>
								</v-img>
								<v-col cols="12" md="8">
									stimulates keratin production in hair and
									can increase the rate of follicle growth. It
									is not stored for long in the body - most of
									yours is from the foods you eat. In order to
									be effective, it needs to be consumed.
								</v-col>
							</v-row>
						</v-container>
					</v-card>
				</v-timeline-item>

				<v-timeline-item color="primary lighten-1" fill-dot right>
					<v-card>
						<v-card-title class="primary lighten-1">
							<v-icon class="mr-4" dark size="42">
								mdi-heart-box-outline
							</v-icon>
							<h2 class="text-h4 white--text font-weight-light">
								Amla extract
							</h2>
						</v-card-title>
						<v-container>
							<v-row>
								<v-img
									src="https://lh3.googleusercontent.com/kIDFJ_-qgROiHu8p3ZGJ-moXY4XAYr2IEqj4JsPgoJcOUfmQQCo3QgD9IFQSBCA6GW4EHToxvXMJ_I_Dcek9Vask2kWWJ3otqLZgUBubv4IY8iKMlaGl7MVJMijoJnmrWDqUB3BQQg=w2400"
									height="100%"
								>
								</v-img>
								<v-col cols="12" md="4">
									Amla or the Indian gooseberry can treat hair
									loss effectively. This edible fruit is
									considered as a miracle cure for hair care.
									It stimulates hair growth and improves the
									quality of hair. It contains calcium, which
									promotes healthier hair.
								</v-col>
							</v-row>
						</v-container>
					</v-card>
				</v-timeline-item>

				<v-timeline-item color="primary lighten-1" fill-dot left small>
					<v-card>
						<v-card-title class="primary lighten-1 justify-end">
							<h2
								class="text-h4 mr-4 white--text font-weight-light"
							>
								Acid Folic
							</h2>
							<v-icon dark size="42">
								mdi-content-cut
							</v-icon>
						</v-card-title>
						<v-container>
							<v-row>
								<v-img
									src="https://lh3.googleusercontent.com/T7u6p3EyoHJKP8k0ocNIe_KPUgOVwu7T7d2NFURsanclp7kPQg2TJoDHGrxLV0NFJw1LeEcTWWZjRb5l_TNSLJa4K1uJ786j8wp77N1V4o95eBZJX7_qNXGUoKswp71LHfpjAksqwQ=w2400"
									height="100%"
								>
								</v-img>
								<v-col cols="12" md="10">
									Stimulates hair growth, prevents premature
									primarying, and increases volume and shine
									in the hair.Prevents Hair Loss & Thickens
									Hair
								</v-col>
							</v-row>
						</v-container>
					</v-card>
				</v-timeline-item>
			</v-timeline>
		</v-container>
	</div>
</template>

<script>
	export default {
		name: 'Information',
		mounted() {
			document.title = '| Ingredient | Hellobabes |'
		},
	}
</script>
