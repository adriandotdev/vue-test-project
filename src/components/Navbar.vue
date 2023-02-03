<template>
    <nav @resize="() => console.log('resizing')">
        <h1>Task Tracker</h1>

        
        <label tabindex="1" v-if="!hamburgerCheck" class="hamburger" for="hamburger">
            <hr>
            <hr>
            <hr>
            <input v-model="hamburgerCheck" type="checkbox" name="hamburger" id="hamburger">
        </label>

        <a tabindex="1" @click="closeNavLinks()" v-if="hamburgerCheck" role="button">
            <svg  xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path fill="#fff"
                    d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
            </svg>
        </a>
       

        <ul ref="navlinks">
            <li>
                <router-link to="/">Tasks</router-link>
            </li>
            <li>
                <router-link to="/about">About</router-link>
            </li>
        </ul>

        <ul id="desktop-links">
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
                // navlinks.value.style.animation = 'navLinksCloseAnim 200ms forwards';
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
    nav {

        display: flex;
        background-color: #171717;
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

    h1 {
        color: #fff;
    }

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

    ul {
        display: none;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;

        list-style-type: none;
        position: absolute;
        top: 70%;
        left: 0;
        width: 100%;
        padding: 0 0 1rem 2rem;
        background: #171717;
        z-index: 1;
        /* display: none; */
        animation: navLinksOpenAnim  200ms ease forwards;
    }

    a {
        text-decoration: none;
        color: white;
        font-size: 1.2rem;
    }

    .hamburger {
        cursor: pointer;
    }
    hr {
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
        cursor: pointer;
    }
    @media only screen and (min-width: 768px) {

        ul {
            display: flex;
            position: relative;
            flex-direction: row;
            justify-content: flex-end;
            padding: 0;
            width: auto;
            align-items: center;
        }
        .hamburger {
            display: none;
        }
    }
</style>