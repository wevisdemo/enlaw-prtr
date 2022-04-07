<script>
    import { getContext } from 'svelte';
    import Popup from './Popup.svelte';

	export let text;
    export let dummy_count;
    export let isDummy;
    export let toggleDummy;
    export let changeDummy;
    

    const { open } = getContext('simple-modal');
    const showSurprise = () => open(Popup, { toggleDummy: toggleDummy, changeDummy: changeDummy, dummy_count: dummy_count, isDummy: isDummy });

    function onClick() {
        // console.log('TEST')
        showSurprise()
    }
</script>

<button on:click={onClick}>
    <p
        class="font-anakotmai text-[32px] md:text-6xl tracking-[0.24em] counting_number_big text-white"
    >
        {text}
    </p>
</button>