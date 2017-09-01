<template>
    <div>
        <b-card-group columns>
            <app-datacenter v-for="datacenter in datacenters" :datacenter="datacenter" :key="datacenter.id">
            </app-datacenter>
            <b-card
                   header-tag="header"
                   align="center"
                   class="new-datacenter">
                    <p v-if="!newDatacenter" class="card-text">
                        <i class="fa fa-plus fa-5x"
                           @click="newDatacenter = !newDatacenter"></i>
                    </p>
                    <app-new-datacenter v-else>
                    </app-new-datacenter>
            </b-card>
        </b-card-group>

    </div>
</template>

<script>
    import NewDatacenter from './NewDatacenter.vue'
    import Datacenter from './Datacenter.vue';
    export default {
        data() {
            return {
              newDatacenter: false
            }
        },
        components: {
            appDatacenter: Datacenter,
            appNewDatacenter: NewDatacenter
        },
        methods: {

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
    .new-datacenter {
      height: 225px;
      width: 235px;
    }

    .card {
      height: 235px;
    }
</style>
