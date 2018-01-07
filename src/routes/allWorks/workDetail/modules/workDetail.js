/*
 * @Author: Maoguijun
 * @Date: 2018-01-02 15:46:42
 * @Last Modified by: Maoguijun
 * @Last Modified time: 2018-01-04 17:27:57
 */
import Immutable from 'immutable'
import { easyfetch } from '../../../../utils/FetchHelper'
import { host } from '../../../../config'

export const FETCH_ALLWORKS = 'FETCH_ALLWORKS'
export const NEW_ALLWORKS = 'NEW_ALLWORKS'
export const OPERATION_ALLWORKS = 'OPERATION_ALLWORKS'
export const ALT_ALLWORKS = 'ALT_ALLWORKS'
export const FETCH_ALLWORKS_INFO = 'FETCH_ALLWORKS_INFO'

export const fetchAllWorks = json => {
  return (dispatch, getState) => {
    return easyfetch(host, '/allworks', 'get', json)
      .then(e => {
        return dispatch({
          type: FETCH_ALLWORKS,
          payload: e
        })
      })
      .catch(e => ({ error: e }))
  }
}

export const fetchAllWorksInfo = id => {
  return (dispatch, getState) => {
    return easyfetch(host, '/allworks/' + id, 'get')
      .then(e => {
        return dispatch({
          type: FETCH_ALLWORKS_INFO,
          payload: e.obj
        })
      })
      .catch(e => ({ error: e }))
  }
}

export const newAllWorks = json => {
  return (dispatch, getState) => {
    return easyfetch(host, '/allworks', 'post', json)
      .then(e => {
        return dispatch(fetchAllWorks())
      })
      .catch(e => ({ error: e }))
  }
}

export const updateAllWorks = (action, id, json) => {
  return (dispatch, getState) => {
    return easyfetch(host, '/allworks/' + action + '/' + id, 'put', json)
      .then(e => {
        return dispatch(fetchAllWorks())
      })
      .catch(e => ({ error: e }))
  }
}
export const operateAllWorks = (action, id, json) => {
  return (dispatch, getState) => {
    return easyfetch(host, '/allworks/' + action + '/' + id, 'put', json)
      .then(e => {
        return dispatch(fetchAllWorks())
      })
      .catch(e => ({ error: e }))
  }
}

const ACTION_HANDLERS = {
  [FETCH_ALLWORKS]: (state, action) =>
    state
      .update('allwork', () => Immutable.fromJS(action.payload.objs))
      .update('count', () => Immutable.fromJS(action.payload.count))
}

// ------------------------------------
// Reducer
// ------------------------------------
export default function allworkReducer (state = Immutable.Map(), action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
