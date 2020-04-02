<template>
  <div class="home">
    <span class="page-title">首页</span>
    <Sticky :offset-top="10"><Search class="sticky-top" /></Sticky>
    <MySwipe/>
    <ClassBtn/>
    <VideoList/>
  </div>
</template>

<script>
import Search from '../components/home/MySearch'
import MySwipe from '../components/home/MySwipe'
import ClassBtn from '../components/home/ClassBtn'
import VideoList from '../components/home/VideoList'
import { Sticky } from 'vant'

export default {
  name: 'Index',
  components: {
    Sticky,
    Search,
    MySwipe,
    ClassBtn,
    VideoList
  }
}
</script>
<style lang="stylus" scoped>
   #swipe
    .van-swipe__indicators i
      width 6pt
      height 6pt
      background-color rgba(123, 123, 123, .5)

    i.van-swipe__indicator--active
      background-color #1989fa
</style>
