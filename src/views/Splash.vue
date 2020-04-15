<template>
    <div class="page">
        <CountDown class="count-down"
                   format="ss"
                   :time="time"
                   @finish="finish"/>
        <Swipe :autoplay="swipeOnceTime">
            <SwipeItem @click="jump(val)" v-for="(val, idx) in data" :key="idx">
                <img class="splash-img" :src="require(`@assets/img/${val.imgUrl}`)" :key="idx"/>
            </SwipeItem>
        </Swipe>
    </div>
</template>

<script>
    import { Swipe, SwipeItem, CountDown } from 'vant'

    export default {
        name: 'Splash',
        props: [],
        components: {
            Swipe,
            SwipeItem,
            CountDown
        },
        data () {
            return {
                time: 6000,
                swipeOnceTime: 2000,
                data: [
                    {
                        id: 101,
                        routeName: 'Home',
                        imgUrl: 'splash-1.jpeg'
                    },
                    {
                        id: 102,
                        routeName: 'Home',
                        imgUrl: 'splash-2.gif'
                    }
                ]
            }
        },
        methods: {
            finish () {
                this.swipeOnceTime = null
                this.$toast('倒计时结束')
                this.jump({ routeName: 'Home' })
            },
            jump (val) {
                console.log(val)
                this.$router.push({
                    name: val.routeName,
                    params: { val }
                })
            }
        },
        mounted () {
        }
    }
</script>

<style lang="stylus" scoped>
    .count-down
        position absolute
        top 30px
        right 30px
        z-index 1
        width 6vw
        height 6vw
        line-height 6vw
        color red
        font-weight bold
        border 2px solid gold
        border-radius 100%

        .item
            display: inline-block;
            width: 22px;
            margin-right: 5px;
            color: #fff;
            font-size: 12px;
            text-align: center;
            background-color: #1989fa;

    .splash-img
        width 100vw
        height 100vh
</style>
