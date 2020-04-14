<template>
    <div class="home">
        <page-head title="首页"/>
        <Sticky :offset-top="10">
            <Search class="sticky-top"/>
        </Sticky>
        <MySwipe :data="swipeData"/>
        <ClassBtn :data="btnName"/>
        <VideoList :data="videoListData"/>
    </div>
</template>

<script>
    import pageHead from '@c/common/Head'
    import Search from '@c/home/MySearch'
    import MySwipe from '@c/home/MySwipe'
    import ClassBtn from '@c/home/ClassBtn'
    import VideoList from '@c/home/VideoList'
    import { Sticky } from 'vant'
    import axios from 'axios'

    export default {
        name: 'Index',
        components: {
            pageHead,
            Sticky,
            Search,
            MySwipe,
            ClassBtn,
            VideoList
        },
        data () {
            return {
                data: [],
                btnName: [],
                swipeData: [],
                videoListData: []
            }
        },
        beforeMount () {
            axios.get('data/home').then(data => {
                data = data.data.data.entry_list
                this.data = data
                this.swipeData = data[0].item_data
                this.btnName = data[1].item_data.map(item => JSON.parse(item.inner_parameters).title)
                this.videoListData = data[2].item_data
            })
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
