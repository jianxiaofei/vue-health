<template>
    <div class="page">
        <page-head title="我的收藏" back-page-name="MyFamily"/>
        <div class="container">
            <SwipeCell
                v-for="(item, index) of list"
                :key="index">
                <Card
                    :title="item.title"
                    class="goods-card"
                    :thumb="item.img">
                </Card>
                <template #right>
                    <Button
                        @click="remove(index)"
                        square
                        text="删除"
                        type="danger"
                        class="delete-button"/>
                </template>
            </SwipeCell>
        </div>
    </div>
</template>

<script>
    import { SwipeCell, Card, Button } from 'vant'
    import pageHead from '@c/common/Head'

    export default {
        name: 'MyCollect',
        props: [],
        components: {
            SwipeCell,
            Card,
            Button,
            pageHead
        },
        data () {
            return {
                value: 1,
                list: []
            }
        },
        methods: {
            backHome () {
            },
            remove (index) {
                this.$dialog.confirm({
                    message: '确定删除吗？'
                }).then(() => {
                    this.list.splice(index, 1)
                })
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
        },
        mounted () {
        }
    }
</script>

<style lang="stylus" scoped>
    .container
        background #f1f1f1
        position relative
        padding-bottom 1vh
        height 94.5vh
        overflow scroll
        .van-swipe-cell
            margin 3vw 0

            .van-card
                background #fff
                padding 2vw 3vw

                .van-card__thumb
                    width 30%

                .van-card__content
                    .van-card__title
                        max-height 80%
                        font-size 4vw
                        line-height 5vw

            .van-swipe-cell__right
                .delete-button
                    height 100%
</style>
