
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
    created() {
        
        
    },
    methods: {
        async userInfo() {
            const [err,res] = await this.api.userInfo()

            console.log(err, res)
        },
        //更新验证码
        getCode(ref) {
            this.$refs[ref].src = `/api/api/admin/code?t=${Math.random()}`
        },
        //tabs切换事件
        handleTabClick(key) {
            this.customActiveKey = key
            if(key === 'tab1' && this.$refs.code1) {
                this.getCode('code1')
            }
            else if(key === 'tab2' && this.$refs.code2) {
                this.getCode('code2')
            }
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

            const validateFieldsKey = customActiveKey === 'tab1' ? ['username', 'password1', 'code1'] : ['email', 'password2', 'code2']

            validateFields(validateFieldsKey, { force: true }, (err, values) => {
                if(!err) {
                    console.log(values)
                    this.api.login({
                        userName: values.username,
                        password: password1._value
                    }).then(res => {
                        console.log(res)
                        state.loginBtn = false
                    })
                }
                else {
                    setTimeout(() => {
                        state.loginBtn = false
                    }, 600)
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
                                    rules: [{ required: true, message: '请输入帐户名' }],
                                    validateTrigger: 'change'
                                })(<Input size="large" type="text" placeholder="账户">
                                    <Icon slot="prefix" type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>
                                </Input>)
                            }
                            </Form.Item>
                            <Form.Item>
                            {
                                getFieldDecorator('password1', {
                                    rules: [{ required: true, message: '请输入密码' }],
                                    validateTrigger: 'blur'
                                })(<Input size="large" type="password" placeholder="密码">
                                    <Icon slot="prefix" type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>
                                </Input>)
                            }
                            </Form.Item>
                            <Row gutter={16}>
                                <Col span={16}>
                                    <Form.Item>
                                        {
                                            getFieldDecorator('code1', {
                                                rules: [{ required: true, message: '请输入验证码' }],
                                                validateTrigger: 'blur'
                                            })(<Input size="large" type="text" placeholder="验证码">
                                                <Icon slot="prefix" type="slack" style={{ color: 'rgba(0,0,0,.25)' }}/>
                                            </Input>)
                                        }
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <div style="width: 100%;height: 40px;display: flex;align-items: center;">
                                        <img
                                            ref="code1"
                                            style="width: 100%;height: 40px;cursor: pointer;"
                                            src="/api/api/admin/code"
                                            onClick={() => {this.getCode('code1')}}
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </Tabs.TabPane>
                        <Tabs.TabPane key="tab2" tab="邮箱登录">
                            <Form.Item>
                                {
                                    getFieldDecorator('email', {
                                        rules: [{ required: true, pattern: /^1[34578]\d{9}$/, message: '请输入邮箱' }],
                                        validateTrigger: 'change'
                                    })(<Input size="large" type="text" placeholder="邮箱">
                                        <Icon slot="prefix" type="mail" style={{ color: 'rgba(0,0,0,.25)' }}/>
                                    </Input>)
                                }
                            </Form.Item>
                            <Form.Item>
                                {
                                    getFieldDecorator('password2', {
                                        rules: [{ required: true, message: '请输入密码' }],
                                        validateTrigger: 'blur'
                                    })(<Input size="large" type="password" placeholder="密码">
                                        <Icon slot="prefix" type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>
                                    </Input>)
                                }
                            </Form.Item>
                            <Row gutter={16}>
                                <Col span={16}>
                                    <Form.Item>
                                        {
                                            getFieldDecorator('code2', {
                                                rules: [{ required: true, message: '请输入验证码' }],
                                                validateTrigger: 'blur'
                                            })(<Input size="large" type="text" placeholder="验证码">
                                                <Icon slot="prefix" type="slack" style={{ color: 'rgba(0,0,0,.25)' }}/>
                                            </Input>)
                                        }
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <div style="width: 100%;height: 40px;display: flex;align-items: center;">
                                        <img
                                            ref="code2"
                                            style="width: 100%;height: 40px;cursor: pointer;"
                                            src="/api/api/admin/code"
                                            onClick={() => {this.getCode('code2')}}
                                        />
                                    </div>
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
                        <a style={{ float: 'right' }}>暂不支持</a>
                    </div>
                </Form>
            </div>
        )
    }
}

export default Form.create({})(LoginForm)
</script>