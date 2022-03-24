<script>
	import DocumentButton from '../components/Common/DocumentButton.svelte';
	import CommonCard from '../components/Common/CommonCard.svelte';
	import ImportanceTranslate from '../translate/ImportanceTranslate';
</script>

<div
	class=" bg-prtr-fresh-green flex justify-center items-center pt-[22px] md:pt-[87px] lg:pt-[114px] bg-center bg-no-repeat bg-fixed"
	style="background-image: url('img/bg/bg_3.svg')"
>
	<div class="flex flex-col">
		<div class="flex flex-col lg:flex-row">
			<div class="text-prtr-deep-blue flex flex-col px-5 md:px-[52px] lg:px-0">
				<p
					class="font-kanit text-4xl md:text-title font-bold leading-title mb-6 w-[280px] md:w-[675px] lg:w-[430px] text-center md:text-left"
				>
					เรื่องนี้สำคัญอย่างไร
				</p>
				<p class="text-xl md:text-3xl w-[280px] md:w-[670px] lg:w-[560px] text-center lg:text-left">
					การตรากฎหมายเพื่อพัฒนาระบบการรายงานข้อมูลการปล่อยและการเคลื่อนย้ายสารมลพิษสู่สิ่งแวดล้อม
				</p>
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3 mt-3 md:mt-20 lg:mt-6">
					<div class="w-[280px] md:w-[300px] font-anakotmai text-xl leading-7">
						<DocumentButton>อ่านเอกสารสรุปร่าง พ.ร.บ.</DocumentButton>
					</div>
					<div class="w-[280px] md:w-[300px] font-anakotmai text-xl leading-7">
						<DocumentButton>อ่านร่างพ.ร.บ.ฉบับเต็ม</DocumentButton>
					</div>
				</div>
			</div>

			<div class="w-[45px]" />

			<div class="flex flex-col mt-3 md:mt-[65px] lg:mt-0 items-center">
				<div class=" w-[280px] md:w-[420px]">
					{#each ImportanceTranslate as Card, i}
					<div class={`${i === 0 ? '' : 'mt-6'}`}>
						<CommonCard title={Card.title} icon={Card.icon}>
							<div>
								<p>
									{Card.content}
								</p>
							</div>
						</CommonCard>
					</div>
				{/each}
				</div>
			</div>
		</div>

		<div class="flex justify-center">
			<div class="flex mt-12 pt-1 mb-16 pb-3">
				{#each Array(4) as _, i}
					<div class="mx-1 md:mx-3">
						<div class="w-7 md:w-[58px] lg:w-[87px] h-[30px] md:h-[62px] lg:h-[93px]">
							<img src="img/vector/male.svg" alt="male" />
						</div>
					</div>
					<div class="mx-1 md:mx-3">
						<div class="w-7 md:w-[58px] lg:w-[87px] h-[30px] md:h-[62px] lg:h-[93px]">
							<img src="img/vector/female.svg" alt="female" />
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
