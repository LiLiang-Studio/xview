<template>
  <div style="padding:30px 15px;">
    <x-alert
      title="成功提示的文案"
      type="success">
    </x-alert>
    <x-alert
      title="消息提示的文案"
      type="info">
    </x-alert>
    <x-alert
      title="警告提示的文案"
      type="warning">
    </x-alert>
    <x-alert
      title="错误提示的文案"
      type="error">
    </x-alert><br>

    <x-alert
      title="成功提示的文案"
      type="success"
      effect="dark">
    </x-alert>
    <x-alert
      title="消息提示的文案"
      type="info"
      effect="dark">
    </x-alert>
    <x-alert
      title="警告提示的文案"
      type="warning"
      effect="dark">
    </x-alert>
    <x-alert
      title="错误提示的文案"
      type="error"
      effect="dark">
    </x-alert><br>

    <x-alert
      title="不可关闭的 alert"
      type="success"
      :closable="false">
    </x-alert>
    <x-alert
      title="自定义 close-text"
      type="info"
      close-text="知道了">
    </x-alert>
    <x-alert
      title="设置了回调的 alert"
      type="warning"
      @close="hello">
    </x-alert><br>

    <x-alert
      title="成功提示的文案"
      type="success"
      show-icon>
    </x-alert>
    <x-alert
      title="消息提示的文案"
      type="info"
      show-icon>
    </x-alert>
    <x-alert
      title="警告提示的文案"
      type="warning"
      show-icon>
    </x-alert>
    <x-alert
      title="错误提示的文案"
      type="error"
      show-icon>
    </x-alert><br>

    <x-alert
      title="成功提示的文案"
      type="success"
      center
      show-icon>
    </x-alert>
    <x-alert
      title="消息提示的文案"
      type="info"
      center
      show-icon>
    </x-alert>
    <x-alert
      title="警告提示的文案"
      type="warning"
      center
      show-icon>
    </x-alert>
    <x-alert
      title="错误提示的文案"
      type="error"
      center
      show-icon>
    </x-alert><br>

    <x-alert
      title="带辅助性文字介绍"
      type="success"
      description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……">
    </x-alert><br>

    <x-alert
      title="成功提示的文案"
      type="success"
      description="文字说明文字说明文字说明文字说明文字说明文字说明"
      show-icon>
    </x-alert>
    <x-alert
      title="消息提示的文案"
      type="info"
      description="文字说明文字说明文字说明文字说明文字说明文字说明"
      show-icon>
    </x-alert>
    <x-alert
      title="警告提示的文案"
      type="warning"
      description="文字说明文字说明文字说明文字说明文字说明文字说明"
      show-icon>
    </x-alert>
    <x-alert
      title="错误提示的文案"
      type="error"
      description="文字说明文字说明文字说明文字说明文字说明文字说明"
      show-icon>
    </x-alert>
  </div>
</template>

<script>
export default {
  methods: {
    hello () {
      alert('Hello World!')
    }
  }
}
</script>
