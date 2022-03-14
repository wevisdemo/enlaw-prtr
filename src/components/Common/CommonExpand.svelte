<script>
	import ExpandHeaderBox from './ExpandHeaderBox.svelte';
	import ExpandContentBox from './ExpandContentBox..svelte';

	export let title = '';

	let isExpand = false;

	function handleExpand () {
		isExpand = !isExpand
	}
</script>

<div>
	<button on:click={() => handleExpand()}>
		<ExpandHeaderBox {isExpand}>{title}</ExpandHeaderBox>
	</button>
	{#if isExpand}
		<ExpandContentBox><slot /></ExpandContentBox>
	{/if}
</div>
