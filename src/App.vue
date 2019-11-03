<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
import { AppDeviceEnquire,AppStore } from '@/utils/mixin'
export default {
    mixins: [AppStore,AppDeviceEnquire],
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