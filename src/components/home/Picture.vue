<template>
  <PullRefresh id="img-wrap" v-model="isLoading" @refresh="onRefresh">
    <img v-for="(img, index) in imageList" v-lazy="img" :key="index">
  </PullRefresh>
</template>

<script>
import { PullRefresh } from 'vant'

export default {
  props: ['item'],
  name: 'Picture',
  components: { PullRefresh },
  data: function () {
    return {
      count: 0,
      isLoading: false,
      imageList: []
    }
  },
  methods: {
    onRefresh () {
      setTimeout(() => {
        this.$toast('刷新成功')
        this.isLoading = false
        this.count++
      }, 1000)
    }
  },
  beforeMount () {
    for (let i = 30; i--;) {
      this.imageList.push('https://img.yzcdn.cn/vant/cat.jpeg')
    }
  }
}
</script>

<style lang="stylus" scoped>
  #img-wrap
    min-height 50vh
    padding-bottom 15vh
    position sticky
    top 0
    img
      width 47vw
      height 30vw
      border-radius 5px
      display inline-flex
      justify-content space-evenly
      margin 0 1vw
</style>
