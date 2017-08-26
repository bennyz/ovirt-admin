<template>
    <b-card
           :header="datacenterName"
           header-tag="header"
           align="center">
            <p class="card-text">
                <i class="fa fa-server fa-5x"></i>
            </p>
        <b-button href="#" variant="primary">{{ datacenter.status }}</b-button>
        <b-button href="#" variant="primary">info</b-button>
    </b-card>
</template>
<script>
    export default {
       props: ['datacenter'],
       data() {
           return {
             datacenterName: this.datacenter.name,
           };
       }
    }
</script>

<style>

</style>

