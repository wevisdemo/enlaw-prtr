<script>
	import DocumentIcon from '../ImportanceComponent/DocumentIcon.svelte';

	export let docName = undefined

	const fileNameMapping = {
		'doc_1': 'PRIVACY POLICY งาน PRTR',
		'doc_2': 'สรุปสาระสำคัญร่างกฎหมาย PRTR',
		'doc_3': 'ร่างกฎหมาย PRTR ฉบับเต็ม'
	}
</script>

<a href={docName === undefined ? '' : `docs/${docName}.pdf`} download={docName && fileNameMapping[docName]}>
	<button
	class="flex justify-center py-1 bg-prtr-air-blue border border-prtr-deep-blue shadow-md rounded w-full text-xl"
>
	<span class="mr-[12.5px] font-anakotmai whitespace-nowrap overflow-hidden"><slot /></span>
	<DocumentIcon />
</button>
</a>
