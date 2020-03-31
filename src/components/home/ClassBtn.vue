<template>
  <div id="btn-icon">
    <p>
      <router-link :to="{ name: 'VideoClass', params: { type: 1, title: '宝贝指南' }}">
        <Icon class="baby" name="points"/>
        宝贝指南
      </router-link>
    </p>
    <p>
      <Icon class="old-age" name="gem-o"/>
      老年保健
    </p>
    <p>
      <Icon class="female" name="like-o"/>
      女性宝典
    </p>
    <p>
      <Icon class="wiki" name="video-o"/>
      健康百科
    </p>
  </div>
</template>

<script>
import { Icon } from 'vant'

export default {
  name: 'VideoClass',
  components: { Icon },
  data () {
    return { test: '123' }
  }
}
</script>

<style lang="stylus" scoped>
  #btn-icon
    p
      display inline-block
      margin 3vw 4.8vw
      font-size 3vw

      i
        font-size 8vw
        padding-bottom 10px
        display block

      .baby
        color #48fffa

      .old-age
        color #6bff67

      .female
        color #ff67a4

      .wiki
        color #599cff
</style>
