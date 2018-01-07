/*
 * @Author: Maoguijun
 * @Date: 2018-01-02 12:16:58
 * @Last Modified by: Maoguijun
 * @Last Modified time: 2018-01-04 18:25:28
 */
import React, { PureComponent } from 'react'
import { injectIntl } from 'react-intl'
// import { Row, message, Spin, Button, Pagination, Modal, Col, Select, Input, DatePicker, Icon, Table } from 'antd'
import { connect } from 'react-redux'
// import { ImmutableTable } from '../../../components/antd/Table'
import ImmutablePropTypes from 'react-immutable-proptypes'
// import SimpleForm from '../../../components/antd/SimpleForm'
import { Link } from 'react-router'
import { pathJump } from '../../../utils/'

// import TopSearch from '../../../components/search/topSearch'
// import Title from '../../../components/title/title'
import { titles as _tit, allWorksStatus, allWorks_tableField as _allWorks } from '../../../config'
import Immutable from 'immutable'
import { formatDate, formatMoney, configDirectory, configDirectoryObject, configCate } from '../../../utils/formatData'
import { getFormRequired } from '../../../utils/common'
import { fetchAllWorks, newAllWorks, altAllWorks, fetchAllWorksInfo, operateAllWorks } from '../modules/allWorks'
// const Option = Select.Option
// const Search = Input.Search

class AllWorks extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      modal: false,
      current: 1
    }
  }

  componentWillMount () {
    const { dispatch, params, location } = this.props
    // console.log('this.props',this.props)
    // this.setState({ loading: true })
    // let json = {
    //   limit: 13,
    //   offset: 0
    // }
    // dispatch(fetchAllWorks(json)).then(e => {
    //   if (e.error) {
    //     message.error(e.error.message)
    //   } else {
    //     this.setState({
    //       loading: false,
    //       count: e.payload.count
    //     })
    //   }
    // })
  }

  render () {
    const { intl: { formatMessage }, location: { pathname }, count, allWorksInfo, dispatch } = this.props
    const { modal, current } = this.state

    // 虚假数据
    // 表一
    let _allWorks = []
    for (let i = 0; i < 5; i++) {
      _allWorks.push({
        name: '市场战略分析报告',
        status: '已完成',
        chepterId: '解决问题并抓住机遇',
        updateAt: '2017-12-19',
        id: i
      })
    }
    let allWorks = Immutable.fromJS(_allWorks)
    // 表二
    let _s1 = []
    for (let i = 0; i < 5; i++) {
      _s1.push({
        name: '市场战略分析',
        num: '10',
        updateAt: '2017-12-19',
        id: i
      })
    }
    let s1 = Immutable.fromJS(_s1)
    // 表三
    let _s2 = []
    for (let i = 0; i < 5; i++) {
      _s2.push({
        name: '绩效报表',
        status: '已完成',
        updateAt: '2017-12-19',
        id: i
      })
    }
    let s2 = Immutable.fromJS(_s2)

    return (
      <div>
        <div className='all-rt'>
          <button>全部作业</button>
          <a onClick={() => this.setState({ modal: !modal })}>
            <i className='iconfont yun'>&#xe668;</i>添加作业
          </a>
        </div>
        <table id='tbl'>
          <thead>
            <tr>
              <th className='rt01'>
                作业名<em className='iconfont' style={{ cursor: 'pointer' }}>
                  &#xe61c;
                </em>
              </th>
              <th className='rt02'>作业状态</th>
              <th className='rt03'>章节</th>
              <th>更新时间</th>
            </tr>
          </thead>
          <tbody>
            {allWorks &&
              allWorks.toJS().map(item => (
                <tr key={item.id}>
                  <td className='rt01'>
                    <i />&nbsp;{item.name}
                  </td>
                  <td className='rt02'>{item.status}</td>
                  <td className='rt03'>{item.chepterId}</td>
                  <td>{item.updateAt}</td>
                </tr>
              ))}
          </tbody>
        </table>

        <div className='pop-bg' style={{ display: modal ? 'block' : 'none' }} />
        <div className='add-pop ' style={{ display: modal ? 'block' : 'none' }}>
          <a className='iconfont' onClick={() => this.setState({ modal: false })}>
            &#xe66e;
          </a>
          <div className='swiper-slide' style={{ display: current === 1 ? 'block' : 'none' }}>
            <p>第一步:选择课程</p>
            <table className='modal-table-allWorks'>
              <thead>
                <tr>
                  <td className='rt01'>
                    课程名称{' '}
                    <em className='iconfont' style={{ cursor: 'pointer' }}>
                      &#xe61c;
                    </em>
                  </td>
                  <td className='rt02'>作业数量</td>
                  <td className='rt03'>最近修改时间</td>
                </tr>
              </thead>
              <tbody>
                {/* <tr style={{ borderTop: 'none' }} onClick={() => this.setState({ current: 2 })}>
                  <td className='rt01'>
                    <i>市场战略分析</i>
                  </td>
                  <td className='rt02'>10</td>
                  <td>2017-12-19</td>
                </tr>
                <tr onClick={() => this.setState({ current: 2 })}>
                  <td className='rt01'>
                    <i>绩效报表</i>
                  </td>
                  <td className='rt02'>8</td>
                  <td>-</td>
                </tr> */}
                {s1 &&
                  s1.toJS().map((item, index) => (
                    <tr onClick={() => this.setState({ current: 2 })} key={item.id}>
                      <td className='rt01'>
                        <i>{item.name}</i>
                      </td>
                      <td className='rt02'>{item.num}</td>
                      <td>{item.updateAt}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div className='swiper-slide' style={{ display: current === 2 ? 'block' : 'none' }}>
            <p>
              <a className='back' onClick={() => this.setState({ current: current - 1 })}>
                {'< 返回上一步'}
              </a>
              第2步:选择章节
            </p>
            <table className='modal-table-allWorks'>
              <thead>
                <tr>
                  <th className='rt01'>
                    章节名称 <em className='iconfont'>&#xe61c;</em>
                  </th>
                  <th className='rt02'>作业状态</th>
                  <th className='rt03'>最近修改时间</th>
                </tr>
              </thead>
              <tbody>
                {/* <tr>
                  <td className='rt01'>
                    <i>市场战略分析报告</i>
                  </td>
                  <td className='rt02'>未完成</td>
                  <td>2017-12-19</td>
                </tr>
                <tr>
                  <td className='rt01'>
                    <i />绩效报表
                  </td>
                  <td className='rt02'>已提交</td>
                  <td>-</td>
                </tr> */}
                {s2 &&
                  s2.toJS().map((item, index) => (
                    <tr key={item.id}>
                      <td className='rt01'>
                        <i>{item.name}</i>
                      </td>
                      <td className='rt02'>{item.status}</td>
                      <td>{item.updateAt}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div className='page1'>
            <ul>
              <li className={`fl ${current === 1 ? 'current' : ''}`} />
              <li className={`fr ${current === 2 ? 'current' : ''}`} />
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

AllWorks.propTypes = {
  pathJump: React.PropTypes.func
}

const mapStateToProps = state => ({
  allWorks: state.getIn(['allWorks', 'allWorks']),
  count: state.getIn(['allWorks', 'count']),
  allWorksInfo: state.getIn(['allWorks', 'allWorksInfo'])
})

export default injectIntl(connect(mapStateToProps)(AllWorks))

// const WrappedSystemUser = Form.create()();
