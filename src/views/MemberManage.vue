<template>
    <div class="page">
        <page-head title="家庭成员管理" backPageName="MyFamily">
            <span @click="editMember" class="add-member">添加</span>
        </page-head>
        <main>
            <div class="page-intro">
                <p>通过家庭成员管理，可以轻松管理家庭成员。你可以通过</p>
                <p>编辑成员信息，也可以添加或者删除来增加和减少家庭成员</p>
            </div>
            <div class="member-item" @click="editMember(val)" v-for="(val, idx) of memberList" :key="idx">
                <img class="member-picture" :src="val.picture">
                <div class="member-intro">
                    <p>
                        {{val.name}}
                        <i v-if="val.sex==='female'" class="female">♀</i>
                        <i v-else class="male">♂</i>
                    </p>
                    <span>年龄：{{val.age}}岁</span>
                    <span>身高：{{val.height}}cm</span>
                    <span>体重：{{val.weight}}kg</span>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import pageHead from '@c/common/Head'

    export default {
        name: 'MemberManage',
        props: [],
        components: { pageHead },
        data () {
            return {
                memberList: []
            }
        },
        methods: {
            editMember (memberData) {
                this.$router.push({
                    name: 'EditMember',
                    params: { memberData }
                })
            }
        },
        beforeMount () {
            for (let i = 6; i--;) {
                this.memberList.push({
                    name: '男性',
                    sex: 'male',
                    age: '35',
                    height: '178',
                    weight: '76',
                    picture: 'https://imgsa.baidu.com/baike/pic/item/c2fdfc039245d6882a414096adc27d1ed21b2445.jpg'
                }, {
                    name: '女性',
                    sex: 'female',
                    age: '25',
                    height: '168',
                    weight: '56',
                    picture: 'http://p.qpic.cn/music_cover/icLTHicH8iakBFAJbiazGT3DnywHfOoiaVzdZWJ4pVcDdoVCqlU5hLx8K7A/600?n=1'
                }, {
                    name: '爸爸',
                    sex: 'male',
                    age: '33',
                    height: '188',
                    weight: '76',
                    picture: 'https://imgsa.baidu.com/baike/pic/item/c2fdfc039245d6882a414096adc27d1ed21b2445.jpg'
                }, {
                    name: '妈妈',
                    sex: 'female',
                    age: '31',
                    height: '168',
                    weight: '66',
                    picture: 'http://p.qpic.cn/music_cover/icLTHicH8iakBFAJbiazGT3DnywHfOoiaVzdZWJ4pVcDdoVCqlU5hLx8K7A/600?n=1'
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~@stylus/common.styl"

    .page
        height 100vh
        background-color $bgTheme

        .add-member
            word-break keep-all
            position: absolute;
            right 3vw
            font-size 4.5vw

        main
            height 94.5vh
            overflow scroll

            .page-intro
                color #a6a6a6
                margin 4vw 5vw 6vw 5vw
                font-size 3vw
                line-height 1

            .member-item
                display flex
                align-items center
                background-color #fff
                border-radius 3vw
                margin 0 3vw 3vw 3vw
                padding 4vw 3vw
                font-size 3vw

                img.member-picture
                    width 15vw
                    height 15vw
                    border-radius 100%

                .member-intro
                    color #494949
                    text-align left
                    margin-left 5vw

                    & > *
                        margin-right 2vw

                    p
                        margin 0 0 2.5vw
                        font-size 4vw
                        position: relative;

                        i.female
                            position absolute
                            color #ffc2ea
                            margin 0 0 0 2vw
                            font-weight 900
                            transform rotate(30deg)

                        i.male
                            position absolute
                            color #75e6ff
                            margin 0 0 0 2vw
                            font-weight 900
</style>
