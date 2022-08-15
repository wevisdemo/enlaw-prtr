<script>
	import DocumentIcon from '../ImportanceComponent/DocumentIcon.svelte';

	export let docName = undefined;

	// const fileNameMapping = {
	// 	doc_1: 'แบบฟอร์มเข้าชื่อ PRTR ฉบับเต็ม',
	// 	doc_2: 'สรุปร่าง PRTR',
	// 	doc_3: 'ร่าง PRTR ฉบับเต็ม (ประทับรับรอง)',
	// };
	const fileLinkMapping = {
		doc_1: 'https://firebasestorage.googleapis.com/v0/b/enlaw-prtr.appspot.com/o/Draft-ThaiPRTR-Act.pdf?alt=media&token=31021d9f-d092-445e-a103-161b2e4e4d81',
		doc_2: 'https://firebasestorage.googleapis.com/v0/b/enlaw-prtr.appspot.com/o/%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%9F%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%A1%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD%20PRTR.pdf?alt=media&token=f5bba19f-b9b1-47ac-bc5c-4311239dd101',
		doc_3: 'https://firebasestorage.googleapis.com/v0/b/enlaw-prtr.appspot.com/o/%E0%B9%84%E0%B8%9F%E0%B8%A5%E0%B9%8C%E0%B8%AA%E0%B8%A3%E0%B8%B8%E0%B8%9B%E0%B8%A3%E0%B9%88%E0%B8%B2%E0%B8%87%20PRTR.pdf?alt=media&token=bea1e14a-21ad-4c70-9bfb-a0b53547c3cf',
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
