<script lang="ts">
	import Settings from "$lib/components/Settings.svelte";
    const settings = $state({
        color: "#f0f0f0",
        name: "THING"
    });

    function updateColor(newColor: string) {
        settings.color = newColor;
    }

    function updateName(newName: string) {
        settings.name = newName;
    }

</script>

<div class="things">
    <Settings {updateColor} {updateName} />
    <div class="display">
        <div class="box" style="background-color: {settings.color}"></div>
        <div class="details">
            <p>Name: {settings.name}</p>
        </div>
    </div>
</div>

<style>
    .things {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .display {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1rem;
    }

    .box {
        width: 200px;
        height: 200px;
        background-color: #f0f0f0;
        border-radius: 10px;
        margin-bottom: 1rem;
    }

    .details {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
