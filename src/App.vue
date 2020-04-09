<template>
    <div id="app">
        <nav v-if="notFullScreenPage">
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
        </nav>
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
                const allFullscreenPage = [
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

        nav
            box-sizing: border-box
            display: flex
            position: fixed
            left: 0
            bottom: 0
            width: 100vw
            height 6vh
            z-index: 1001
            justify-content: space-around
            align-items: center
            color #000
            background-color: $bgColor

        a
            color #000
            font-size 3vw

            &.router-link-exact-active
            &:active
                color #1e92ff

            i
                display block
                font-size 6vw
</style>
