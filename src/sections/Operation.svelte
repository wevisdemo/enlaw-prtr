<script>
	import ScrollIndicator from '../components/OperationComponent/ScrollIndicator.svelte';
	import { spring } from 'svelte/motion';

	const defaultCoordination = { x: 0 };
	let coords = spring(defaultCoordination);
	let position = 0;

	const drag = (node) => {
		// console.log('node', node);

		let x;

		coords.subscribe((current) => {
			node.style.transform = `translate3d(${current.x}px, 0px, 0)`;
		});

		node.addEventListener('mousedown', mousedown);

		function mousedown(event) {
			x = event.clientX;

			console.log('event.clientX', event.clientX);

			window.addEventListener('mouseup', mouseup);
			window.addEventListener('mousemove', mousemove);
		}

		function mouseup() {
			window.removeEventListener('mouseup', mouseup);
			window.removeEventListener('mousemove', mousemove);

			x = 0;
		}

		function mousemove(event) {
			const dx = event.clientX - x;

			x = event.clientX;
			position = position + dx;

			coords.update((current) => {
				return {
					x: current.x + dx,
				};
				// if (position >= -110 && position <= 335) {
				// 	return {
				// 		x: current.x + dx,
				// 	};
				// } else {
				// 	return { x: current.x };
				// }
			});
		}
	};
</script>

<div
	class="bg-prtr-fresh-green flex flex-col pt-16 pl-0 lg:pl-52 pb-12 overflow-hidden"
>
	<div class="flex flex-col lg:flex-row justify-between w-full">
		<div class="flex flex-col md:flex-row justify-center items-center">
			<div class="w-[140px] md:w-[240px] h-[34px] md:h-[56px]">
				<img src="img/logo/logo_default.svg" alt='logo' class="hidden md:block" />
				<img src="img/logo/logo_negative.svg" alt='logo' class="md:hidden"/>
			</div>
			<p class="font-kanit text-4xl md:text-title font-bold leading-title text-prtr-deep-blue ml-3 whitespace-nowrap overflow-hidden">ทำงานอย่างไร</p>
		</div>
		<div class="flex justify-center items-center font-anakotmai pr-0 lg:pr-16 mt-[14px] md:mt-[19px] lg:mt-0">
			<div class="mr-[9px] md:mr-1 w-[21px] md:w-[38px] h-[22] md:h-10"><ScrollIndicator /></div>
			<div class="hidden md:block">
				<p>เลื่อน</p>
				<p>เพื่อสำรวจ</p>
			</div>
			<p class="md:hidden">เลื่อนเพื่อสำรวจ</p>
		</div>
	</div>

	<div>{position}</div>

	<img
		src="img/flowchart/flowchart.svg"
		alt="flowchart"
		use:drag
		class="mt-16 rounded-3xl shadow-md tmp"
	/>
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
