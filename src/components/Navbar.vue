<template>
    <nav>
        <h1>Task Tracker</h1>

        <ul>
            <li>
                <router-link to="/">Tasks</router-link>
            </li>
            <li>
                <router-link to="/about">About</router-link>
            </li>
        </ul>
    </nav>

</template>

<script>
    export default {
        name: 'Navbar'
    }
</script>

<style scoped>
    nav {

        display: flex;
        background-color: #171717;
        padding: 0 1rem;
        align-items: center;
        justify-content: space-between;
    }

    h1 {
        color: #fff;
    }

    ul {
        list-style-type: none;
        display: flex;
        gap: 1rem;
    }

    a {
        text-decoration: none;
        color: white;
    }
</style>