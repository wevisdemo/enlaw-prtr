<script>
	import CardHeaderBox from './CardHeaderBox.svelte';
	import CardContentBox from './CardContentBox.svelte';

	export let title = '';
	export let isNoIcon = false;
	export let isSecondary = false;
</script>

<div>
    <CardHeaderBox {isNoIcon} {isSecondary}>{title}</CardHeaderBox>
	<CardContentBox><slot /></CardContentBox>
</div>
