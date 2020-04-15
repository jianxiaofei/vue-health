<template>
    <Popup
            v-model="show"
            position="bottom">
        <img class="doctor-picture" v-lazy="lineDoctor.avatar_url" :key="lineDoctor.doc_id">
        <p class="doctor-name">{{lineDoctor.doc_name}}</p>
        <p class="line-tip">温馨提示：正在接通中，请稍等 <span class="dot"></span></p>
        <img @click="closeLine" class="close-line" src="~@assets/img/close-line.png" alt="">
    </Popup>
</template>

<script>
import { Popup } from 'vant'

export default {
    name: 'online',
    components: { Popup },
    props: {
        showOnline: {
            type: Boolean,
            default: false
        },
        lineDoctor: {
            type: Object
        }
    },
    data () {
        return {
            show: false
        }
    },
    methods: {
        closeLine () {
            this.$toast('取消问诊~')
            this.show = false
        },
        isConnected (_new) {
            if (!this.show) return
            this.$router.push({
                name: 'Inquiring'
            })
        }
    },
    watch: {
        showOnline () {
            this.show = true
            setTimeout(this.isConnected, 6000)
        }
    }
}
</script>

<style lang="stylus" scoped>
    .van-popup
        height 100vh
        line-height 0
        display flex
        flex-direction column
        justify-content center
        align-items center
        background-color #1989fa
        color #fff

        .doctor-picture
            width 27vw
            height 27vw
            margin-top 20vw
            border 5px solid rgba(255, 255, 255, 0.45)
            border-radius 100%
            box-shadow 0 0 3pt 3pt #24fa45
            /*animation-name/animation-duration/animation-timing-function/animation-delay/animation-iteration-count/animation-direction*/
            animation rol 1s linear infinite alternate
            @keyframes rol
                from
                    box-shadow 0 0 1pt 1pt #f8f7fa
                to
                    box-shadow 0 0 5pt 5pt #fac012

        p
            font-weight bold

        p.doctor-name
            margin-top 30pt
            font-size 18pt
            font-weight bold

        .dot
            display: inline-block
            height: 1em
            line-height: 1
            vertical-align: -.25em
            overflow: hidden

        .dot::before
            display: block
            content: '…\A…\A..'
            white-space: pre-wrap
            animation: dot 1.2s infinite step-start both
            @keyframes dot
                33%
                    transform translateY(-3em)
                66%
                    transform translateY(-2em)

        .close-line
            width 16vw
            height 16vw
            margin-top 50vw
</style>
