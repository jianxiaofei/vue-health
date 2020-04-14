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
import axios from 'axios'

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
  beforeMount () {
    this.test();
  },
  methods: {
    onChange (index) {
    },
    async test () {
      const res = await axios.get('@r/api/data?test=123')
      console.log(res)
    }
  }
}
</script>

<style lang="stylus" scoped>
    #swipe
        .van-swipe
            height 35vw
            margin 0

            .van-swipe__track
                .van-swipe-item
                    img
                        width 100%
                        height 100%
</style>
