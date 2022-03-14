<script>
</script>

<div
	class="flex justify-center items-center pt-14 pb-16 mb-1.5 flex-col text-prtr-deep-blue"
>
	<div class="flex justify-center items-center">
		<p class=" title_font">เกี่ยวกับเรา</p>
	</div>

	<div class="flex px-[104px]">
		<div class=" mt-10 pt-0.5 mx-9">
			<p class=" text_font">ติดตาม ENLAW</p>
		</div>
		<div class=" mt-10 pt-0.5 mx-9">
			<p class=" text_font">ติดตาม ENLAW</p>
		</div>
		<div class=" mt-10 pt-0.5 mx-9">
			<p class=" text_font">ติดตาม ENLAW</p>
		</div>
		<div class=" mt-10 pt-0.5 mx-9">
			<p class=" text_font">ติดตาม EARTH</p>
		</div>
	</div>

	<div class="flex justify-center items-center mt-28">
		<p class=" title_font">Partners</p>
	</div>

	<div class="flex justify-center items-center mt-11">
		{#each Array(6) as _, i}
			<div class="mx-2">
				<svg
					width="120"
					height="120"
					viewBox="0 0 120 120"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle cx="60" cy="60" r="60" fill="#EEEEEE" />
				</svg>
			</div>
		{/each}
	</div>
</div>

<style>
	.title_font {
		font-size: 80px;
		font-family: 'Termtem';
		font-style: normal;
		font-weight: 700;
		line-height: 90%;
	}

	.text_font {
		font-size: 28px;
		font-family: 'Termtem';
		font-style: normal;
		font-weight: 700;
		line-height: 90%;
	}
</style>
