<template>
    <div class="page">
        <page-head title="关于我们" back-page-name="MyFamily"/>
        <main>
            <img src="@assets/img/logo.png">
            <p>39健康</p>
            <p>版本号 0.7.9</p>
            <p>客服联系电话：400-063-3138</p>
            <div>39健康以关注每位家庭成员健康为己任。39健康以关注每位家庭成员健康为己任。39健康以关注每位家庭成员健康为己任。39健康以关注每位家庭成员健康为己任。39健康以关注每位家庭成员健康为己任。39健康以关注每位家庭成员健康为己任。39健康以关注每位家庭成员健康为己任。39健康以关注每位家庭成员健康为己任。</div>
        </main>
    </div>
</template>

<script>
    import pageHead from '@c/common/Head'

    export default {
        name: 'About',
        props: [],
        components: { pageHead },
        data () {
            return {}
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~@stylus/color.styl"
    .page
        background-color #fff
        height 94.5vh
        .page-head
            border-bottom 0.3vw solid #ccc
        main
            padding 0 3vw
            margin-top 16vh
            background-color #fff
            :nth-child(1)
                width 30vw
                height 16vw
            :nth-child(2)
            :nth-child(3)
                font-size 6vw
            :nth-child(4)
                font-size 5vw
            :nth-child(5)
                font-size 4vw
                text-align justify
</style>
