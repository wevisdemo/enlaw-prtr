<script>
	export let icon;
	export let text;
</script>

<button
	class="bg-white text-prtr-deep-blue rounded my-1 px-2.5 py-1 flex items-center font-anakotmai border border-prtr-deep-blue w-[140px]"
>
	<img src={icon} alt={`${icon}`} class="mr-1" height="24px" width="24px" />
	<span>{text}</span>
</button>
