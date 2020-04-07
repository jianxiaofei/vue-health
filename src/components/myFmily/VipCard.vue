<template>
    <div id="vip-card">
        <canvas id="cav"></canvas>
        <p class="card-info">
            <img class="logo" src="../../assets/logo.svg" alt="">
            <span class="van-col--3">39健康用户</span>
            <span class="van-col--2">VIP 会员</span>
            <span class="van-col--6" @click="openVip">点击开通>></span>
        </p>
    </div>
</template>

<script>
export default {
  name: 'VipCard',
  props: ['vip'],
  components: {},
  methods: {
    openVip () {
      this.$toast('开通vip')
    },
    setArcs () {
      var cav = document.querySelector('#cav')
      var ctx = cav.getContext('2d')
      ctx.beginPath()
      ctx.fillStyle = '#f1f1f1'
      ctx.strokeStyle = '#e8e8e8'
      ctx.moveTo(0, 80)
      ctx.quadraticCurveTo(138, 180, 302, 80)
      ctx.lineTo(302, 160)
      ctx.lineTo(0, 160)
      ctx.lineTo(0, 80)
      ctx.fill()
      ctx.stroke()
      ctx.beginPath()
      ctx.fillStyle = '#ffe8a7'
      ctx.strokeStyle = '#ffe8a7'
      ctx.moveTo(20, 93)
      ctx.quadraticCurveTo(138, 168.5, 282, 93)
      ctx.lineTo(282, 20)
      ctx.quadraticCurveTo(282, -10, 252, 0)
      ctx.lineTo(42, 0)
      ctx.quadraticCurveTo(20, -10, 20, 20)
      ctx.lineTo(20, 93)
      ctx.fill()
      ctx.stroke()
    }
  },
  mounted () {
    this.setArcs()
  }
}
</script>

<style lang="stylus" scoped>

    #vip-card
        bottom -0.2vw
        left 0
        width 100%
        height 32vw
        position: absolute;
        z-index 0

        canvas
            position: absolute;
            left 0
            bottom 0
            width 100%
            height 20vw
            z-index 1
            background #4b70ea

        .card-info
            position absolute
            width 80vw
            top 15vw
            left 10vw
            z-index 2
            margin 0
            display flex
            align-items center
            justify-content space-between
            color #282828
            span
                display block
                font-size 4.2vw
                margin-left 1vw
                flex-grow 2

                &.van-col--2
                    font-size 3.2vw

                &.van-col--6
                    font-size 3.2vw
                    text-align right
                    flex-grow 6

            .logo
                width 2rem
                height 2rem
</style>
