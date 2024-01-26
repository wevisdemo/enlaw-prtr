<script>
	import Spinner from '../Spinner.svelte';

	export let text;
	export let isLoading = false;
</script>

{#if isLoading}
	<Spinner />
{:else}
	<p
		class="font-anakotmai text-[32px] md:text-6xl tracking-[0.24em] counting_number_big text-white"
	>
		{text}
	</p>
{/if}
