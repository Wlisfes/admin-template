<script>
import { AppDeviceEnquire, AppStore } from '@/utils/mixin';
export default {
	name: 'App',
	mixins: [AppStore, AppDeviceEnquire],
	render() {
		return (
			<div id="app">
				<router-view />
			</div>
		);
	}
};
</script>

<style lang="less">
#app {
	height: 100%;
	display: flex;
	flex-direction: column;
}
</style>
