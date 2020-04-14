<template>
    <div class="top-area">
        <span class="page-title">健康问诊</span>
        <Icon @click.self="showPopup" name="wap-nav"/>
        <Popup v-model="show" position="top">
            <span class="page-title">选择科室</span>
            <div id="department" class="white">
                <Button
                    @click="hidePopup(val)"
                    v-for="(val,idx) in allDept"
                    :key="idx"
                    :class="[' dep-'+idx, {'selected': selectedDept.dept_id === val.dept_id}]"
                    round
                    type="default">
                    {{val.dept_name}}
                </Button>
            </div>
        </Popup>
    </div>
</template>

<script>
    import { Popup, Button, Icon } from 'vant'

    export default {
        props: {
            selectedDept: {
                type: Object
            },
            allDept: Array
        },
        name: 'top',
        components: {
            Popup,
            Button,
            Icon
        },
        data () {
            return {
                show: false
            }
        },
        methods: {
            showPopup () {
                this.show = true
            },
            hidePopup (dept) {
                this.$emit('sync-from-top-step', dept)
                this.show = false
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .top-area
        display flex
        justify-content center
        align-items center
        background-color #fff

        .van-popup--top
            #department
                border-radius 0
                border 0
                text-align center
                margin 0 2.2vw 0 2.2vw
                padding 0 2vw 2vw 2vw

                .van-button
                    min-width 18vw
                    height 9vw
                    line-height 9vw
                    margin 1vw 0.6vw
                    &.selected
                        color #1989fa
                        border-color #1989fa

        span.page-title
            display block
            font-size 5.2vw
            padding 2vw 0

        i.van-icon-wap-nav
            position absolute
            right 2.2vw
            font-size 15pt
</style>
