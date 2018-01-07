import React from 'react'
import { injectIntl } from 'react-intl'
import { connect } from 'react-redux'
import { IndexLink, Link } from 'react-router'
// import { Menu, Icon, message, Badge } from 'antd'
// import { host } from '../../config'
import { pathJump } from '../../utils/'
import { logout, getLogNum } from '../../store/user'
import Immutable from 'immutable'
// import './Nav.scss'
// const SubMenu = Menu.SubMenu

class Side extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      active: ''
    }
  }
  componentWillMount () {
    const { location: { pathname } } = this.props
    let _pathname = pathname.slice(1)
    this.setState({
      active: _pathname
    })
  }
  componentDidMount () {}
  componentWillUnmount () {}
  render () {
    const props = this.props
    const { intl: { formatMessage }, location: { pathname }, user, userInfo, collapsed } = props
    const { active } = this.state
    console.log('user', user, userInfo, props)

    return (
      <div className='all-left'>
        <a className='people'>
          <img src={userInfo && userInfo.get('fillPath') ? userInfo.get('fillPath') : `/people.png`} />
        </a>
        <span className='allen'>{userInfo ? userInfo.get('id') : 'Allen Zhang'}</span>
        <span className='gray1' style={{ cursor: 'pointer' }} onClick={e => props.dispatch(logout())}>
          退出
        </span>
        <ul>
          <li
            className={active === 'allWorks' ? 'active' : ''}
            onClick={e => {
              this.setState({
                active: 'allWorks'
              })
              props.pathJump('/allWorks')
            }}
          >
            <a>
              <i className='iconfont' key='allWorks'>
                &#xe602;
              </i>全部作业
            </a>
          </li>
          <li
            className={active === 'subWorks' ? 'active' : ''}
            onClick={e => {
              this.setState({
                active: 'subWorks'
              })
              props.pathJump('/subWorks')
            }}
          >
            <a>
              <i className='iconfont' key='subWorks'>
                &#xe603;
              </i>{' '}
              已提交
            </a>
          </li>
          <li
            className={active === 'updateWorks' ? 'active' : ''}
            onClick={e => {
              this.setState({
                active: 'updateWorks'
              })
              props.pathJump('/updateWorks')
            }}
          >
            <a>
              <i className='iconfont' key='updateWorks'>
                &#xe63a;
              </i>{' '}
              需修改
            </a>
          </li>
          <li
            className={active === 'endWorks' ? 'active' : ''}
            onClick={e => {
              this.setState({
                active: 'endWorks'
              })
              props.pathJump('/endWorks')
            }}
          >
            <a>
              <i className='iconfont' key='endWorks'>
                &#xe661;
              </i>{' '}
              已完成
            </a>
          </li>
          <li
            className={active === 'reserveWorks' ? 'active' : ''}
            onClick={e => {
              this.setState({
                active: 'reserveWorks'
              })
              props.pathJump('/reserveWorks')
            }}
          >
            <a>
              <i className='iconfont' key='reserveWorks'>
                &#xe643;
              </i>{' '}
              草稿箱
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  location: state.get('routing').locationBeforeTransitions,
  user: state.get('user'),
  userInfo: state.getIn(['userInfo', 'userLoginInfo'])
})

const mapDispatchToProps = dispatch => ({
  dispatch,
  pathJump: path => dispatch(pathJump(path))
})
export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Side))
