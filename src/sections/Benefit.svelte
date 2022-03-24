<script>
	import CommonCard from '../components/Common/CommonCard.svelte';

	import BenefitTranslate from '../translate/BenefitTranslate';

	const number = ['1', '2', '3', '4', '5'];
</script>

<div class="bg-prtr-deep-blue flex justify-center items-center pb-20">
	<div class="mt-[105px] pt-2 mb-26 pb-0.5 h-full z-0 flex justify-center">
		<div class="absolute -z-40 mt-[60px] md:mt-0">
			<img
				src="img/bg/bg_2.png"
				alt="client earth"
				class="w-[285px] h-[190px] md:w-[584px] md:h-[388px] lg:w-[772px] lg:h-[513px]"
			/>
		</div>

		<div class="">
			<div class=" flex flex-col items-center lg:items-start">
				<p
					class=" text-4xl md:text-title font-kanit font-bold leading-title text-white pb-0 md:pb-8 mb-2 lg:mb-3"
				>
					ทำไมต้องมีกฎหมาย
				</p>
				<div class="w-[132px] md:w-[240px] h-8 md:h-[56px]">
					<img src="img/logo/logo_default.svg" alt="logo" />
				</div>
			</div>

			<div
				class="flex flex-col md:flex-row mt-[218px] md:mt-[268px] mb-0.5 items-center md:items-start"
			>
				<div class="w-[280px] md:w-[320px] lg:w-[420px] mb-6">
					<CommonCard
						title={BenefitTranslate.left.title}
						isSecondary
						icon={BenefitTranslate.left.icon}
					>
						<div class="flex flex-col justify-center items-center pb-[18px]">
							{#each BenefitTranslate.left.content as list, i}
								<div class="flex items-start mb-3">
									<img src="img/number/{i + 1}.svg" alt={i.toString()} />
									<div class="ml-3">
										<p class="text-2xl font-bold font-kanit leading-[120%]">
											{list.sub_header}
										</p>
										<p class="mt-1 leading-[140%]">{list.sub_content}</p>
									</div>
								</div>
							{/each}
							<div
								class="mt-3 lg:mb-[211px] w-[204px] h-[280px]"
							>
								<img src="img/illust/illust_2.svg" alt="introduction illust" />
							</div>
						</div>
					</CommonCard>
				</div>

				<div class=" w-3 lg:w-6 hidden md:block" />

				<div class="w-[280px] md:w-[320px] lg:w-[420px] flex flex-col">
					{#each BenefitTranslate.right as Content, i}
						<div class={`${i === 0 ? '' : 'mt-3 lg:mt-6'}`}>
							<CommonCard title={Content.title} isSecondary icon={Content.icon}>
								<ul class="list-disc ml-5">
									{#each Content.content as list}
										<li>
											{list}
										</li>
									{/each}
								</ul>
							</CommonCard>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
