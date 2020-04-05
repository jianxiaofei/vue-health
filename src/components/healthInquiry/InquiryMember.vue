<template>
    <div>
        <div class="button-wrap">
            <Button
                @click="jumpDataArchivePage"
                :data-archive-count="archiveCount"
                class="btn-archive"
                round block
                type="info"
                native-type="default">待归档
            </Button>
        </div>
        <div class="member-wrap">
            <div
                @click="jumpInquiryRecord(val)"
                class="member"
                v-for="(val, idx) of memberList"
                :key="idx">
                <div class="member-head">
                    <img :src="val.picture">
                    <span>{{val.name}}</span>
                </div>
                <p @click="jumpInquiryRecord(val)">问诊记录>></p>
            </div>
        </div>
    </div>
</template>

<script>
    import { Button } from 'vant'

    export default {
        name: 'InquiryMember',
        props: [],
        components: { Button },
        data () {
            return {
                memberList: [],
                archiveCount: 10
            }
        },
        methods: {
            jumpDataArchivePage () {
                this.$emit('pageName', 'DataArchive', 'InquiryMember')
            },
            jumpInquiryRecord (member) {
                this.$emit('pageName', 'InquiryRecord', 'InquiryMember')
                sessionStorage.setItem('member', JSON.stringify(member))
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
            color $commColor
            border-color $commColor
            position relative

            &::after
                position absolute
                top -2vw
                right -2vw
                /*attr(X)将元素的X属性以字符串形式返回。如果该元素没有 X 属性，则返回一个空字符串。区分大小写的属性返回值依赖文挡的语言设定。*/
                content attr(data-archive-count)
                width 5vw
                height 5vw
                border-radius 100%
                background-color red
                line-height 5vw
                font-weight bold
                vertical-align middle
                text-align center

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
