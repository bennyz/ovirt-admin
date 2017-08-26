<template>
    <div>
        <app-header></app-header>
        <router-view></router-view>
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    export default {
        components: {
            appHeader: Header
        },
        data() {
            return {
            }
        }
    }
</script>

<style lang="scss">
    a {
        &:visited {
            text-decoration: none;
            color: white

        }
        &:hover {
            border-style: none;
            text-decoration: none
        }
    }
</style>
