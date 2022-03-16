<script>
	export let label = '';
	export let subLabel = undefined;

	export let SelectOption = undefined;
	export let id = '';
	let value = '';
	export let onChange

	$: onChange(value)
</script>

<div class="basis-full flex flex-col">
	<label class="mb-0.5 font-anakotmai" for={id}>
		{label}
	</label>

	{#if SelectOption !== undefined}
		<select
			class="bg-prtr-air-blue text-lg p-1.5 font-baijamjuree"
			{id}
			required
			bind:value
			{...$$props}
		>
			{#each SelectOption as o}
				<option>{o}</option>
			{/each}
		</select>
	{:else}
		<input
			class="bg-prtr-air-blue text-lg border rounded-sm w-full py-1.5 px-2 text-prtr-deep-blue leading-tight focus:outline-none focus:shadow-outline font-baijamjuree"
			{id}
			type="text"
			bind:value
			{...$$props}
		/>
	{/if}

	{#if subLabel !== undefined}
		<p class="text-xs">{subLabel}</p>
	{/if}
</div>
