<script>
	import DocumentIcon from '../ImportanceComponent/DocumentIcon.svelte';
</script>

<button
	class="flex justify-center px-11 py-1 bg-prtr-air-blue border border-prtr-deep-blue  shadow-md rounded w-full"
>
	<span><slot /></span>
	<DocumentIcon />
</button>
