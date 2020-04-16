<template>
    <div class="home">
        <page-head title="首页"/>
        <Sticky :offset-top="10">
            <Search shape="round" @focusin="goSearch" placeholder="请输入搜索关键词"/>
        </Sticky>
        <MySwipe :data="swipeData"/>
        <ClassBtn :data="btnName"/>
        <VideoList :data="videoListData"/>
    </div>
</template>

<script>
    import pageHead from '@c/common/Head'
    import MySwipe from '@c/home/MySwipe'
    import ClassBtn from '@c/home/ClassBtn'
    import VideoList from '@c/home/VideoList'
    import { Sticky, Search } from 'vant'
    import axios from 'axios'

    export default {
        name: 'Home',
        components: {
            pageHead,
            Sticky,
            MySwipe,
            ClassBtn,
            VideoList,
            Search
        },
        data () {
            return {
                data: [],
                btnName: [],
                swipeData: [],
                videoListData: []
            }
        },
        methods: {
            goSearch () {
                this.$router.push({
                    name: 'MySearch'
                })
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
    .van-search
        padding-top 0
        background-color transparent
        .van-search__content
            border 1pt solid #ccc
            border-radius 100vw
            text-align left
            font-size 14pt
            background-color rgba(255, 255, 255, 0.48)
            box-shadow 3pt 3pt 2pt 0 rgba(204, 204, 204, 0.29)

    #swipe
        .van-swipe__indicators i
            width 6pt
            height 6pt
            background-color rgba(123, 123, 123, .5)

        i.van-swipe__indicator--active
            background-color #1989fa
</style>
