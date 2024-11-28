<script lang="ts">
	import '$lib/components/childA.svelte';

	let str = '';

	function addWut() {
		str += 'wut';
	}

	function addMeme() {
		str += 'meme';
	}
</script>

<main>
	<h1>Thing</h1>
	<my-meme onwut={addWut} onmeme={addMeme}></my-meme>
	<p>{str}</p>
</main>
