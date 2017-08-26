<template>
    <div>
        <b-navbar toggleable="md" type="dark" variant="info">
            <b-nav-toggle target="nav_collapse"></b-nav-toggle>
            <router-link to="/" tag="b-navbar-brand">oVirt</router-link>
            <b-collapse is-nav id="nav_collapse">
                <b-nav is-nav-bar>
                <router-link to="/datacenters" tag="b-nav-item"><a href="#">Datacenters</a></router-link>
                </b-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>
<script>

</script>
<style>
 
</style>