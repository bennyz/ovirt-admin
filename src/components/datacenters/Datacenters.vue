<template>
    <div>
        <b-card-group columns>
            <app-datacenter v-for="datacenter in datacenters" :datacenter="datacenter" :key="datacenter.id">
            </app-datacenter>
            <b-card
                   header-tag="header"
                   align="center"
                   class="new-datacenter">
                    <p class="card-text new-datacenter-icon">
                        <i class="fa fa-plus fa-5x"
                           @click="showModal"></i>
                    </p>
                    <b-modal id="new-datacenter-modal"
                             ref="newDatacenterModal"
                             title="New Datacenter">
                      <app-new-datacenter>
                      </app-new-datacenter>
                    </b-modal>
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
            }
        },
        components: {
            appDatacenter: Datacenter,
            appNewDatacenter: NewDatacenter
        },
        methods: {
          showModal() {
            this.$refs.newDatacenterModal.show();
          }
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
        column-count: 6
    }
    .new-datacenter {
      height: 225px;
      background-color:rgba(0, 0, 0, 0.1);
    }
    .new-datacenter-icon:hover {
      cursor: pointer;
    }

    .new-datacenter-icon {
      margin-top: 50px;
      margin-bottom: 50px;
    }
</style>
