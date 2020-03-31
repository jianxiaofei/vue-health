<template>
  <div id="swipe">
    <Swipe :autoplay="3000">
      <SwipeItem v-for="(image, index) in images" :key="index">
        <img v-lazy="image"/>
      </SwipeItem>
    </Swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vant'

export default {
  name: 'MySwipe',
  components: {
    Swipe,
    SwipeItem
  },
  data () {
    return {
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ]
    }
  },
  methods: {
    onChange (index) {
    }
  }
}
</script>

<style lang="stylus" scoped>
  #swipe
    .van-swipe
      height 106pt
      margin 0 10pt 0 10pt

      .van-swipe__track
        .van-swipe-item
          img
            width 100%
            height 100%
</style>
