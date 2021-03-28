import Message from './components/message'
import Notification from './components/notification'
import * as comps from './comps'
export { Message, Notification }
export * from './comps'

/**
 * @param {import('vue').VueConstructor} Vue
 */
export default Vue => {
  Vue.prototype.$message = Message
  Vue.prototype.$notify = Notification
  Object.keys(comps).forEach(name => {
    Vue.component(`X${name}`, comps[name])
  })
}
