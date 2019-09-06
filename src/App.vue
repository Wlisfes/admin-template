<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
import { AppDeviceEnquire } from '@/utils/mixin'
export default {
    mixins: [AppDeviceEnquire],
    mounted () {

    }
}
</script>

<style>
#app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}
</style>