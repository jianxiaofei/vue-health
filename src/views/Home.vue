<template>
    <div class="home">
        <page-head title="首页"/>
        <Sticky :offset-top="10">
            <Search class="sticky-top"/>
        </Sticky>
        <MySwipe/>
        <ClassBtn/>
        <VideoList/>
    </div>
</template>

<script>
    import pageHead from '../components/common/Head'
    import Search from '../components/home/MySearch'
    import MySwipe from '../components/home/MySwipe'
    import ClassBtn from '../components/home/ClassBtn'
    import VideoList from '../components/home/VideoList'
    import { Sticky } from 'vant'

    export default {
        name: 'Index',
        components: {
            pageHead,
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
