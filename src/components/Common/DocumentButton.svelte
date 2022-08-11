<script>
	import DocumentIcon from '../ImportanceComponent/DocumentIcon.svelte';

	export let docName = undefined;

	const fileNameMapping = {
		doc_1: 'แบบฟอร์มเข้าชื่อ PRTR ฉบับเต็ม',
		doc_2: 'สรุปร่าง PRTR',
		doc_3: 'ร่าง PRTR ฉบับเต็ม (ประทับรับรอง)',
	};
</script>

<a
	href={docName === undefined ? '' : `docs/${docName}.pdf`}
	download={docName && fileNameMapping[docName]}
>
	<button
		class="flex justify-center py-1 bg-prtr-air-blue border border-prtr-deep-blue shadow-md rounded w-full text-xl"
	>
		<p class="mr-[12.5px] font-anakotmai">
			<slot />
		</p>
		<DocumentIcon />
	</button>
</a>
