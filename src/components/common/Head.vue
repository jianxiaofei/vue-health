<template>
    <div class="page-head">
        <Icon v-if="backPageName" @click="back" class="back-arrow" name="arrow-left"/>
        <span class="page-title">{{title || 'page title'}}</span>
        <slot></slot>
    </div>
</template>

<script>
    import { Icon } from 'vant'

    export default {
        name: 'page-head',
        props: ['title', 'backPageName', 'params'],
        components: { Icon },
        data () {
            return {}
        },
        methods: {
            back () {
                this.$router.push({
                    name: this.backPageName || 'Home',
                    params: this.params
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~@stylus/common.styl"
    .page-head
        display flex
        align-items center
        width 100vw
        background $bgTheme
        font-size 5.2vw
        height 10vw
        .back-arrow
            position absolute
            left 0.5vw
            line-height 1

            i.van-icon
                vertical-align middle

        .page-title
            width 100vw
</style>
