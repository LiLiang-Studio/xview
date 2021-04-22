<template>
  <div style="padding:30px 15px;">
    <div>
      <x-link href="https://element.eleme.io" target="_blank">默认链接</x-link>
      <x-link type="primary">主要链接</x-link>
      <x-link type="success">成功链接</x-link>
      <x-link type="warning">警告链接</x-link>
      <x-link type="danger">危险链接</x-link>
      <x-link type="info">信息链接</x-link>
    </div><br>

    <div>
      <x-link href="https://element.eleme.io" target="_blank" disabled>默认链接</x-link>
      <x-link type="primary" disabled>主要链接</x-link>
      <x-link type="success" disabled>成功链接</x-link>
      <x-link type="warning" disabled>警告链接</x-link>
      <x-link type="danger" disabled>危险链接</x-link>
      <x-link type="info" disabled>信息链接</x-link>
    </div><br>

    <div>
      <x-link :underline="false">无下划线</x-link>
      <x-link>有下划线</x-link>
    </div><br>

    <div>
      <x-link icon="x-icon-edit">编辑</x-link>
      <x-link>查看<i class="x-icon-view x-icon--right"></i> </x-link>
    </div>
  </div>
</template>
