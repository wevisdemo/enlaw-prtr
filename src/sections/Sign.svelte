<script>
	import { scrollRef } from 'svelte-scrolling';

	import SignForm from '../components/SignForm.svelte';
	import SignSuccess from '../components/SignSuccess.svelte';
	import CommonExpand from '../components/Common/CommonExpand.svelte';
	import DocumentButton from '../components/Common/DocumentButton.svelte';

	import Modal from 'svelte-simple-modal';

	let isSigned = false;

	function toggleSign() {
		isSigned = !isSigned;
	}

	const META_TITLE = isSigned
		? 'ฉันได้ร่วมลงชื่อเพื่อสนับสนุน “หยุดปกปิดมลพิษ ด้วยกฎหมาย PRTR”'
		: 'หยุดปกปิดมลพิษ ด้วยกฎหมาย PRTR';
	const META_DESCRIPTION =
		'ร่วมลงชื่อเสนอร่างพระราชบัญญัติการรายงานการปล่อยและการเคลื่อนย้ายสารมลพิษสู่สิ่งแวดล้อม (ภาคประชาชน)';
	const META_IMAGE = isSigned
		? 'https://firebasestorage.googleapis.com/v0/b/enlaw-prtr.appspot.com/o/02_share.jpg?alt=media&token=9f15b996-7525-426e-b7d2-39346fe7ba4b'
		: 'https://firebasestorage.googleapis.com/v0/b/enlaw-prtr.appspot.com/o/01_default.jpg?alt=media&token=47bbfdfc-36a1-4f2b-8cde-7807f6fa0010';
</script>

<svelte:head>
	<meta property="og:title" content={META_TITLE} />
	<meta property="og:url" content="https://thaiprtr.com" />
	<meta property="og:description" content={META_DESCRIPTION} />
	<meta property="og:image" content={META_IMAGE} />
	<meta property="og:type" content="website">

	<!-- TWITTER -->
	<meta property="twitter:card" content="summary">
	<meta property="twitter:domain" content="https://thaiprtr.com">
	<meta property="twitter:url" content="https://thaiprtr.com">
	<meta name="twitter:title" content={META_TITLE}>
	<meta name="twitter:description" content={META_DESCRIPTION}>
	<meta name="twitter:image:src" content={META_IMAGE}>
	<meta name="twitter:image" content={META_IMAGE}>
</svelte:head>
<div
	class="bg-prtr-deep-blue flex justify-center pt-20 pb-[69px]"
	use:scrollRef={'sign'}
>
	<div class="flex flex-col lg:flex-row">
		<div class="w-[280px] md:w-[640px] lg:w-[425px] flex flex-col text-white">
			<p
				class="text-4xl md:text-title font-kanit font-bold leading-[110%] mb-6 text-center lg:text-left"
			>
				ร่วมเป็นหนึ่งชื่อสนับสนุนเปิดข้อมูลมลพิษ
			</p>
			<p class="text-xl md:text-3xl text-center md:text-left">
				ผ่านการกรอกฟอร์มลงชื่อเสนอร่าง
				พ.ร.บ.การรายงานและเปิดเผยข้อมูลการปล่อยและเคลื่อนย้ายสารมลพิษ พ.ศ. ....
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
				{#if !isSigned}
					<Modal>
						<SignForm {toggleSign} />
					</Modal>
				{:else}
					<SignSuccess {toggleSign} />
				{/if}
			</div>

			<div class="w-[300px] md:w-[420px]">
				<div class="flex justify-center">
					<p class="pt-6 pb-6 text-white text-center">อ่านเพิ่มเติม</p>
				</div>
				<div>
					<CommonExpand title="ใครลงชื่อเสนอ PRTR ได้บ้าง ?">
						<ul class="list-disc  ml-5">
							<li>
								รัฐธรรมนูญ 2560 มาตรา 133 รับรองให้ประชาชนไม่น้อยกว่า 10,000
								คนมีสิทธิเข้าชื่อเพื่อเสนอกฎหมายให้สภาผู้แทนราษฎรพิจารณา
							</li>
							<li>
								ต้องเป็นคนไทยที่มีสิทธิเลือกตั้ง (อายุ 18 ปีขึ้นไป)
								ในวันที่เข้าชื่อฯ
							</li>
							<li>
								ต้องไม่เป็นพระภิกษุหรือนักบวช ไม่เป็นนักโทษ ไม่เป็นคนวิกลจริต
							</li>
							<li>ต้องไม่ถูกเพิกถอนสิทธิการเลือกตั้ง</li>
							<li>
								ไม่เป็นบุคคลต้องห้ามใช้สิทธิเลือกตั้ง อันได้แก่ พระภิกษุ หรือ
								นักบวช, อยู่ระหว่างถูกเพิกถอนสิทธิเลือกตั้ง,
								ต้องคุมขังอยู่โดยหมายของศาลหรือโดยคำสั่งที่ชอบด้วยกฎหมาย
								และวิกลจริต หรือจิตฟั่นเฟือนไม่สมประกอบ
							</li>
						</ul>
					</CommonExpand>
				</div>
				<div class="mt-5">
					<CommonExpand title="ลงชื่อสนับสนุน PRTR (กรอกเอกสาร)">
						<div>
							<ul class="list-disc  ml-5">
								<li>
									ดาวน์โหลดแบบฟอร์มสำหรับการเข้าชื่อเสนอกฎหมาย และพิมพ์ลงกระดาษ
									A4
								</li>
								<li>
									กรอกข้อมูลในแบบฟอร์มให้ครบถ้วน ประกอบด้วยสถานที่เขียน
									วัน/เดือน/ปีที่เขียน และข้อมูลตามบัตรประชาชน ได้แก่ คำนำหน้า
									ชื่อ นามสกุล เลขบัตรประจำตัวประชาชน พร้อมลงลายมือชื่อ
								</li>
								<li>
									ส่งแบบฟอร์มทางไปรษณีย์ไปที่ มูลนิธินิติธรรมสิ่งแวดล้อม เลขที่
									931/8 ซอยลาดพร้าว 87 แขวงคลองจั่น เขตบางกะปิ กรุงเทพมหานคร
									10240
								</li>
							</ul>
							<div class="mt-6 mb-5">
								<DocumentButton docName="doc_2"
									>แบบฟอร์มเข้าชื่อ PRTR ฉบับเต็ม</DocumentButton
								>
							</div>
						</div>
					</CommonExpand>
				</div>
			</div>
		</div>
	</div>
</div>
