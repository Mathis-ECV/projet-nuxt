<template>
    <div>
        <h2>Supportez-moi en m'offrant une Lambo 🏎️</h2>
        <button @click="handleBuyCoffee">Buy me a coffee</button>
    </div>
</template>
  
<script>
export default {
    methods: {
        handleBuyCoffee() {
            // Ajoutez ici la logique pour rediriger vers la page de don ou une passerelle de paiement.
            console.log("Redirection vers la page de paiement...");
        }
    }
};
</script>