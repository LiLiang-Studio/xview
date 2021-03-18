/**
 * @param {import('vue').default} vm
 * @param {string} name
 */
export const getParentComponent = (vm, name) => {
  let par = vm.$parent
  while (par) {
    if (par.$options.name === name) {
      return par
    }
    par = par.$parent
  }
}

export const createStylesheet = (id, str) => {
  let el = document.getElementById(id)
  if (!el) {
    el = document.createElement('style')
    el.id = id
    el.innerHTML = str
    document.head.appendChild(el)
  }
}
