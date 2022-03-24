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
	
	import { onMount } from 'svelte';
	import { getData } from '../config/db';
	
	const goal = [10000, 20000, 50000, 100000];

	let currentGoal = goal[0];
	// let couting = 40000;
	let couting
	
	$: currentGoal = goal[goal.filter((i) => i < couting).length] || goal[3];
			
	onMount(() => {
		initData()
	});
	
	async function initData() {
		try {
			couting = await (await getData()).length;
			console.log('couting', couting);
		} catch (e) {
			console.log('e', e);
		}
	}
</script>

<div>
	<div class="sticky top-0 py-3 px-11 bg-prtr-fresh-green shadow-md z-50">
		<FixedTopBar />
	</div>

	<div>
		<div class="border-b-4 border-pink-300">
			<Landing couting={couting} />
		</div>
		<Introduce />
		<Benefit />
		<Operation />
		<Importance />
		<Sign />
		<Partner />
		<About />
	</div>

	<div class="sticky bottom-0 py-3.5 px-[15px] md:px-11 xl:px-[193px] bg-prtr-deep-blue border border-white">
		<FixedButtonBar />
	</div>
</div>

<style>
</style>
