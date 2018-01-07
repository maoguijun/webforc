import React from 'react'
import Nav from '../../containers/sider/Nav'
// import User from '../../containers/sider/User'
// import './CoreLayout.scss'
// import { Layout, Icon } from 'antd'
// const { Content, Sider } = Layout
// import { host } from '../../config'
class CoreLayout extends React.Component {
  state = {
    collapsed: false,
    mode: 'inline'
  }

  render () {
    return (
      <div className='edit'>
        <div className='all'>
          <div className='all-title clearfix'>
            <a className='logo'>
              <img src={`./logo1.png`} width='100%' height='100%' />
            </a>
            <span style={{ paddingLeft: '0.1rem' }}>{'Online Learning'}</span>
            <a className='pwc'>
              <img src={`./2.png`} />
            </a>
          </div>
          <div className='all-prop'>
            <Nav />
            <div className='all-right'>
              <div className='content-wrap'>{this.props.children}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
