<script>
	import CommonCard from '../components/Common/CommonCard.svelte';
</script>

<div
	class="bg-prtr-healthy-blue pt-8 md:pt-16 pb-9 md:pb-28 w-full flex justify-center"
	id="introduce"
>
	<div class="max-w-7xl pl-0 lg:pl-[53px]">
		<div class="flex justify-center md:justify-start items-center">
			<p
				class="font-kanit text-4xl md:text-title font-bold leading-title text-prtr-deep-blue mr-2 md:mr-4"
			>
				รู้จัก
			</p>
			<div class="w-[132px] md:w-[240px] h-8 md:h-[56px]">
				<img src="img/logo/logo_default.svg" alt="logo" />
			</div>
		</div>

		<div
			class="mt-2 md:mt-[62px] ml-0 lg:ml-[86px] flex flex-col lg:flex-row items-center"
		>
			<div class="flex flex-col w-[155px] md:w-[420px] items-center mt-6">
				<div
					class="grow flex justify-center lg:justify-end
					w-[155px] md:w-[334px] h-[170px] md:h-[369px]"
				>
					<img src="img/illust/illust_1.svg" alt="introduction illust" />
				</div>
			</div>

			<div class=" w-[4vw] hidden lg:block" />

			<div
				class="w-[280px] md:w-[420px] flex items-center justify-center mt-[29px] lg:mt-0"
			>
				<div>
					<CommonCard title="PRTR คืออะไร​ ?">
						<div>
							<h1>
								กฎหมายที่กำหนดให้มีการรายงานและเปิดเผยข้อมูลการปล่อยและเคลื่อนย้ายสารมลพิษโดยหน่วยงานที่
								เกี่ยวข้องต้องเปิดเผยต่อสาธารณชนเกี่ยวกับชนิด
								และปริมาณของสารเคมีหรือมลพิษที่มีการปลดปล่อยจากแหล่งกำเนิดมลพิษสู่ตัวกลางสิ่งแวดล้อม 
								ทั้งอากาศ ดิน น้ำ รวมถึงข้อมูลการนำน้ำเสียหรือ
								ของเสียที่มีสารเคมีหรือมลพิษออกจากแหล่งกำเนิด ไปบำบัดหรือกำจัด
							</h1>
						</div>
					</CommonCard>
				</div>
			</div>
		</div>
	</div>
</div>
