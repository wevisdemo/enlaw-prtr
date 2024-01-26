<script>
	import ScrollIndicator from '../components/OperationComponent/ScrollIndicator.svelte';

	const horizontalScrollOnDrag = (node) => {
		node.addEventListener('pointerdown', mousedown, false);

		function mousedown() {
			node.addEventListener('pointerup', mouseup);
			node.addEventListener('pointermove', mousemove);
		}

		function mouseup() {
			node.removeEventListener('pointerup', mouseup);
			node.removeEventListener('pointermove', mousemove);
		}

		function mousemove(event) {
			node.scrollLeft -= event.movementX;
		}
	};
</script>

<div class="bg-prtr-fresh-green flex flex-col pt-16 pb-12 overflow-hidden">
	<div
		class="flex flex-col lg:flex-row justify-between w-full px-8 md:px-24 mb-12"
	>
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

	<div class="overflow-x-auto w-full hide-scrollbar" use:horizontalScrollOnDrag>
		<div class="w-[1646px] h-[680px] md:w-[1735px] md:h-[720px] px-8 md:px-24">
			<img
				src="img/flowchart/diagram.svg"
				alt="diagram"
				class="rounded-3xl shadow-md disable-drag"
			/>
		</div>
	</div>
</div>

<style>
	.disable-drag {
		-webkit-user-drag: none;
		user-select: none;
		-moz-user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
	}

	.hide-scrollbar::-webkit-scrollbar {
		display: none;
	}
	.hide-scrollbar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
</style>
