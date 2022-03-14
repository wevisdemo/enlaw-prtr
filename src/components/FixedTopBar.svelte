<script>
	import SmallLogo from './FixedTopBar/SmallLogo.svelte';
	import NavbarBtn from './FixedTopBar/NavbarBtn.svelte';
</script>

<span>
	<div class="flex flex-row justify-between">
		<div><SmallLogo /></div>

		<div class="prtr_menu">
			<NavbarBtn>รู้จัก PRTR</NavbarBtn>
			<NavbarBtn>ร่วมลงชื่อ</NavbarBtn>
			<NavbarBtn>เกี่ยวกับเรา</NavbarBtn>
		</div>
	</div>
</span>

<style>
	.prtr_menu {
		font-family: Kondolar Thai, 'serif';
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
	}
</style>
