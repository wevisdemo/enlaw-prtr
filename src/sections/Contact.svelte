<script>
	import ContactButton from '../components/ContactComponent/ContactButton.svelte';
</script>

<div
	class="flex justify-center items-center pt-14 pb-16 mb-1.5 flex-col text-prtr-deep-blue"
>
	<div class="flex justify-center items-center">
		<p class=" title_font">เกี่ยวกับเรา</p>
	</div>

	<div class="flex px-[104px] pt-10">
		<div class="pt-0.5 mx-9">
			<img
				src="img/client/img/client_enlaw.png"
				alt="client enlaw"
				class="mr-2.5"
				height="100px"
				width="220px"
			/>
		</div>
		<div class="pt-0.5 mx-9">
			<p class=" text_font mb-2">ติดตาม ENLAW</p>
			<ContactButton icon="img/client/logo/share_web.svg" text="Website" />
			<ContactButton icon="img/client/logo/share_facebook.svg" text="Facebook" />
			<ContactButton icon="img/client/logo/share_twitter.svg" text="Twitter" />
		</div>
		<div class="pt-0.5 mx-9">
			<img
				src="img/client/img/client_earth.png"
				alt="client earth"
				class="mr-2.5"
				height="180px"
				width="180px"
			/>
		</div>
		<div class="pt-0.5 mx-9">
			<p class=" text_font mb-2">ติดตาม EARTH</p>
			<ContactButton icon="img/client/logo/share_web.svg" text="Website" />
			<ContactButton icon="img/client/logo/share_facebook.svg" text="Facebook" />
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
