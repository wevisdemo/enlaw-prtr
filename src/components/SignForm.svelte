<script>
	import { createForm } from 'svelte-forms-lib';
	import * as yup from 'yup';
	import { imask } from 'svelte-imask';

	import PenIcon from './FixedButtonBar/icon/PenIcon.svelte';

	import TitleValue from '../values/TitleValue';
	import RangeDay from '../values/RangeDay';
	import RangeMonth from '../values/RangeMonth';
	import RangeYear from '../values/RangeYear';

	import { onMount } from 'svelte';
	import SignaturePad from 'signature_pad';

	import { submitData } from '../config/db';

	import { getContext } from 'svelte';
	import Popup from './Popup.svelte';
	const { open } = getContext('simple-modal');
	const showSurprise = () => open(Popup);

	export let toggleSign;

	let signature_value;
	let signature_canvas;

	let track_w = 380;

	let formOption = {
		title: TitleValue,
		day: RangeDay['1'],
		month: RangeMonth,
		year: RangeYear,
	};
	const telMask = {
		mask: '000-000-0000',
	};
	const phoneRegExp = /^[1-9]\d{2}-\d{3}-\d{4}/gm;

	onMount(() => {
		signature_canvas.width = track_w;
		signature_canvas.height = 260;
		signature_value = new SignaturePad(signature_canvas, {
			backgroundColor: '#B6E8F8',
		});
	});

	const { form, state, errors, handleChange, handleSubmit, handleReset } =
		createForm({
			initialValues: {
				location: '',
				citizenId: '',
				title: '',
				surname: '',
				lastname: '',
				birthDay_day: '',
				birthDay_month: '',
				birthDay_year: '',
				email: '',
				tel: '',
				isAgree: false,
			},
			validationSchema: yup.object().shape({
				location: yup.string().required(),
				citizenId: yup.string().required(),
				title: yup.string().required(),
				surname: yup.string().required(),
				lastname: yup.string().required(),
				birthDay_day: yup.string().required(),
				birthDay_month: yup.string().required(),
				birthDay_year: yup.string().required(),
				email: yup.string().email('Email is not valid'),
				tel: yup.string().matches(phoneRegExp, {
					message: 'Phone number is not valid',
					excludeEmptyString: true,
				}),
				isAgree: yup.boolean().isTrue(),
			}),
			onSubmit: (values) => {
				toggleSign();
				// doSubmit(values);
			},
		});

	function getDay(m, y) {
		let mIndex = m === '' ? 13 : `${RangeMonth.indexOf(m) + 1}`;
		let result = RangeDay[mIndex];
		if (mIndex === '') {
			result = RangeDay['1'];
		}
		if (mIndex === '2' && y % 4 === 0 && y !== '') {
			result = RangeDay['13'];
		}
		formOption.day = result;
	}

	const doClearSignPad = () => {
		signature_value.clear();
	};

	const doSubmit = (values) => {
		const submitBody = { ...values };
		console.log('signature_value', signature_value);
		submitBody.signature = signature_value.toDataURL('image/jpeg');
		delete submitBody.isAgree;
		console.log('submitBody.signature', submitBody.signature);

		submitData({
			onSuccess: doSuccess,
			body: submitBody,
			id: values.citizenId,
		});
	};

	const doSuccess = () => {
		handleReset();
		doClearSignPad();
	};

	function LimitLength(t) {
		let text = t.toString();
		if (text.length >= 13) {
			$form.citizenId = text.substr(0, 13);
		}
	}

	$: getDay($form.birthDay_month, $form.birthDay_year);
	$: LimitLength($form.citizenId);
</script>

<div
	class="bg-white w-[300px] md:w-[420px] py-5 px-2.5 md:px-5 font-normal text-prtr-deep-blue"
