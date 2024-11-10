<script lang="ts">

    import whoAreYouVideo from '/who_are_you.mp4'
    import Loader from "./Loader.svelte";

    interface Props {
        confirm: (props: {next: number, familyName: string, familyNumber: number}) => void;
        familyName?: string;
        familyNumber?: number;

        [key: string]: unknown;
    }

    let {confirm, familyName, familyNumber}: Props = $props();

    let cardInformationShow: boolean = $state(false);

    let _familyName: string = $state(familyName ?? "");
    let _familyNumber: number = $state(familyNumber ?? 0);

    setTimeout(() => {
        cardInformationShow = true;
    }, 10000);

    function continueClick() {
        console.log("family to confirm", _familyName,  _familyNumber)
        if(_familyName.length > 0 && _familyNumber > 0){
            console.log("family confirmed")
            confirm({next: 2, familyNumber: _familyNumber, familyName: _familyName});
        }
    }

</script>


<div id="loader">
    <video
        class="fullscreen-video"
        src="{whoAreYouVideo}"
        autoplay="{true}"
        playsinline
    >
        <track kind="captions" />
    </video>
    {#if cardInformationShow}
        <div class="card">
            <div class="input-container">
                <label for="name">Come vi chiamate?</label>
                <input id="name" class="input-field" bind:value={_familyName} />
            </div>
            <div class="input-container">
                <label for="people">In quanti siete?</label>
                <input id="people" type="number" class="input-field" bind:value={_familyNumber} />
            </div>
            <button onclick={continueClick}>Continua</button>
        </div>

    {/if}
</div>

<style>
    @font-face {
        font-family: "Comic Sans MS";
        src: url("ComicSansMS3.ttf") format("truetype");
    }

    #loader {
        z-index: 999;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 30px;
    }

    .card {
        background-color: rgba(90, 90, 90, 0.75);
        padding: 20px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        z-index: 9999;
        gap: 30px;
        min-width: 50dvw;
    }

    .input-container{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: stretch;
        label{
            color: white;
            font-weight: bold;
        }
    }

    button {
        background: linear-gradient(
                45deg,
                red,
                orange,
                yellow,
                green,
                blue,
                indigo,
                violet,
                red
        );
        border: none;
        color: white;
        border-radius: 10px;
        padding: 10px;
        font-family: "Comic Sans MS", "Comic Sans", monospace;
        font-weight: bold;
        font-size: x-large;
    }


</style>