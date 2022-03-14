<script>
	export let isNoIcon;
	export let isSecondary;
</script>

<div
	class={`flex justify-${isNoIcon ? 'center' : 'start'} items-center bg-prtr-${
		isSecondary ? 'healthy' : 'deep'
	}-blue py-2.5 px-5 mb-1 border border-white rounded-lg text-white`}
>
	{#if !isNoIcon}
		<span class="mr-2.5">
			{#if !isSecondary}
				<svg
					width="48"
					height="48"
					viewBox="0 0 48 48"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM35.3938 19.9945C36.2744 19.0038 36.1852 17.4868 35.1945 16.6062C34.2038 15.7256 32.6868 15.8149 31.8062 16.8056L20.8 29.1875L16.1938 24.0056C15.3132 23.0149 13.7962 22.9256 12.8056 23.8062C11.8149 24.6868 11.7256 26.2038 12.6062 27.1945L15.8062 30.7945L19.0062 34.3945C19.4617 34.9069 20.1145 35.2 20.8 35.2C21.4856 35.2 22.1384 34.9069 22.5938 34.3945L35.3938 19.9945Z"
						fill="#20AAD7"
					/>
				</svg>
			{/if}
			{#if isSecondary}
				<svg
					width="48"
					height="48"
					viewBox="0 0 48 48"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle cx="24" cy="24" r="24" fill="#C4C4C4" />
				</svg>
			{/if}
		</span>
	{/if}

	<p class="text-4xl"><slot /></p>
</div>
