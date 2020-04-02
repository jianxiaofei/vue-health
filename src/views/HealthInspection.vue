<template>
  <div class="health-test">
    <span class="page-title">健康检测</span>
    <div class="container">
      <p class="input-tip">请输入拉雅健康仪的IMEI号</p>
      <Field
        v-model="value"
        type="digit"
        @focus="show = true"
        @blur=" inputBlur = true"
        placeholder="请输入数字号码"
        clearable
        autofocus
        border
      />
      <div>
        <Button round block type="info" native-type="submit">下一步</Button>
        <Button round plain type="info" native-type="button">输入数据</Button>
      </div>
      <!-- 输入数字小键盘 -->
      <NumberKeyboard
        v-model="value"
        :show="show"
        close-button-text="完成"
        z-index="9999"
        @blur="show = !inputBlur"
        @input="onInput"
        @delete="onDelete"
        transition
      />
      <div class="tip">
        <p>温馨提示：</p>
        <p>1.39健康可支持检测3项数据（血糖，胆固醇，尿酸）</p>
        <p>2.针对高血糖，高血脂、痛风等患者能够有效及时的进行数据检测和分析</p>
        <p class="get-device-way">3.若你没有检测设备，请进入 <span>获取设备方式>></span></p>
      </div>
    </div>
  </div>
</template>

<script>
import { NumberKeyboard, Field, Button } from 'vant'

export default {
  name: 'Index',
  components: {
    NumberKeyboard,
    Field,
    Button
  },
  data () {
    return {
      show: false,
      value: '',
      inputBlur: false
    }
  },
  methods: {
    onInput (value) {
    },
    onDelete () {
    }
  }
}
</script>

<style lang="stylus" scoped>
  $commColor = #4b70ea
  .container
    display flex
    flex-direction column
    background-color rgba(204, 204, 204, 0.25)
    padding-bottom 55vw
    overflow hidden
    .input-tip
      margin 8vw 0 5vw 0
    .van-field
      border 1px solid $commColor
      background-color #fff
      border-radius 100pt
      width auto
      margin 0 8vw
    button
      margin 0 auto
      width 35%
      font-size 4.5vw
    button[type='submit']
      margin 5vw  auto
      background-color $commColor
    button[type='button']
      color $commColor
      border-color $commColor
    .tip
      font-size 4vw
      margin 0 8vw
      text-align left
      p.get-device-way
        word-break keep-all
        text-align justify-all
        span
            color $commColor
            border-bottom 1px solid $commColor
            padding-bottom 2pt
            word-break keep-all
</style>
