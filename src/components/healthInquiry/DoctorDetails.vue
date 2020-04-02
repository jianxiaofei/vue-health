<template>
  <div>
    <Popup
      v-model="show"
      position="left"
      :style="{ width: '100%', height:'100%' }">
      <div class="details-wrap">
        <div class="top-icon-wrap">
          <Icon @click="hideDetails" class="back-btn" name="arrow-left"/>
        </div>
        <div>
          <img class="doctor-picture" v-lazy="doctorData.img" :key="doctorData.id">
          <p v-if="doctorData.line" class="doctor-line on">在线</p>
          <p v-else class="doctor-line off">离线</p>
        </div>
        <ul>
          <li>{{doctorData.name}}</li>
          <li>{{doctorData.dept}}</li>
          <li>{{doctorData.posn}}</li>
          <li>{{doctorData.hosp}}</li>
          <li>问诊量：{{doctorData.askn}} （人）</li>
        </ul>
      </div>
      <div class="txt-wrap">
        <p><span>擅长：</span>{{doctorData.goodAt}}</p>
        <p><span>简介：</span>{{doctorData.intro}}</p>
      </div>
      <div
        @click="startInquiry"
        class="start-inquiry">
        <Icon name="video"/>
        我要咨询
      </div>
    </Popup>
    <InquiryCall :showOnline="online" :lineDoctor="doctorData"/>
  </div>
</template>

<script>
import { Popup, Icon } from 'vant'
import InquiryCall from './InquiryCall'

export default {
  name: 'DoctorDetails',
  components: { Popup, Icon, InquiryCall },
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    doctorData: {
      type: Object
    }
  },
  data () {
    return {
      show: false,
      online: true
    }
  },
  methods: {
    startInquiry () {
      if (this.doctorData.line === 0) {
        this.$toast({
          message: '当前医生不在线！',
          duration: 1000
        })
        return
      }
      this.online = !this.online
    },
    hideDetails () {
      this.show = false
    }
  },

  watch: {
    isShow () {
      this.show = true
    }
  }
}
</script>

<style lang="stylus" scoped>

  .details-wrap
    display flex
    justify-content left
    background-color rgba(75, 112, 234, 0.87)
    color #fff
    padding 30pt 0 10pt 40pt

    .top-icon-wrap
      .van-icon-arrow-left
        position absolute
        top 10pt
        left 10pt
        color #fff
        font-size 15pt

    .doctor-picture
      width 27vw
      height 27vw
      border-radius 100%

    ul
      text-align left
      margin: 0 0 0 10pt

      li
        line-height 18pt
        font-size 10pt

      li:first-child
        font-size 13pt
        font-weight bold

    .doctor-line
      width 26pt
      height 12pt
      line-height 12pt
      margin 0 auto
      border-radius 30pt
      padding 2pt 5pt
      background-color #16c989
      position: relative
      bottom 15pt

    .off
      background-color #ccc

  .txt-wrap
    padding 20pt

    p
      color #656565
      text-align justify

    p span
      font-size 15pt
      color #000

  .start-inquiry
    display flex
    padding 6pt
    color #fff
    font-size 16pt
    align-items center
    justify-content center
    background-color #1989fa
    position: absolute
    bottom 0
    width 100%

    i
      align-items center
      font-size 16pt
      padding 0 2pt 0 2pt
      margin 0 0 0 0
</style>
