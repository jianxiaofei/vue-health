<template>
  <div class="top-area">
    <span class="page-title">健康问诊</span>
    <Icon @click.self="showPopup" name="wap-nav"/>
    <Popup
      v-model="show"
      position="top">
      <h5 class="select-dept-title">选择科室</h5>
      <div id="department" class="white">
        <Button
          @click="hidePopup(val,idx)"
          v-for="(val,idx) in allDept"
          :key="idx"
          :class="[' dep-'+idx, {'selected': idx === selectedIdx}]"
          round
          type="default">
          {{val}}
        </Button>
      </div>
    </Popup>
  </div>
</template>

<script>
import { Popup, Button, Icon } from 'vant'

export default {
  props: ['selectedDept'],
  name: 'top',
  components: { Popup, Button, Icon },
  data () {
    return {
      show: false,
      selectedIdx: 0,
      allDept: ['全部科室']
    }
  },
  methods: {
    showPopup () {
      let deptIdx = String
      deptIdx = this.allDept.indexOf(this.selectedDept)
      this.selectedIdx = deptIdx > -1 ? deptIdx : 0
      this.show = true
    },
    hidePopup (depName, depIndex) {
      this.$emit('sync-from-top-step', depName)
      this.show = false
    }
  },
  beforeMount () {
    for (let i = 20; i--;) {
      this.allDept.push('科室' + i)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .top-area
    display flex
    justify-content center
    align-items center
    padding 10px 0
    background-color #fff

    .van-popup--top
      .select-dept-title
        margin 8pt 0
        padding-bottom 8pt
        border-bottom 1px solid #ccc
        font-size 16pt

      #department
        border-radius 0
        border 0
        text-align justify-items
        margin 0 2.2vw 0 2.2vw
        padding 6pt 5pt

        .van-button
          min-width 18vw
          height 40px
          margin 1vw 0.6vw

        .selected
          color #1989fa
          border-color #1989fa

    span.page-title
      padding 1.5vw 0 !important
      flex-grow 100

    i.van-icon-wap-nav
      position absolute
      right 2.2vw
      font-size 15pt
</style>
