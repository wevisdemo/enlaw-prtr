<script>
	export let isExpand;
</script>

<div
	class={`flex justify-between bg-prtr-healthy-blue py-6 px-6 mb-1 border border-prtr-border-purple rounded-lg text-white`}
>
	<p class="text-[28px] mr-5 text-left font-kanit leading-[110%]"><slot /></p>
	<div class="flex flex-col items-center w-fit">
		<p class="text-sm whitespace-nowrap font-anakotmai">{isExpand ? 'ปิด' : 'อ่านเพิ่มเติม'}</p>

		<!-- rotate icon animation -->
		{#if isExpand}
			<svg
				width="48"
				height="49"
				viewBox="0 0 49 49"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="mt-1 mr-[10px]"
			>
				<circle
					r="24"
					transform="matrix(1.19249e-08 -1 -1 -1.19249e-08 24 24.5)"
					fill="#08274C"
				/>
				<path
					d="M22.8117 34.0071L25.1885 34.0071L25.1885 19.7462L31.7247 26.2824L33.4122 24.5949L24.0001 15.1827L14.5879 24.5949L16.2754 26.2824L22.8117 19.7462L22.8117 34.0071Z"
					fill="white"
				/>
			</svg>
		{:else}
			<svg
				width="49"
				height="49"
				viewBox="0 0 49 49"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="mt-1"
			>
				<circle
					r="24"
					transform="matrix(-4.37114e-08 1 1 4.37114e-08 24.7998 24.5)"
					fill="#08274C"
				/>
				<rect
					width="28.5217"
					height="28.5217"
					transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 39.0605 10.2393)"
					fill="#08274C"
				/>
				<path
					d="M25.9881 14.9927L23.6113 14.9927L23.6113 29.2535L17.0751 22.7173L15.3876 24.4048L24.7997 33.817L34.2119 24.4048L32.5244 22.7173L25.9881 29.2535L25.9881 14.9927Z"
					fill="white"
				/>
			</svg>
		{/if}
	</div>
</div>