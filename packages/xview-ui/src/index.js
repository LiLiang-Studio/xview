import Message from './components/message'
import * as comps from './comps'
export { Message }
export * from './comps'

/**
 * @param {import('vue').VueConstructor} Vue
 */
export default Vue => {
  Vue.prototype.$message = Message
  Object.keys(comps).forEach(name => {
    Vue.component(`X${name}`, comps[name])
  })
}
