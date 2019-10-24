
<script>
import { Form,Input,Tabs,Button,Icon,Row,Col,Checkbox } from 'ant-design-vue';
const LoginForm = {
    name: 'login',
    data () {
        return {
            //当前激活 tab 面板的 key
            customActiveKey: 'tab1',


            state: {
                time: 60,
                loginBtn: false,
                // login type: 0 email, 1 username, 2 telephone
                loginType: 0,
                smsSendBtn: false
            }
        }
    },

    methods: {
        //tabs切换事件
        handleTabClick(key) {
            this.customActiveKey = key
        },
        //确定 提交表单事件
        handleSubmit(e) {
            e.preventDefault()
            const {
                form: { validateFields },
                state,
                customActiveKey,
                Login
            } = this

            //按钮load动画
            state.loginBtn = true

            const validateFieldsKey = customActiveKey === 'tab1' ? ['username', 'password'] : ['mobile', 'captcha']

            validateFields(validateFieldsKey, { force: true }, (err, values) => {
                if(!err) {
                    console.log(values)
                    // setTimeout(() => {
                    //     state.loginBtn = false
                    //     this.$router.push('/')
                    // }, 1500)

                    this.$store.dispatch('route/addRoute').then(res => {
                        console.log(res)
                        this.$router.push('/')
                    })
                }
                else {
                    setTimeout(() => {
                        state.loginBtn = false
                    }, 600)
                }
            })
        },
        //验证码发送
        getCaptcha(e) {
            e.preventDefault()
            const { form: { validateFields }, state } = this
            //验证手机号
            validateFields(['mobile'], { force: true }, (err, values) => {
                if(!err) {
                    console.log(values)
                }
            })
        }
    },
    render() {
        const { getFieldDecorator } = this.form;
        return(
            <div class="main">
                <Form onSubmit={this.handleSubmit}>
                    <Tabs
                        activeKey={this.customActiveKey}
                        tabBarStyle={{ textAlign: 'center', borderBottom: 'unset' }}
                        onChange={this.handleTabClick}
                    >
                        <Tabs.TabPane key="tab1" tab="账号密码登录">
                            <Form.Item>
                            {
                                getFieldDecorator('username', {
                                    rules: [{ required: true, message: '请输入帐户名或邮箱地址' }],
                                    validateTrigger: 'change'
                                })(<Input size="large" type="text" placeholder="账户: admin">
                                    <Icon slot="prefix" type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>
                                </Input>)
                            }
                            </Form.Item>
                            <Form.Item>
                            {
                                getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入密码' }],
                                    validateTrigger: 'blur'
                                })(<Input size="large" type="password" placeholder="密码: 000000">
                                    <Icon slot="prefix" type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>
                                </Input>)
                            }
                            </Form.Item>
                        </Tabs.TabPane>
                        <Tabs.TabPane key="tab2" tab="手机号登录">
                            <Form.Item>
                            {
                                getFieldDecorator('mobile', {
                                    rules: [{ required: true, pattern: /^1[34578]\d{9}$/, message: '请输入正确的手机号' }],
                                    validateTrigger: 'change'
                                })(<Input size="large" type="text" placeholder="手机号">
                                    <Icon slot="prefix" type="mobile" style={{ color: 'rgba(0,0,0,.25)' }}/>
                                </Input>)
                            }
                            </Form.Item>
                            <Row gutter={16}>
                                <Col span={16}>
                                    <Form.Item>
                                        {
                                            getFieldDecorator('captcha', {
                                                rules: [{ required: true, message: '请输入验证码' }],
                                                validateTrigger: 'blur'
                                            })(<Input size="large" type="text" placeholder="验证码">
                                                <Icon slot="prefix" type="mail" style={{ color: 'rgba(0,0,0,.25)' }}/>
                                            </Input>)
                                        }
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Button
                                        size="large"
                                        tabindex="-1"
                                        style={{ width: '100%' }}
                                        disabled={this.state.smsSendBtn}
                                        onClick={this.getCaptcha}
                                    >获取验证码</Button>
                                </Col>
                            </Row>
                        </Tabs.TabPane>
                    </Tabs>
                    <Form.Item>
                        {
                            getFieldDecorator('rememberMe', {
                                valuePropName: 'checked',
                                initialValue: true
                            })(<Checkbox>自动登录</Checkbox>)
                        }
                        <router-link
                            to={{ path: '/user/login', params: { user: 'aaa'} }}
                            style={{ float: 'right', fontSize: '14px' }}
                        >忘记密码</router-link>
                    </Form.Item>
                    <Form.Item style={{ marginTop: '24px' }}>
                        <Button
                            size="large"
                            type="primary"
                            htmlType="submit"
                            style={{ width: '100%' }}
                            loading={this.state.loginBtn}
                            disabled={this.state.loginBtn}
                        >确定</Button>
                    </Form.Item>
                    <div style={{ marginTop: '24px',lineHeight: '22px' }}>
                        <span>其他登录方式</span>
                        <a style={{ marginLeft: '12px' }}>暂不支持</a>
                        <router-link
                            style={{ float: 'right' }}
                            to={{ path: '/user/register', params: { user: 'aaa'} }}
                        >注册账户</router-link>
                    </div>
                </Form>
            </div>
        )
    }
}

export default Form.create({})(LoginForm)
</script>