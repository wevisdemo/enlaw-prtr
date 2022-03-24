<script>
	import NavbarBtn from './FixedTopBar/NavbarBtn.svelte';
</script>

<span>
	<div class="flex md:justify-between justify-center">
		<img src="img/logo/logo_default.svg" alt='logo' width="128px" height="30px" />

		<div class="prtr_menu hidden md:flex justify-end">
			<NavbarBtn>รู้จัก PRTR</NavbarBtn>
			<NavbarBtn>ร่วมลงชื่อ</NavbarBtn>
			<NavbarBtn>เกี่ยวกับเรา</NavbarBtn>
		</div>
	</div>
</span>

<style>
	.prtr_menu {
		font-family: Kondolar Thai, 'serif';
	}
</style>
