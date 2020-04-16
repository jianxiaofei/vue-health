<template>
    <div>
        <div class="input-wrap">
            <Icon @click="backHome" name="arrow-left" size="1.3em"/>
            <Search
                v-model="value"
                shape="round"
                show-action
                :autofocus="true"
                :placeholder="hotWord">
                <template #action>
                    <div @click="onSearch">搜索</div>
                </template>
            </Search>
        </div>
        <main>
            <div class="hot-search inner">
                <a href="#" v-for="(val,idx) of hotSearch" :key="idx">{{val.title}}</a>
            </div>
            <div v-if="historySearch.length" class="history-search">
                <p class="nav-title">
                    <span>历史记录</span>
                    <Icon name="arrow-down"/>
                    <Icon @click="delHistorySearch" class="right-icon-delete" name="delete"/>
                </p>
                <div class="inner">
                    <a href="#" v-for="(val,idx) of historySearch" :key="idx">{{val.title}}</a>
                </div>
            </div>
            <div class="guess-search">
                <p class="nav-title">
                    <span>猜你想搜</span>
                    <Icon name="arrow-down"/>
                </p>
                <div class="inner">
                    <a href="#" v-for="(val,idx) of guessSearch" :key="idx">
                        {{val.title}}
                        <Tag plain type="warning" v-if="val.tag">{{val.tag}}</Tag>
                    </a>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import { Search, Icon, Tag } from 'vant'

export default {
    name: 'MySearch',
    components: {
        Search,
        Icon,
        Tag
    },
    data: function () {
        return {
            value: '',
            hotWord: '刘亦菲第一古装美女',
            hotSearch: [
                {
                    id: 101,
                    title: '刘亦菲',
                    link: '#'
                }, {
                    id: 102,
                    title: 'nCoV-2019',
                    link: '#'
                }],
            historySearch: [
                {
                    id: 201,
                    title: '女神',
                    link: ''
                },
                {
                    id: 202,
                    title: '刘亦菲',
                    link: ''
                }],
            guessSearch: [
                {
                    id: 201,
                    title: 'iphone SE2020',
                    link: '',
                    tag: '热'
                },
                {
                    id: 202,
                    title: '美国总统热朗普',
                    link: ''
                }]
        }
    },
    methods: {
        delHistorySearch () {
            this.historySearch = []
        },
        backHome () {
            this.$router.back()
        },
        onSearch (val) {
            this.$toast(this.value)
        }
    }
}
</script>

<style lang="stylus" scoped>
    div.input-wrap
        display flex
        justify-content space-between
        flex-wrap nowrap
        align-items center

        .van-search
            width 90vw
            padding-left 1.5vw

            .van-search__content
                margin-right 3vw
                background-color #f4f4f4
                border 1pt solid #ccc
                border-radius 100vw
                box-shadow 3pt 3pt 2pt 0 rgba(204, 204, 204, 0.29)
                font-size 14pt

    main
        margin-top 2vw

        & > div
            padding 0 3vw

        div.inner
            display flex
            justify-content space-around
            flex-wrap wrap
            align-items center

        p.nav-title
            position relative
            display flex
            align-items center
            text-align left
            color #707070
            padding-top 1vw
            border-top 1px solid #ccc

            .right-icon-delete
                position absolute
                right 0

        a
            margin 1.3vw 1vw
            color #000
</style>
