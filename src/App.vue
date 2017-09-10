<template>
    <div class="container">
        <app-header></app-header>
        <div class="row">
            <div class="col-xs-12">
                <transition name="slide" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    import Header from './components/Header.vue'
    export default {
        components: {
            appHeader: Header
        },
        methods: {
            ...mapActions({
                fetchData: 'loadData'
            }),
            getPlace() {
                this.fetchData();
            }
        },
        created() {
            this.getPlace();
        }
    }
</script>

<style>
    .slide-enter-active {
        animation: slide-in 200ms ease-out forwards;
    }
    .slide-leave-active {
        animation: slide-out 200ms ease-out forwards;
    }

    @keyframes slide-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes slide-out {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
</style>
