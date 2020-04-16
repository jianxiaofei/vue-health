<template>
    <nav v-if="isShowTabBar">
        <router-link to="/Home">
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
</template>
<script>
import { Icon } from 'vant'

export default ({
    name: 'Navigation',
    data () {
        return {
            isShowTabBar: true
        }
    },
    components: { Icon },
    methods: {
        inputHideTabBar (routePage) {
            console.log(routePage, 123)
            const resizePage = ['Home', 'HealthTest'] // 存在输入框的路由
            const that = this
            if (resizePage.includes(routePage)) {
                window.onresize = ev => {
                    that.isShowTabBar = !that.isShowTabBar
                }
            } else {
                window.onresize = null
            }
        },
        fullScreenRouterHideTabBar (routeName) {
            const allFullscreenPage = [
                'MyCollect',
                'VideoClass',
                'Inquiring',
                'UserRecord',
                'InputData',
                'MemberManage',
                'About',
                'Splash',
                'EditMember',
                'MySearch'
            ]
            this.isShowTabBar = !(allFullscreenPage.includes(routeName))
        }
    },
    watch: {
        $route (e) {
            this.fullScreenRouterHideTabBar(e.name) // 全屏路由隐藏导航
            this.inputHideTabBar(e.name) // 拉起了原生键盘隐藏导航
        }
    }
})
</script>
<style lang="stylus">
    // CSS loader 会把把非根路径的url解释为相对路径， 加~前缀才会解释成模块路径。
    @import "~@stylus/common.styl"

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

            i.van-icon
                display block
                font-size 6vw
</style>
