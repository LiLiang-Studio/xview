import { createStylesheet } from '../../utils'

const prefixCls = '.x-col'

/** @type {number[]} */
const nulls = Array.apply(null, { length: 25 })

const getSpan = (i, val) => i ? `width:${val}` : 'display:none'

const genCol = () => nulls.map((_, i) => {
  const val = `${i / 24 * 100}%`
  return [
    `${prefixCls}_span-${i}{${getSpan(i, val)};}`,
    `${prefixCls}_pull-${i}{right:${val};}`,
    `${prefixCls}_push-${i}{left:${val};}`,
    `${prefixCls}_offset-${i}{margin-left:${val};}`
  ].join('')
}).join('')

const genGrid = size => nulls.map((_, i) => {
  const val = `${i / 24 * 100}%`
  return [
    `${prefixCls}_${size}-span-${i}{${getSpan(i, val)};}`,
    `${prefixCls}_${size}-pull-${i}{right:${val};}`,
    `${prefixCls}_${size}-push-${i}{left:${val};}`,
    `${prefixCls}_${size}-offset-${i}{margin-left:${val};}`
  ].join('')
}).join('')

const genGridAll = () => [
  { size: 'xs' },
  { size: 'sm', minWidth: 768 },
  { size: 'md', minWidth: 992 },
  { size: 'lg', minWidth: 1200 },
  { size: 'xl', minWidth: 1920 }
].map(_ => _.minWidth ? `@media (min-width:${_.minWidth}px){${genGrid(_.size)}}` : genGrid(_.size)).join('')

const ruleStr = genCol() + genGridAll()

export const addStylesheet = () => {
  createStylesheet('XGridLayout', ruleStr)
}
