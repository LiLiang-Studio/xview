<template>
  <div style="padding: 30px 15px;">
    <x-container>
      <x-header>Header</x-header>
      <x-main>Main</x-main>
    </x-container><br>

    <x-container>
      <x-header>Header</x-header>
      <x-main>Main</x-main>
      <x-footer>Footer</x-footer>
    </x-container><br>

    <x-container>
      <x-aside width="200px">Aside</x-aside>
      <x-main>Main</x-main>
    </x-container><br>

    <x-container>
      <x-header>Header</x-header>
      <x-container>
        <x-aside width="200px">Aside</x-aside>
        <x-main>Main</x-main>
      </x-container>
    </x-container><br>

    <x-container>
      <x-header>Header</x-header>
      <x-container>
        <x-aside width="200px">Aside</x-aside>
        <x-container>
          <x-main>Main</x-main>
          <x-footer>Footer</x-footer>
        </x-container>
      </x-container>
    </x-container><br>

    <x-container>
      <x-aside width="200px">Aside</x-aside>
      <x-container>
        <x-header>Header</x-header>
        <x-main>Main</x-main>
      </x-container>
    </x-container><br>

    <x-container>
      <x-aside width="200px">Aside</x-aside>
      <x-container>
        <x-header>Header</x-header>
        <x-main>Main</x-main>
        <x-footer>Footer</x-footer>
      </x-container>
    </x-container>
  </div>
</template>

<style>
  .x-header, .x-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .x-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .x-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .x-container {
    margin-bottom: 40px;
  }

  .x-container:nth-child(5) .x-aside,
  .x-container:nth-child(6) .x-aside {
    line-height: 260px;
  }

  .x-container:nth-child(7) .x-aside {
    line-height: 320px;
  }
</style>
