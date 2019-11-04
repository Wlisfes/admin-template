
<script>
import { Form,Input,Tabs,Button,Icon,Row,Col,Checkbox } from 'ant-design-vue';
const LoginForm = {
    name: 'login',
    data () {
        return {
            Active: '0',     //当前激活 tab 面板的 key
            loading: false,        //确定按钮动画、禁用状态

        }
    },
    created() {
        
        
    },
    methods: {
        //确定 提交表单事件
        handleSubmit(e) {
            e.preventDefault()
            this.loading = true  //按钮load动画
            const { form: { validateFields }, Active } = this
            const Key = !!Active  ? ['username', 'password', 'code'] : ['email', 'password', 'code']
            validateFields(Key, { force: true }, async (err, values) => {
                if(!err) {
                    const [err, res] = await this.$store.dispatch('user/login', {
                        Active: !!Active,
                        ...values
                    })
                    if(!err) {
                        this.loading = false
                        this.$router.push({ path: '/' })
                    }
                    else {
                        //更新验证码
                        this.$refs.code.src = `/api/api/admin/code?t=${Math.random()}`
                        this.loading = false
                    }
                }
                else {
                    setTimeout(() => {
                        this.loading = false
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
                        activeKey={this.Active}
                        tabBarStyle={{ textAlign: 'center', borderBottom: 'unset' }}
                        onChange={(key) => {this.Active = key}}
                    >
                        <Tabs.TabPane key="0" tab="账号密码登录">
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
                        </Tabs.TabPane>
                        <Tabs.TabPane key="1" tab="邮箱登录">
                            <Form.Item>
                                {
                                    getFieldDecorator('email', {
                                        rules: [{ required: true, message: '请输入邮箱' }],
                                        validateTrigger: 'change'
                                    })(<Input size="large" type="text" placeholder="邮箱">
                                        <Icon slot="prefix" type="mail" style={{ color: 'rgba(0,0,0,.25)' }}/>
                                    </Input>)
                                }
                            </Form.Item>
                        </Tabs.TabPane>
                    </Tabs>
                    <Form.Item>
                        {
                            getFieldDecorator('password', {
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
                                    getFieldDecorator('code', {
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
                                    ref="code"
                                    style="width: 100%;height: 40px;cursor: pointer;"
                                    src="/api/api/admin/code"
                                    onClick={() => {
                                        this.$refs.code.src = `/api/api/admin/code?t=${Math.random()}`
                                    }}
                                />
                            </div>
                        </Col>
                    </Row>
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
                            loading={this.loading}
                            disabled={this.loading}
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