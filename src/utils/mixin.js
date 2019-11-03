import { mapState } from 'vuex';
import { deviceEnquire, DEVICE_TYPE } from '@/utils/device';



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


//混入App.vue组件   读取本地Storage数据
const AppStore = {
    created() {
        const { $store,$ls } = this

        
    }
}

export { mixin, AppStore, AppDeviceEnquire, mixinDevice }