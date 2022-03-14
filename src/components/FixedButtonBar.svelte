<script>
	import LinkIconWrapper from './FixedButtonBar/LinkIconWrapper.svelte';

	import FacebookIcon from './FixedButtonBar/icon/FacebookIcon.svelte';
	import LineIcon from './FixedButtonBar/icon/LineIcon.svelte';
	import TweeterIcon from './FixedButtonBar/icon/TweeterIcon.svelte';

	import PenIcon from './FixedButtonBar/icon/PenIcon.svelte';
</script>

<span>
	<div class="flex flex-row justify-between menu-font text-white">
		<div class="flex grow">
			<p class="break-normal mr-2 my-1 font-anakotmai">แชร์ให้เพื่อน</p>

			<LinkIconWrapper url="https://www.google.com/">
				<FacebookIcon />
			</LinkIconWrapper>
			<LinkIconWrapper url="https://www.google.com/">
				<TweeterIcon />
			</LinkIconWrapper>
			<LinkIconWrapper url="https://www.google.com/">
				<LineIcon />
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
