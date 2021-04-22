<template>
  <div style="padding:30px 15px;">
    <x-row>
      <x-col :span="24"><div class="grid-content bg-purple-dark"></div></x-col>
    </x-row>
    <x-row>
      <x-col :span="12"><div class="grid-content bg-purple"></div></x-col>
      <x-col :span="12"><div class="grid-content bg-purple-light"></div></x-col>
    </x-row>
    <x-row>
      <x-col :span="8"><div class="grid-content bg-purple"></div></x-col>
      <x-col :span="8"><div class="grid-content bg-purple-light"></div></x-col>
      <x-col :span="8"><div class="grid-content bg-purple"></div></x-col>
    </x-row>
    <x-row>
      <x-col :span="6"><div class="grid-content bg-purple"></div></x-col>
      <x-col :span="6"><div class="grid-content bg-purple-light"></div></x-col>
      <x-col :span="6"><div class="grid-content bg-purple"></div></x-col>
      <x-col :span="6"><div class="grid-content bg-purple-light"></div></x-col>
    </x-row>
    <x-row>
      <x-col :span="4"><div class="grid-content bg-purple"></div></x-col>
      <x-col :span="4"><div class="grid-content bg-purple-light"></div></x-col>
      <x-col :span="4"><div class="grid-content bg-purple"></div></x-col>
      <x-col :span="4"><div class="grid-content bg-purple-light"></div></x-col>
      <x-col :span="4"><div class="grid-content bg-purple"></div></x-col>
      <x-col :span="4"><div class="grid-content bg-purple-light"></div></x-col>
    </x-row><br><br>

    <x-row :gutter="20">
      <x-col :span="6"><div class="grid-content bg-purple"></div></x-col>
      <x-col :span="6"><div class="grid-content bg-purple"></div></x-col>
      <x-col :span="6"><div class="grid-content bg-purple"></div></x-col>
      <x-col :span="6"><div class="grid-content bg-purple"></div></x-col>
    </x-row><br><br>

    <x-row :gutter="20">
      <x-col :span="16"><div class="grid-content bg-purple"></div></x-col>
      <x-col :span="8"><div class="grid-content bg-purple"></div></x-col>
    </x-row><br>
    <x-row :gutter="20">
      <x-col :span="8"><div class="grid-content bg-purple"></div></x-col>
      <x-col :span="8"><div class="grid-content bg-purple"></div></x-col>
      <x-col :span="4"><div class="grid-content bg-purple"></div></x-col>
      <x-col :span="4"><div class="grid-content bg-purple"></div></x-col>
    </x-row><br>
    <x-row :gutter="20">
      <x-col :span="4"><div class="grid-content bg-purple"></div></x-col>
      <x-col :span="16"><div class="grid-content bg-purple"></div></x-col>
      <x-col :span="4"><div class="grid-content bg-purple"></div></x-col>
    </x-row><br><br>

    <x-row :gutter="20">
      <x-col :span="6"><div class="grid-content bg-purple"></div></x-col>
      <x-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></x-col>
    </x-row><br>
    <x-row :gutter="20">
      <x-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></x-col>
      <x-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></x-col>
    </x-row><br>
    <x-row :gutter="20">
      <x-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></x-col>
    </x-row><br><br>

    <x-row type="flex" class="row-bg">
      <x-col :span="6"><div class="grid-content bg-purple"></div></x-col>
      <x-col :span="6"><div class="grid-content bg-purple-light"></div></x-col>
      <x-col :span="6"><div class="grid-content bg-purple"></div></x-col>
    </x-row>
    <x-row type="flex" class="row-bg" justify="center">
      <x-col :span="6"><div class="grid-content bg-purple"></div></x-col>
      <x-col :span="6"><div class="grid-content bg-purple-light"></div></x-col>
      <x-col :span="6"><div class="grid-content bg-purple"></div></x-col>
    </x-row>
    <x-row type="flex" class="row-bg" justify="end">
      <x-col :span="6"><div class="grid-content bg-purple"></div></x-col>
      <x-col :span="6"><div class="grid-content bg-purple-light"></div></x-col>
      <x-col :span="6"><div class="grid-content bg-purple"></div></x-col>
    </x-row>
    <x-row type="flex" class="row-bg" justify="space-between">
      <x-col :span="6"><div class="grid-content bg-purple"></div></x-col>
      <x-col :span="6"><div class="grid-content bg-purple-light"></div></x-col>
      <x-col :span="6"><div class="grid-content bg-purple"></div></x-col>
    </x-row>
    <x-row type="flex" class="row-bg" justify="space-around">
      <x-col :span="6"><div class="grid-content bg-purple"></div></x-col>
      <x-col :span="6"><div class="grid-content bg-purple-light"></div></x-col>
      <x-col :span="6"><div class="grid-content bg-purple"></div></x-col>
    </x-row><br>

    <x-row :gutter="10">
      <x-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></x-col>
      <x-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></x-col>
      <x-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></x-col>
      <x-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></x-col>
    </x-row><br>
  </div>
</template>

<style lang="scss">
  .x-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .x-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
