import {RECEIVE_PLACE, RECEIVE_MAIN} from './mutations_type'

export default {
  [RECEIVE_PLACE] (state, {place}) {
    state.place = place
  },

  // 主页
  [RECEIVE_MAIN] (state, {main}) {
    state.main = main
  }
}
