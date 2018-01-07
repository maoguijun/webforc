import React, { Component } from 'react'
import { injectIntl, intlShape } from 'react-intl'
// import ImmutablePropTypes from 'react-immutable-proptypes'
import { Icon, Form, Input, Button, Row, Col, Alert, message } from 'antd'
import LocaleBtn from '../../../containers/global/LocaleBtn'
import { fetchState } from 'config'
const FormItem = Form.Item
import './login.scss'

export class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false
    }
  }
  // console.log('page',props)
  render () {
    const { getFieldDecorator } = this.props.form
    const { formatMessage } = this.props.intl
    const { loading } = this.state
    const baseLeft = 6
    const baseRight = 17
    const formItemLayout = {
      labelCol: { span: baseLeft },
      wrapperCol: { span: baseRight }
    }

    const username = formatMessage({ id: 'login_username' })
    const password = formatMessage({ id: 'login_password' })
    return (
      <Row type='flex' justify='center' align='middle' className='login'>
        <Col className='login-wrap'>
          {/* <LocaleBtn /> */}
          <Form
            hideRequiredMark
            onSubmit={e => {
              let page
              e.preventDefault()
              this.setState({ loading: true })
              this.props.form.validateFields((err, values) => {
                if (!err) {
                  values = {
                    ...values,
                    type: '0'
                  }
                  this.props.login(values).then(e => {
                    if (e.payload) {
                      this.setState({
                        loading: false
                      })
                      this.props.pathJump('/student')
                    } else {
                      this.setState({
                        loading: false
                      })
                      message.error(e.error.message)
                    }
                  })
                }
                // console.log(values)
              })
            }}
          >
            <h1>{formatMessage({ id: 'Project_Title' })}</h1>
            {/* <Col offset={baseLeft} span={baseRight}>
              <Alert message={formatMessage({ id: 'login_alert' })} type='info' showIcon />
            </Col> */}
            <FormItem label={null}>
              {getFieldDecorator('mail', {
                initialValue: 'superadmin@qq.com', // A_general superMan
                rules: [{ required: true, message: formatMessage({ id: 'input_require' }, { name: username }) }]
              })(
                <Input
                  prefix={<Icon type='mail' style={{ fontSize: 13 }} />}
                  placeholder={formatMessage({ id: 'input_placeholder' }, { name: username })}
                />
              )}
            </FormItem>
            <FormItem label={null}>
              {getFieldDecorator('password', {
                initialValue: '123456',
                rules: [{ required: true, message: formatMessage({ id: 'input_require' }, { name: password }) }]
              })(
                <Input
                  prefix={<Icon type='lock' style={{ fontSize: 13 }} />}
                  placeholder={formatMessage({ id: 'input_placeholder' }, { name: password })}
                  type='password'
                />
              )}
            </FormItem>
            <Row>
              <Col>
                <Button type='primary' htmlType='submit' style={{ width: '100%' }} size='large' loading={loading}>
                  {formatMessage({ id: 'login_login' })}
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    )
  }
}

Login.propTypes = {
  form: React.PropTypes.object.isRequired,
  intl: intlShape.isRequired
}

class CheckLogin extends React.Component {
  // componentWillMount(){
  //   let page = '';
  //   //console.log('CheckLogin',this.props)
  //   if(this.props.user && this.props.user.get('status')===fetchState.success){
  //     let _user = this.props.user.toJS();
  //
  //     // _user.roles.map(v=>{
  //     //   switch (v.id){
  //     //     case 'applicant':page = '/my-list/waiting';
  //     //           break;
  //     //     case 'manager':page = '/supervisor/approving';
  //     //           break;
  //     //     default:page = null;
  //     //   }
  //     // })
  //     //
  //     // this.setState({page})
  //     this.props.pathJump(this.props.location.query.next || '/my-list/waiting')
  //   }
  // }
  render () {
    return <Login {...this.props} page={this.props.user.toJS().roles} />
  }
}

export default Form.create()(injectIntl(CheckLogin))
