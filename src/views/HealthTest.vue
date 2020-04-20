<template>
    <div class="page">
        <page-head title="健康检测"/>
        <div class="container">
            <p class="input-tip">请输入拉雅健康仪的IMEI号</p>
            <Field clearable border
                   v-model="value"
                   type="digit"
                   input-align="center"
                   placeholder="请输入数字号码"/>
            <div class="btn-wrap">
                <Button round block type="info" native-type="submit" text="下一步"/>
                <Button round plain type="info" native-type="button" text="输入数据"
                        :to="{name:'InputData',params:{from:'HealthTest'}}"/>
            </div>
            <div class="warm-tip">
                <p>温馨提示：</p>
                <p>1.39健康可支持检测3项数据（血糖，胆固醇，尿酸）</p>
                <p>2.针对高血糖，高血脂、痛风等患者能够有效及时的进行数据检测和分析</p>
                <p class="get-device-way">3.若你没有检测设备，请进入 <span>获取设备方式>></span></p>
            </div>
        </div>
    </div>
</template>

<script>
    import { Field, Button } from 'vant'
    import pageHead from '@c/common/Head'

    export default {
        name: 'Index',
        components: {
            Field,
            Button,
            pageHead
        },
        data () {
            return {
                value: ''
            }
        },
        methods: {}
    }
</script>

<style lang="stylus" scoped>

    @import "~@stylus/common.styl"
    $commColor = #4b70ea
    .page
        height 100vh
        overflow hidden
        background-color $bgTheme

        .container
            height 88vh

            .input-tip
                font-size 5vw

            .van-field
                width 80vw
                padding 2vw
                align-items center
                margin 6vw auto
                border 1px solid $commColor
                background-color #fff
                border-radius 100vh

            button
                margin 4vw auto
                width 40vw
                height 9vw
                line-height 9vw
                font-size 4.5vw

                &[type='submit']
                    margin 5vw auto
                    background-color $commColor

                &[type='button']
                    color $commColor
                    border-color $commColor

            .warm-tip
                font-size 4vw
                margin 8vw 8vw
                text-align left

                p.get-device-way span
                    color $commColor
                    border-bottom 1px solid $commColor
                    padding-bottom .3vw
                    word-break keep-all
</style>
