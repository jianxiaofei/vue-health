<template>
    <div>
        <div class="doctor-wrap">
            <img :src="inquiryInfo.doctorImg">
            <div class="head-info">
                <span>{{inquiryInfo.doctor}}</span>
                <span>{{inquiryInfo.date}}</span>
                <Button
                    class="btn-archive"
                    round block
                    type="info"
                    native-type="default">再次问诊
                </Button>
            </div>
        </div>
        <main>
            <div>
                <span>问诊时长：</span>
                {{inquiryInfo.time}}
            </div>
            <div>
                <span>问诊主诉：</span>
                {{inquiryInfo.mainAsk}}
            </div>
            <div>
                <span>问诊病史：</span>
                {{inquiryInfo.historyAsk}}
            </div>
            <div>
                <span>问诊初诊：</span>
                {{inquiryInfo.firstAsk}}
            </div>
        </main>
    </div>
</template>

<script>
import { Button } from 'vant'
    export default {
        name: 'InquIryDetail',
        props: [],
        components: { Button },
        data () {
            return {
                inquiryInfo: {}
            }
        },
        beforeMount () {
            this.inquiryInfo = JSON.parse(sessionStorage.getItem('inquiryInfo'))
        }
    }
</script>

<style lang="stylus" scoped>
    .doctor-wrap
        display flex
        justify-content left
        align-items center
        padding 6vh 0 6vh 6vw

        img
            width 32vw
            height 32vw
            border-radius 100%
        .head-info
            margin-left 6vw
            display flex
            flex-direction column
            text-align left
            :nth-child(1)
                font-size 5vw
                margin-bottom 2vw
            :nth-child(2)
                color #979797
                font-size 4vw
                margin-bottom 2vw
            :nth-child(3)
                font-size 5vw

    main
        padding-top 3vh
        background-color #fff
        min-height 88vh
        div
            /*t must include values for:
                <font-size>
                <font-family>
                it may optionally include values for:
                <font-style>
                <font-variant>
                <font-weight>
                <font-stretch>
                <line-height>*/
            font 15px/20px caption
            padding 2vw 3vw
            text-align justify
            & > span
                font-size 16px
                font-weight bold

</style>
