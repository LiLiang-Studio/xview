export const getSize = vm => {
  return vm.size || (vm.xCheckboxGroup || {}).size || (vm.xForm || {}).size || (vm.$XVIEW || {}).size
}

export const isDisabled = vm => {
  return vm.disabled || (vm.xCheckboxGroup || {}).disabled || (vm.xForm || {}).disabled
}
