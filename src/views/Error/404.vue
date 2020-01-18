<script>
import { Button } from 'ant-design-vue';
import errorIcon from '@/assets/image/error-page.svg';
import statusIcon from '@/assets/image/404.png';
export default {
	name: 'error-404',
	render() {
		return (
			<div class="error-404" id="fullScreen">
				<img class="page-error" src={errorIcon} />
				<img class="status-error" src={statusIcon} />
				<div class="message-error">您访问的页面不存在</div>
				<Button
					type="primary"
					style={{ marginTop: '24px' }}
					onClick={() => {
						this.$router.replace('/');
					}}
				>
					返回首页
				</Button>
			</div>
		);
	}
};
</script>

<style lang="less" scoped>
.error-404 {
	flex: 1;
	overflow: hidden;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	.page-error {
		display: block;
		width: 423px;
		margin-top: 40px;
		@media (max-width: 500px) {
			width: 80%;
		}
	}
	.status-error {
		display: block;
		width: 440px;
		@media (max-width: 500px) {
			width: 80%;
		}
	}
	.message-error {
		font-size: 24px;
		color: #ada5a5;
	}
}
</style>
