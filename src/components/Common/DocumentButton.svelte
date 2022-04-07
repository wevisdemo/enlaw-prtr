<script>
	import DocumentIcon from '../ImportanceComponent/DocumentIcon.svelte';
</script>

<button
	class="flex justify-center py-1 bg-prtr-air-blue border border-prtr-deep-blue shadow-md rounded w-full text-xl"
>
	<span class="mr-[12.5px] font-anakotmai whitespace-nowrap overflow-hidden"><slot /></span>
	<DocumentIcon />
</button>
