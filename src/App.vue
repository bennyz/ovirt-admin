<template>
    <div>
        <app-header></app-header>
        <div class="container-fluid">
            <router-view></router-view>
        </div>
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
    .container-fluid {
        padding: 5px;
    }
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
