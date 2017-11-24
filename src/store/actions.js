import {RESULT_OK, reqPlace, reqMain} from '../api'
import {RECEIVE_PLACE, RECEIVE_MAIN} from './mutations_type'

export default {
  getPlace ({commit}) {
    reqPlace().then(response => {
      const res = response.data
      if (res.code === RESULT_OK) {
        const place = res.data
        commit(RECEIVE_PLACE, {place})
      }
    })
  },
  // 主页
  getMain ({commit}) {
    reqMain().then(response => {
      const res = response.data
      if (res.code === RESULT_OK) {
        const main = res.data
        commit(RECEIVE_MAIN, {main})
      }
    })
  }
}
