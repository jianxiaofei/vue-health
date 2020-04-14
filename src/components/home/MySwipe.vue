<template>
    <div id="swipe">
        <Swipe :autoplay="3000">
            <SwipeItem v-for="(val, idx) in data" :key="idx">
                <img v-lazy="`http://healthiptv-fs.langma.cn${val.img_url}`"/>
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
    props: {
        data: Array
    },
    created () {
        console.log('MySwipe-data==>', this.data)
    },
  data () {
    return {
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
            height 35vw
            margin 0

            .van-swipe__track
                .van-swipe-item
                    img
                        width 100%
                        height 100%
</style>
