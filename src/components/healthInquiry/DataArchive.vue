<template>
    <div>
        <nav @click="tabBar" class="btn-wrap">
            <div class="tab-1 active">检测记录</div>
            <div class="tab-2">问诊记录</div>
        </nav>
        <main>
            {{recordData}}
        </main>
    </div>
</template>

<script>
    export default {
        name: 'DataArchive',
        props: [],
        components: {},
        data () {
            return {
                tabName: 'tab-1',
                recordData: 'tab-1'
            }
        },
        methods: {
            tabBar () {
                var uniqueIdx = 'nav.btn-wrap div.active'
                var prevTab = document.querySelector((uniqueIdx))
                var currTab = arguments[0].target;
                if (currTab.nodeName === 'DIV') {
                    prevTab.classList.remove('active')
                    currTab.classList.add('active')
                    this.tabName = currTab.classList[0];
                }
            }
        },
        watch: {
            tabName () {
                this.recordData = this.tabName
            }
        },
        beforeMount () {
        }
    }
</script>

<style lang="stylus" scoped>
    nav
        display flex
        justify-content left
        margin-top 2vw
        background-color #ccc
        font-size 0

        div
            padding 2vw 4vw
            position relative
            border-radius 0 0 12vw 12vw
            font-size 4vw
            background-color #ccc

            &.active
                background-color #fff
                border-radius 2vw 2vw 0 0

    main
        background-color #fff
</style>
