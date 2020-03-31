<template>
  <div class="home">
    <span class="page-title">首页</span>
    <Search class="sticky-top" />
    <MySwipe/>
    <ClassBtn/>
    <Picture/>
  </div>
</template>

<script>
import Search from '../components/home/MySearch'
import MySwipe from '../components/home/MySwipe'
import ClassBtn from '../components/home/ClassBtn'
import Picture from '../components/home/Picture'

export default {
  name: 'Index',
  components: {
    Search,
    MySwipe,
    ClassBtn,
    Picture
  }
}
</script>
<style lang="stylus" scoped>
  .sticky-top
    position fixed
    top 7vh
    z-index 3
    width 100%
   #swipe
     padding-top 6vh
    .van-swipe__indicators i
      width 6pt
      height 6pt
      background-color rgba(123, 123, 123, .5)

    i.van-swipe__indicator--active
      background-color #1989fa
</style>