>
	<form on:submit={handleSubmit}>
		<div class="mb-2.5">
			<label class="mb-0.5 font-anakotmai" for="location">เขียนที่*</label>
			<input
				class="bg-prtr-air-blue text-lg border rounded-sm w-full py-1.5 px-2 text-prtr-deep-blue leading-tight focus:outline-none focus:shadow-outline font-baijamjuree"
				required
				bind:value={$form.location}
				on:change={handleChange}
				id="location"
			/>
			<p class="text-xs">ระบุเป็นชื่อจังหวัด</p>
		</div>

		<div class="mb-2.5">
			<label class="mb-0.5 font-anakotmai" for="citizenId">
				เลขประจำตัวประชาชน*
			</label>
			<input
				class="bg-prtr-air-blue text-lg border rounded-sm w-full py-1.5 px-2 text-prtr-deep-blue leading-tight focus:outline-none focus:shadow-outline font-baijamjuree"
				type="number"
				required
				bind:value={$form.citizenId}
				on:change={handleChange}
				id="citizenId"
			/>
			<p class="text-xs">ใส่เลขประจำตัวประชาชน 13 หลักไม่ต้องเว้นวรรค</p>
		</div>

		<div class="basis-full flex mb-2.5">
			<div class="basis-1/4  pr-2.5">
				<label class="mb-0.5 font-anakotmai" for="title">คำนำหน้าชื่อ</label>
				<select
					class="bg-prtr-air-blue text-lg p-1.5 font-baijamjuree"
					id="title"
					required
					bind:value={$form.title}
					on:change={handleChange}
				>
					{#each formOption.title as o}
						<option>{o}</option>
					{/each}
				</select>
			</div>
			<div class="basis-3/4">
				<label class="mb-0.5 font-anakotmai" for="surname">ชื่อ*</label>
				<input
					class="bg-prtr-air-blue text-lg border rounded-sm w-full py-1.5 px-2 text-prtr-deep-blue leading-tight focus:outline-none focus:shadow-outline font-baijamjuree"
					required
					bind:value={$form.surname}
					on:change={handleChange}
					on:blur={handleChange}
					id="surname"
				/>
				<p class="text-xs">ระบุชื่อจริงเป็นภาษาไทย</p>
			</div>
		</div>

		<div class="mb-2.5">
			<label class="mb-0.5 font-anakotmai" for="lastname">นามสกุล*</label>
			<input
				class="bg-prtr-air-blue text-lg border rounded-sm w-full py-1.5 px-2 text-prtr-deep-blue leading-tight focus:outline-none focus:shadow-outline font-baijamjuree"
				required
				bind:value={$form.lastname}
				on:change={handleChange}
				id="lastname"
			/>
			<p class="text-xs">ระบุนามสกุลเป็นภาษาไทย</p>
		</div>

		<div class="basis-full flex mb-2.5">
			<div class="basis-1/3 pr-1">
				<div class="flex flex-col">
					<label class="mb-0.5 font-anakotmai" for="birthDay_day"
						>วันเกิด*</label
					>
					<select
						class="bg-prtr-air-blue text-lg p-1.5 font-baijamjuree"
						id="birthDay_day"
						required
						bind:value={$form.birthDay_day}
						on:change={handleChange}
					>
						{#each formOption.day as o}
							<option value={o}>{o}</option>
						{/each}
					</select>
				</div>
			</div>
			<div class="basis-1/3 pr-1">
				<div class="flex flex-col">
					<label class="mb-0.5 font-anakotmai" for="birthDay_month"
						>เดือนเกิด*</label
					>
					<select
						class="bg-prtr-air-blue text-lg p-1.5 font-baijamjuree"
						id="birthDay_month"
						required
						bind:value={$form.birthDay_month}
						on:change={handleChange}
					>
						{#each formOption.month as o}
							<option value={o}>{o}</option>
						{/each}
					</select>
				</div>
			</div>
			<div class="basis-1/3">
				<div class="flex flex-col">
					<label class="mb-0.5 font-anakotmai" for="birthDay_year"
						>ปีพ.ศ.เกิด*</label
					>
					<select
						class="bg-prtr-air-blue text-lg p-1.5 font-baijamjuree"
						id="birthDay_year"
						required
						bind:value={$form.birthDay_year}
						on:change={handleChange}
					>
						{#each formOption.year as o}
							<option value={o}>{o}</option>
						{/each}
					</select>
				</div>
			</div>
		</div>

		<div class="mb-2.5">
			<label class="mb-0.5 font-anakotmai" for="email">อีเมล (Optional)</label>
			<input
				class="bg-prtr-air-blue text-lg border rounded-sm w-full py-1.5 px-2 text-prtr-deep-blue leading-tight focus:outline-none focus:shadow-outline font-baijamjuree"
				bind:value={$form.email}
				on:change={handleChange}
				id="email"
				type="email"
			/>
			<p class="text-xs">
				E-mail ที่ใช้งานในปัจจุบัน - สำหรับรับเอกสารยืนยันการลงลายมือชื่อ
			</p>
		</div>

		<div class="mb-2.5">
			<label class="mb-0.5 font-anakotmai" for="tel">
				เบอร์โทรศัพท์ (Optional)
			</label>
			<input
				class="bg-prtr-air-blue text-lg border rounded-sm w-full py-1.5 px-2 text-prtr-deep-blue leading-tight focus:outline-none focus:shadow-outline font-baijamjuree"
				bind:value={$form.tel}
				on:change={handleChange}
				id="tel"
				type="tel"
				use:imask={telMask}
			/>
			<p class="text-xs">
				ระบุเบอร์โทรศัพท์ที่ใช้งานในปัจจุบันสำหรับการอ้างอิง
				ข้อมูลจะเก็บเป็นความลับ
			</p>
		</div>

		<div class="mb-2.5">
			<p class="mb-0.5 font-anakotmai">ลงลายมือชื่อ*</p>
			<div class="w-[280px] md:w-[380px] h-[260px]" bind:clientWidth={track_w}>
				<canvas bind:this={signature_canvas} class="cursor-crosshair" />
			</div>
			<div class=" w-full flex justify-end">
				<button
					class="border border-prtr-deep-blue p-1.5 flex items-center rounded"
					on:click={doClearSignPad}
				>
					<span class="mr-1">ล้าง</span>
					<svg
						width="22"
						height="22"
						viewBox="0 0 22 22"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g clip-path="url(#clip0_914_1581)">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M11 20.625C13.5527 20.625 16.0009 19.6109 17.8059 17.8059C19.6109 16.0009 20.625 13.5527 20.625 11C20.625 8.44729 19.6109 5.99913 17.8059 4.1941C16.0009 2.38906 13.5527 1.375 11 1.375C8.44729 1.375 5.99913 2.38906 4.1941 4.1941C2.38906 5.99913 1.375 8.44729 1.375 11C1.375 13.5527 2.38906 16.0009 4.1941 17.8059C5.99913 19.6109 8.44729 20.625 11 20.625ZM11 22C13.9174 22 16.7153 20.8411 18.7782 18.7782C20.8411 16.7153 22 13.9174 22 11C22 8.08262 20.8411 5.28473 18.7782 3.22183C16.7153 1.15893 13.9174 0 11 0C8.08262 0 5.28473 1.15893 3.22183 3.22183C1.15893 5.28473 0 8.08262 0 11C0 13.9174 1.15893 16.7153 3.22183 18.7782C5.28473 20.8411 8.08262 22 11 22Z"
								fill="#08274C"
							/>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M16.2991 5.7007C16.3632 5.76456 16.414 5.84043 16.4486 5.92395C16.4833 6.00748 16.5011 6.09702 16.5011 6.18745C16.5011 6.27788 16.4833 6.36742 16.4486 6.45094C16.414 6.53447 16.3632 6.61033 16.2991 6.6742L6.67414 16.2992C6.54505 16.4283 6.36996 16.5008 6.18739 16.5008C6.00483 16.5008 5.82974 16.4283 5.70064 16.2992C5.57155 16.1701 5.49902 15.995 5.49902 15.8124C5.49902 15.6299 5.57155 15.4548 5.70064 15.3257L15.3256 5.7007C15.3895 5.63667 15.4654 5.58588 15.5489 5.55122C15.6324 5.51656 15.722 5.49872 15.8124 5.49872C15.9028 5.49872 15.9924 5.51656 16.0759 5.55122C16.1594 5.58588 16.2353 5.63667 16.2991 5.7007Z"
								fill="#08274C"
							/>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M5.701 5.7007C5.63698 5.76456 5.58618 5.84043 5.55152 5.92395C5.51686 6.00748 5.49902 6.09702 5.49902 6.18745C5.49902 6.27788 5.51686 6.36742 5.55152 6.45094C5.58618 6.53447 5.63698 6.61033 5.701 6.6742L15.326 16.2992C15.4551 16.4283 15.6302 16.5008 15.8128 16.5008C15.9953 16.5008 16.1704 16.4283 16.2995 16.2992C16.4286 16.1701 16.5011 15.995 16.5011 15.8124C16.5011 15.6299 16.4286 15.4548 16.2995 15.3257L6.6745 5.7007C6.61064 5.63667 6.53477 5.58588 6.45125 5.55122C6.36772 5.51656 6.27818 5.49872 6.18775 5.49872C6.09732 5.49872 6.00778 5.51656 5.92426 5.55122C5.84073 5.58588 5.76487 5.63667 5.701 5.7007Z"
								fill="#08274C"
							/>
						</g>
						<defs>
							<clipPath id="clip0_914_1581">
								<rect width="22" height="22" fill="white" />
							</clipPath>
						</defs>
					</svg>
				</button>
			</div>
		</div>

		<div class="mb-2.5 flex">
			<input
				class="h-5 w-5 mr-3 border-2 border-prtr-deep-blue rounded-sm accent-prtr-deep-blue transition duration-200 cursor-pointer font-baijamjuree"
				type="checkbox"
				id="isAgree"
				bind:value={$form.isAgree}
				on:input={handleChange}
			/>
			<div>
				<p class="text-sm">
					ข้าพเจ้ายินยอมลงชื่อเสนอกฎหมาย อ่านนโยบายคุ้มครอง ข้อมูลส่วนบุคคล
				</p>
			</div>
		</div>

		<button
			class="flex justify-center w-full bg-white text-prtr-deep-blue border border-prtr-deep-blue py-5 rounded shadow-md"
			type="submit"
		>
			<span class="mr-1">ลงชื่อเลย</span>
			<PenIcon />
		</button>
	</form>
</div>
