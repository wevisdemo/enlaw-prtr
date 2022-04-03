<script>
	import SignForm from '../components/SignForm.svelte';
	import CommonExpand from '../components/Common/CommonExpand.svelte';
	import DocumentButton from '../components/Common/DocumentButton.svelte';

	import Modal from 'svelte-simple-modal';
</script>

<div class="bg-prtr-deep-blue flex justify-center pt-20 pb-[69px]" id="sign">
	<div class="flex flex-col lg:flex-row">
		<div class="w-[280px] md:w-[640px] lg:w-[425px] flex flex-col text-white">
			<p
				class="text-4xl md:text-title font-kanit font-bold leading-title mb-6 text-center lg:text-left"
			>
				ร่วมเป็นหนึ่งชื่อสนับสนุนเปิดข้อมูลมลพิษ
			</p>
			<p class="text-xl md:text-3xl text-center md:text-left">
				การตรากฎหมายเพื่อพัฒนาระบบการรายงานข้อมูลการปล่อยและการเคลื่อนย้ายสารมลพิษสู่สิ่งแวดล้อม
			</p>
			<div
				class=" w-full h-full flex justify-center mt-10 md:mt-[52px] lg:mt-[98px] mb-6 md:mb-8"
			>
				<div class="w-[223px] lg:w-[464px] h-[396px] lg:h-[824px]">
					<img src="img/illust/illust_3.svg" alt="pen and paper" />
				</div>
			</div>
		</div>

		<div class="w-16" />

		<div class="flex flex-col items-center lg:items-start">
			<div class="flex justify-center lg:justify-start">
				<Modal>
					<SignForm />
				</Modal>
			</div>
			<p class="pt-6 pb-6 text-white text-center">อ่านเพิ่มเติม</p>
			<div class="w-[300px] md:w-[420px]">
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
									ดาวน์โหลด แบบฟอร์ม สำหรับการเข้าชื่อ เสนอกฎหมาย
									และพิมพ์ลงกระดาษ A4
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
								enim quisque. In viverra euismod lacus consequat elementum
								aliquam proin neque enim. Faucibus malesuada ullamcorper
								convallis accumsan, aliquam nunc a dui eget.
							</p>
						</div>
					</CommonExpand>
				</div>
			</div>
		</div>
	</div>
</div>
