import * as comps from './comps'

export * from './comps'

/**
 * @param {import('vue').VueConstructor} Vue
 */
export default Vue => {
  Object.keys(comps).forEach(name => {
    Vue.component(`X${name}`, comps[name])
  })
}
