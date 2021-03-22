import * as comps from './comps'
import * as directives from './directives'

export * from './comps'
export * from './directives'

/**
 * @param {import('vue').VueConstructor} Vue
 */
export default Vue => {
  Object.keys(comps).forEach(name => {
    Vue.component(`X${name}`, comps[name])
  })
  Object.keys(directives).forEach(name => {
    Vue.directive(name, directives[name])
  })
}
