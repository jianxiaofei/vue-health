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
                docHeight: window.screen.height,
                notFullScreenPage: true
            }
        },
        components: { Icon },
        methods: {},
        beforeMount () {
            console.log(this.docHeight)
        },
        mounted () {
            window.onresize = () => {
                const _H = window.screen.height
                this.notFullScreenPage = this.docHeight !== _H
                console.log(this.docHeight)
            }
        },
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
            },
            docHeight (_new, _old) {
                // this.notFullScreenPage = _new === _old;
            }
        }
    })
</script>
<style lang="stylus">
    // CSS loader 会把把非根路径的url解释为相对路径， 加~前缀才会解释成模块路径。
    @import "~@stylus/color.styl"
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
            height 8vh
            padding 2vh auto
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
