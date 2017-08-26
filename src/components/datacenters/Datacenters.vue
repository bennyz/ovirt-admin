<template>
    <div>
        <b-card-group columns>
            <app-datacenter v-for="datacenter in datacenters" :datacenter="datacenter" :key="datacenter.id">
            </app-datacenter>
        </b-card-group>
    </div>
</template>

<script>
    import Datacenter from './Datacenter.vue'
    export default {
        data() {
            return {

            }
        },
        components: {
            appDatacenter: Datacenter
        },
        computed: {
            datacenters() {
                return this.$store.getters.datacenters
            }
        },
        created() {
            this.$store.dispatch('FETCH_DATACENTER');
        }

    }
</script>

<style lang="scss" scoped>
    .card-columns {
        column-count: 5
    }
</style>

