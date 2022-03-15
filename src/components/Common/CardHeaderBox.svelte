<script>
	export let icon = undefined;
	export let isSecondary;
</script>

<div
	class={`flex justify-${icon === undefined ? 'center' : 'start'} items-center bg-prtr-${
		isSecondary ? 'healthy' : 'deep'
	}-blue py-2.5 px-5 mb-1 border border-white rounded-lg text-white`}
>
	{#if icon}
		<img src={icon} alt={`${icon}`} class="mr-2.5" height="48px" width="48px" />
	{/if}

	<p class="text-4xl"><slot /></p>
</div>
