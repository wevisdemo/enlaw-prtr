<script>
	import FixedTopBar from '../components/FixedTopBar.svelte';
	import FixedButtonBar from '../components/FixedButtonBar.svelte';

	import Landing from '../sections/LandingPage.svelte';
	import Introduce from '../sections/Introduce.svelte';
	import Benefit from '../sections/Benefit.svelte';
	import Operation from '../sections/Operation.svelte';
	import Importance from '../sections/Importance.svelte';
	import Sign from '../sections/Sign.svelte';
	import Partner from '../sections/Partner.svelte';
	import About from '../sections/About.svelte';
</script>

<svelte:head>
	<title>EnLaw - PRTR</title>
</svelte:head>
<div class="scroll-smooth">
	<nav class="sticky top-0 py-3 px-11 bg-prtr-fresh-green shadow-md z-50">
		<FixedTopBar />
	</nav>
	<div>
		<Landing />
		<Introduce />
		<Benefit />
		<Operation />
		<Importance />
		<Sign />
		<Partner />
		<About />
	</div>

	<div
		class="sticky bottom-0 py-3.5 px-[15px] md:px-11 xl:px-[193px] bg-prtr-deep-blue border border-white"
	>
		<FixedButtonBar />
	</div>
</div>
