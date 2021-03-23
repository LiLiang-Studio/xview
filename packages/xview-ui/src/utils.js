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

/**
 * @param {Function} fn
 * @param {number} gapTime
 * @returns
 */
export const throttle = (fn, gapTime = 16) => {
  let tid
  let lastTime
  return function () {
    clearTimeout(tid)
    const nowTime = Date.now()
    const interval = nowTime - lastTime
    const cb = () => {
      fn.apply(this, arguments)
    }
    if (!lastTime || interval > gapTime) {
      cb()
      lastTime = nowTime
    } else {
      tid = setTimeout(cb, interval)
    }
  }
}
