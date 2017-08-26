<template>
    <b-card :title="datacenterName"
           style="max-width: 20rem;"
           class="mb-2">
            <p class="card-text">
                Icon will be here
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