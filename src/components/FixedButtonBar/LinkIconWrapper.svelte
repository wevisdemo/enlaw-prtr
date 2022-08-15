<script>
    export let url;
    
    function newTab(url) {
		window.open(url);
	}
</script>

<button rel="noreferrer noopener" on:click={() => newTab(url)}>
	<slot />
</button>
