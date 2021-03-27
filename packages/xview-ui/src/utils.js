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

/**
 * @param {import('vue').default} vm
 * @param {string} name
 * @param {boolean} flag
 * @returns {import('vue').default[]}
 */
export const getChildComponents = (vm, name, flag) => {
  const hasChild = _ => _.$children.length > 0
  const isSameName = _ => _.$options.name === name
  const fn = name
    ? flag
      ? vm => vm.$children.reduce((t, _) => {
        return t.concat(isSameName(_) ? [_] : [], hasChild(_) ? fn(_) : [])
      }, [])
      : vm => vm.$children.reduce((t, _) => {
        return t.concat(isSameName(_) ? [_] : hasChild(_) ? fn(_) : [])
      }, [])
    : vm => vm.$children.reduce((t, _) => {
      return t.concat([_], hasChild(_) ? fn(_) : [])
    }, [])
  return fn(vm)
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

let _maxZIndex

export const getMaxZIndex = () => {
  if (!_maxZIndex) {
    _maxZIndex = 1000
    const els = document.querySelectorAll('body>*')
    for (let i = 0, len = els.length; i < len; i++) {
      const { zIndex } = window.getComputedStyle(els[i], null)
      if (!isNaN(zIndex) && zIndex && zIndex > _maxZIndex) {
        _maxZIndex = zIndex
      }
    }
  }
  _maxZIndex += 2
  return _maxZIndex
}
