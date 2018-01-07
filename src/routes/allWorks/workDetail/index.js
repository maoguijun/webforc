/*
 * @Author: Maoguijun
 * @Date: 2018-01-03 13:53:51
 * @Last Modified by: Maoguijun
 * @Last Modified time: 2018-01-04 17:22:39
 */
import { injectReducer } from 'store/reducers'
import { rootPath } from '../../../config'

export default store => ({
  path: rootPath.workDetail + '/:id',
  getComponent (nextState, cb) {
    require.ensure(
      [],
      require => {
        const workDetail = require('./container/workDetail').default
        const reducer = require('./modules/workDetail').default
        injectReducer(store, { key: 'workDetail', reducer })
        cb(null, workDetail)
      },
      'workDetail'
    )
  }
})
