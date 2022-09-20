<script>
	import ScrollIndicator from '../components/OperationComponent/ScrollIndicator.svelte';
	import { spring } from 'svelte/motion';

	let limit;
	const defaultCoordination = { x: 0 };
	let coords = spring(defaultCoordination);
	let position = 0;

	const pcDrag = (node) => {
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

		// touch only have start and move
		function mouseup() {
			window.removeEventListener('pointerup', mouseup);
			window.removeEventListener('pointermove', mousemove);

			x = 0;

			if (position < -limit) {
				position = -limit;
				coords.update(() => {
					return {
						x: -limit,
					};
				});
			} else if (position > 0) {
				position = 0;
				coords.update(() => {
					return {
						x: 0,
					};
				});
			}
		}

		function mousemove(event) {
			const dx = event.movementX;
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

	function mobileDrag(node) {
		let x;

		coords.subscribe((current) => {
			node.style.transform = `translate3d(${current.x}px, 0px, 0)`;
		});

		node.addEventListener('touchstart', touchstart);

		function touchstart(event) {
			x = event.touches[0].clientX;
			window.addEventListener('touchend', touchend);
			window.addEventListener('touchmove', touchmove);
		}

		function touchend() {
			window.removeEventListener('touchend', touchend);

			x = 0;

			if (position < -limit) {
				position = -limit;
				coords.update(() => {
					return {
						x: -limit,
					};
				});
			} else if (position > 0) {
				position = 0;
				coords.update(() => {
					return {
						x: 0,
					};
				});
			}
		}

		function touchmove(event) {
			const dx = event.touches[0].clientX - x;
			x = event.touches[0].clientX;

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
	}
</script>

<div class="bg-prtr-fresh-green flex flex-col pt-16 pb-12 overflow-hidden">
	<div class="flex flex-col lg:flex-row justify-between w-full px-8 md:px-24">
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
			class="flex justify-center items-center font-anakotmai mt-[14px] md:mt-[19px] lg:mt-0"
		>
			<div class="w-[21px] md:w-[38px] h-[22] md:h-10">
				<ScrollIndicator />
			</div>
			<div class="hidden md:block">
				<p>เลื่อน</p>
				<p>เพื่อสำรวจ</p>
			</div>
			<p class="md:hidden">เลื่อนเพื่อสำรวจ</p>
		</div>
	</div>

	<div
		bind:clientWidth={limit}
		class=" mt-16 overflow-visible w-[1400px] xs:w-[1300px] md:w-[1200px] lg:w-[860px] 2xl:w-[460px] 4xl:w-[55px]"
	/>
	<div class="w-[1735px] h-[720px] ml-24 hidden 4xl:block">
		<img
			src="img/flowchart/diagram.svg"
			alt="diagram"
			class="rounded-3xl shadow-md tmp"
		/>
	</div>
	<div
		use:pcDrag
		class="hidden lg:block 4xl:hidden w-[1735px] h-[680px] md:h-[720px] mt-16 ml-8 md:ml-24"
	>
		<img
			src="img/flowchart/diagram.svg"
			alt="diagram"
			class="rounded-3xl shadow-md tmp"
		/>
	</div>
	<div
		use:mobileDrag
		class="block lg:hidden w-[1646px] md:w-[1735px] h-[680px] md:h-[720px] mt-16 ml-8 md:ml-24"
	>
		<img
			src="img/flowchart/diagram.svg"
			alt="diagram"
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
