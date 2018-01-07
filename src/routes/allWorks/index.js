/*
 * @Author: Maoguijun
 * @Date: 2018-01-03 13:53:51
 * @Last Modified by: Maoguijun
 * @Last Modified time: 2018-01-04 17:22:39
 */
import { injectReducer } from 'store/reducers'
import { rootPath } from '../../config'

export default store => ({
  path: rootPath.allWorks,
  getComponent (nextState, cb) {
    require.ensure(
      [],
      require => {
        const allWorks = require('./container/allWorks').default
        const reducer = require('./modules/allWorks').default
        injectReducer(store, { key: 'allWorks', reducer })
        cb(null, allWorks)
      },
      'allWorks'
    )
  }
})
