<script>
	import CommonCard from '../components/Common/CommonCard.svelte';
	import CommonExpand from '../components/Common/CommonExpand.svelte';

	import SignForm from '../components/SignForm.svelte';
</script>

<div class="tmp bg-red-200 flex flex-col justify-center items-center">
	<div class="flex">
		<div class="Card_Container">
			<CommonCard title="PRTR คืออะไร​ ?">
				<h1>Introduce</h1>
			</CommonCard>
		</div>
		<div class="Card_Container ml-5">
			<CommonCard title="PRTR คืออะไร​ ?" isSecondary>
				<h1>Introduce</h1>
			</CommonCard>
		</div>
		<div class="Card_Container ml-5">
			<CommonCard title="PRTR คืออะไร​ ?" isNoIcon>
				<h1>Introduce</h1>
			</CommonCard>
		</div>
		<div class="Card_Container ml-5">
			<CommonExpand title="ใครลงชื่อเสนอ PRTR ได้บ้าง ?">
				<h1>Introduce</h1>
			</CommonExpand>
		</div>
	</div>

	<div class="flex mt-32">
		<SignForm />
	</div>
</div>

<style>
	.tmp {
		height: 200vh;
	}

	.Card_Container {
		width: 420px;
		height: 300px;
	}
</style>
