<template>
  <div style="padding:30px 15px;">
    <div>
      <x-button>默认按钮</x-button>
      <x-button type="primary">主要按钮</x-button>
      <x-button type="success">成功按钮</x-button>
      <x-button type="info">信息按钮</x-button>
      <x-button type="warning">警告按钮</x-button>
      <x-button type="danger">危险按钮</x-button>
    </div><br>

    <div>
      <x-button plain>朴素按钮</x-button>
      <x-button type="primary" plain>主要按钮</x-button>
      <x-button type="success" plain>成功按钮</x-button>
      <x-button type="info" plain>信息按钮</x-button>
      <x-button type="warning" plain>警告按钮</x-button>
      <x-button type="danger" plain>危险按钮</x-button>
    </div><br>

    <div>
      <x-button round>圆角按钮</x-button>
      <x-button type="primary" round>主要按钮</x-button>
      <x-button type="success" round>成功按钮</x-button>
      <x-button type="info" round>信息按钮</x-button>
      <x-button type="warning" round>警告按钮</x-button>
      <x-button type="danger" round>危险按钮</x-button>
    </div><br>

    <div>
      <x-button icon="x-icon-search" circle></x-button>
      <x-button type="primary" icon="x-icon-edit" circle></x-button>
      <x-button type="success" icon="x-icon-check" circle></x-button>
      <x-button type="info" icon="x-icon-message" circle></x-button>
      <x-button type="warning" icon="x-icon-star-off" circle></x-button>
      <x-button type="danger" icon="x-icon-delete" circle></x-button>
    </div><br>

    <div>
      <x-button disabled>默认按钮</x-button>
      <x-button type="primary" disabled>主要按钮</x-button>
      <x-button type="success" disabled>成功按钮</x-button>
      <x-button type="info" disabled>信息按钮</x-button>
      <x-button type="warning" disabled>警告按钮</x-button>
      <x-button type="danger" disabled>危险按钮</x-button>
    </div><br>

    <div>
      <x-button plain disabled>朴素按钮</x-button>
      <x-button type="primary" plain disabled>主要按钮</x-button>
      <x-button type="success" plain disabled>成功按钮</x-button>
      <x-button type="info" plain disabled>信息按钮</x-button>
      <x-button type="warning" plain disabled>警告按钮</x-button>
      <x-button type="danger" plain disabled>危险按钮</x-button>
    </div><br>

    <div>
      <x-button type="text">文字按钮</x-button>
      <x-button type="text" disabled>文字按钮</x-button>
    </div><br>

    <div>
      <x-button type="primary" icon="x-icon-edit"></x-button>
      <x-button type="primary" icon="x-icon-share"></x-button>
      <x-button type="primary" icon="x-icon-delete"></x-button>
      <x-button type="primary" icon="x-icon-search">搜索</x-button>
      <x-button type="primary">上传<i class="x-icon-upload x-icon--right"></i></x-button>
    </div><br>

    <div>
      <x-button-group>
        <x-button type="primary" icon="x-icon-arrow-left">上一页</x-button>
        <x-button type="primary">下一页<i class="x-icon-arrow-right x-icon--right"></i></x-button>
      </x-button-group>
      <x-button-group>
        <x-button type="primary" icon="x-icon-edit"></x-button>
        <x-button type="primary" icon="x-icon-share"></x-button>
        <x-button type="primary" icon="x-icon-delete"></x-button>
      </x-button-group>
      <x-button-group>
        <x-button icon="x-icon-edit"></x-button>
        <x-button icon="x-icon-share"></x-button>
        <x-button icon="x-icon-delete"></x-button>
      </x-button-group>
    </div><br>

    <div>
      <x-button type="primary" loading>加载中</x-button>
    </div><br>

    <div>
      <x-button>默认按钮</x-button>
      <x-button size="medium">中等按钮</x-button>
      <x-button size="small">小型按钮</x-button>
      <x-button size="mini">超小按钮</x-button>
    </div><br>

    <div>
      <x-button round>默认按钮</x-button>
      <x-button size="medium" round>中等按钮</x-button>
      <x-button size="small" round>小型按钮</x-button>
      <x-button size="mini" round>超小按钮</x-button>
    </div>
  </div>
</template>
