<script>
	import LandingTitle from '../components/LandingComponent/LandingTitle.svelte';
	import DocumentIcon from '../components/ImportanceComponent/DocumentIcon.svelte';

	import { onMount } from 'svelte';
	import { getRealTimeCounting } from '../config/db';

	const goal = [10000, 20000, 50000, 100000];

	let couting;
	let currentGoal = goal[0];
	let percentWidth = 0;

	onMount(() => {
		getRealTimeCounting(updateCounting);
	});

	const getNumberWithCommas = (x) => {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	};

	const updateCounting = (newValue) => {
		couting = newValue;
	};

	$: currentGoal = goal[goal.filter((i) => i < couting).length] || goal[3];
	$: percentWidth =
		couting < goal[3]
			? Math.round((couting / currentGoal) * 100 * 100) / 100
			: 100;
</script>

<div
	class="bg-gradient-to-b from-prtr-gradient-a font-kanit via-prtr-gradient-b to-prtr-gradient-c flex flex-col justify-center items-center pt-8 md:pt-40 md:pb-[170px] lg:pb-[160px]"
>
	<div
		class="flex text-prtr-deep-blue mt-0.5 lg:flex-row flex-col items-center ml-0 lg:ml-[20px]"
	>
		<div class="w-60 md:w-[380px]">
			<LandingTitle />
			<div class="flex justify-between mt-4">
				<p>ลงชื่อแล้ว</p>
				<p>รายชื่อ</p>
			</div>
			<div
				class="w-[240px] h-[44px] sm:w-[380px] sm:h-[78px] bg-prtr-healthy-blue shadow-md rounded-xl flex justify-center items-center"
			>
				{#if couting}
					<p
						class="font-anakotmai text-[32px] md:text-6xl tracking-[0.24em] counting_number_big text-white"
					>
						{getNumberWithCommas(couting)}
					</p>
					{#if couting >= goal[0]}
						<div
							class="absolute ml-48 md:ml-60 mt-12 md:mt-[133px] w-[120px] md:w-[190px] h-[104px] md:h-[165px]"
						>
							<img
								class="ml-0.5"
								src="img/milestone/milestone_meet.svg"
								alt="milestone meet"
							/>
						</div>
					{/if}
				{/if}
			</div>

			<div class="mt-1 sm:mt-7 w-full">
				<div class=" w-full flex justify-end items-center">
					<div
						class="flex justify-end"
						style="width: {(goal[0] / currentGoal) * 100}%"
					>
						<p class="font-anakotmai mt-1">
							{getNumberWithCommas(
								currentGoal > goal[0] ? goal[0] : currentGoal
							)}
						</p>
						{#if couting > goal[0]}
							<img
								class="ml-0.5"
								src="img/milestone/milestone_check_dark.svg"
								alt="check dark"
							/>
						{:else}
							<img
								class="ml-0.5"
								src="img/milestone/milestone_check_light.svg"
								alt="check light"
							/>
						{/if}
					</div>
					{#if couting > goal[0]}
						<div
							class="flex justify-end"
							style="width: {100 - (goal[0] / currentGoal) * 100}%"
						>
							<p class="font-anakotmai mt-1">
								{getNumberWithCommas(currentGoal)}
							</p>
						</div>
					{/if}
				</div>
				{#if couting < goal[0]}
					<div
						class="w-full h-[30px] bg-prtr-air-blue border border-prtr-deep-blue"
					>
						<p class="float-right pr-2">
							ยังขาดอีก ${getNumberWithCommas(goal[0] - couting)} รายชื่อ
						</p>
						<div
							class="h-full bg-prtr-healthy-blue"
							style="width: {percentWidth}%"
						/>
					</div>
				{:else}
					<div
						class="w-full h-[30px] bg-prtr-air-blue border border-prtr-deep-blue flex overflow-hidden"
					>
						<div
							class="h-full bg-prtr-deep-blue"
							style="width: {(goal[0] / currentGoal) * 100}%"
						/>
						<div
							class="h-full bg-prtr-healthy-blue"
							style="width: {percentWidth - (goal[0] / currentGoal) * 100}%"
						/>
					</div>
				{/if}

				<div class="mt-4 flex justify-center">
					<p class="p-1.5 w-fit font-anakotmai">
						อัปเดตข้อมูลล่าสุด 24 ธ.ค. 65
					</p>
				</div>
			</div>
		</div>

		<div class="w-[6vw] hidden md:block" />

		<div
			class="w-[510px] h-[445px] text-prtr-deep-blue bg-contain  flex-col justify-center items-center px-[60px]
			mt-[118px] lg:mt-0 hidden sm:flex"
			style="background-image: url('img/bg/bg_1_big.svg')"
		>
			<div>
				<p class="text-2xl sm:text-4xl font-bold text-center lg:text-left">
					“ข้อมูลมลพิษ คือสิทธิที่ประชาชนต้องเข้าถึงได้”
				</p>
				<p class="text-2xl mt-4 text-center lg:text-left">
					ร่วมเป็นส่วนหนึ่งสนับสนุนให้มีการรายงานการ
					ปล่อยและเคลื่อนย้ายสารมลพิษสู่สิ่งแวดล้อมเพื่อ
					ให้การเข้าถึงข้อมูลมลพิษเป็นสิทธิของประชาชน อย่างแท้จริง
				</p>
			</div>

			<div class="mt-4 flex justify-center w-[26px] md:w-[370px]">
				<button
					class="flex justify-center px-[21px] py-1 bg-prtr-air-blue border border-prtr-deep-blue shadow-md rounded w-full text-xl"
				>
					<span
						class="mr-[12.5px] font-anakotmai whitespace-nowrap overflow-hidden"
						>อ่านร่างพ.ร.บ.ฉบับเต็ม</span
					>
					<DocumentIcon />
				</button>
			</div>
		</div>
		<div
			class=" text-prtr-deep-blue bg-contain flex flex-col justify-center items-center
		mt-[118px] lg:mt-0 mb-0 lg:mb-[152px] sm:hidden"
		>
			<div class=" px-[30px]">
				<h1 class="text-2xl sm:text-4xl font-bold text-center">
					“ข้อมูลมลพิษ คือสิทธิที่ประชาชนต้องเข้าถึงได้”
				</h1>
				<p class="text-lg mt-4 text-center">
					ร่วมเป็นส่วนหนึ่งสนับสนุนให้มีการรายงานการ
					ปล่อยและเคลื่อนย้ายสารมลพิษสู่สิ่งแวดล้อมเพื่อ
					ให้การเข้าถึงข้อมูลมลพิษเป็นสิทธิของประชาชน อย่างแท้จริง
				</p>

				<div class="mt-4 flex justify-center lg:block">
					<p class="p-1.5 border border-prtr-deep-blue w-fit font-anakotmai">
						อัปเดตข้อมูลล่าสุด 24 ธ.ค. 65
					</p>
				</div>

				<div class=" w-full flex justify-center items-center">
					<div
						class="mt-3 w-[231px] h-[201px] bg-cover bg-center"
						style="background-image: url('img/bg/bg_1_small.svg')"
					/>
				</div>
			</div>
		</div>
	</div>
</div>
