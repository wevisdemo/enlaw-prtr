<script>
	import LandingTitle from '../components/LandingComponent/LandingTitle.svelte';

	let couting = 23112;
</script>

<div
	class="bg-gradient-to-b from-prtr-gradient-a via-prtr-gradient-b to-prtr-gradient-c flex flex-col justify-center items-center pt-40 pb-20"
>
	<div class="flex text-prtr-deep-blue mt-0.5">
		<div class="left_box">
			<LandingTitle />
			<div class="flex justify-between mt-4">
				<p>มีแล้วกว่า</p>
				<p>รายชื่อ</p>
			</div>
			<div class="bg-prtr-healthy-blue shadow-md rounded-xl">
				<p class="counting_number text-white">{couting}</p>
			</div>
			<div class="mt-4">
				<p class="p-1.5 border border-prtr-deep-blue w-fit font-anakotmai">
					อัปเดตข้อมูลล่าสุด 24 ธ.ค. 65
				</p>
			</div>
		</div>

		<div class="landing_spacing" />

		<div class="right_box text-prtr-deep-blue">
			<h1 class="text-4xl font-anakotmai">
				“มลพิษไม่ใช่ความลับ และหน่วยงานรัฐก็ต้องไม่ปิด”
			</h1>
			<h1 class="text-4xl font-baijamjuree">
				“มลพิษไม่ใช่ความลับ และหน่วยงานรัฐก็ต้องไม่ปิด”
			</h1>
			<h1 class="text-4xl font-termtem">
				“มลพิษไม่ใช่ความลับ และหน่วยงานรัฐก็ต้องไม่ปิด”
			</h1>
			<h1 class="text-4xl">“มลพิษไม่ใช่ความลับ และหน่วยงานรัฐก็ต้องไม่ปิด”</h1>
			<p class="text-2xl">
				ร่วมเป็นส่วนหนึ่งสนับสนุนให้มีการรายงานการ
				ปล่อยและเคลื่อนย้ายสารมลพิษสู่สิ่งแวดล้อมเพื่อ
				ให้การเข้าถึงข้อมูลมลพิษเป็นสิทธิของประชาชน อย่างแท้จริง
			</p>
		</div>
	</div>

	<div class="flex justify-between w-full mt-6 mb-1">
		<div
			class=" bg-white text-prtr-deep-blue w-[180px] flex flex-col justify-center p-1.5"
		>
			<p>*Note:</p>
			<p>เลขวิ่งๆๆๆ</p>
		</div>
		<div
			class=" bg-white text-prtr-deep-blue w-[180px] flex flex-col justify-center p-3"
		>
			<p>*Note:</p>
			<p>แถบ fixed ไว้ Scroll</p>
			<p>ไปส่วนที่ลงชื่อ 👇</p>
		</div>
	</div>
</div>

<style>
	.counting_number {
		font-family: Anakotmai;
		font-size: 60px;
		font-style: normal;
		font-weight: 400;
		line-height: 72px;
		letter-spacing: 0.24em;
		text-align: left;
	}

	.left_box {
		width: 377px;
	}

	.landing_spacing {
		width: 120px;
	}

	.right_box {
		width: 370px;
	}
</style>
