<script>
	import { scrollRef } from 'svelte-scrolling';
	import PartnerButton from '../components/PartnerComponent/PartnerButton.svelte';
</script>

<div
	class="flex justify-center items-center pt-14 pb-16 mb-1.5 flex-col text-prtr-deep-blue"
	use:scrollRef={'partner'}
>
	<div class="flex justify-center items-center">
		<p class="font-kanit font-bold leading-title text-4xl md:text-title">
			เกี่ยวกับเรา
		</p>
	</div>

	<div class="flex flex-col lg:flex-row">
		<div
			class="flex flex-col md:flex-row mt-3 md:mt-8 lg:mt-[42px] items-center md:items-start"
		>
			<div
				class="mr-0 md:mr-[64px] lg:mr-[76px] w-[165px] md:w-[180px] lg:w-[219px] h-[97px]  md:h-[80px] lg:h-[72px]"
			>
				<img src="img/client/img/client_enlaw.png" alt="client enlaw" />
			</div>
			<div class="">
				<p class="font-kanit font-bold leading-7 text-xl md:text-[28px] mb-3">
					ติดตาม ENLAW
				</p>
				<PartnerButton
					icon="img/client/logo/share_web.svg"
					text="Website"
					link="https://enlawfoundation.org/"
				/>
				<PartnerButton
					icon="img/client/logo/share_facebook.svg"
					text="Facebook"
					link="https://www.facebook.com/Enlawthai2001"
				/>
				<PartnerButton
					icon="img/client/logo/share_twitter.svg"
					text="Twitter"
					link="https://twitter.com/enlawthai"
				/>
			</div>
		</div>

		<div class="w-[97px] hidden lg:block" />

		<div
			class="flex flex-col md:flex-row mt-8 md:mt-6 lg:mt-[42px] items-center md:items-start"
		>
			<div class="pt-0.5 mr-0 md:mr-[64px] lg:mr-[76px] w-[180px] h-[176px]">
				<img
					src="img/client/img/client_earth.png"
					alt="client earth"
					class="mr-2.5"
				/>
			</div>
			<div class="mt-8 md:mt-0">
				<p class="font-kanit font-bold leading-7 text-xl md:text-[28px] mb-3">
					ติดตาม EARTH
				</p>
				<PartnerButton
					icon="img/client/logo/share_web.svg"
					text="Website"
					link="https://www.earththailand.org/th"
				/>
				<PartnerButton
					icon="img/client/logo/share_facebook.svg"
					text="Facebook"
					link="https://www.facebook.com/EarthEcoAlert"
				/>
				<PartnerButton
					icon="img/client/logo/share_twitter.svg"
					text="Twitter"
					link="https://twitter.com/EarthTH2009"
				/>
			</div>
		</div>
	</div>

	<div class="flex justify-center items-center mt-8 lg:mt-[114px]">
		<p class="font-kanit font-bold leading-title text-xl md:text-title">
			Partners
		</p>
	</div>

	<div class="flex justify-center items-center mt-11">
		<a href="https://wevis.info/" class="mx-4">
			<img src="img/company_logo/wevis_logo.svg" alt="wevis logo" />
		</a>
		<a href="https://punchup.world/" class="mx-4">
			<img src="img/company_logo/punch_up_logo.svg" alt="punch-up logo" />
		</a>
	</div>
</div>
