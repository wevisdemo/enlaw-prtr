<script>
	export let url;

	function newTab(url) {
		window.open(url, '_blank');
	}
</script>

<button rel="noreferrer noopener" on:click={() => newTab(url)}>
	<slot />
</button>
