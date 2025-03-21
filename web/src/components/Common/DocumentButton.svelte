<script>
	import DocumentIcon from '../ImportanceComponent/DocumentIcon.svelte';

	export let docName = undefined;

	const fileLinkMapping = {
		doc_1: '/docs/ร่างพรบPRTRภาคประชาชน-ฉบับประธานสภาเห็นชอบให้เข้าชื่อ.pdf',
		doc_2: '/docs/แบบฟอร์มเข้าชื่อPRTR.pdf',
		doc_3: '/docs/สรุปร่างพรบPRTR.pdf',
	};
</script>

<a
	href={docName === undefined ? '' : fileLinkMapping[docName]}
	target="_blank"
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
