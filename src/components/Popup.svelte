<script>
	import { getOneTimeCounting } from '../config/db';

    let promise = getOneTimeCounting();
</script>

<div class="flex justify-center">
	{#await promise}
		<p>...waiting</p>
	{:then num}
		<p>🎉 you are number {num + 1} 🍾</p>
	{:catch error}
		<p style="color: red">error: {error}</p>
	{/await}
</div>
