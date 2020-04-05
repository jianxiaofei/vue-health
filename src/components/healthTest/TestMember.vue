<template>
    <div>
        <div class="button-wrap">
            <Button @click="jumpDataArchive" round block type="info" native-type="default">数据归档</Button>
            <router-link
                :to="{name: 'InputData', params: { title: '检测人员', fromPage: 'UserRecord' }}"
                tag="button"
                class="van-button van-button--info van-button--normal van-button--plain van-button--round">
                输入数据
            </router-link>
        </div>
        <div class="member-wrap">
            <div
                @click="jumpTestRecord(val)"
                class="member"
                v-for="(val, idx) of memberList"
                :key="idx">
                <div class="member-head">
                    <img :src="val.picture">
                    <span>{{val.name}}</span>
                </div>
                <p>检测记录>></p>
            </div>
        </div>
    </div>
</template>

<script>
    import { Button } from 'vant'

    export default {
        name: 'TestMember',
        props: [],
        components: { Button },
        data () {
            return {
                memberList: []
            }
        },
        methods: {
            jumpDataArchive () {
                this.$emit('pageName', 'DataArchive', 'TestMember')
            },
            jumpTestRecord (val) {
                this.$emit('pageName', 'TestRecord', 'TestMember')
                sessionStorage.setItem('memberInfo', JSON.stringify(val))
            }
        },
        beforeMount () {
            for (let i = 5; i--;) {
                this.memberList.push({
                    id: i,
                    name: '妹妹' + i,
                    picture: 'http://p.qpic.cn/music_cover/icLTHicH8iakBFAJbiazGT3DnywHfOoiaVzdZWJ4pVcDdoVCqlU5hLx8K7A/600?n=1'
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>

    .button-wrap
        display flex
        justify-content center
        align-items center

        button
            width 30%
            margin 4vh 2vw
            text-align center

            &[type='button']
                color $commColor
                border-color $commColor

    .member-wrap
        .member
            display flex
            justify-content space-between
            align-items center
            background-color #fff
            margin 0 2.6vw 2.5vw
            padding 2vh 3vw
            border-radius 10px
            font-size 5vw

            img
                width 15vw
                height 15vw
                border-radius 50%

            div
                display flex
                justify-content left
                align-items center

                span
                    margin-left 4vw

            p:last-child
                color #5392fa
                font-size 4vw
</style>
