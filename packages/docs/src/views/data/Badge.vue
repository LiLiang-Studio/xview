<template>
  <div style="padding:30px 15px;">
    <x-badge :value="12" class="item">
      <x-button size="small">评论</x-button>
    </x-badge>
    <x-badge :value="3" class="item">
      <x-button size="small">回复</x-button>
    </x-badge>
    <x-badge :value="1" class="item" type="primary">
      <x-button size="small">评论</x-button>
    </x-badge>
    <x-badge :value="2" class="item" type="warning">
      <x-button size="small">回复</x-button>
    </x-badge><br><br>

    <x-badge :value="200" :max="99" class="item">
      <x-button size="small">评论</x-button>
    </x-badge>
    <x-badge :value="100" :max="10" class="item">
      <x-button size="small">回复</x-button>
    </x-badge><br><br>

    <x-badge value="new" class="item">
      <x-button size="small">评论</x-button>
    </x-badge>
    <x-badge value="hot" class="item">
      <x-button size="small">回复</x-button>
    </x-badge><br><br>

    <x-badge is-dot class="item">数据查询</x-badge>
    <x-badge is-dot class="item">
      <x-button class="share-button" icon="x-icon-share" type="primary"></x-button>
    </x-badge><br><br>

    <div>
      <span>
        评论
        <x-badge class="mark" :value="12" />
      </span>
      <span>
        回复
        <x-badge class="mark" :value="12" />
      </span>
    </div>
  </div>
</template>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
