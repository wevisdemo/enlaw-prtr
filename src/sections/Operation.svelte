<script>
	import NegativeLogo from '../components/OperationComponent/NegativeLogo.svelte';
	import ScrollIndicator from '../components/OperationComponent/ScrollIndicator.svelte';
	import { spring } from 'svelte/motion';

	const defaultCoordination = { x: 0 };
	let coords = spring(defaultCoordination);
	let position = 0;

	const drag = (node) => {
		console.log('node', node);

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
	class="bg-prtr-fresh-green flex flex-col pt-16 pl-52 pb-12 overflow-hidden"
>
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

	<div>{position}</div>

	<!-- <div
		class="tmp2 bg-prtr-healthy-blue flex justify-center items-center mt-16 rounded-3xl shadow-md p-2 bg-center bg-no-repeat bg-cover bg-fixed"
		style="background-image: url('img/flowchart/flowchart.svg')"
		use:drag
	>
		<img
			src="img/flowchart/flowchart.svg"
			alt="flowchart"
			class="mt-16 rounded-3xl shadow-md"
		/>
	</div> -->
	<img
		src="img/flowchart/flowchart.svg"
		alt="flowchart"
		use:drag
		class="mt-16 rounded-3xl shadow-md tmp"
	/>
</div>

<style>
	.tmp {
		user-drag: none;
		-webkit-user-drag: none;
		user-select: none;
		-moz-user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
	}
	.title_font {
		font-size: 80px;
		font-family: 'Termtem';
		font-style: normal;
		font-weight: 700;
		line-height: 90%;
	}
</style>
