<script>
	import CardHeaderBox from './CardHeaderBox.svelte';
	import CardContentBox from './CardContentBox.svelte';

	export let title = '';
	export let icon = undefined;
	export let isSecondary = false;
</script>

<div>
    <CardHeaderBox {icon} {isSecondary}>{title}</CardHeaderBox>
	<CardContentBox><slot /></CardContentBox>
</div>
