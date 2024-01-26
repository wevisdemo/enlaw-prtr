<script>
	import { onMount } from 'svelte/internal';
	import { getOneTimeCounting } from '../config/db';

	export let toggleSign;

	let counting = getOneTimeCounting();

	function getNumberWithCommas(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	}

	function newTab(url) {
		window.open(url, '_blank');
	}
</script>

<div
	class=" bg-prtr-healthy-blue w-[300px] md:w-[420px] flex flex-col items-center text-white font-kanit text-2xl md:text-4xl"
>
	<div class="flex items-center mt-[100px]">
		<p class="text-[32px] md:text-[64px] font-bold">ลงชื่อสำเร็จ</p>
		<img src="img/check_icon/white_check.svg" alt="white check" class="ml-3" />
	</div>
	<div class=" px-10">
		<p class="mt-6 mb-7 text-center">คุณได้ร่วมเป็นส่วนหนึ่งในชื่อที่</p>
	</div>

	<div
		class="w-[240px] h-[44px] sm:w-[380px] sm:h-[78px] bg-prtr-deep-blue shadow-md rounded-xl flex justify-center items-center"
	>
		<p
			class="font-anakotmai text-[32px] md:text-6xl tracking-[0.24em] counting_number_big text-white"
		>
			{#await counting}
				<p>...waiting</p>
			{:then num}
				{getNumberWithCommas(num)}
			{/await}
		</p>
	</div>

	<p class="text-center my-6 mx-[14px]">
		เพื่อต่อต้านการปกปิดมลพิษ สร้างอนาคตทางสิ่งแวดล้อมที่ดี แก่สังคมไทย
	</p>
	<img src="img/illust/form_illust.svg" alt="white check" class="ml-3" />
	<p class="text-base my-6">แชร์เพื่อชวนเพื่อนมาร่วมลงชื่อ</p>

	<div class="flex">
		<button
			rel="noreferrer noopener"
			on:click={() =>
				newTab(
					'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fthaiprtr.com%2F&amp;src=sdkpreparse'
				)}
		>
			<img
				src="img/share_icon/share_facebook_default.svg"
				alt="white facebook"
				class="mx-1.5"
			/>
		</button>
		<button
			rel="noreferrer noopener"
			on:click={() =>
				newTab('https://twitter.com/intent/tweet?text=https://thaiprtr.com/')}
		>
			<img
				src="img/share_icon/share_twitter_default.svg"
				alt="white twitter"
				class="mx-1.5"
			/>
		</button>
		<button
			rel="noreferrer noopener"
			on:click={() =>
				newTab(
					'https://social-plugins.line.me/lineit/share?url=https://thaiprtr.com/'
				)}
		>
			<img
				src="img/share_icon/share_line_default.svg"
				alt="white line"
				class="mx-1.5"
			/>
		</button>
	</div>

	<div class="h-6 md:h-[158px]" />

	<div class="px-5 w-full mb-5 md:mb-8">
		<button
			class=" flex justify-center w-full bg-white text-prtr-deep-blue border border-prtr-deep-blue py-[17px] rounded shadow-md"
			on:click={toggleSign}
		>
			<span class="mr-1 text-xl">ลงชื่อเพิ่ม</span>
			<img src="img/ui_icon/pen.svg" alt="pen" />
		</button>
	</div>
</div>
