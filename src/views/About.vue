<template>

    <main>
        <h1>About Page</h1>
        
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam cumque perferendis fugiat similique laboriosam hic
            nihil, corporis labore! Exercitationem ducimus rerum quia accusamus, in velit ut dolorem tenetur incidunt illo!
            <br><br>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo vel assumenda voluptatibus incidunt porro delectus
            eius aperiam ex doloribus laboriosam consequuntur ipsum maxime earum, laborum exercitationem voluptate. Laborum iste
            accusamus, veritatis dolorem facilis fugit ad atque, maiores aliquid ea ducimus, repudiandae adipisci consequatur
            obcaecati labore.
        </p>
    </main>
</template>

<style scoped>

    @keyframes scrollUp {
        from {
            opacity: 0;
            transform: translateY(500px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    h1 {
        font-size: 3rem;
        animation: scrollUp 500ms forwards;
        opacity: 0;
        color: var(--btn-update-primary);
    }
    p {
        opacity: 0;
        padding: 0 2rem;
        text-align: center;
        max-width: 50rem;
        animation: scrollUp 500ms 200ms forwards;
    }

    main {
        padding: 5rem 0 0 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
<!-- <script>
    export default {
        name: 'About'
    }
</script> -->