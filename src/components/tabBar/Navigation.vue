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
    import $back from '@r/js/phoneBackButton'

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
            RouterShowTabBar (routeName) {
                const showTabBarPage = [
                    'Home',
                    'HealthInquiry',
                    'HealthTest',
                    'MyFamily'
                ]
                const isShowTabBarPage = showTabBarPage.includes(routeName)
                this.isShowTabBar = isShowTabBarPage
                this.backAction(isShowTabBarPage || routeName === 'Splash')
            },
            backAction (isTrue) {
                const tempFun = $back.doubleClick;
                isTrue ? $back.listen(tempFun) : $back.remove(tempFun)
            },
            setAndroidStatusBar () {
                // cordova插件会定义一个StatusBar对象，当它只能在deviceready后才能使用
                if (cordova.platformId === 'android') { // 安卓需要特殊处理，参见 cordova 官方文档
                    // 状态栏是否覆盖app（有效果）
                    StatusBar.overlaysWebView(true)
                    // 状态栏背景色（无效果）
                    // StatusBar.backgroundColorByHexString('#000000');
                    // 状态栏字体（无效果）
                    StatusBar.setStatusBarStyle('#000000')
                }
            }
        },
        watch: {
            $route (e) {
                this.RouterShowTabBar(e.name) // 需要显示TabBar的路由
                this.inputHideTabBar(e.name) // 拉起了原生键盘隐藏导航
                this.setAndroidStatusBar()
            }
        }
    })
</script>
<style lang="stylus" scoped>
    // CSS loader 会把把非根路径的url解释为相对路径， 加~前缀才会解释成模块路径。
    @import "~@stylus/common.styl"

    nav
        box-sizing: border-box
        display: flex
        justify-content: space-around
        align-items: center
        position: fixed
        left: 0
        bottom: 0
        width: 100vw
        height 8vh
        padding 2vh auto
        z-index: 1001
        color #000
        background: $bgTheme

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
