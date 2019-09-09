
import { deviceEnquire, DEVICE_TYPE } from '@/utils/device'
import { mapState } from 'vuex'


const mixin = {

}


//多端监听
const mixinDevice = {
    computed: {
        ...mapState({
            device: state => state.app.device
        })
    },
    methods: {
        isMobile () {
            return this.device === DEVICE_TYPE.MOBILE
        },
        isDesktop () {
            return this.device === DEVICE_TYPE.DESKTOP
        },
        isTablet () {
            return this.device === DEVICE_TYPE.TABLET
        }
    }
}


//混入App.vue组件  监听视口实现多端显示
const AppDeviceEnquire = {
    mounted() {
        const { $store } = this
        deviceEnquire(deviceType => {
            switch (deviceType) {
                case DEVICE_TYPE.DESKTOP:
                        $store.commit('app/setdevice', 'desktop')
                    break
                case DEVICE_TYPE.TABLET:
                        $store.commit('app/setdevice', 'tablet')
                    break
                case DEVICE_TYPE.MOBILE:
                    $store.commit('app/setdevice', 'mobile')
                    $store.commit('app/setcollapsed', true)
                break
            }
        })
    }
}


export { mixin, AppDeviceEnquire, mixinDevice }