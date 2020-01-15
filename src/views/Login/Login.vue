<script>
import { Form, Input, Icon, Button, Checkbox } from 'ant-design-vue';
const Login = {
	name: 'Login',
	data() {
		return {
			loading: false
		};
	},
	methods: {
		onRegister() {
			this.$message.info('注册功能已关闭，请联系管理员处理！');
		},
		onUpdatePassword() {
			this.$message.info('改密功能暂未开发，尽请期待！');
		},
		onSubmit(e) {
			e.preventDefault();
			this.loading = true;
			this.form.validateFields(['username', 'password'], async (err, respones) => {
				if (!err) {
					const { username, password } = respones;
					if ('admin' === username && '000000' === password) {
						this.$ls.set('user', { username, password }, 24 * 60 * 60 * 1000);
						this.$router.replace({
							path: '/'
						});
					} else {
						this.$message.error('账户或密码错误，请重新输入！');
						setTimeout(() => {
							this.loading = false;
						}, 600);
					}
				} else {
					setTimeout(() => {
						this.loading = false;
					}, 600);
				}
			});
		}
	},
	render() {
		const { getFieldDecorator } = this.form;
		return (
			<div class="Login">
				<div class="Login-Form">
					<h1 style={{ textAlign: 'center' }}>欢迎到来、久违了!</h1>
					<Form onSubmit={this.onSubmit}>
						<Form.Item>
							{getFieldDecorator('username', {
								rules: [{ required: true, message: '请输入帐户名' }],
								validateTrigger: 'change'
							})(
								<Input size="large" type="text" placeholder="username">
									<Icon
										slot="prefix"
										type="user"
										style={{ color: 'rgba(0,0,0,.25)' }}
									/>
								</Input>
							)}
						</Form.Item>
						<Form.Item>
							{getFieldDecorator('password', {
								rules: [{ required: true, message: '请输入密码' }],
								validateTrigger: 'blur'
							})(
								<Input size="large" type="password" placeholder="password">
									<Icon
										slot="prefix"
										type="lock"
										style={{ color: 'rgba(0,0,0,.25)' }}
									/>
								</Input>
							)}
						</Form.Item>
						<Form.Item style={{ marginTop: '24px' }}>
							<Button
								size="large"
								type="primary"
								htmlType="submit"
								style={{ width: '100%' }}
								loading={this.loading}
								disabled={this.loading}
							>
								确定
							</Button>
						</Form.Item>
						<Form.Item>
							<a onClick={this.onRegister}>注册账户</a>
							<a onClick={this.onUpdatePassword} style={{ float: 'right' }}>
								忘记密码
							</a>
						</Form.Item>
					</Form>
				</div>
			</div>
		);
	}
};

export default Form.create({})(Login);
</script>

<style lang="less" scoped>
.Login {
	flex: 1;
	min-width: 375px;
	background: url('~@/assets/image/login.jpg') center center / cover no-repeat;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	/deep/ &-Form {
		width: 450px;
		background-color: #ffffff;
		box-sizing: border-box;
		padding: 24px 24px 0 24px;
		border-radius: 4px;
		@media (max-width: 500px) {
			width: 95%;
		}
	}
}
</style>
