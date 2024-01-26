<script>
	export let icon = undefined;
	export let isSecondary;
</script>

<div
	class={`flex justify-${
		icon === undefined ? 'center' : 'start'
	} items-center bg-prtr-${
		isSecondary ? 'healthy' : 'deep'
	}-blue py-2.5 px-5 mb-1 border border-white rounded-lg text-white`}
>
	{#if icon}
		<div class="w-7 md:w-12 h-7 md:h-12">
			<img src={icon} alt={`${icon}`} />
		</div>
	{/if}

	<div class="w-[194px] md:w-[320px]">
		<p class="pl-2.5 text-2xl md:text-4xl font-kanit"><slot /></p>
	</div>
</div>
