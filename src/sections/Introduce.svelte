<script>
	import CommonCard from '../components/Common/CommonCard.svelte';
	import BigLogo from '../components/Common/BigLogo.svelte';
	import IntroduceClipArt from '../components/IntroduceComponent/IntroduceClipArt.svelte';
</script>

<div class="bg-prtr-healthy-blue flex justify-center items-center pt-16 pb-20">
	<div class="ml-52 mt-2 mb-0.5 flex flex-col">
		<div class="flex mb-16">
			<p class="title_font text-prtr-deep-blue mr-4">รู้จัก</p>
			<BigLogo />
		</div>

		<div class="flex mt-1.5">
			<div class="flex flex-col introduce_content">
				<div class="grow w-full h-full flex justify-end items-end">
					<IntroduceClipArt />
				</div>
			</div>

			<div class="introduce_spacing" />

			<div class="introduce_content flex items-center">
				<div>
					<CommonCard title="PRTR คืออะไร​ ?" isNoIcon>
						<div>
							<h1>
								กฎหมายที่กำหนดให้มีการรายงานและเปิดเผยข้อมูลการปล่อยและเคลื่อนย้ายสารมลพิษโดยหน่วยงานที
								่เกี่ยวข้องต้องเปิดเผยต่อสาธารณชนเกี่ยวกับชนิด
								และปริมาณของสารเคมีหรือมลพิษที่มีการปลด
								ปล่อยจากแหล่งกำเนิดมลพิษสู่ตัวกลางสิ่งแวดล้อม ทั้งอากาศ ดิน น้ำ
								รวมถึงข้อมูลการนำน้ำเสียหรือ
								ของเสียที่มีสารเคมีหรือมลพิษออกจากแหล่งกำเนิด ไปบำบัดหรือกำจัด
							</h1>
						</div>
					</CommonCard>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.introduce_content {
		width: 420px;
	}
	.introduce_spacing {
		width: 75px;
	}

	.title_font {
		font-size: 80px;
		font-family: 'Termtem';
		font-style: normal;
		font-weight: 700;
		line-height: 90%;
	}
</style>
