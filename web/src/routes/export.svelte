<script>
	import { getAll } from '../config/db';
	import { ExportToCsv } from 'export-to-csv';
	import fs from 'fs';

	let isLogin = false;
	let input = '';
	const password = '123456';

	async function exportList(type) {
		let result = await getAll();
		if (type === 'csv') {
			exportCvs(result);
		} else if (type === 'json') {
			exportJson(result);
		}
	}

	function exportCvs(data) {
		const reportName = 'prtr_pettitor';
		const output = data.map((d, i) => ({
			id: i + 1,
			title: d.title,
			name: `${d.surname} ${d.lastname}`,
			citizen_id: d.citizenId.replace(
				/(\d{1})(\d{4})(\d{5})(\d{2})(\d{1})/,
				'$1-$2-$3-$4-$5'
			),
			birthDay: `${d.birthDay_day}/${d.birthDay_month}/${d.birthDay_year}`,
			email: d.email,
			tel: d.tel,
			location: `${d.location} `,
			signature: d.signature,
		}));

		const options = {
			fieldSeparator: ',',
			decimalSeparator: '.',
			showTitle: true,
			title: reportName,
			useTextFile: false,
			useKeysAsHeaders: true,
			filename: reportName,
		};

		const csvExporter = new ExportToCsv(options);
		csvExporter.generateCsv(output);
	}

	function exportJson(data) {
		const output = JSON.stringify(data);
		const file = new File([''], 'TEST.txt');
		fs.writeFileSync('../../src/downloads', output);
	}

	function handleSubmit() {
		if (input === password) {
			isLogin = true;
		}
	}
</script>

<div
	class="bg-gradient-to-b from-prtr-gradient-a via-prtr-gradient-b to-prtr-gradient-c flex flex-col justify-center items-center w-screen h-screen"
>
	<p class="text-[78px] mb-4 md:mb-11 text-prtr-deep-blue">EXPORT PETTITOR</p>
	{#if isLogin}
		<div class="flex">
			<button
				class="text-white hover:text-prtr-healthy-blue bg-prtr-deep-blue rounded flex justify-center items-center px-10 py-4 shadow-xl mx-2"
				on:click={() => {
					exportList('csv');
				}}
			>
				<p class="text-xl">export CSV</p>
			</button>
			<button
				class="text-white hover:text-prtr-healthy-blue bg-prtr-deep-blue rounded flex justify-center items-center px-10 py-4 shadow-xl  mx-2"
				on:click={() => {
					exportList('json');
				}}
			>
				<p class="text-xl">export JSON</p>
			</button>
		</div>
	{:else}
		<div>
			<input
				class="mt-5 bg-prtr-air-blue text-lg border rounded-sm w-full py-1.5 px-2 text-prtr-deep-blue leading-tight"
				placeholder="password"
				type="password"
				bind:value={input}
			/>
			<div class="flex justify-center">
				<button
					class=" disabled:bg-prtr-healthy-blue bg-prtr-deep-blue text-white px-4 py-2 mt-3"
					disabled={input === ''}
					on:click={handleSubmit}>SUBMIT</button
				>
			</div>
		</div>
	{/if}
</div>
