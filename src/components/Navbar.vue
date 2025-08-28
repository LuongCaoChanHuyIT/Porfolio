<template lang="">
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-white py-3">
            <div class="container px-5">
                <a class="navbar-brand" href="index.html"><span class="fw-bolder text-primary">Start Bootstrap</span></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                        <router-link to="/" class="nav-link">Home</router-link>
                        <router-link to="/resume" class="nav-link">Resume</router-link>
                        <router-link to="/projects" class="nav-link">Projects</router-link>
                        <router-link to="/contact" class="nav-link">Contact</router-link>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
<script setup lang="ts">

</script>
<style  lang="">
    
</style>