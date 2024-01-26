<script>
	export let toggleDummy;
    export let changeDummy;
	export let dummy_count;
	export let isDummy;

	let tmpDummy = isDummy;
    let tmpCount = dummy_count;

	function handleRadio() {
		tmpDummy = !tmpDummy;
		toggleDummy();
	}

    $: changeDummy(tmpCount)
    $: tmpCount = tmpCount > 0 ? tmpCount : 1
</script>

<div class="flex justify-center items-center flex-col">
    <div class="flex justify-center items-center flex-col">
		dummy count is: {tmpCount}
		<input type="number" bind:value={tmpCount} class=" bg-prtr-air-blue text-center"/>
	</div>
	<div class="flex justify-center items-center mt-6">
		use dummy: {tmpDummy}
		<input type="checkbox" checked={tmpDummy} on:click={handleRadio} class="ml-2 mt-1" />
	</div>
</div>
