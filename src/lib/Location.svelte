<script lang="ts">

    interface Props {
        confirm: (i: boolean) => void;
        [key: string]: unknown;
    }

    let { confirm } : Props = $props();

    function continueClick() {
        confirm(true);
    }

</script>


<div id="loader">
    <div class="info-container">
        <h1>Vi aspettiamo!</h1>
        <h2>Quando? <b>Il 23/11/2024</b></h2>
        <h2>Dove? <b>Al ristorante Calinferno (San Fior)</b></h2>
        <h3>per festeggiare tutti assieme la laurea di Alessandro e il compleanno di Antonella</h3>

        <button onclick={continueClick} class="big-button">Ci sono!</button>
    </div>

    <div class="congratulation-explosion">
        <div class="emoji">🎉</div>
        <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
    </div>

</div>

<style>
    @font-face {
        font-family: "Comic Sans MS";
        src: url("ComicSansMS3.ttf") format("truetype");
    }

    #loader {
        z-index: 9999;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        gap: 30px;
        height: 100dvh;
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
        font-size: xx-large;
    }









    * {
        box-sizing: border-box;
        margin: 0px;
        padding: 0px;
    }

    ul {
        list-style: none;
    }

    .congratulation-explosion{
        display: flex;
        flex-direction: column;
        z-index: 800;
    }

    .info-container{
        display: flex;
        flex-direction: column;
        z-index: 999;
        gap: 10px;
    }


    .emoji {
        bottom: 20px;
        font-size: 3.75em;
        left: 50%;
        position: absolute;
        transform: translateX(-50%) rotate(-45deg);
        z-index: 1;
    }
    @media (min-width: 700px) {
        .emoji {
            font-size: 7.5em;
        }
    }

    span {
        -webkit-animation: pop 4s infinite ease-in;
        animation: pop 4s infinite ease-in;
        border-radius: 50%;
        bottom: 60px;
        height: 10px;
        width: 10px;
        left: calc(50% - 5px);
        position: absolute;
    }
    @media (min-width: 700px) {
        span {
            bottom: 100px;
            height: 15px;
            width: 15px;
        }
    }
    span:nth-child(1) {
        -webkit-animation-delay: -5.0604920603s;
        animation-delay: -5.0604920603s;
        -webkit-animation-duration: 4.1824613153s;
        animation-duration: 4.1824613153s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(-31.8934542786vw, 0px, 0px) rotate(-250deg);
        transform-origin: -23.9958504147vw 5vh;
    }
    span:nth-child(2) {
        -webkit-animation-delay: -0.6279124775s;
        animation-delay: -0.6279124775s;
        -webkit-animation-duration: 5.7558160089s;
        animation-duration: 5.7558160089s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(-7.9452220002vw, 0px, 0px) rotate(-250deg);
        transform-origin: -34.5176095236vw 5vh;
    }
    span:nth-child(3) {
        -webkit-animation-delay: -5.26912268s;
        animation-delay: -5.26912268s;
        -webkit-animation-duration: 5.5321606285s;
        animation-duration: 5.5321606285s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(-41.7099290971vw, 0px, 0px) rotate(-250deg);
        transform-origin: -28.8040233058vw 5vh;
    }
    span:nth-child(4) {
        -webkit-animation-delay: -5.0333854954s;
        animation-delay: -5.0333854954s;
        -webkit-animation-duration: 2.7498993353s;
        animation-duration: 2.7498993353s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(10.1154220513vw, 0px, 0px) rotate(250deg);
        transform-origin: 45.0227231303vw 5vh;
    }
    span:nth-child(5) {
        -webkit-animation-delay: -1.6541069956s;
        animation-delay: -1.6541069956s;
        -webkit-animation-duration: 4.9679067755s;
        animation-duration: 4.9679067755s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(-34.5855135789vw, 0px, 0px) rotate(-250deg);
        transform-origin: -56.6263734191vw 5vh;
    }
    span:nth-child(6) {
        -webkit-animation-delay: -4.145510003s;
        animation-delay: -4.145510003s;
        -webkit-animation-duration: 3.2872051144s;
        animation-duration: 3.2872051144s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(4.2097856488vw, 0px, 0px) rotate(250deg);
        transform-origin: 37.6721114367vw 5vh;
    }
    span:nth-child(7) {
        -webkit-animation-delay: -1.2531423519s;
        animation-delay: -1.2531423519s;
        -webkit-animation-duration: 5.7643016404s;
        animation-duration: 5.7643016404s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(-44.8212187627vw, 0px, 0px) rotate(-250deg);
        transform-origin: -36.0429945561vw 5vh;
    }
    span:nth-child(8) {
        -webkit-animation-delay: -5.737472368s;
        animation-delay: -5.737472368s;
        -webkit-animation-duration: 4.7847397635s;
        animation-duration: 4.7847397635s;
        background-color: #ff5800;
        opacity: 0;
        transform: translate3d(18.9585326498vw, 0px, 0px) rotate(250deg);
        transform-origin: 32.2725073814vw 5vh;
    }
    span:nth-child(9) {
        -webkit-animation-delay: -4.9364415573s;
        animation-delay: -4.9364415573s;
        -webkit-animation-duration: 3.4631111976s;
        animation-duration: 3.4631111976s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(11.2999692022vw, 0px, 0px) rotate(250deg);
        transform-origin: 47.9235933727vw 5vh;
    }
    span:nth-child(10) {
        -webkit-animation-delay: -4.1527984911s;
        animation-delay: -4.1527984911s;
        -webkit-animation-duration: 2.8700580952s;
        animation-duration: 2.8700580952s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(-3.8294327389vw, 0px, 0px) rotate(-250deg);
        transform-origin: -32.7018044934vw 5vh;
    }
    span:nth-child(11) {
        -webkit-animation-delay: -3.9475696664s;
        animation-delay: -3.9475696664s;
        -webkit-animation-duration: 5.9251648279s;
        animation-duration: 5.9251648279s;
        background-color: #ff5800;
        opacity: 0;
        transform: translate3d(-18.6496987464vw, 0px, 0px) rotate(-250deg);
        transform-origin: -38.049932647vw 5vh;
    }
    span:nth-child(12) {
        -webkit-animation-delay: -0.0588005033s;
        animation-delay: -0.0588005033s;
        -webkit-animation-duration: 2.3308196851s;
        animation-duration: 2.3308196851s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(-22.13028986vw, 0px, 0px) rotate(-250deg);
        transform-origin: -46.6953371202vw 5vh;
    }
    span:nth-child(13) {
        -webkit-animation-delay: -2.2037338243s;
        animation-delay: -2.2037338243s;
        -webkit-animation-duration: 5.2981996739s;
        animation-duration: 5.2981996739s;
        background-color: #ff5800;
        opacity: 0;
        transform: translate3d(-21.5466533367vw, 0px, 0px) rotate(-250deg);
        transform-origin: -48.8497924714vw 5vh;
    }
    span:nth-child(14) {
        -webkit-animation-delay: -3.1495426211s;
        animation-delay: -3.1495426211s;
        -webkit-animation-duration: 5.2674090538s;
        animation-duration: 5.2674090538s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(29.9378942086vw, 0px, 0px) rotate(250deg);
        transform-origin: 32.6266177781vw 5vh;
    }
    span:nth-child(15) {
        -webkit-animation-delay: -5.2381157828s;
        animation-delay: -5.2381157828s;
        -webkit-animation-duration: 5.7147603828s;
        animation-duration: 5.7147603828s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(11.7221745192vw, 0px, 0px) rotate(250deg);
        transform-origin: 22.4203858044vw 5vh;
    }
    span:nth-child(16) {
        -webkit-animation-delay: -1.8378643923s;
        animation-delay: -1.8378643923s;
        -webkit-animation-duration: 3.0479281381s;
        animation-duration: 3.0479281381s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(-26.4991016479vw, 0px, 0px) rotate(-250deg);
        transform-origin: -23.9606079361vw 5vh;
    }
    span:nth-child(17) {
        -webkit-animation-delay: -5.9010966856s;
        animation-delay: -5.9010966856s;
        -webkit-animation-duration: 5.3312075197s;
        animation-duration: 5.3312075197s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(19.5003955089vw, 0px, 0px) rotate(250deg);
        transform-origin: 48.2877373621vw 5vh;
    }
    span:nth-child(18) {
        -webkit-animation-delay: -2.1925174082s;
        animation-delay: -2.1925174082s;
        -webkit-animation-duration: 3.3411218421s;
        animation-duration: 3.3411218421s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(40.287185709vw, 0px, 0px) rotate(250deg);
        transform-origin: 21.0491787637vw 5vh;
    }
    span:nth-child(19) {
        -webkit-animation-delay: -3.4628441943s;
        animation-delay: -3.4628441943s;
        -webkit-animation-duration: 3.8039797986s;
        animation-duration: 3.8039797986s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(47.1640438231vw, 0px, 0px) rotate(250deg);
        transform-origin: 43.6173522739vw 5vh;
    }
    span:nth-child(20) {
        -webkit-animation-delay: -2.3397573153s;
        animation-delay: -2.3397573153s;
        -webkit-animation-duration: 4.9800903448s;
        animation-duration: 4.9800903448s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(-9.4404209621vw, 0px, 0px) rotate(-250deg);
        transform-origin: -46.7779535809vw 5vh;
    }
    span:nth-child(21) {
        -webkit-animation-delay: -0.4528966995s;
        animation-delay: -0.4528966995s;
        -webkit-animation-duration: 4.6987691622s;
        animation-duration: 4.6987691622s;
        background-color: #ff5800;
        opacity: 0;
        transform: translate3d(-14.0969509027vw, 0px, 0px) rotate(-250deg);
        transform-origin: -52.2835053646vw 5vh;
    }
    span:nth-child(22) {
        -webkit-animation-delay: -0.6529640095s;
        animation-delay: -0.6529640095s;
        -webkit-animation-duration: 3.5665575931s;
        animation-duration: 3.5665575931s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(46.5640459674vw, 0px, 0px) rotate(250deg);
        transform-origin: 59.6778520885vw 5vh;
    }
    span:nth-child(23) {
        -webkit-animation-delay: -2.1372487267s;
        animation-delay: -2.1372487267s;
        -webkit-animation-duration: 4.8291372259s;
        animation-duration: 4.8291372259s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(37.5906272814vw, 0px, 0px) rotate(250deg);
        transform-origin: 43.5641338391vw 5vh;
    }
    span:nth-child(24) {
        -webkit-animation-delay: -0.1362718665s;
        animation-delay: -0.1362718665s;
        -webkit-animation-duration: 4.1276593597s;
        animation-duration: 4.1276593597s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(-41.7279446481vw, 0px, 0px) rotate(-250deg);
        transform-origin: -41.2640899587vw 5vh;
    }
    span:nth-child(25) {
        -webkit-animation-delay: -3.6021969813s;
        animation-delay: -3.6021969813s;
        -webkit-animation-duration: 3.0675204228s;
        animation-duration: 3.0675204228s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(-18.1232924563vw, 0px, 0px) rotate(-250deg);
        transform-origin: -43.395901483vw 5vh;
    }
    span:nth-child(26) {
        -webkit-animation-delay: -0.7151514943s;
        animation-delay: -0.7151514943s;
        -webkit-animation-duration: 5.1265580235s;
        animation-duration: 5.1265580235s;
        background-color: #ff5800;
        opacity: 0;
        transform: translate3d(-17.5381819909vw, 0px, 0px) rotate(-250deg);
        transform-origin: -46.1530300592vw 5vh;
    }
    span:nth-child(27) {
        -webkit-animation-delay: -5.3862881128s;
        animation-delay: -5.3862881128s;
        -webkit-animation-duration: 5.3831786482s;
        animation-duration: 5.3831786482s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(-39.7501182878vw, 0px, 0px) rotate(-250deg);
        transform-origin: -51.5259090316vw 5vh;
    }
    span:nth-child(28) {
        -webkit-animation-delay: -3.2486999365s;
        animation-delay: -3.2486999365s;
        -webkit-animation-duration: 4.7763438772s;
        animation-duration: 4.7763438772s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(4.4489224645vw, 0px, 0px) rotate(250deg);
        transform-origin: 51.4520895573vw 5vh;
    }
    span:nth-child(29) {
        -webkit-animation-delay: -2.1351644265s;
        animation-delay: -2.1351644265s;
        -webkit-animation-duration: 2.7587610636s;
        animation-duration: 2.7587610636s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(21.2107723075vw, 0px, 0px) rotate(250deg);
        transform-origin: 54.3117195568vw 5vh;
    }
    span:nth-child(30) {
        -webkit-animation-delay: -0.2602949159s;
        animation-delay: -0.2602949159s;
        -webkit-animation-duration: 5.5451417212s;
        animation-duration: 5.5451417212s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(-3.6994763144vw, 0px, 0px) rotate(-250deg);
        transform-origin: -35.4264566338vw 5vh;
    }
    span:nth-child(31) {
        -webkit-animation-delay: -3.9286792984s;
        animation-delay: -3.9286792984s;
        -webkit-animation-duration: 4.9846302375s;
        animation-duration: 4.9846302375s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(1.1686472028vw, 0px, 0px) rotate(250deg);
        transform-origin: 55.3684469796vw 5vh;
    }
    span:nth-child(32) {
        -webkit-animation-delay: -0.487306945s;
        animation-delay: -0.487306945s;
        -webkit-animation-duration: 2.5485851048s;
        animation-duration: 2.5485851048s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(-4.1057973406vw, 0px, 0px) rotate(-250deg);
        transform-origin: -38.8605103185vw 5vh;
    }
    span:nth-child(33) {
        -webkit-animation-delay: -5.0574643832s;
        animation-delay: -5.0574643832s;
        -webkit-animation-duration: 5.3031765378s;
        animation-duration: 5.3031765378s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(-42.7846043446vw, 0px, 0px) rotate(-250deg);
        transform-origin: -47.8952049615vw 5vh;
    }
    span:nth-child(34) {
        -webkit-animation-delay: -1.9182566182s;
        animation-delay: -1.9182566182s;
        -webkit-animation-duration: 2.8129939225s;
        animation-duration: 2.8129939225s;
        background-color: #ff5800;
        opacity: 0;
        transform: translate3d(-25.9492545613vw, 0px, 0px) rotate(-250deg);
        transform-origin: -45.0004963975vw 5vh;
    }
    span:nth-child(35) {
        -webkit-animation-delay: -2.1035774081s;
        animation-delay: -2.1035774081s;
        -webkit-animation-duration: 4.8685133699s;
        animation-duration: 4.8685133699s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(49.9575582531vw, 0px, 0px) rotate(250deg);
        transform-origin: 34.0699651688vw 5vh;
    }
    span:nth-child(36) {
        -webkit-animation-delay: -4.3590275319s;
        animation-delay: -4.3590275319s;
        -webkit-animation-duration: 5.2259735811s;
        animation-duration: 5.2259735811s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(9.2695427939vw, 0px, 0px) rotate(250deg);
        transform-origin: 54.2146737859vw 5vh;
    }
    span:nth-child(37) {
        -webkit-animation-delay: -3.7814010395s;
        animation-delay: -3.7814010395s;
        -webkit-animation-duration: 3.8786360904s;
        animation-duration: 3.8786360904s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(9.3002293925vw, 0px, 0px) rotate(250deg);
        transform-origin: 38.0717139304vw 5vh;
    }
    span:nth-child(38) {
        -webkit-animation-delay: -4.750892402s;
        animation-delay: -4.750892402s;
        -webkit-animation-duration: 5.6621635981s;
        animation-duration: 5.6621635981s;
        background-color: #ff5800;
        opacity: 0;
        transform: translate3d(-32.1745253602vw, 0px, 0px) rotate(-250deg);
        transform-origin: -24.4085565551vw 5vh;
    }
    span:nth-child(39) {
        -webkit-animation-delay: -4.3268879516s;
        animation-delay: -4.3268879516s;
        -webkit-animation-duration: 3.5526156578s;
        animation-duration: 3.5526156578s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(-20.0869648049vw, 0px, 0px) rotate(-250deg);
        transform-origin: -23.91761974vw 5vh;
    }
    span:nth-child(40) {
        -webkit-animation-delay: -4.0696783542s;
        animation-delay: -4.0696783542s;
        -webkit-animation-duration: 5.9931952127s;
        animation-duration: 5.9931952127s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(-36.807202172vw, 0px, 0px) rotate(-250deg);
        transform-origin: -33.0508655304vw 5vh;
    }
    span:nth-child(41) {
        -webkit-animation-delay: -4.7300430562s;
        animation-delay: -4.7300430562s;
        -webkit-animation-duration: 5.7981658549s;
        animation-duration: 5.7981658549s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(-29.9888431615vw, 0px, 0px) rotate(-250deg);
        transform-origin: -27.5842006799vw 5vh;
    }
    span:nth-child(42) {
        -webkit-animation-delay: -0.1535396703s;
        animation-delay: -0.1535396703s;
        -webkit-animation-duration: 2.3240418027s;
        animation-duration: 2.3240418027s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(-19.0040076048vw, 0px, 0px) rotate(-250deg);
        transform-origin: -24.9167015443vw 5vh;
    }
    span:nth-child(43) {
        -webkit-animation-delay: -0.4740128122s;
        animation-delay: -0.4740128122s;
        -webkit-animation-duration: 3.531070022s;
        animation-duration: 3.531070022s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(12.1060845314vw, 0px, 0px) rotate(250deg);
        transform-origin: 31.918355326vw 5vh;
    }
    span:nth-child(44) {
        -webkit-animation-delay: -0.4085290166s;
        animation-delay: -0.4085290166s;
        -webkit-animation-duration: 5.8710633754s;
        animation-duration: 5.8710633754s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(31.0251398507vw, 0px, 0px) rotate(250deg);
        transform-origin: 48.9063980697vw 5vh;
    }
    span:nth-child(45) {
        -webkit-animation-delay: -5.0250071949s;
        animation-delay: -5.0250071949s;
        -webkit-animation-duration: 2.6577544757s;
        animation-duration: 2.6577544757s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(33.2024916696vw, 0px, 0px) rotate(250deg);
        transform-origin: 50.5933045436vw 5vh;
    }
    span:nth-child(46) {
        -webkit-animation-delay: -0.9410210369s;
        animation-delay: -0.9410210369s;
        -webkit-animation-duration: 2.3069380575s;
        animation-duration: 2.3069380575s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(-36.946641558vw, 0px, 0px) rotate(-250deg);
        transform-origin: -34.4612529667vw 5vh;
    }
    span:nth-child(47) {
        -webkit-animation-delay: -4.8459503879s;
        animation-delay: -4.8459503879s;
        -webkit-animation-duration: 3.4299759993s;
        animation-duration: 3.4299759993s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(-27.0983364091vw, 0px, 0px) rotate(-250deg);
        transform-origin: -53.991490418vw 5vh;
    }
    span:nth-child(48) {
        -webkit-animation-delay: -2.8430611162s;
        animation-delay: -2.8430611162s;
        -webkit-animation-duration: 4.2288089182s;
        animation-duration: 4.2288089182s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(-20.7781370045vw, 0px, 0px) rotate(-250deg);
        transform-origin: -56.8774734974vw 5vh;
    }
    span:nth-child(49) {
        -webkit-animation-delay: -3.8941741028s;
        animation-delay: -3.8941741028s;
        -webkit-animation-duration: 5.5140502355s;
        animation-duration: 5.5140502355s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(34.8250983248vw, 0px, 0px) rotate(250deg);
        transform-origin: 53.8064089266vw 5vh;
    }
    span:nth-child(50) {
        -webkit-animation-delay: -2.6118886887s;
        animation-delay: -2.6118886887s;
        -webkit-animation-duration: 5.2633519586s;
        animation-duration: 5.2633519586s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(-16.8933447241vw, 0px, 0px) rotate(-250deg);
        transform-origin: -42.914205026vw 5vh;
    }
    span:nth-child(51) {
        -webkit-animation-delay: -5.985779311s;
        animation-delay: -5.985779311s;
        -webkit-animation-duration: 2.6094556405s;
        animation-duration: 2.6094556405s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(42.1817057265vw, 0px, 0px) rotate(250deg);
        transform-origin: 55.1185994164vw 5vh;
    }
    span:nth-child(52) {
        -webkit-animation-delay: -2.9651050461s;
        animation-delay: -2.9651050461s;
        -webkit-animation-duration: 5.2873554292s;
        animation-duration: 5.2873554292s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(-34.0307110078vw, 0px, 0px) rotate(-250deg);
        transform-origin: -28.8342234003vw 5vh;
    }
    span:nth-child(53) {
        -webkit-animation-delay: -0.9801790829s;
        animation-delay: -0.9801790829s;
        -webkit-animation-duration: 3.1133430269s;
        animation-duration: 3.1133430269s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(-10.2764894387vw, 0px, 0px) rotate(-250deg);
        transform-origin: -47.854030839vw 5vh;
    }
    span:nth-child(54) {
        -webkit-animation-delay: -4.523427122s;
        animation-delay: -4.523427122s;
        -webkit-animation-duration: 4.4895365209s;
        animation-duration: 4.4895365209s;
        background-color: #ff5800;
        opacity: 0;
        transform: translate3d(-11.0833445119vw, 0px, 0px) rotate(-250deg);
        transform-origin: -57.3208851856vw 5vh;
    }
    span:nth-child(55) {
        -webkit-animation-delay: -2.9967173486s;
        animation-delay: -2.9967173486s;
        -webkit-animation-duration: 2.988604411s;
        animation-duration: 2.988604411s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(-23.3217515079vw, 0px, 0px) rotate(-250deg);
        transform-origin: -43.3012687634vw 5vh;
    }
    span:nth-child(56) {
        -webkit-animation-delay: -2.6488246744s;
        animation-delay: -2.6488246744s;
        -webkit-animation-duration: 2.8307718223s;
        animation-duration: 2.8307718223s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(28.9635658342vw, 0px, 0px) rotate(250deg);
        transform-origin: 24.3072282972vw 5vh;
    }
    span:nth-child(57) {
        -webkit-animation-delay: -0.6948212194s;
        animation-delay: -0.6948212194s;
        -webkit-animation-duration: 2.6677062075s;
        animation-duration: 2.6677062075s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(10.5918565622vw, 0px, 0px) rotate(250deg);
        transform-origin: 36.5446744516vw 5vh;
    }
    span:nth-child(58) {
        -webkit-animation-delay: -5.2302260018s;
        animation-delay: -5.2302260018s;
        -webkit-animation-duration: 3.1204844449s;
        animation-duration: 3.1204844449s;
        background-color: #ff5800;
        opacity: 0;
        transform: translate3d(-49.5983378859vw, 0px, 0px) rotate(-250deg);
        transform-origin: -49.6056712358vw 5vh;
    }
    span:nth-child(59) {
        -webkit-animation-delay: -4.2579813225s;
        animation-delay: -4.2579813225s;
        -webkit-animation-duration: 5.0419837271s;
        animation-duration: 5.0419837271s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(21.7424105254vw, 0px, 0px) rotate(250deg);
        transform-origin: 40.3717121vw 5vh;
    }
    span:nth-child(60) {
        -webkit-animation-delay: -0.7430459752s;
        animation-delay: -0.7430459752s;
        -webkit-animation-duration: 5.0169759528s;
        animation-duration: 5.0169759528s;
        background-color: #ff5800;
        opacity: 0;
        transform: translate3d(43.4453764714vw, 0px, 0px) rotate(250deg);
        transform-origin: 45.1193188615vw 5vh;
    }
    span:nth-child(61) {
        -webkit-animation-delay: -5.1435180504s;
        animation-delay: -5.1435180504s;
        -webkit-animation-duration: 3.8156690569s;
        animation-duration: 3.8156690569s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(-45.9449287955vw, 0px, 0px) rotate(-250deg);
        transform-origin: -30.7459564229vw 5vh;
    }
    span:nth-child(62) {
        -webkit-animation-delay: -5.4762996859s;
        animation-delay: -5.4762996859s;
        -webkit-animation-duration: 5.2294521395s;
        animation-duration: 5.2294521395s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(26.807222183vw, 0px, 0px) rotate(250deg);
        transform-origin: 48.1053847056vw 5vh;
    }
    span:nth-child(63) {
        -webkit-animation-delay: -1.5633240385s;
        animation-delay: -1.5633240385s;
        -webkit-animation-duration: 5.354353743s;
        animation-duration: 5.354353743s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(8.5386645866vw, 0px, 0px) rotate(250deg);
        transform-origin: 53.8186643787vw 5vh;
    }
    span:nth-child(64) {
        -webkit-animation-delay: -0.3483950584s;
        animation-delay: -0.3483950584s;
        -webkit-animation-duration: 2.4896192923s;
        animation-duration: 2.4896192923s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(12.9665403536vw, 0px, 0px) rotate(250deg);
        transform-origin: 52.2792653275vw 5vh;
    }
    span:nth-child(65) {
        -webkit-animation-delay: -0.7843481775s;
        animation-delay: -0.7843481775s;
        -webkit-animation-duration: 2.1307088785s;
        animation-duration: 2.1307088785s;
        background-color: #ff5800;
        opacity: 0;
        transform: translate3d(-23.6161341739vw, 0px, 0px) rotate(-250deg);
        transform-origin: -45.972915611vw 5vh;
    }
    span:nth-child(66) {
        -webkit-animation-delay: -2.6551236722s;
        animation-delay: -2.6551236722s;
        -webkit-animation-duration: 5.3016996933s;
        animation-duration: 5.3016996933s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(45.7658278833vw, 0px, 0px) rotate(250deg);
        transform-origin: 41.8574785214vw 5vh;
    }
    span:nth-child(67) {
        -webkit-animation-delay: -3.9821540763s;
        animation-delay: -3.9821540763s;
        -webkit-animation-duration: 5.0236392873s;
        animation-duration: 5.0236392873s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(-1.0273574319vw, 0px, 0px) rotate(-250deg);
        transform-origin: -55.3869927018vw 5vh;
    }
    span:nth-child(68) {
        -webkit-animation-delay: -2.0780563814s;
        animation-delay: -2.0780563814s;
        -webkit-animation-duration: 3.4935333464s;
        animation-duration: 3.4935333464s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(12.8865900859vw, 0px, 0px) rotate(250deg);
        transform-origin: 47.3886299246vw 5vh;
    }
    span:nth-child(69) {
        -webkit-animation-delay: -2.3822986536s;
        animation-delay: -2.3822986536s;
        -webkit-animation-duration: 4.5106975919s;
        animation-duration: 4.5106975919s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(-15.80293948vw, 0px, 0px) rotate(-250deg);
        transform-origin: -34.4090778664vw 5vh;
    }
    span:nth-child(70) {
        -webkit-animation-delay: -4.6694590591s;
        animation-delay: -4.6694590591s;
        -webkit-animation-duration: 5.8393598072s;
        animation-duration: 5.8393598072s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(6.9881664984vw, 0px, 0px) rotate(250deg);
        transform-origin: 20.5652599797vw 5vh;
    }
    span:nth-child(71) {
        -webkit-animation-delay: -4.8921919237s;
        animation-delay: -4.8921919237s;
        -webkit-animation-duration: 3.4423316843s;
        animation-duration: 3.4423316843s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(-48.1868085442vw, 0px, 0px) rotate(-250deg);
        transform-origin: -24.0653724972vw 5vh;
    }
    span:nth-child(72) {
        -webkit-animation-delay: -4.430794828s;
        animation-delay: -4.430794828s;
        -webkit-animation-duration: 4.4761563993s;
        animation-duration: 4.4761563993s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(23.6415094368vw, 0px, 0px) rotate(250deg);
        transform-origin: 53.5303181892vw 5vh;
    }
    span:nth-child(73) {
        -webkit-animation-delay: -3.3657819535s;
        animation-delay: -3.3657819535s;
        -webkit-animation-duration: 4.1035701724s;
        animation-duration: 4.1035701724s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(45.7467679459vw, 0px, 0px) rotate(250deg);
        transform-origin: 30.6171806935vw 5vh;
    }
    span:nth-child(74) {
        -webkit-animation-delay: -2.297303938s;
        animation-delay: -2.297303938s;
        -webkit-animation-duration: 2.6007056356s;
        animation-duration: 2.6007056356s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(29.8400707639vw, 0px, 0px) rotate(250deg);
        transform-origin: 29.6449859839vw 5vh;
    }
    span:nth-child(75) {
        -webkit-animation-delay: -2.0097760261s;
        animation-delay: -2.0097760261s;
        -webkit-animation-duration: 5.2996348836s;
        animation-duration: 5.2996348836s;
        background-color: #ff5800;
        opacity: 0;
        transform: translate3d(-39.756383727vw, 0px, 0px) rotate(-250deg);
        transform-origin: -43.783768599vw 5vh;
    }
    span:nth-child(76) {
        -webkit-animation-delay: -4.8907597858s;
        animation-delay: -4.8907597858s;
        -webkit-animation-duration: 2.342291617s;
        animation-duration: 2.342291617s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(-7.2006725963vw, 0px, 0px) rotate(-250deg);
        transform-origin: -33.6226013876vw 5vh;
    }
    span:nth-child(77) {
        -webkit-animation-delay: -2.2524116181s;
        animation-delay: -2.2524116181s;
        -webkit-animation-duration: 4.1642102868s;
        animation-duration: 4.1642102868s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(12.5711575956vw, 0px, 0px) rotate(250deg);
        transform-origin: 48.2516047825vw 5vh;
    }
    span:nth-child(78) {
        -webkit-animation-delay: -3.1400513341s;
        animation-delay: -3.1400513341s;
        -webkit-animation-duration: 3.0757438118s;
        animation-duration: 3.0757438118s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(47.1006983244vw, 0px, 0px) rotate(250deg);
        transform-origin: 55.5503244871vw 5vh;
    }
    span:nth-child(79) {
        -webkit-animation-delay: -3.9124324398s;
        animation-delay: -3.9124324398s;
        -webkit-animation-duration: 3.9460791854s;
        animation-duration: 3.9460791854s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(14.5982459588vw, 0px, 0px) rotate(250deg);
        transform-origin: 47.9117977162vw 5vh;
    }
    span:nth-child(80) {
        -webkit-animation-delay: -2.1622717764s;
        animation-delay: -2.1622717764s;
        -webkit-animation-duration: 3.7933681567s;
        animation-duration: 3.7933681567s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(15.5058508866vw, 0px, 0px) rotate(250deg);
        transform-origin: 43.2951096969vw 5vh;
    }
    span:nth-child(81) {
        -webkit-animation-delay: -4.5754514954s;
        animation-delay: -4.5754514954s;
        -webkit-animation-duration: 2.8500637918s;
        animation-duration: 2.8500637918s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(6.7409046909vw, 0px, 0px) rotate(250deg);
        transform-origin: 48.9331840591vw 5vh;
    }
    span:nth-child(82) {
        -webkit-animation-delay: -0.7050352222s;
        animation-delay: -0.7050352222s;
        -webkit-animation-duration: 3.3590772514s;
        animation-duration: 3.3590772514s;
        background-color: #ff5800;
        opacity: 0;
        transform: translate3d(21.1286090778vw, 0px, 0px) rotate(250deg);
        transform-origin: 53.6552393355vw 5vh;
    }
    span:nth-child(83) {
        -webkit-animation-delay: -3.9671795944s;
        animation-delay: -3.9671795944s;
        -webkit-animation-duration: 5.0296167921s;
        animation-duration: 5.0296167921s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(28.216591693vw, 0px, 0px) rotate(250deg);
        transform-origin: 54.1973075934vw 5vh;
    }
    span:nth-child(84) {
        -webkit-animation-delay: -5.6903171199s;
        animation-delay: -5.6903171199s;
        -webkit-animation-duration: 3.9088440102s;
        animation-duration: 3.9088440102s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(29.001233581vw, 0px, 0px) rotate(250deg);
        transform-origin: 57.3473064433vw 5vh;
    }
    span:nth-child(85) {
        -webkit-animation-delay: -4.1048727885s;
        animation-delay: -4.1048727885s;
        -webkit-animation-duration: 3.9008542871s;
        animation-duration: 3.9008542871s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(36.3356533173vw, 0px, 0px) rotate(250deg);
        transform-origin: 25.6185611689vw 5vh;
    }
    span:nth-child(86) {
        -webkit-animation-delay: -0.0991235673s;
        animation-delay: -0.0991235673s;
        -webkit-animation-duration: 3.0918243492s;
        animation-duration: 3.0918243492s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(-15.6180763606vw, 0px, 0px) rotate(-250deg);
        transform-origin: -35.7034835847vw 5vh;
    }
    span:nth-child(87) {
        -webkit-animation-delay: -1.9466508387s;
        animation-delay: -1.9466508387s;
        -webkit-animation-duration: 3.9608091156s;
        animation-duration: 3.9608091156s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(-19.473795653vw, 0px, 0px) rotate(-250deg);
        transform-origin: -46.9878961568vw 5vh;
    }
    span:nth-child(88) {
        -webkit-animation-delay: -5.8360497252s;
        animation-delay: -5.8360497252s;
        -webkit-animation-duration: 5.4426534553s;
        animation-duration: 5.4426534553s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(-25.6173441411vw, 0px, 0px) rotate(-250deg);
        transform-origin: -42.019429304vw 5vh;
    }
    span:nth-child(89) {
        -webkit-animation-delay: -0.9876605074s;
        animation-delay: -0.9876605074s;
        -webkit-animation-duration: 4.7767800733s;
        animation-duration: 4.7767800733s;
        background-color: #ff5800;
        opacity: 0;
        transform: translate3d(-40.4504422026vw, 0px, 0px) rotate(-250deg);
        transform-origin: -40.5871279031vw 5vh;
    }
    span:nth-child(90) {
        -webkit-animation-delay: -5.1910448634s;
        animation-delay: -5.1910448634s;
        -webkit-animation-duration: 2.8781912118s;
        animation-duration: 2.8781912118s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(5.0205710636vw, 0px, 0px) rotate(250deg);
        transform-origin: 52.0455506846vw 5vh;
    }
    span:nth-child(91) {
        -webkit-animation-delay: -2.6169697641s;
        animation-delay: -2.6169697641s;
        -webkit-animation-duration: 3.9267297098s;
        animation-duration: 3.9267297098s;
        background-color: #ff5800;
        opacity: 0;
        transform: translate3d(-7.8416906497vw, 0px, 0px) rotate(-250deg);
        transform-origin: -28.4649226817vw 5vh;
    }
    span:nth-child(92) {
        -webkit-animation-delay: -1.8620922473s;
        animation-delay: -1.8620922473s;
        -webkit-animation-duration: 2.9839465811s;
        animation-duration: 2.9839465811s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(-33.3237129943vw, 0px, 0px) rotate(-250deg);
        transform-origin: -49.0112924447vw 5vh;
    }
    span:nth-child(93) {
        -webkit-animation-delay: -4.332967708s;
        animation-delay: -4.332967708s;
        -webkit-animation-duration: 2.4481679503s;
        animation-duration: 2.4481679503s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(-36.7925838949vw, 0px, 0px) rotate(-250deg);
        transform-origin: -50.7689652564vw 5vh;
    }
    span:nth-child(94) {
        -webkit-animation-delay: -1.2446302819s;
        animation-delay: -1.2446302819s;
        -webkit-animation-duration: 2.7403086653s;
        animation-duration: 2.7403086653s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(-19.6444045874vw, 0px, 0px) rotate(-250deg);
        transform-origin: -39.6245075894vw 5vh;
    }
    span:nth-child(95) {
        -webkit-animation-delay: -2.3768263814s;
        animation-delay: -2.3768263814s;
        -webkit-animation-duration: 5.6591273521s;
        animation-duration: 5.6591273521s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(-17.6635734474vw, 0px, 0px) rotate(-250deg);
        transform-origin: -48.2275029325vw 5vh;
    }
    span:nth-child(96) {
        -webkit-animation-delay: -3.1973585624s;
        animation-delay: -3.1973585624s;
        -webkit-animation-duration: 4.2520166908s;
        animation-duration: 4.2520166908s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(-46.0432423442vw, 0px, 0px) rotate(-250deg);
        transform-origin: -44.6347339925vw 5vh;
    }
    span:nth-child(97) {
        -webkit-animation-delay: -2.0331277314s;
        animation-delay: -2.0331277314s;
        -webkit-animation-duration: 5.7012763748s;
        animation-duration: 5.7012763748s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(-45.9500243203vw, 0px, 0px) rotate(-250deg);
        transform-origin: -36.6000496015vw 5vh;
    }
    span:nth-child(98) {
        -webkit-animation-delay: -2.0035730983s;
        animation-delay: -2.0035730983s;
        -webkit-animation-duration: 2.958680885s;
        animation-duration: 2.958680885s;
        background-color: #ff5800;
        opacity: 0;
        transform: translate3d(-41.3067124659vw, 0px, 0px) rotate(-250deg);
        transform-origin: -40.040169403vw 5vh;
    }
    span:nth-child(99) {
        -webkit-animation-delay: -3.848609811s;
        animation-delay: -3.848609811s;
        -webkit-animation-duration: 3.8204582467s;
        animation-duration: 3.8204582467s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(36.5263900912vw, 0px, 0px) rotate(250deg);
        transform-origin: 27.5244637838vw 5vh;
    }
    span:nth-child(100) {
        -webkit-animation-delay: -2.3521812054s;
        animation-delay: -2.3521812054s;
        -webkit-animation-duration: 5.4120548471s;
        animation-duration: 5.4120548471s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(43.2264454488vw, 0px, 0px) rotate(250deg);
        transform-origin: 29.8626807269vw 5vh;
    }
    span:nth-child(101) {
        -webkit-animation-delay: -4.9577824746s;
        animation-delay: -4.9577824746s;
        -webkit-animation-duration: 4.3493069995s;
        animation-duration: 4.3493069995s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(-31.7259037726vw, 0px, 0px) rotate(-250deg);
        transform-origin: -44.5190382976vw 5vh;
    }
    span:nth-child(102) {
        -webkit-animation-delay: -4.9914459428s;
        animation-delay: -4.9914459428s;
        -webkit-animation-duration: 4.1129843093s;
        animation-duration: 4.1129843093s;
        background-color: #ff5800;
        opacity: 0;
        transform: translate3d(-42.1212585804vw, 0px, 0px) rotate(-250deg);
        transform-origin: -23.0879219192vw 5vh;
    }
    span:nth-child(103) {
        -webkit-animation-delay: -2.8216679976s;
        animation-delay: -2.8216679976s;
        -webkit-animation-duration: 5.3158029746s;
        animation-duration: 5.3158029746s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(-20.8060542588vw, 0px, 0px) rotate(-250deg);
        transform-origin: -53.2391952231vw 5vh;
    }
    span:nth-child(104) {
        -webkit-animation-delay: -3.1908414148s;
        animation-delay: -3.1908414148s;
        -webkit-animation-duration: 2.6554391433s;
        animation-duration: 2.6554391433s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(44.4679859452vw, 0px, 0px) rotate(250deg);
        transform-origin: 30.8240908151vw 5vh;
    }
    span:nth-child(105) {
        -webkit-animation-delay: -0.8775603301s;
        animation-delay: -0.8775603301s;
        -webkit-animation-duration: 4.2167989889s;
        animation-duration: 4.2167989889s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(16.6037928716vw, 0px, 0px) rotate(250deg);
        transform-origin: 44.7247788046vw 5vh;
    }
    span:nth-child(106) {
        -webkit-animation-delay: -4.9230083641s;
        animation-delay: -4.9230083641s;
        -webkit-animation-duration: 5.0385056648s;
        animation-duration: 5.0385056648s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(15.6126796146vw, 0px, 0px) rotate(250deg);
        transform-origin: 23.8512332578vw 5vh;
    }
    span:nth-child(107) {
        -webkit-animation-delay: -4.0227633974s;
        animation-delay: -4.0227633974s;
        -webkit-animation-duration: 5.3620531364s;
        animation-duration: 5.3620531364s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(6.1075331345vw, 0px, 0px) rotate(250deg);
        transform-origin: 41.8817965445vw 5vh;
    }
    span:nth-child(108) {
        -webkit-animation-delay: -3.621794726s;
        animation-delay: -3.621794726s;
        -webkit-animation-duration: 5.156284508s;
        animation-duration: 5.156284508s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(-24.4876834029vw, 0px, 0px) rotate(-250deg);
        transform-origin: -46.9508363513vw 5vh;
    }
    span:nth-child(109) {
        -webkit-animation-delay: -5.6161802986s;
        animation-delay: -5.6161802986s;
        -webkit-animation-duration: 3.5286909273s;
        animation-duration: 3.5286909273s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(-1.5231952529vw, 0px, 0px) rotate(-250deg);
        transform-origin: -47.2558857673vw 5vh;
    }
    span:nth-child(110) {
        -webkit-animation-delay: -1.353487505s;
        animation-delay: -1.353487505s;
        -webkit-animation-duration: 4.0078191221s;
        animation-duration: 4.0078191221s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(-13.5244595186vw, 0px, 0px) rotate(-250deg);
        transform-origin: -41.189570006vw 5vh;
    }
    span:nth-child(111) {
        -webkit-animation-delay: -2.8679497639s;
        animation-delay: -2.8679497639s;
        -webkit-animation-duration: 4.7266095402s;
        animation-duration: 4.7266095402s;
        background-color: #ff5800;
        opacity: 0;
        transform: translate3d(-9.3578651048vw, 0px, 0px) rotate(-250deg);
        transform-origin: -30.8295245305vw 5vh;
    }
    span:nth-child(112) {
        -webkit-animation-delay: -0.4254961899s;
        animation-delay: -0.4254961899s;
        -webkit-animation-duration: 3.9099821555s;
        animation-duration: 3.9099821555s;
        background-color: #ff5800;
        opacity: 0;
        transform: translate3d(-3.5549772508vw, 0px, 0px) rotate(-250deg);
        transform-origin: -27.5477027401vw 5vh;
    }
    span:nth-child(113) {
        -webkit-animation-delay: -0.1697152779s;
        animation-delay: -0.1697152779s;
        -webkit-animation-duration: 5.1594788075s;
        animation-duration: 5.1594788075s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(41.6036209994vw, 0px, 0px) rotate(250deg);
        transform-origin: 37.4863113923vw 5vh;
    }
    span:nth-child(114) {
        -webkit-animation-delay: -0.6826370211s;
        animation-delay: -0.6826370211s;
        -webkit-animation-duration: 4.5707819513s;
        animation-duration: 4.5707819513s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(40.7727685816vw, 0px, 0px) rotate(250deg);
        transform-origin: 33.6989498414vw 5vh;
    }
    span:nth-child(115) {
        -webkit-animation-delay: -3.8865050454s;
        animation-delay: -3.8865050454s;
        -webkit-animation-duration: 2.3205339817s;
        animation-duration: 2.3205339817s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(-26.6801157501vw, 0px, 0px) rotate(-250deg);
        transform-origin: -34.5462274692vw 5vh;
    }
    span:nth-child(116) {
        -webkit-animation-delay: -5.0514478553s;
        animation-delay: -5.0514478553s;
        -webkit-animation-duration: 5.789386199s;
        animation-duration: 5.789386199s;
        background-color: #ff5800;
        opacity: 0;
        transform: translate3d(36.052942448vw, 0px, 0px) rotate(250deg);
        transform-origin: 26.6876857376vw 5vh;
    }
    span:nth-child(117) {
        -webkit-animation-delay: -3.8970116721s;
        animation-delay: -3.8970116721s;
        -webkit-animation-duration: 5.8132516688s;
        animation-duration: 5.8132516688s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(38.9876382724vw, 0px, 0px) rotate(250deg);
        transform-origin: 38.4414836613vw 5vh;
    }
    span:nth-child(118) {
        -webkit-animation-delay: -1.7772482231s;
        animation-delay: -1.7772482231s;
        -webkit-animation-duration: 4.1987422139s;
        animation-duration: 4.1987422139s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(-26.5028401763vw, 0px, 0px) rotate(-250deg);
        transform-origin: -23.0620285553vw 5vh;
    }
    span:nth-child(119) {
        -webkit-animation-delay: -3.0264062176s;
        animation-delay: -3.0264062176s;
        -webkit-animation-duration: 3.4122036407s;
        animation-duration: 3.4122036407s;
        background-color: #ff5800;
        opacity: 0;
        transform: translate3d(0.9430618172vw, 0px, 0px) rotate(250deg);
        transform-origin: 23.6970287199vw 5vh;
    }
    span:nth-child(120) {
        -webkit-animation-delay: -3.9093243544s;
        animation-delay: -3.9093243544s;
        -webkit-animation-duration: 5.6906907547s;
        animation-duration: 5.6906907547s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(-22.6984554138vw, 0px, 0px) rotate(-250deg);
        transform-origin: -55.7576693256vw 5vh;
    }
    span:nth-child(121) {
        -webkit-animation-delay: -0.413380715s;
        animation-delay: -0.413380715s;
        -webkit-animation-duration: 4.4107999095s;
        animation-duration: 4.4107999095s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(-22.9929881335vw, 0px, 0px) rotate(-250deg);
        transform-origin: -39.9382913712vw 5vh;
    }
    span:nth-child(122) {
        -webkit-animation-delay: -1.0388065745s;
        animation-delay: -1.0388065745s;
        -webkit-animation-duration: 2.1643509325s;
        animation-duration: 2.1643509325s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(27.663113266vw, 0px, 0px) rotate(250deg);
        transform-origin: 30.5927182579vw 5vh;
    }
    span:nth-child(123) {
        -webkit-animation-delay: -5.4170112889s;
        animation-delay: -5.4170112889s;
        -webkit-animation-duration: 2.6861121335s;
        animation-duration: 2.6861121335s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(33.3167818957vw, 0px, 0px) rotate(250deg);
        transform-origin: 24.3209092306vw 5vh;
    }
    span:nth-child(124) {
        -webkit-animation-delay: -2.7161618567s;
        animation-delay: -2.7161618567s;
        -webkit-animation-duration: 2.1390865667s;
        animation-duration: 2.1390865667s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(-37.0152558792vw, 0px, 0px) rotate(-250deg);
        transform-origin: -50.8192386463vw 5vh;
    }
    span:nth-child(125) {
        -webkit-animation-delay: -0.9845418985s;
        animation-delay: -0.9845418985s;
        -webkit-animation-duration: 4.9475028241s;
        animation-duration: 4.9475028241s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(12.7599834615vw, 0px, 0px) rotate(250deg);
        transform-origin: 20.4149325989vw 5vh;
    }
    span:nth-child(126) {
        -webkit-animation-delay: -0.7479273785s;
        animation-delay: -0.7479273785s;
        -webkit-animation-duration: 4.8765755523s;
        animation-duration: 4.8765755523s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(44.0803148706vw, 0px, 0px) rotate(250deg);
        transform-origin: 51.4693042922vw 5vh;
    }
    span:nth-child(127) {
        -webkit-animation-delay: -4.4528482286s;
        animation-delay: -4.4528482286s;
        -webkit-animation-duration: 2.102653237s;
        animation-duration: 2.102653237s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(8.1680527863vw, 0px, 0px) rotate(250deg);
        transform-origin: 35.2230093692vw 5vh;
    }
    span:nth-child(128) {
        -webkit-animation-delay: -3.5671387949s;
        animation-delay: -3.5671387949s;
        -webkit-animation-duration: 4.8810956139s;
        animation-duration: 4.8810956139s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(-10.4406181832vw, 0px, 0px) rotate(-250deg);
        transform-origin: -35.5118161641vw 5vh;
    }
    span:nth-child(129) {
        -webkit-animation-delay: -0.0028037084s;
        animation-delay: -0.0028037084s;
        -webkit-animation-duration: 5.9446843583s;
        animation-duration: 5.9446843583s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(-11.445070319vw, 0px, 0px) rotate(-250deg);
        transform-origin: -25.1842452673vw 5vh;
    }
    span:nth-child(130) {
        -webkit-animation-delay: -2.0665660778s;
        animation-delay: -2.0665660778s;
        -webkit-animation-duration: 3.8836257988s;
        animation-duration: 3.8836257988s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(11.2202634105vw, 0px, 0px) rotate(250deg);
        transform-origin: 33.9986567496vw 5vh;
    }
    span:nth-child(131) {
        -webkit-animation-delay: -1.8050260105s;
        animation-delay: -1.8050260105s;
        -webkit-animation-duration: 2.9613492371s;
        animation-duration: 2.9613492371s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(0.9788582491vw, 0px, 0px) rotate(250deg);
        transform-origin: 51.8469622745vw 5vh;
    }
    span:nth-child(132) {
        -webkit-animation-delay: -1.0520739985s;
        animation-delay: -1.0520739985s;
        -webkit-animation-duration: 5.0866091551s;
        animation-duration: 5.0866091551s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(-25.6164633894vw, 0px, 0px) rotate(-250deg);
        transform-origin: -54.3335052746vw 5vh;
    }
    span:nth-child(133) {
        -webkit-animation-delay: -5.32948957s;
        animation-delay: -5.32948957s;
        -webkit-animation-duration: 4.6875600297s;
        animation-duration: 4.6875600297s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(-43.856099316vw, 0px, 0px) rotate(-250deg);
        transform-origin: -27.4460874073vw 5vh;
    }
    span:nth-child(134) {
        -webkit-animation-delay: -3.5137400881s;
        animation-delay: -3.5137400881s;
        -webkit-animation-duration: 3.3323778255s;
        animation-duration: 3.3323778255s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(46.0861342008vw, 0px, 0px) rotate(250deg);
        transform-origin: 33.6981554421vw 5vh;
    }
    span:nth-child(135) {
        -webkit-animation-delay: -2.3829880027s;
        animation-delay: -2.3829880027s;
        -webkit-animation-duration: 4.7889482681s;
        animation-duration: 4.7889482681s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(-31.665741378vw, 0px, 0px) rotate(-250deg);
        transform-origin: -32.0322840066vw 5vh;
    }
    span:nth-child(136) {
        -webkit-animation-delay: -2.2039473083s;
        animation-delay: -2.2039473083s;
        -webkit-animation-duration: 3.5887875017s;
        animation-duration: 3.5887875017s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(-35.264504874vw, 0px, 0px) rotate(-250deg);
        transform-origin: -42.2071768022vw 5vh;
    }
    span:nth-child(137) {
        -webkit-animation-delay: -4.9188415817s;
        animation-delay: -4.9188415817s;
        -webkit-animation-duration: 5.6870002865s;
        animation-duration: 5.6870002865s;
        background-color: #ff5800;
        opacity: 0;
        transform: translate3d(16.7626293409vw, 0px, 0px) rotate(250deg);
        transform-origin: 30.9796386549vw 5vh;
    }
    span:nth-child(138) {
        -webkit-animation-delay: -0.8095106055s;
        animation-delay: -0.8095106055s;
        -webkit-animation-duration: 3.8548586466s;
        animation-duration: 3.8548586466s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(30.0555565024vw, 0px, 0px) rotate(250deg);
        transform-origin: 43.796386423vw 5vh;
    }
    span:nth-child(139) {
        -webkit-animation-delay: -3.7034790676s;
        animation-delay: -3.7034790676s;
        -webkit-animation-duration: 3.9032618831s;
        animation-duration: 3.9032618831s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(-4.4125686665vw, 0px, 0px) rotate(-250deg);
        transform-origin: -33.0217092553vw 5vh;
    }
    span:nth-child(140) {
        -webkit-animation-delay: -1.468672243s;
        animation-delay: -1.468672243s;
        -webkit-animation-duration: 3.7664699182s;
        animation-duration: 3.7664699182s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(48.9616463729vw, 0px, 0px) rotate(250deg);
        transform-origin: 27.1982448118vw 5vh;
    }
    span:nth-child(141) {
        -webkit-animation-delay: -1.3283816518s;
        animation-delay: -1.3283816518s;
        -webkit-animation-duration: 2.7302811856s;
        animation-duration: 2.7302811856s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(7.5719791325vw, 0px, 0px) rotate(250deg);
        transform-origin: 57.8118749086vw 5vh;
    }
    span:nth-child(142) {
        -webkit-animation-delay: -3.8356817736s;
        animation-delay: -3.8356817736s;
        -webkit-animation-duration: 4.2529806189s;
        animation-duration: 4.2529806189s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(-42.67218592vw, 0px, 0px) rotate(-250deg);
        transform-origin: -31.6918837455vw 5vh;
    }
    span:nth-child(143) {
        -webkit-animation-delay: -3.4951636235s;
        animation-delay: -3.4951636235s;
        -webkit-animation-duration: 2.8142557492s;
        animation-duration: 2.8142557492s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(4.3524020071vw, 0px, 0px) rotate(250deg);
        transform-origin: 26.2657207629vw 5vh;
    }
    span:nth-child(144) {
        -webkit-animation-delay: -1.5128120497s;
        animation-delay: -1.5128120497s;
        -webkit-animation-duration: 5.779873324s;
        animation-duration: 5.779873324s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(19.6680640561vw, 0px, 0px) rotate(250deg);
        transform-origin: 23.5110719808vw 5vh;
    }
    span:nth-child(145) {
        -webkit-animation-delay: -1.9634541123s;
        animation-delay: -1.9634541123s;
        -webkit-animation-duration: 2.4378366242s;
        animation-duration: 2.4378366242s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(-42.5885500698vw, 0px, 0px) rotate(-250deg);
        transform-origin: -41.6977181716vw 5vh;
    }
    span:nth-child(146) {
        -webkit-animation-delay: -3.062985074s;
        animation-delay: -3.062985074s;
        -webkit-animation-duration: 4.0254520525s;
        animation-duration: 4.0254520525s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(3.9519492167vw, 0px, 0px) rotate(250deg);
        transform-origin: 42.1997844858vw 5vh;
    }
    span:nth-child(147) {
        -webkit-animation-delay: -1.0927365246s;
        animation-delay: -1.0927365246s;
        -webkit-animation-duration: 2.2699403576s;
        animation-duration: 2.2699403576s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(4.9792144579vw, 0px, 0px) rotate(250deg);
        transform-origin: 33.1211906823vw 5vh;
    }
    span:nth-child(148) {
        -webkit-animation-delay: -0.8366889379s;
        animation-delay: -0.8366889379s;
        -webkit-animation-duration: 2.9196678434s;
        animation-duration: 2.9196678434s;
        background-color: #ff5800;
        opacity: 0;
        transform: translate3d(39.3856381063vw, 0px, 0px) rotate(250deg);
        transform-origin: 54.1288156663vw 5vh;
    }
    span:nth-child(149) {
        -webkit-animation-delay: -3.6271251623s;
        animation-delay: -3.6271251623s;
        -webkit-animation-duration: 2.0507580726s;
        animation-duration: 2.0507580726s;
        background-color: #ff5800;
        opacity: 0;
        transform: translate3d(4.7980082918vw, 0px, 0px) rotate(250deg);
        transform-origin: 54.4131061863vw 5vh;
    }
    span:nth-child(150) {
        -webkit-animation-delay: -1.4106761139s;
        animation-delay: -1.4106761139s;
        -webkit-animation-duration: 5.2126606928s;
        animation-duration: 5.2126606928s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(5.764876541vw, 0px, 0px) rotate(250deg);
        transform-origin: 36.2472235747vw 5vh;
    }
    span:nth-child(151) {
        -webkit-animation-delay: -0.6070709946s;
        animation-delay: -0.6070709946s;
        -webkit-animation-duration: 5.9617088744s;
        animation-duration: 5.9617088744s;
        background-color: #ff5800;
        opacity: 0;
        transform: translate3d(-6.7993229224vw, 0px, 0px) rotate(-250deg);
        transform-origin: -25.3880910394vw 5vh;
    }
    span:nth-child(152) {
        -webkit-animation-delay: -0.5442568302s;
        animation-delay: -0.5442568302s;
        -webkit-animation-duration: 3.043580477s;
        animation-duration: 3.043580477s;
        background-color: #ff5800;
        opacity: 0;
        transform: translate3d(10.1514642152vw, 0px, 0px) rotate(250deg);
        transform-origin: 50.2935182426vw 5vh;
    }
    span:nth-child(153) {
        -webkit-animation-delay: -0.7407564784s;
        animation-delay: -0.7407564784s;
        -webkit-animation-duration: 2.7096504628s;
        animation-duration: 2.7096504628s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(-19.7081907721vw, 0px, 0px) rotate(-250deg);
        transform-origin: -47.8754771229vw 5vh;
    }
    span:nth-child(154) {
        -webkit-animation-delay: -2.4998512511s;
        animation-delay: -2.4998512511s;
        -webkit-animation-duration: 3.3746384009s;
        animation-duration: 3.3746384009s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(1.5964671021vw, 0px, 0px) rotate(250deg);
        transform-origin: 26.6408878131vw 5vh;
    }
    span:nth-child(155) {
        -webkit-animation-delay: -3.9538204461s;
        animation-delay: -3.9538204461s;
        -webkit-animation-duration: 3.7379446524s;
        animation-duration: 3.7379446524s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(8.8132080426vw, 0px, 0px) rotate(250deg);
        transform-origin: 25.5220524073vw 5vh;
    }
    span:nth-child(156) {
        -webkit-animation-delay: -2.7219814856s;
        animation-delay: -2.7219814856s;
        -webkit-animation-duration: 4.0007159375s;
        animation-duration: 4.0007159375s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(-49.9616193793vw, 0px, 0px) rotate(-250deg);
        transform-origin: -33.742171328vw 5vh;
    }
    span:nth-child(157) {
        -webkit-animation-delay: -1.6618507718s;
        animation-delay: -1.6618507718s;
        -webkit-animation-duration: 4.5208018895s;
        animation-duration: 4.5208018895s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(33.0165320205vw, 0px, 0px) rotate(250deg);
        transform-origin: 45.685569575vw 5vh;
    }
    span:nth-child(158) {
        -webkit-animation-delay: -0.1866466671s;
        animation-delay: -0.1866466671s;
        -webkit-animation-duration: 2.799145844s;
        animation-duration: 2.799145844s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(-27.9471534375vw, 0px, 0px) rotate(-250deg);
        transform-origin: -55.24612536vw 5vh;
    }
    span:nth-child(159) {
        -webkit-animation-delay: -4.9607283264s;
        animation-delay: -4.9607283264s;
        -webkit-animation-duration: 4.2494868518s;
        animation-duration: 4.2494868518s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(-14.26212923vw, 0px, 0px) rotate(-250deg);
        transform-origin: -35.0995763022vw 5vh;
    }
    span:nth-child(160) {
        -webkit-animation-delay: -0.5947715929s;
        animation-delay: -0.5947715929s;
        -webkit-animation-duration: 4.7682330435s;
        animation-duration: 4.7682330435s;
        background-color: #ff5800;
        opacity: 0;
        transform: translate3d(23.0080922409vw, 0px, 0px) rotate(250deg);
        transform-origin: 57.6451680975vw 5vh;
    }
    span:nth-child(161) {
        -webkit-animation-delay: -3.0259350651s;
        animation-delay: -3.0259350651s;
        -webkit-animation-duration: 3.7394946402s;
        animation-duration: 3.7394946402s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(3.2981978357vw, 0px, 0px) rotate(250deg);
        transform-origin: 36.1988041236vw 5vh;
    }
    span:nth-child(162) {
        -webkit-animation-delay: -3.9408286674s;
        animation-delay: -3.9408286674s;
        -webkit-animation-duration: 2.6906344381s;
        animation-duration: 2.6906344381s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(-34.4797580346vw, 0px, 0px) rotate(-250deg);
        transform-origin: -44.0590974172vw 5vh;
    }
    span:nth-child(163) {
        -webkit-animation-delay: -5.9042001061s;
        animation-delay: -5.9042001061s;
        -webkit-animation-duration: 5.512213087s;
        animation-duration: 5.512213087s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(-22.1897008532vw, 0px, 0px) rotate(-250deg);
        transform-origin: -29.9712940253vw 5vh;
    }
    span:nth-child(164) {
        -webkit-animation-delay: -3.9675498922s;
        animation-delay: -3.9675498922s;
        -webkit-animation-duration: 4.642220446s;
        animation-duration: 4.642220446s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(-31.7940720398vw, 0px, 0px) rotate(-250deg);
        transform-origin: -55.1065610425vw 5vh;
    }
    span:nth-child(165) {
        -webkit-animation-delay: -1.2489060204s;
        animation-delay: -1.2489060204s;
        -webkit-animation-duration: 3.1611776387s;
        animation-duration: 3.1611776387s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(-25.7823088102vw, 0px, 0px) rotate(-250deg);
        transform-origin: -33.9552876305vw 5vh;
    }
    span:nth-child(166) {
        -webkit-animation-delay: -1.921119311s;
        animation-delay: -1.921119311s;
        -webkit-animation-duration: 2.0974431385s;
        animation-duration: 2.0974431385s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(4.3867298431vw, 0px, 0px) rotate(250deg);
        transform-origin: 57.8353926019vw 5vh;
    }
    span:nth-child(167) {
        -webkit-animation-delay: -4.9660427009s;
        animation-delay: -4.9660427009s;
        -webkit-animation-duration: 2.3124970261s;
        animation-duration: 2.3124970261s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(0.5937122133vw, 0px, 0px) rotate(250deg);
        transform-origin: 41.9569350509vw 5vh;
    }
    span:nth-child(168) {
        -webkit-animation-delay: -3.5551024058s;
        animation-delay: -3.5551024058s;
        -webkit-animation-duration: 4.9202067746s;
        animation-duration: 4.9202067746s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(-35.3178086331vw, 0px, 0px) rotate(-250deg);
        transform-origin: -45.5787269495vw 5vh;
    }
    span:nth-child(169) {
        -webkit-animation-delay: -0.3531595525s;
        animation-delay: -0.3531595525s;
        -webkit-animation-duration: 3.4138899479s;
        animation-duration: 3.4138899479s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(-18.9472610054vw, 0px, 0px) rotate(-250deg);
        transform-origin: -58.444123268vw 5vh;
    }
    span:nth-child(170) {
        -webkit-animation-delay: -5.2878398115s;
        animation-delay: -5.2878398115s;
        -webkit-animation-duration: 5.549987823s;
        animation-duration: 5.549987823s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(-26.054396099vw, 0px, 0px) rotate(-250deg);
        transform-origin: -58.498234902vw 5vh;
    }
    span:nth-child(171) {
        -webkit-animation-delay: -5.8024903657s;
        animation-delay: -5.8024903657s;
        -webkit-animation-duration: 4.2124461457s;
        animation-duration: 4.2124461457s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(29.7217774989vw, 0px, 0px) rotate(250deg);
        transform-origin: 52.250845297vw 5vh;
    }
    span:nth-child(172) {
        -webkit-animation-delay: -2.4401374144s;
        animation-delay: -2.4401374144s;
        -webkit-animation-duration: 3.1701076865s;
        animation-duration: 3.1701076865s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(37.4572058619vw, 0px, 0px) rotate(250deg);
        transform-origin: 30.6308162467vw 5vh;
    }
    span:nth-child(173) {
        -webkit-animation-delay: -2.7323502877s;
        animation-delay: -2.7323502877s;
        -webkit-animation-duration: 5.5198805253s;
        animation-duration: 5.5198805253s;
        background-color: #ff5800;
        opacity: 0;
        transform: translate3d(-31.7243404811vw, 0px, 0px) rotate(-250deg);
        transform-origin: -43.273482153vw 5vh;
    }
    span:nth-child(174) {
        -webkit-animation-delay: -4.1219677777s;
        animation-delay: -4.1219677777s;
        -webkit-animation-duration: 3.4403845556s;
        animation-duration: 3.4403845556s;
        background-color: #ff5800;
        opacity: 0;
        transform: translate3d(46.3781150689vw, 0px, 0px) rotate(250deg);
        transform-origin: 59.8803007313vw 5vh;
    }
    span:nth-child(175) {
        -webkit-animation-delay: -0.6615078378s;
        animation-delay: -0.6615078378s;
        -webkit-animation-duration: 5.0003370852s;
        animation-duration: 5.0003370852s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(-48.8922230953vw, 0px, 0px) rotate(-250deg);
        transform-origin: -31.8297536738vw 5vh;
    }
    span:nth-child(176) {
        -webkit-animation-delay: -2.8510474753s;
        animation-delay: -2.8510474753s;
        -webkit-animation-duration: 3.2994643167s;
        animation-duration: 3.2994643167s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(-42.1276986521vw, 0px, 0px) rotate(-250deg);
        transform-origin: -39.3533677699vw 5vh;
    }
    span:nth-child(177) {
        -webkit-animation-delay: -0.9175945137s;
        animation-delay: -0.9175945137s;
        -webkit-animation-duration: 3.816240286s;
        animation-duration: 3.816240286s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(-26.7703455401vw, 0px, 0px) rotate(-250deg);
        transform-origin: -20.7102936394vw 5vh;
    }
    span:nth-child(178) {
        -webkit-animation-delay: -5.8996801617s;
        animation-delay: -5.8996801617s;
        -webkit-animation-duration: 4.5307099274s;
        animation-duration: 4.5307099274s;
        background-color: #ff5800;
        opacity: 0;
        transform: translate3d(18.708121936vw, 0px, 0px) rotate(250deg);
        transform-origin: 42.8645396797vw 5vh;
    }
    span:nth-child(179) {
        -webkit-animation-delay: -5.8200433191s;
        animation-delay: -5.8200433191s;
        -webkit-animation-duration: 2.3154703089s;
        animation-duration: 2.3154703089s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(17.5459434123vw, 0px, 0px) rotate(250deg);
        transform-origin: 33.55276205vw 5vh;
    }
    span:nth-child(180) {
        -webkit-animation-delay: -0.1542033165s;
        animation-delay: -0.1542033165s;
        -webkit-animation-duration: 3.2631831908s;
        animation-duration: 3.2631831908s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(-31.3322773829vw, 0px, 0px) rotate(-250deg);
        transform-origin: -35.5542267966vw 5vh;
    }
    span:nth-child(181) {
        -webkit-animation-delay: -4.953739615s;
        animation-delay: -4.953739615s;
        -webkit-animation-duration: 3.5215028051s;
        animation-duration: 3.5215028051s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(7.1201582969vw, 0px, 0px) rotate(250deg);
        transform-origin: 53.6027643175vw 5vh;
    }
    span:nth-child(182) {
        -webkit-animation-delay: -0.5543448003s;
        animation-delay: -0.5543448003s;
        -webkit-animation-duration: 3.5068212689s;
        animation-duration: 3.5068212689s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(-48.0457295791vw, 0px, 0px) rotate(-250deg);
        transform-origin: -33.5912140932vw 5vh;
    }
    span:nth-child(183) {
        -webkit-animation-delay: -5.0855068622s;
        animation-delay: -5.0855068622s;
        -webkit-animation-duration: 5.0359071196s;
        animation-duration: 5.0359071196s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(11.9743975055vw, 0px, 0px) rotate(250deg);
        transform-origin: 21.2365793482vw 5vh;
    }
    span:nth-child(184) {
        -webkit-animation-delay: -4.5496969987s;
        animation-delay: -4.5496969987s;
        -webkit-animation-duration: 2.3244573047s;
        animation-duration: 2.3244573047s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(40.8565675723vw, 0px, 0px) rotate(250deg);
        transform-origin: 44.897606311vw 5vh;
    }
    span:nth-child(185) {
        -webkit-animation-delay: -4.3996303014s;
        animation-delay: -4.3996303014s;
        -webkit-animation-duration: 3.6449416697s;
        animation-duration: 3.6449416697s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(44.5735700107vw, 0px, 0px) rotate(250deg);
        transform-origin: 33.2110876599vw 5vh;
    }
    span:nth-child(186) {
        -webkit-animation-delay: -3.141474183s;
        animation-delay: -3.141474183s;
        -webkit-animation-duration: 2.4691333118s;
        animation-duration: 2.4691333118s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(47.2507875219vw, 0px, 0px) rotate(250deg);
        transform-origin: 59.4512204529vw 5vh;
    }
    span:nth-child(187) {
        -webkit-animation-delay: -5.0321066358s;
        animation-delay: -5.0321066358s;
        -webkit-animation-duration: 4.4959968566s;
        animation-duration: 4.4959968566s;
        background-color: #ff5800;
        opacity: 0;
        transform: translate3d(19.3460095022vw, 0px, 0px) rotate(250deg);
        transform-origin: 30.007406764vw 5vh;
    }
    span:nth-child(188) {
        -webkit-animation-delay: -0.3491584413s;
        animation-delay: -0.3491584413s;
        -webkit-animation-duration: 2.9036514273s;
        animation-duration: 2.9036514273s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(-14.8692850069vw, 0px, 0px) rotate(-250deg);
        transform-origin: -33.539178581vw 5vh;
    }
    span:nth-child(189) {
        -webkit-animation-delay: -4.0404223802s;
        animation-delay: -4.0404223802s;
        -webkit-animation-duration: 3.7879543927s;
        animation-duration: 3.7879543927s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(43.8237085355vw, 0px, 0px) rotate(250deg);
        transform-origin: 36.0872666154vw 5vh;
    }
    span:nth-child(190) {
        -webkit-animation-delay: -5.6940621522s;
        animation-delay: -5.6940621522s;
        -webkit-animation-duration: 5.6086750388s;
        animation-duration: 5.6086750388s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(-9.0651640513vw, 0px, 0px) rotate(-250deg);
        transform-origin: -38.250803697vw 5vh;
    }
    span:nth-child(191) {
        -webkit-animation-delay: -1.0619967767s;
        animation-delay: -1.0619967767s;
        -webkit-animation-duration: 4.6802289455s;
        animation-duration: 4.6802289455s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(-37.4907555223vw, 0px, 0px) rotate(-250deg);
        transform-origin: -43.9194417001vw 5vh;
    }
    span:nth-child(192) {
        -webkit-animation-delay: -5.4171248887s;
        animation-delay: -5.4171248887s;
        -webkit-animation-duration: 2.1692888994s;
        animation-duration: 2.1692888994s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(0.6279149408vw, 0px, 0px) rotate(250deg);
        transform-origin: 31.3450176619vw 5vh;
    }
    span:nth-child(193) {
        -webkit-animation-delay: -2.7647211794s;
        animation-delay: -2.7647211794s;
        -webkit-animation-duration: 4.3747630863s;
        animation-duration: 4.3747630863s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(-42.2648143397vw, 0px, 0px) rotate(-250deg);
        transform-origin: -58.6243969962vw 5vh;
    }
    span:nth-child(194) {
        -webkit-animation-delay: -5.0543120435s;
        animation-delay: -5.0543120435s;
        -webkit-animation-duration: 4.7851067316s;
        animation-duration: 4.7851067316s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(38.2009441719vw, 0px, 0px) rotate(250deg);
        transform-origin: 46.1103161421vw 5vh;
    }
    span:nth-child(195) {
        -webkit-animation-delay: -2.9651457542s;
        animation-delay: -2.9651457542s;
        -webkit-animation-duration: 5.3662994468s;
        animation-duration: 5.3662994468s;
        background-color: #a020f0;
        opacity: 0;
        transform: translate3d(11.0385220964vw, 0px, 0px) rotate(250deg);
        transform-origin: 37.456277172vw 5vh;
    }
    span:nth-child(196) {
        -webkit-animation-delay: -0.1656835278s;
        animation-delay: -0.1656835278s;
        -webkit-animation-duration: 3.7576251523s;
        animation-duration: 3.7576251523s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(-17.1216442697vw, 0px, 0px) rotate(-250deg);
        transform-origin: -22.4101879114vw 5vh;
    }
    span:nth-child(197) {
        -webkit-animation-delay: -0.4285617234s;
        animation-delay: -0.4285617234s;
        -webkit-animation-duration: 2.3075407289s;
        animation-duration: 2.3075407289s;
        background-color: #ff5800;
        opacity: 0;
        transform: translate3d(26.6185983126vw, 0px, 0px) rotate(250deg);
        transform-origin: 43.791294296vw 5vh;
    }
    span:nth-child(198) {
        -webkit-animation-delay: -4.5753158926s;
        animation-delay: -4.5753158926s;
        -webkit-animation-duration: 3.8125394174s;
        animation-duration: 3.8125394174s;
        background-color: #007fff;
        opacity: 0;
        transform: translate3d(42.9271124881vw, 0px, 0px) rotate(250deg);
        transform-origin: 28.1828047438vw 5vh;
    }
    span:nth-child(199) {
        -webkit-animation-delay: -4.4090401382s;
        animation-delay: -4.4090401382s;
        -webkit-animation-duration: 4.8638712196s;
        animation-duration: 4.8638712196s;
        background-color: #ff5800;
        opacity: 0;
        transform: translate3d(7.9725533786vw, 0px, 0px) rotate(250deg);
        transform-origin: 36.0850959082vw 5vh;
    }
    span:nth-child(200) {
        -webkit-animation-delay: -1.8685194218s;
        animation-delay: -1.8685194218s;
        -webkit-animation-duration: 2.5575963251s;
        animation-duration: 2.5575963251s;
        background-color: #d90429;
        opacity: 0;
        transform: translate3d(-42.3956739644vw, 0px, 0px) rotate(-250deg);
        transform-origin: -36.6665847671vw 5vh;
    }

    @-webkit-keyframes pop {
        from {
            opacity: 1;
            transform: translate3d(0, 0px, 0px) rotate(0deg);
        }
    }

    @keyframes pop {
        from {
            opacity: 1;
            transform: translate3d(0, 0px, 0px) rotate(0deg);
        }
    }

</style>