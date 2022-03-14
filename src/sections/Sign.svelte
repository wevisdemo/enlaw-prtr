<script>
	import SignVector from '../components/SignComponent/SignVector.svelte';
	import PenVector from '../components/SignComponent/PenVector.svelte';
	import SignForm from '../components/SignForm.svelte';
	import CommonExpand from '../components/Common/CommonExpand.svelte';
	import DocumentButton from '../components/Common/DocumentButton.svelte';
</script>

<div class="sign_section bg-prtr-deep-blue flex justify-center pt-20">
	<div class="flex">
		<div class="sign_left_content flex flex-col text-white">
			<p class="title_font mb-6 ">ร่วมเป็นหนึ่งชื่อสนับสนุนเปิดข้อมูลมลพิษ</p>
			<p class="text-3xl ">
				การตรากฎหมายเพื่อพัฒนาระบบการรายงานข้อมูลการปล่อยและการเคลื่อนย้ายสารมลพิษสู่สิ่งแวดล้อม
			</p>
			<div class="mt-14 pt-1">
				<SignVector />
			</div>
			<div class="mt-14">
				<PenVector />
			</div>
		</div>

		<div class="w-16" />

		<div class="sign_right_content flex flex-col">
			<SignForm />
			<div class="pt-6 pb-6 flex justify-center">
				<p class="text-white">อ่านเพิ่มเติม</p>
			</div>
			<div>
				<CommonExpand title="ใครลงชื่อเสนอ PRTR ได้บ้าง ?">
					<ul class="list-disc  ml-5">
						<li>
							รัฐธรรมนูญ 2560 มาตรา 133รับรองให้ ประชาชน 10,000
							คนมีสิทธิเข้าชื่อกันเพื่อเสนอ
							กฎหมายในสภาพิจารณาได้โดยผู้มีสิทธิเสนอกฎหมาย
							คือทุกคนที่มีสิทธิเลือกตั้ง หมายความว่า คน ๆ นั้นต้อง
						</li>
						<li>ต้องอายุ 18 ปีเต็มขึ้นไปในวันที่ 1 มกราคมของปี นั้น ๆ</li>
						<li>
							ต้องไม่เป็นพระภิกษุหรือนักบวช ไม่เป็นนักโทษ ไม่เป็นคนวิกลจริต
						</li>
						<li>ต้องไม่ถูกเพิกถอนสิทธิการเลือกตั้ง</li>
						<li>การไม่ใปใช้สิทธิเลือกตั้งครั้งก่อนหน้า ไม่เป็นเหตุ</li>
					</ul>
				</CommonExpand>
			</div>
			<div class="mt-5">
				<CommonExpand title="ลงชื่อสนับสนุน PRTR (กรอกเอกสาร)">
					<div>
						<ul class="list-disc  ml-5">
							<li>
								ดาวน์โหลด แบบฟอร์ม สำหรับการเข้าชื่อ เสนอกฎหมาย และพิมพ์ลงกระดาษ
								A4
							</li>
							<li>
								กรอกข้อมูลให้ครบถ้วน ประกอบด้วยสถานที ่เขียน คำนำหน้า ชื่อ
								นามสกุลเลขบัตรประจำตัว ประชาชน ข้อมูลตามบัตรประชาชน Email
								และเบอร์โทรศัพท์ (อาจมีภาพตัวอย่างการกรอก ข้อมูลประกอบครับ)
							</li>
							<li>ลงลายมือชื่อ</li>
							<li>ส่งแบบฟอร์มไปที่ …. (TBC)</li>
						</ul>
						<div class="mt-6 mb-5">
							<DocumentButton>ดาวน์โหลดแบบฟอร์ม</DocumentButton>
						</div>
					</div>
				</CommonExpand>
			</div>
			<div class="mt-5">
				<CommonExpand title="อ่านนโยบายคุ้มครองข้อมูลส่วนบุคคล">
					<div>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
							sollicitudin orci eget id velit. Quam aliquam elit, in habitasse
							vivamus blandit duis consectetur integer. Viverra diam porttitor
							enim quisque. In viverra euismod lacus consequat elementum aliquam
							proin neque enim. Faucibus malesuada ullamcorper convallis
							accumsan, aliquam nunc a dui eget.
						</p>
					</div>
				</CommonExpand>
			</div>
		</div>
	</div>
	<!-- <h1>Sign</h1> -->
</div>

<style>
	.sign_section {
		height: 200vh;
	}

	.sign_left_content {
		width: 445px;
	}

	.sign_right_content {
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
