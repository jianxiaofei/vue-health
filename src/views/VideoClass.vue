<template>
    <div>
        <page-head :title="this.$route.params.title" backPageName="Home"/>
        <div class="container">
            <div class="video-item" v-for="(item, index) of list" :key="index">
                <van-img v-if="index>3" show-loading show-error class="video-img" :src="item.img"/>
                <span class="video-title">{{item.title}}</span>
                <Icon
                    :name="item.isCollect?'star':'star-o'"
                    class="video-collect"
                    :class="item.isCollect ? 'collect':''"
                    @click="collect(item)"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import { Image, Icon } from 'vant'
    import pageHead from '@c/common/Head'

    export default {
        name: 'VideoClass',
        props: [],
        components: {
            'van-img': Image,
            pageHead,
            Icon
        },
        data () {
            return {
                value: 1,
                list: []
            }
        },
        methods: {
            collect (item) {
                item.isCollect = !item.isCollect
            }
        },
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
    .container
        background #f1f1f1
        position relative
        height 94.5vh
        overflow scroll

        .video-item
            font-size 4.4vw
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
                font-size 5vw

                &.collect::before
                    color #ff8000
</style>
