/*
 * @Author: Maoguijun
 * @Date: 2018-01-02 12:16:58
 * @Last Modified by: Maoguijun
 * @Last Modified time: 2018-01-04 18:25:28
 */
import React, { PureComponent } from 'react'
import { injectIntl } from 'react-intl'
import { connect } from 'react-redux'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { Link } from 'react-router'
import { pathJump } from '../../../../utils/'
import Immutable from 'immutable'
import {
  formatDate,
  formatMoney,
  configDirectory,
  configDirectoryObject,
  configCate
} from '../../../../utils/formatData'
import { getFormRequired } from '../../../../utils/common'
import { fetchAllWorksInfo } from '../modules/workDetail'

class WorkDetail extends React.Component {
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
    // dispatch(fetchWorkDetail(json)).then(e => {
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
    const { intl: { formatMessage }, location: { pathname }, count, workDetailInfo, dispatch } = this.props
    const { modal, current } = this.state

    // 虚假数据
    // 表一
    // let _workDetail = []
    // for (let i = 0; i < 10; i++) {
    //   _workDetail.push({
    //     name: '市场战略分析报告',
    //     status: '已完成',
    //     chepterId: '解决问题并抓住机遇',
    //     updateAt: '2017-12-19',
    //     id: i
    //   })
    // }
    // let workDetail = Immutable.fromJS(_workDetail)
    // // 表二
    // let _s1 = []
    // for (let i = 0; i < 10; i++) {
    //   _s1.push({
    //     name: '市场战略分析',
    //     num: '10',
    //     updateAt: '2017-12-19',
    //     id: i
    //   })
    // }
    // let s1 = Immutable.fromJS(_s1)
    // // 表三
    // let _s2 = []
    // for (let i = 0; i < 5; i++) {
    //   _s2.push({
    //     name: '绩效报表',
    //     status: '已完成',
    //     updateAt: '2017-12-19',
    //     id: i
    //   })
    // }
    // let s2 = Immutable.fromJS(_s2)

    return (
      <div className='caogao'>
        <button className='fenlei'>
          全部作业 > <i className='black'>市场战略分析报告</i>
        </button>
        <div className='baog'>
          <p className='bg-title'>市场战略分析报告</p>
          <div className='baog1'>
            <p>
              <span className='work-name'>
                市场战略策划案 <i>v1.0</i>
              </span>
              <span className='done-submit'>
                <i className='iconfont'>&#xe669;</i> 已提交
              </span>
            </p>
            <p className='bg-time'>
              时间: <i className='gray'>2017-12-21 12:01</i>
            </p>
            <p>
              附件: <span className='file-name'>PDF</span>
              <span className='gray'>
                {' '}
                市场战略策划作业_allen.pdf <i className='iconfont yulan'>&#xe601;</i>
              </span>
            </p>
            <p className='baog-title'>
              本课程旨在帮助正在转变为管理角色的专业人士升他们的员工管理技能。完成本课程后,
              学员将学习如何从一个独立的工作者转变为一个高效的经理。同时,学员将探索并建立自己的管理风格。本课程旨在帮助正在转变为管理角色的专业人士升他们的员工管理技能。
            </p>
          </div>
          <div className='baog2'>
            <a className='jiantou'>
              <img src='images/huifu.png' />
            </a>
            <div className='huifu'>
              <div className='hf'>
                <p>
                  <a>
                    <img src='images/people1.png' />
                  </a>
                  <span>
                    <i>Steve.Wang</i>
                    <em>PWC Consulting Director</em>
                  </span>
                </p>
                <span className='xiugai'>
                  <small className='iconfont'>&#xe625;</small> 需修改
                </span>
              </div>
              <p className='txt1'>
                你的观点非常明确，而且看得出你在互联网领域有着很的你的观点非常明确，而且看得出你在互联网领域有着很的你的观点非常明确，
                而且看得出你在互联网领域有着很的你的观点非常明确，而且看得出你在互联网领域有着很的你的观点非常明确，
                而且看得出你在互联网领域有着很的你的观点非常明确，很完整的策略分析。
              </p>
              <p className='gray time'>2017-12-22 19:20</p>
              <h5>
                <a>
                  <i className='iconfont yun'>&#xe668;</i> 添加作业
                </a>
              </h5>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

WorkDetail.propTypes = {
  pathJump: React.PropTypes.func
}

const mapStateToProps = state => ({
  workDetail: state.getIn(['workDetail', 'workDetail']),
  count: state.getIn(['workDetail', 'count']),
  workDetailInfo: state.getIn(['workDetail', 'workDetailInfo'])
})

export default injectIntl(connect(mapStateToProps)(WorkDetail))

// const WrappedSystemUser = Form.create()();
