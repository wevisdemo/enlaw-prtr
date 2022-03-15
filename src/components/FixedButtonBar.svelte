<script>
	import LinkIconWrapper from './FixedButtonBar/LinkIconWrapper.svelte';

	import PenIcon from './FixedButtonBar/icon/PenIcon.svelte';
</script>

<span>
	<div class="flex flex-row justify-between menu-font text-white">
		<div class="flex grow">
			<p class="break-normal mr-2 my-1 font-anakotmai">แชร์ให้เพื่อน</p>

			<LinkIconWrapper url="https://www.google.com/">
				<img src="img/share_icon/share_facebook_default.svg" alt='share facebook' height="32px" width="32px" />
			</LinkIconWrapper>
			<LinkIconWrapper url="https://www.google.com/">
				<img src="img/share_icon/share_twitter_default.svg" alt='share twitter' height="32px" width="32px" />
			</LinkIconWrapper>
			<LinkIconWrapper url="https://www.google.com/">
				<img src="img/share_icon/share_line_default.svg" alt='share line' height="32px" width="32px" />
			</LinkIconWrapper>
		</div>

		<button
			class="bg-white text-prtr-deep-blue rounded px-5 py-1 mx-6 flex items-center font-anakotmai"
		>
			<span>ลงชื่อเลย</span>
			<span class="ml-1.5"><PenIcon /></span>
		</button>
	</div>
</span>

<style>
	.menu-font {
		font-family: Kondolar Thai, 'serif';
		--tw-space-x-reverse: 0;
	}
</style>
