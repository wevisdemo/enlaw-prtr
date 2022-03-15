<script>
	import BigLogo from '../components/Common/BigLogo.svelte';
	import CommonCard from '../components/Common/CommonCard.svelte';
	import BenefitClipArt from '../components/BenefitComponent/BenefitClipArt.svelte';

	import BenefitTranslate from '../translate/BenefitTranslate';
</script>

<div class="bg-prtr-deep-blue flex justify-center items-center pb-20">
	<div class="mt-[105px] pt-2 mb-26 pb-0.5 h-full z-0">
		<!-- mt-[105px] -->
		<div class="absolute -z-40 w-[864px] flex justify-end">
			<img
				src="img/bg/bg_2.png"
				alt="client earth"
				height="398px"
				width="772px"
			/>
		</div>

		<div class="">
			<div class="">
				<p class="title_font text-white mb-3">ทำไมต้องมีกฎหมาย</p>
				<BigLogo />
			</div>
	
			<div class="flex mt-[268px] mb-0.5">
				<div class="benefit_content">
					<CommonCard title={BenefitTranslate.left.title} isSecondary icon={BenefitTranslate.left.icon}>
						<div class="flex flex-col justify-center items-center">
							<ul class="list-disc ml-5">
								{#each BenefitTranslate.left.content as list, i}
									<li class={`${i === 0 ? '': 'mt-3'}`}>
										<p class="text-2xl font-bold">{list.sub_header}</p>
										<p>{list.sub_content}</p>
									</li>
								{/each}
							</ul>
							<div class="mt-3 mb-[266px] pb-2">
								<BenefitClipArt />
							</div>
						</div>
					</CommonCard>
				</div>
	
				<div class="benefit_spacing" />
	
				<div class="benefit_content flex flex-col">
					{#each BenefitTranslate.right as Content, i}
						<div class={`${i === 0 ? '': 'mt-6'}`}>
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

<style>
	.benefit_section {
		height: 200vh;
	}

	.benefit_content {
		width: 420px;
	}
	.benefit_spacing {
		width: 24px;
	}

	.title_font {
		font-size: 80px;
		font-family: 'Termtem';
		font-style: normal;
		font-weight: 700;
		line-height: 90%;
	}
</style>
