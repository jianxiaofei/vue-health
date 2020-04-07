<template>
    <div id="app">
        <div id="nav" v-if="notFullScreenPage">
            <router-link to="/">
                <Icon name="wap-home"/>
                首页
            </router-link>
            <router-link to="/HealthInquiry">
                <Icon name="desktop-o"/>
                健康问诊
            </router-link>
            <router-link to="/HealthTest">
                <Icon name="chart-trending-o"/>
                健康检测
            </router-link>
            <router-link to="/MyFamily">
                <Icon name="contact"/>
                我的家
            </router-link>
        </div>
        <router-view/>
    </div>
</template>
<script>
    import { Icon } from 'vant'

    export default ({
        data () {
            return {
                notFullScreenPage: true
            }
        },
        components: { Icon },
        methods: {},
        watch: {
            $route (e) {
                var allFullscreenPage = [
                    'MyCollect',
                    'VideoClass',
                    'Inquiring',
                    'UserRecord',
                    'InputData',
                    'MemberManage',
                    'About',
                    'EditMember'
                    ]
                this.notFullScreenPage = !(allFullscreenPage.includes(e.name))
                console.log(e.name, this.notFullScreenPage)
            }
        }
    })
</script>
<style lang="stylus">
    @import "assets/stylus/color.styl"
    #app
        font-family Avenir, Helvetica, Arial, sans-serif
        -webkit-font-smoothing antialiased
        -moz-osx-font-smoothing grayscale
        text-align center
        color #2c3e50
        overflow hidden
        max-width 750px
        margin 0 auto

        #nav
            box-sizing: border-box
            display: flex
            position: fixed
            left: 0
            bottom: 0
            width: 100%
            z-index: 1001
            border 1px solid transparent
            border-top-color #e7e7e7
            border-bottom-color #f8f8f8
            justify-content: space-evenly
            align-items: center
            padding: 1vw 0
            color #000
            background-color: $bgColor

        a
            color #000
            font-size 4vw

            &.router-link-exact-active
            &:active
                color #1e92ff

            i
                display block
                font-size 7vw
</style>
