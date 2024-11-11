<script lang="ts">
  import nostosLogo from '/nostos_dark.svg'
  import Loader from "./lib/Loader.svelte";
  import ChooseFamily from "./lib/ChooseFamily.svelte";
  import { initializeApp } from "firebase/app";
  import { getAnalytics } from "firebase/analytics";
  import { getFirestore } from "firebase/firestore";
  import {
    setDoc,
    collection,
    onSnapshot,
    deleteDoc,
    doc,
  } from "firebase/firestore";
  import { onMount } from "svelte";
  import Location from "./lib/Location.svelte";

  let snap;
  let you: `${string}-${string}-${string}-${string}-${string}` | null = $state(null);
  let familyInfo: {
    nome: string,
    persone: number,
    Id: `${string}-${string}-${string}-${string}-${string}`,
  } | null = $state(null);

  onMount(() => {
    onSnapshot(collection(db, "famiglie"), (snapshot) => {
      snap = snapshot.docs;
      if(localStorage.getItem("you") !== null) {
        you = localStorage.getItem("you") as `${string}-${string}-${string}-${string}-${string}`;
        if(you !== null) {
          const famiglia = localStorage.getItem(you);
          if(famiglia !== null) {
            familyInfo = JSON.parse(famiglia);
          }
        }
      }
    });
  });

  let displayMessage: number = $state(0);

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyChnEIAFnZro3tDSMh6oitWN8FY8eDky-k",
    authDomain: "the-final-invitation.firebaseapp.com",
    projectId: "the-final-invitation",
    storageBucket: "the-final-invitation.firebasestorage.app",
    messagingSenderId: "884403521438",
    appId: "1:884403521438:web:da6a9e13d2b64d9232788f",
    measurementId: "G-G7EX0HEN30"
  };

  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const analytics = getAnalytics(firebaseApp);
  const db = getFirestore(firebaseApp);


  function handleMessage(goToPage: number) {
    console.log(goToPage);
    if(displayMessage < goToPage) {
      displayMessage = goToPage;
    }
  }



  function dinnerSubscribe(props: { next: number, familyName: string, familyNumber: number }) {

    familyInfo = {
      nome: props.familyName,
      persone: props.familyNumber,
      Id: crypto.randomUUID(),
    }

    if(displayMessage !== props.next)
      displayMessage = props.next;
    else
      displayMessage += 1;

  }

  function confermaPartecipazione(){
    let Id = crypto.randomUUID();

    if(you !== null){
      Id = you
    }

    setDoc(doc(db, "famiglie", Id), familyInfo).then(_ => {
      localStorage.setItem("you", Id);
      localStorage.setItem(Id, JSON.stringify(familyInfo));
      alert("Grazie mille!");
    }).catch(err => {console.log(err)});
  }

</script>

<main style="max-height: 100dvh">
  <div class="card">
    {#if displayMessage === 0}
      <div>
        <a href="https://www.instagram.com/alessandro.amadio?igsh=MTN6ZndvazVxdmJ0Mg==" target="_blank" rel="noreferrer">
          <img src={nostosLogo} class="logo" alt="Nostos Logo" />
        </a>
      </div>
      <h1>Laurea di Alessandro</h1>
      <Loader pageNumber="{handleMessage}"/>
    {:else if displayMessage === 1}
      <ChooseFamily confirm="{dinnerSubscribe}" familyName="{familyInfo?.nome}" familyNumber="{familyInfo?.persone}"/>
    {:else if displayMessage === 2}
      <ChooseFamily confirm="{dinnerSubscribe}" familyName="{familyInfo?.nome}" familyNumber="{familyInfo?.persone}"/>
    {:else}
      <Location confirm="{confermaPartecipazione}"/>
    {/if}
  </div>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
