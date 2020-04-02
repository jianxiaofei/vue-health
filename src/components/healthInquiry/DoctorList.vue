<template>
  <div id="doctor-wrap">
    <div
      v-for="(v,k) of doctorList"
      :key="k"
      @click="showDetail(v)"
      class="doctor-item">
      <img class="doctor-picture" src="https://img.yzcdn.cn/vant/apple-1.jpg" alt="">
      <div class="doctor-intro-1">
        <h4>{{v.name}} </h4>
        <p>{{v.hosp}}</p>
        <p>{{v.posn}}</p>
        <input v-if="v.line " type="button" value="在线">
        <input v-else type="button" value="离线" disabled>
      </div>
      <div class="doctor-intro-2">
        <p>问诊量： {{v.askn}}（人）</p>
        <p>{{v.dept}}</p>
        <p></p>
      </div>
    </div>
    <DoctorDetails :doctorData="doctorData" :isShow="show"/>
  </div>
</template>

<script>
import DoctorDetails from './DoctorDetails'

export default {
  props: {
    deptName: {
      type: String,
      default: ''
    }
  },
  name: 'doctors',
  components: { DoctorDetails },
  data: function () {
    return {
      show: false,
      doctorList: [],
      doctorData: {
        type: Object,
        default: null
      }
    }
  },
  beforeMount () {
    this.mockData()
  },
  methods: {
    showDetail (v) {
      this.doctorData = v
      this.show = !this.show
    },
    mockData () {
      console.log(this.doctorList)
      for (var i = 10; i--;) {
        let rand = ''
        rand = Math.random()
        this.doctorList.push({
          id: i,
          img: 'https://img.yzcdn.cn/vant/apple-1.jpg',
          name: '傲娇' + i,
          hosp: '39健康医院',
          dept: '全科',
          posn: '高级院士',
          line: rand > 0.5 ? 1 : 0,
          askn: parseInt(rand * 1000),
          goodAt: '擅长各种推拿，擅长各种推拿，擅长各种推拿擅长各种推拿擅长各种推拿',
          intro: '长得漂亮，长得帅，技术一流长得漂亮，长得帅，技术一流长得漂亮，长得帅，技术一流长得漂亮，长得帅，技术一流'
        })
      }
    }
  },
  watch: {
    deptName: {
      handler (newName, oldName) {
        this.doctorList = []
        this.mockData()
      },
      immediate: true
    }
  }
}
</script>

<style lang="stylus" scoped>
  #doctor-wrap
    max-height 200vw
    overflow auto
    padding-bottom 20vw

    .doctor-item
      display flex
      border-radius 10pt
      background-color #fff
      margin 1.5vw 2.2vw 1.5vw 2.2vw
      padding 8pt 2pt 8pt 10pt

      img.doctor-picture
        width 30vw
        border-radius 100%
        margin-right 5pt

      .doctor-intro-1
        text-align left

        h4, p, input
          margin 0 0 3pt 0

        h4
          margin-bottom 7pt

        p
          font-size 10pt

        input
          padding 0 6pt
          border-radius 100pt
          background-color #01d0a0
          color #fff

        input[value='离线']
          background-color #ccc;

      .doctor-intro-2
        margin-left 10pt

        p
          margin 5.5pt 0 3pt 0
          text-align left

        p:first-child
          color #1989fa
          font-size 6pt

        p:nth-child(2)
          font-size 10pt

</style>
