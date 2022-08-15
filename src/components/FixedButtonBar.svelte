<script>
	import { onMount } from 'svelte';
	import { scrollTo } from 'svelte-scrolling';
	import LinkIconWrapper from './FixedButtonBar/LinkIconWrapper.svelte';

	let url;

	function handleButton() {
		console.log('url', url)
	}

	function newTab(url) {
		window.open(url);
	}

	onMount(() => (url = window.location.href));
</script>

<span>
	<div class="flex flex-row justify-between menu-font text-white">
		<div class="flex grow">
			<p class="break-normal mr-2 my-1 font-anakotmai hidden md:block">
				แชร์ให้เพื่อน
			</p>

			<button
				on:click={() => newTab("https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fthaiprtr.com%2F&amp;src=sdkpreparse")}
			>
				<img
					src="img/share_icon/share_facebook_default.svg"
					alt="share facebook"
					height="32px"
					width="32px"
				/>
			</button>
			<LinkIconWrapper
				url="https://twitter.com/intent/tweet?text=https://thaiprtr.com/"
			>
				<img
					src="img/share_icon/share_twitter_default.svg"
					alt="share twitter"
					height="32px"
					width="32px"
					class="mx-2"
				/>
			</LinkIconWrapper>
			<LinkIconWrapper
				url="https://social-plugins.line.me/lineit/share?url=https://thaiprtr.com/"
			>
				<img
					src="img/share_icon/share_line_default.svg"
					alt="share line"
					height="32px"
					width="32px"
				/>
			</LinkIconWrapper>
		</div>

		<a href="#sign" use:scrollTo={"sign"}>
			<button
				class="bg-white text-prtr-deep-blue rounded w-[158px] md:w-[331px] lg:w-[480px] py-1 ml-5 mr-0 sm:mr-6 lg:mr-[58px] flex justify-center items-center font-anakotmai"
				on:click={() => handleButton()}
			>
				<span class="text-xl">ลงชื่อเลย</span>
				<span class="ml-1.5"
					><img
						src="img/pen_icon/pen_icon.svg"
						alt="pen icon"
						class=" disabled:hidden"
					/></span
				>
			</button>
		</a>
	</div>
</span>

<style>
	.menu-font {
		font-family: Kondolar Thai, 'serif';
		--tw-space-x-reverse: 0;
	}
</style>
