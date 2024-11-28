<svelte:options customElement="my-meme" />

<script lang="ts">
	function dispatch(type: string) {
		$host().dispatchEvent(new CustomEvent(type));
	}
</script>

<div>
	<button onclick={() => dispatch('wut')}>Add Wut</button>
	<button onclick={() => dispatch('meme')}>Add Meme</button>
</div>
