<script>
	import FixedTopBar from '../components/FixedTopBar.svelte';
	import FixedButtonBar from '../components/FixedButtonBar.svelte';

	import Landing from '../sections/LandingPage.svelte';
	import Introduce from '../sections/Introduce.svelte';
	import Benefit from '../sections/Benefit.svelte';
	import Operation from '../sections/Operation.svelte';
	import Importance from '../sections/Importance.svelte';
	import Sign from '../sections/Sign.svelte';
	import Contact from '../sections/Contact.svelte';
	import About from '../sections/About.svelte';

	import Temp from '../sections/Temp.svelte';
</script>

<div>
	<div class="sticky top-0 py-3 px-11 bg-prtr-fresh-green shadow-md">
		<FixedTopBar />
	</div>

	<div>
		<!-- <Temp /> -->
		<div class="border-b-4 border-pink-300">
			<Landing />
		</div>
		<Introduce />
		<Benefit />
		<Operation />
		<Importance />
		<Sign />
		<Contact />
		<About />
	</div>

	<div class="sticky bottom-0 py-3.5 px-8 bg-prtr-deep-blue border border-white">
		<FixedButtonBar />
	</div>
</div>

<style>
</style>
