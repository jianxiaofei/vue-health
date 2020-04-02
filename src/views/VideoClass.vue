<template>
    <div>
        <div class="top">
            <router-link to="/" id="back-arrow">
                <Icon class="back-btn" name="arrow-left"/>
            </router-link>
            <span class="page-title">{{this.$route.params.title}}</span>
        </div>
        <div class="container">
            <div class="video-item" v-for="(item, index) of list" :key="index">
                <van-img v-if="index>3" show-loading show-error class="video-img" :src="item.img"/>
                <span class="video-title">{{item.title}}</span>
                <Rate class="video-collect" count="1" v-model="value"/>
            </div>
        </div>
    </div>
</template>

<script>
import { Icon, Image, Rate } from 'vant'

export default {
  name: 'VideoClass',
  props: [],
  components: {
    'van-img': Image,
    Icon,
    Rate
  },
  data () {
    return {
      value: 1,
      list: []
    }
  },
  methods: {},
  beforeMount () {
    for (let i = 10; i--;) {
      this.list.push({
        id: i,
        img: 'https://img.yzcdn.cn/vant/cat.jpeg',
        title: i + '. 这是一条视频哦这是一条视频哦这是一条视频哦这是一条视频哦这是一条视频哦这是一条视频哦这是一条视频哦这是一条视频哦这是一条视频哦这是一条视频哦这是一条视频哦这是一条视频哦',
        isCollect: Math.random() > 0.5
      })
    }
    this.list = this.list.sort(function () {
      return Math.random() - 0.5
    })
  }
}
</script>

<style lang="stylus" scoped>
    .top
        display flex
        align-items center
        position fixed
        width 100%
        z-index 10000
        background #fff
        top 0

        #back-arrow
            position absolute

        .page-title
            width 100%

    .container
        background #f1f1f1
        position relative
        z-index 9999

        .video-item
            display flex
            align-items flex-start
            background #fff
            margin-bottom 2vw
            padding 2vw 4vw

            .video-img
                width 0
                flex-grow 3
                margin-right 3vw

            .video-title
                width 0
                padding 0 0 0 0
                flex-grow 5
                text-align justify
                max-height 12vh
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;

            .video-collect
                padding 0 0 0 4vw
                align-items center
                vertical-align top
</style>
