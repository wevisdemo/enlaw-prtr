<script>
	import ScrollIndicator from '../components/OperationComponent/ScrollIndicator.svelte';
	import { spring } from 'svelte/motion';

	let limit;
	const defaultCoordination = { x: 0 };
	let coords = spring(defaultCoordination);
	let position = 0;

	const drag = (node) => {
		let x;

		coords.subscribe((current) => {
			node.style.transform = `translate3d(${current.x}px, 0px, 0)`;
		});

		node.addEventListener('pointerdown', mousedown, false);

		function mousedown(event) {
			x = event.clientX;
			window.addEventListener('pointerup', mouseup);
			window.addEventListener('pointermove', mousemove);
		}

		function mouseup() {
			window.removeEventListener('pointerup', mouseup);
			window.removeEventListener('pointermove', mousemove);

			x = 0;

			if (position < -limit) {
				position = -limit
				coords.update(() => {
					return {
						x: -limit,
					};
			});
			} else if (position > 0) {
				position = 0
				coords.update(() => {
					return {
						x: 0,
					};
			});
			}
		}

		function mousemove(event) {
			const dx = event.clientX - x
			x = event.clientX;

			position = position + dx;

			coords.update((current) => {
				if (position >= -limit && position <= 0) {
					return {
						x: current.x + dx,
					};
				} else {
					return {
						x: current.x,
					};
				}
			});
		}
	};
</script>

<div class="bg-prtr-fresh-green flex flex-col pt-16 pb-12 overflow-hidden">
	<div class="flex flex-col lg:flex-row justify-between w-full">
		<div class="flex flex-col md:flex-row justify-center items-center">
			<div class="w-[140px] md:w-[240px] h-[34px] md:h-[56px]">
				<img
					src="img/logo/logo_default.svg"
					alt="logo"
					class="hidden md:block"
				/>
				<img src="img/logo/logo_negative.svg" alt="logo" class="md:hidden" />
			</div>
			<p
				class="font-kanit text-4xl md:text-title font-bold leading-title text-prtr-deep-blue ml-3 whitespace-nowrap overflow-hidden"
			>
				ทำงานอย่างไร
			</p>
		</div>
		<div
			class="flex justify-center items-center font-anakotmai pr-0 lg:pr-16 mt-[14px] md:mt-[19px] lg:mt-0"
		>
			<div class="mr-[9px] md:mr-1 w-[21px] md:w-[38px] h-[22] md:h-10">
				<ScrollIndicator />
			</div>
			<div class="hidden md:block">
				<p>เลื่อน</p>
				<p>เพื่อสำรวจ</p>
			</div>
			<p class="md:hidden">เลื่อนเพื่อสำรวจ</p>
		</div>
	</div>

	<!-- <div>{position}</div> -->

	<div
		bind:clientWidth={limit}
		class=" mt-16 overflow-visible w-[1050px] md:w-[1000px] lg:w-[860px] 2xl:w-[460px] 4xl:w-[55px]"
	/>
	<div class="w-[1735px] h-[720px] ml-24 hidden 4xl:block">
		<img
			src="img/flowchart/flowchart.svg"
			alt="flowchart"
			class="rounded-3xl shadow-md tmp"
		/>
	</div>
	<div
		use:drag
		class="w-[1646px] md:w-[1735px] h-[680px] md:h-[720px] mt-16 ml-8 md:ml-24 4xl:hidden"
	>
		<img
			src="img/flowchart/flowchart.svg"
			alt="flowchart"
			class="rounded-3xl shadow-md tmp"
		/>
	</div>
</div>

<style>
	.tmp {
		-webkit-user-drag: none;
		user-select: none;
		-moz-user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
	}
</style>
