<script>
	import DocumentButton from '../components/Common/DocumentButton.svelte';
	import CommonCard from '../components/Common/CommonCard.svelte';
	import ImportanceTranslate from '../translate/ImportanceTranslate';
	import MaleVector from '../components/ImportanceComponent/MaleVector.svelte';
	import FemaleVector from '../components/ImportanceComponent/FemaleVector.svelte';
</script>

<div
	class=" bg-prtr-fresh-green flex justify-center items-center pt-24"
>
	<div
		class="flex flex-col bg-[url('../components/ImportanceComponent/BgCogVector.svelte)]"
	>
		<div class="flex">
			<div class="importance_left_content pt-5 text-prtr-deep-blue">
				<p class="title_font mb-6 ">เรื่องนี้สำคัญ อย่างไร</p>
				<p class="text-3xl ">
					การตรากฎหมายเพื่อพัฒนาระบบการรายงานข้อมูลการปล่อยและการเคลื่อนย้ายสารมลพิษสู่สิ่งแวดล้อม
				</p>
				<div class="mt-6 w-[300px] font-anakotmai">
					<DocumentButton>อ่านเอกสารสรุปร่าง พ.ร.บ.</DocumentButton>
				</div>
				<div class="mt-6 w-[300px] font-anakotmai">
					<DocumentButton>อ่านร่างพ.ร.บ.ฉบับเต็ม</DocumentButton>
				</div>
			</div>

			<div class="importance_spacing" />

			<div class="importance_right_content flex flex-col">
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

		<div class="flex mt-12 pt-1 mb-16 pb-3">
			{#each Array(4) as _, i}
				<div class="mx-3">
					<MaleVector />
				</div>
				<div class="mx-3">
					<FemaleVector />
				</div>
			{/each}
		</div>
	</div>
	<!-- <h1>Importance</h1> -->
</div>

<style>
	.importance_section {
		height: 100vh;
	}

	.importance_left_content {
		width: 425px;
	}

	.importance_spacing {
		width: 45px;
	}

	.importance_right_content {
		width: 420px;
	}

	.title_font {
		font-size: 80px;
		font-family: 'Termtem';
		font-style: normal;
		font-weight: 700;
		line-height: 90%;
	}
</style>
