<template>
    <nav @resize="() => console.log('resizing')">

        <h1 id="nav__title">
            Task Tracker
        </h1>

        <label tabindex="1" v-if="!hamburgerCheck" class="hamburger" for="hamburger">
            <hr class="hamburger__line">
            <hr class="hamburger__line">
            <hr class="hamburger__line">
            <input v-model="hamburgerCheck" type="checkbox" name="hamburger" id="hamburger">
        </label>

        <a tabindex="1" @click="closeNavLinks()" v-if="hamburgerCheck" role="button">
            <svg  xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path fill="#fff"
                    d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
            </svg>
        </a>
       

        <ul class="nav__items nav__items--mobile" ref="navlinks">
            <li @click="closeNavLinks()">
                <router-link to="/">Tasks</router-link>
            </li>
            <li @click="closeNavLinks()">
                <router-link to="/about">About</router-link>
            </li>
        </ul>

        <ul class="nav__items nav__items--desktop" id="desktop-links">
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

    import {ref, watch, onMounted} from 'vue';
    import { openNavbar, isNavbarMenuOpen } from '@/composables/tasks_manager';

    export default {
        name: 'Navbar',
        setup() {

            let navlinks = ref(null);
            let hamburgerCheck = ref(null);

            let closeNavLinks = () => {
                hamburgerCheck.value = false;
            }

            watch(hamburgerCheck, (hamOpen) => {

                console.log("WATCH")
                if (hamOpen) {
                    navlinks.value.style.display = "flex";
                }
                else {
                    navlinks.value.style.display = "none";
                }
            })

            window.addEventListener('resize', () => {

                if (window.innerWidth >= 768) {
                    hamburgerCheck.value = false;
                }
            });

            onMounted(() => {

                if (window.innerWidth >= 768) {
                    hamburgerCheck.value = false;
                }
            });

            return {
                hamburgerCheck,
                navlinks,
                openNavbar,
                isNavbarMenuOpen,
                closeNavLinks
            }
        }
    }
</script>

<style scoped>

    /* Animation for opening the navigation links. */
    @keyframes navLinksOpenAnim {
    
        from {
            opacity: 0;
            transform: translateY(-30px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* Navbar */
    nav {

        display: flex;
        background-color: var(--btn-update-primary);
        padding: 0 1rem;
        align-items: center;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;
    }

    #nav__title {
        color: #fff;
    }

    .nav__items {
        display: flex;
        gap: 1rem;
        list-style-type: none;
    }

    /* Navbar items container */
    .nav__items--mobile {
        display: none;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;

        
        position: absolute;
        top: 70%;
        left: 0;
        width: 100%;
        padding: 0 0 1rem 2rem;
        background: var(--btn-update-primary);
        z-index: 1;

        animation: navLinksOpenAnim  200ms ease forwards;
    }

    .nav__items--desktop {
        display: none;
    }

    .hamburger {
        cursor: pointer;
    }
    
    .hamburger__line {
        width: 35px;
        color: white;
        height: 2px;
    }

    input[type="checkbox"] {

        visibility: hidden;
        position: absolute;
    }

    a {
        width: 1.1rem;
        text-decoration: none;
        cursor: pointer;
        color: white;
    }

    /* Tablet size */
    @media only screen and (min-width: 768px) {

        .nav__items--mobile {
            display: flex;
            position: relative;
            flex-direction: row;
            justify-content: flex-end;
            padding: 0;
            width: auto;
            align-items: center;
        }

        .nav__items--desktop {
            display: flex;
        }

        .hamburger {
            display: none;
        }
    }
</style>