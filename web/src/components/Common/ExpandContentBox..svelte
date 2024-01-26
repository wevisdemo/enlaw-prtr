<script>
	import { slide } from 'svelte/transition';
</script>

<span>
	<div
		class={`flex justify-center items-center bg-white h-full rounded-lg border border-prtr-border-blue text-prtr-deep-blue p-5`}
		transition:slide
	>
		<slot />
	</div>
</span>
