<template>
  <div style="padding:30px 15px;">
    <x-breadcrumb separator="/">
      <x-breadcrumb-item :to="{ path: '/tag' }">首页</x-breadcrumb-item>
      <x-breadcrumb-item><a href="/">活动管理</a></x-breadcrumb-item>
      <x-breadcrumb-item>活动列表</x-breadcrumb-item>
      <x-breadcrumb-item>活动详情</x-breadcrumb-item>
    </x-breadcrumb><br>

    <x-breadcrumb separator-class="x-icon-arrow-right">
      <x-breadcrumb-item :to="{ path: '/card' }">首页</x-breadcrumb-item>
      <x-breadcrumb-item>活动管理</x-breadcrumb-item>
      <x-breadcrumb-item>活动列表</x-breadcrumb-item>
      <x-breadcrumb-item>活动详情</x-breadcrumb-item>
    </x-breadcrumb>
  </div>
</template>
