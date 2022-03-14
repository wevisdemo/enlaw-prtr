<script>
	import NegativeLogo from '../components/OperationComponent/NegativeLogo.svelte';
	import ScrollIndicator from '../components/OperationComponent/ScrollIndicator.svelte';
</script>

<div class="tmp1 bg-prtr-fresh-green flex flex-col pt-16 pl-52 pb-12">
	<div class="flex justify-between w-full pr-16">
		<div class="flex items-center">
			<NegativeLogo />
			<p class="title_font text-prtr-deep-blue ml-3">ทำงานอย่างไร</p>
		</div>
		<div class="flex pr-1 items-center font-anakotmai">
			<ScrollIndicator />
			<div>
				<p>เลื่อน</p>
				<p>เพื่อสำรวจ</p>
			</div>
		</div>
	</div>

	<div
		class="tmp2 bg-prtr-healthy-blue flex justify-center items-center mt-16 w-full rounded-3xl shadow-md"
	>
		TEST
	</div>
</div>

<style>
	.tmp1 {
		height: 100vh;
	}

	.tmp2 {
		height: 720px;
	}

	.title_font {
		font-size: 80px;
		font-family: 'Termtem';
		font-style: normal;
		font-weight: 700;
		line-height: 90%;
	}
</style>
