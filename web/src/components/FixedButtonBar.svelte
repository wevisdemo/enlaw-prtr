<script>
	import { onMount } from 'svelte';
	// import { scrollTo } from 'svelte-scrolling';
	// import LinkIconWrapper from './FixedButtonBar/LinkIconWrapper.svelte';

	let url;
	let encodedURL;

	function newTab(url) {
		window.open(url, '_blank');
	}

	onMount(() => {
		url = window.location.href;
		encodedURL = encodeURI('https://thaiprtr.com');
	});
</script>

<span>
	<div class="flex flex-row justify-between menu-font text-white z-50">
		<div class="flex grow">
			<p class="break-normal mr-2 my-1 font-anakotmai hidden md:block">
				แชร์ให้เพื่อน
			</p>
			<a
				target="_blank"
				rel="noreferrer noopener"
				href={`http://www.facebook.com/sharer/sharer.php?u=${encodedURL}`}
			>
				<img
					src="img/share_icon/share_facebook_default.svg"
					alt="share facebook"
					height="32px"
					width="32px"
				/>
			</a>
			<a
				target="_blank"
				rel="noreferrer noopener"
				href={`https://twitter.com/intent/tweet?url=${encodedURL}`}
			>
				<img
					src="img/share_icon/share_twitter_default.svg"
					alt="share twitter"
					height="32px"
					width="32px"
					class="mx-2"
				/>
			</a>
			<a
				target="_blank"
				rel="noreferrer noopener"
				href={`https://social-plugins.line.me/lineit/share?url=${encodedURL}`}
			>
				<img
					src="img/share_icon/share_line_default.svg"
					alt="share line"
					height="32px"
					width="32px"
				/>
			</a>
		</div>

		<button
			disabled
			class="bg-white text-prtr-deep-blue rounded w-[158px] md:w-[331px] lg:w-[480px] py-1 ml-5 mr-0 sm:mr-6 lg:mr-[58px] flex justify-center items-center font-anakotmai z-50 opacity-40"
		>
			<span class="text-xl">ปิดรับลงชื่อแล้ว</span>
			<!-- <span class="ml-1.5"
				><img
					src="img/pen_icon/pen_icon.svg"
					alt="pen icon"
					class=" disabled:hidden"
				/></span
			> -->
		</button>
	</div>
</span>

<style>
	.menu-font {
		font-family: Kondolar Thai, 'serif';
		--tw-space-x-reverse: 0;
	}
</style>
