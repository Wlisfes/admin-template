
<script>
import { mixinDevice } from '@/utils/mixin'
import { Form,Input,Button,Icon,Popover,Progress,Select,Row,Col } from 'ant-design-vue';

const levelNames = {
    0: '低',
    1: '低',
    2: '中',
    3: '强'
}
const levelClass = {
    0: 'error',
    1: 'error',
    2: 'warning',
    3: 'success'
}
const levelColor = {
    0: '#ff0000',
    1: '#ff0000',
    2: '#ff7e05',
    3: '#52c41a'
}

const RegisterForm = {
    name: 'register',
    mixins: [mixinDevice],
    data () {
        return {
            state: {
                time: 60,
                smsSendBtn: false,
                passwordLevel: 0,
                passwordLevelChecked: false,
                percent: 10,
                progressColor: '#FF0000'
            },
            registerBtn: false
        }
    },
    computed: {
        passwordLevelClass () {
            return levelClass[this.state.passwordLevel]
        },
        passwordLevelName () {
            return levelNames[this.state.passwordLevel]
        },
        passwordLevelColor () {
            return levelColor[this.state.passwordLevel]
        }
    },
    methods: {
        handlePasswordInputClick () {
            if (!this.isMobile()) {
                this.state.passwordLevelChecked = true
                return
            }
            this.state.passwordLevelChecked = false
        },
        //密码强度验证
        handlePasswordLevel (rule, value, callback) {
            let level = 0

            // 判断这个字符串中有没有数字
            if (/[0-9]/.test(value)) {
                level++
            }
            // 判断字符串中有没有字母
            if (/[a-zA-Z]/.test(value)) {
                level++
            }
            // 判断字符串中有没有特殊符号
            if (/[^0-9a-zA-Z_]/.test(value)) {
                level++
            }
            this.state.passwordLevel = level
            this.state.percent = level * 30
            if (level >= 2) {
                if (level >= 3) {
                    this.state.percent = 100
                }
                callback()
            } else {
                if (level === 0) {
                    this.state.percent = 10
                }
                callback(new Error('密码强度不够'))
            }
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
        },
        //注册 表单提交
        handleSubmit(e) {
            e.preventDefault()
            const { form: { validateFields } } = this
            validateFields({ force: true }, (err, values) => {
                if (!err) {
                    console.log(values)
                }
            })
        }
    },
    render() {
        const { getFieldDecorator } = this.form;
        const { state } = this;
        return (
            <div class="main">
                {false && <h3 style={{ marginBottom: '20px', fontSize: '16px' }}><span>注册</span></h3>}
                <Form style={{marginTop: '16px'}}>
                    <Form.Item>
                        {
                            getFieldDecorator('email', {
                                rules: [{ required: true, type: 'email', message: '请输入邮箱地址' }],
                                validateTrigger: ['change', 'blur']
                            })(<Input size="large" type="text" placeholder="邮箱">
                                <Icon slot="prefix" type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>
                            </Input>)
                        }
                    </Form.Item>
                    <Popover placement="rightTop" trigger="click" visible={state.passwordLevelChecked}>
                        <template slot="content">
                            <div style={{ width: '240px' }}>
                                <div class={{ 'user-register': true, [this.passwordLevelClass]: true }}>
                                    强度：<span>{ this.passwordLevelName }</span>
                                </div>
                                <Progress percent={state.percent} showInfo={false} strokeColor={this.passwordLevelColor} />
                                <div style={{ marginTop: '16px' }}>
                                    <span>请至少输入 6 个字符。请不要使用容易被猜到的密码。</span>
                                </div>
                            </div>
                        </template>
                        <Form.Item>
                            {
                                getFieldDecorator('password', {
                                    rules: [{ required: true, message: '至少6位密码，区分大小写'}, { validator: this.handlePasswordLevel }],
                                    validateTrigger: ['change', 'blur']
                                })(<Input size="large" type="password"
                                    placeholder="至少6位密码，区分大小写" autocomplete="false" onClick={this.handlePasswordInputClick}>
                                    <Icon slot="prefix" type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>
                                </Input>)
                            }
                        </Form.Item>
                    </Popover>
                    <Form.Item>
                        {
                            getFieldDecorator('password2', {
                                rules: [{ required: true, message: '至少6位密码，区分大小写'}, { validator: this.handlePasswordLevel }],
                                validateTrigger: ['change', 'blur']
                            })(<Input size="large" type="password" placeholder="确认密码" autocomplete="false">
                                <Icon slot="prefix" type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>
                            </Input>)
                        }
                    </Form.Item>
                    <Form.Item>
                        {
                            getFieldDecorator('mobile', {
                                rules: [{ required: true, message: '请输入正确的手机号', pattern: /^1[3456789]\d{9}$/}],
                                validateTrigger: ['change', 'blur']
                            })(<Input size="large" placeholder="11 位手机号" autocomplete="false">
                                <Icon slot="prefix" type="mobile" style={{ color: 'rgba(0,0,0,.25)' }}/>
                                <Select slot="addonBefore" size="large" defaultValue="+86">
                                    <Select.Option value="+86">+86</Select.Option>
                                    <Select.Option value="+87">+87</Select.Option>
                                </Select>
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
                                disabled={state.smsSendBtn}
                                onClick={this.getCaptcha}
                            >获取验证码</Button>
                        </Col>
                    </Row>
                    <Form.Item style={{margin: 0}}>
                        <Button
                            size="large"
                            type="primary"
                            htmlType="submit"
                            style={{ width: '50%' }}
                            loading={this.registerBtn}
                            disabled={this.registerBtn}
                            onClick={this.handleSubmit}
                        >注册</Button>
                        <router-link style={{ float: 'right' }} to={{ path: '/user/login' }}>使用已有账户登录</router-link>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}


export default Form.create({})(RegisterForm)
</script>