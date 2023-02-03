<template>

    <main class="container">
    
        <Header @toggle-add-task="toggleAddTask" title="Task Tracker" :showAddTask="showAddTask" />
        
        <div v-if="showAddTask">
            <AddTask @add-task="addTask" />
        </div>
        
        <Tasks :tasks="tasksToRead" />
        
    </main>

    <div @click="closeModal()" class="modal-bg" v-if="isModalOpen">

        <div class="modal-bg--update-modal" v-if="isUpdating" id="update-modal" @click="(e) => e.stopPropagation()">

            <h2>Update Task</h2>
            
            <form class="form" @submit="(e) => {
                    e.preventDefault();
                    updateTask()
                }" id="update-form">
            
                <section class="form__task-field">
                    <label class="form__label" for="task">Task:</label>
                    <input class="form__input" v-model="uTask" type="text" name="task" id="task">
                </section>
            
                <section class="form__task-field">
                    <label class="form__label" for="schedule">Schedule:</label>
                    <input class="form__input" v-model="uSched" type="text" name="schedule" id="schedule">
                </section>
            
            
                <section class="priority-section">
                    <label class="form__label" for="update-priority">
                        Priority
                    </label>
                    <input v-model="uPriority" type="checkbox" name="update-priority" id="update-priority">
                </section>
            
                <input class="form__btn--submit" type="submit" value="Save">
            </form>
        </div>
        
        <div class="modal-bg--delete-modal" v-if="isDeleting" id="delete-modal" @click="(e) => e.stopPropagation()">
            
            <div>
                <p class="delete-modal__confirm-message" id="p-delete-message">Are you sure you want to delete this task?</p>
                <p class="delete-modal__item-text" id="span-item-delete">{{ dTask }}</p>
            </div>
            
            <section class="buttons">
                <button @click="deleteTask()" class="btn-delete-buttons" id="btn-confirm">
                    Delete
                </button>
                <button @click="closeModal()" class="btn-delete-buttons" id="btn-cancel">
                    Cancel
                </button>
            </section>
        </div>
    </div>
    
</template>

<script>

    //---------------------------STATES AND REF-------------------------------------
    import { ref } from 'vue';
    import { tasksToRead, deleteTask, toggleTask, addTask, updateTask, isUpdating, isDeleting, isModalOpen, openUpdateModal, uTask, uSched, uPriority, dTask, closeModal } from '../composables/tasks_manager';

    //-------------------------COMPONENTS---------------------------------------
    import Header from '../components/Header.vue';
    import AddTask from '../components/AddTask.vue';
    import Tasks from '../components/Tasks.vue';

    export default {
        setup() {

            let showAddTask = ref(false);

            // A function that toggles the form for adding a new task.
            let toggleAddTask = () => {
                showAddTask.value = !showAddTask.value;
            }

            return {
                tasksToRead,
                deleteTask,
                toggleTask,
                addTask,
                updateTask,
                showAddTask,
                toggleAddTask,
                closeModal,
                isUpdating,
                isDeleting,
                isModalOpen,
                openUpdateModal,
                uTask,
                uSched,
                uPriority,
                dTask
            }
        },
        components: {
            Header,
            AddTask,
            Tasks
        },
    }
</script>

<style scoped>
/* Animation of modal if it is on desktop screen size */
    @keyframes open-modal {
        from {
            opacity: 0;
            transform: translateY(-50px);
        }
        to {
            opacity: 1;
            transform: translateY(0px);
        }
    }

    /* Animation of modals when it is on mobile screen size */
    @keyframes open-modal-mobile {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
    
        to {
            opacity: 1;
            transform: translateY(0px);
        }
    }

    /* Modal Background */
    .modal-bg {
        
        min-width: 100vw;
        min-height: 100vh;
        position: fixed;
        top: 0;

        /* Flex */
        display: flex;
        justify-content: center;
        align-items: end;
    }

    /* Serves as a background color to reduce the opacity. */
    .modal-bg::before {

        content: "";
        display: block;
        width: 100vw;
        height: 100vh;
        background:black;
        position: absolute;
        z-index: -1;
        opacity: .1;
    }

    .delete-modal__confirm-message {
        font-weight: bold;
        text-align: left;
        color: var(--btn-update-primary);
    }

    .delete-modal__item-text {
        font-size: 1.5rem;
        font-weight: bold;
        color: var(--btn-delete-primary);
        text-align: left;
    }

    .modal-bg--update-modal, .modal-bg--delete-modal {
        background: white;
        /* max-width: 25rem; */
        width: 100%;
        padding: 0rem 1rem 1rem 1rem;
        border-radius: .5rem;
        border: 1px solid #ccc;
        animation: open-modal-mobile 200ms forwards;
    }

    /* The input field */
    .form__task-field {
        display: flex;
        flex-direction: column;
        gap: .5rem;
        margin-bottom: 1rem;
    }

    /* The checkbox section. */
    .priority-section {
        display: flex;
        gap: 1rem;
        margin-bottom: 1rem;
    }

    /* Element Selectors */
    .form__label {
        font-size: 1.2rem;
        font-weight: bold;
        align-self: flex-start;
        user-select: none;
    }

    .form__input {

        padding: .5rem;
    }

    .form__btn--submit {
        width: 100%;
        border: none;
        background: #020917;
        color: white;
        padding: .5em;
        font-size: 1.1rem;
        cursor: pointer;
        transition: transform 200ms;
    }

    .form__btn--submit:hover {

        transform: translateY(-.2rem);
    }

    .modal-bg--delete-modal {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        min-height: 15rem;
    }

    .buttons {
        display: flex;
        gap: 1rem;

        align-self: flex-end;
        margin-top: 2rem;
    }

    .btn-delete-buttons {
        padding: .8em;
        border: none;
        border-radius: .5rem;
        font-size: 1rem;
        font-weight: 700;
        color: white;
        font-family: Helvetica, arial;
        transition: all 200ms;
        cursor: pointer;
    }

    #btn-confirm {
        background-color: var(--btn-delete-primary);
        border: 1px solid var(--btn-delete-border);
    }

    #btn-confirm:hover {
        background-color: var(--btn-delete-hover);
    }

    #btn-cancel {
        color: var(--btn-update-primary);
        border: 1px solid var(--btn-update-border);
    }

    #btn-cancel:hover {
        background-color: var(--btn-update-primary);
        color: white;
    }

    @media only screen and (min-width: 720px) {

        .modal-bg {
            align-items: center;
        }
        
        .modal-bg--update-modal, .modal-bg--delete-modal {
            max-width: 25rem;
            animation: open-modal 200ms forwards;
        }

        .modal-bg--delete-modal {
            min-height: auto;
        }
    }
</style>