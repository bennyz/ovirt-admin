<template>
  <div>
    <b-form>
      <b-form-input v-model="name"
                 type="text"
                 placeholder="Datacenter name">

      </b-form-input>
      <b-form-input v-model="description"
                 type="text"
                 placeholder="Datacenter description">
      </b-form-input>
      <b-button type="button" variant="primary" @click="createDatacenter">Submit</b-button>
      <b-button type="reset" variant="secondary">Reset</b-button>
    </b-form>
  </div>

</template>
<script>
  export default {
    data () {
      return {
        name: '',
        description: '',
        defaultStorageType: 'Shared',
        storageTypes: [
          { value: 'Shared', text: 'Shared'},
          { value: 'Local', text: 'Local' }
        ],
        defaultCompatability: '4.2',
        compatabilityVersions: [
          { value: '3.6', text: '3.6' },
          { value: '4.0', text: '4.0' },
          { value: '4.1', text: '4.1' },
          { value: '4.2', text: '4.2' }
        ],
        defaultQuota: 'Disabled',
        quotaModes: [
          { value: 'Enforced', text: 'Enforced' },
          { value: 'Disabled', text: 'Disabled' },
          { value: 'Audit', text: 'Audit' }
        ],
        comment: ''
      }
    },
    methods: {
      createDatacenter() {
        console.log("dispatch")
        const datacenter = {
          name: this.name,
          description: this.description,
          local: this.defaultStorageType === 'Local',
          version: {
            "major": this.defaultCompatability.split('.')[0],
            "minor": this.defaultCompatability.split('.')[1]
          },
          quota_mode: "disabled"
        }
        this.$store.dispatch('CREATE_DATACENTER', datacenter);
      }
    }
  }
</script>
<style lang="scss">

</style>
