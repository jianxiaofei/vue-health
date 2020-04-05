<template>
    <div class="my-family-page">
        <div class="container">
            <div class="my-wrap-top">
                <van-img round show-loading show-error width="5rem" height="5rem" class="my-picture"
                         src="https://img.yzcdn.cn/vant/cat.jpeg"/>
                <h4 class="my-name">{{UserInfo.name}}</h4>
                <VipCard :isVip="UserInfo.isVip"/>
            </div>
        </div>
        <div class="my-content">
            <p>
                <router-link :to="{ name: 'UserRecord', params: { title: '问诊人员'}}">
                    <Icon class="van-col--1" size="2rem" name="records"/>
                    <span>健康咨询记录</span>
                </router-link>
            </p>
            <p>
                <router-link :to="{ name: 'MyCollect', params: { type: ''}}" tag="p">
                    <Icon class="van-col--1" size="2rem" name="bookmark-o"/>
                    <span>我的收藏</span>
                </router-link>
            </p>
            <p>
                <router-link :to="{ name: 'UserRecord', params: { title: '检测人员'}}" tag="p">
                    <Icon class="van-col--1" size="2rem" name="coupon-o"/>
                    <span>健康检测记录</span>
                </router-link>
            </p>
        </div>
        <div class="member-wrap">
            <router-link to="/MemberManage" tag="p">
                <Icon size="2rem" name="friends-o"/>
                <span>家庭成员管理</span>
            </router-link>
            <Divider/>
            <router-link to="/About" tag="p">
                <Icon size="2rem" name="info-o"/>
                <span>关于我们</span>
            </router-link>
        </div>
    </div>
</template>

<script>
    import { Image, Icon, Divider } from 'vant'
    import VipCard from '../components/myFmily/VipCard'

    export default {
        name: 'index',
        components: {
            'van-img': Image,
            Divider,
            Icon,
            VipCard
        },
        data () {
            return {
                vip: 0,
                UserInfo: { type: Object }
            }
        },
        beforeMount () {
            this.UserInfo = JSON.parse(sessionStorage.getItem('UserInfo'))
        }
    }

</script>
<style lang="stylus" scoped>
    @import "../assets/stylus/color.styl"
    .my-family-page
        background $bgTheme
        height 100vh
        overflow hidden

        .my-wrap-top
            display flex
            justify-items center
            align-items center
            padding 6vw 0 25vw 0
            background-color #4b70ea
            width 100%
            height 25vw
            position relative
            z-index 1
            overflow hidden

            .my-picture
                margin-left 12pt

    h4
        margin-left 5vw
        color #fff

    .my-content
        display flex
        justify-content space-around
        align-items center
        border-radius 2vw
        background #fff
        padding 1vh 0
        font-size 4vw

        span
            display block

    .member-wrap
        margin-top 2vw
        background #fff
        border-radius 2vw
        height auto
        font-size 5vw

        p
            margin 0
            padding 3vw
            text-align left
            display flex
            align-items center

            span
                margin-left 12pt

        .van-divider
            margin 0 auto
            width 90%
            align-items center
</style>
