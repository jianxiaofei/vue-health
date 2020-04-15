<template>
    <div class="page">
        <div class="page-head">
            <Icon @click="backPage" class="back-arrow" name="arrow-left"/>
            <span class="page-title">{{title}}</span>
        </div>
        <div class="main">
            <TestMember @pageName="jumpPageName" v-if="page==='TestMember'"/>
            <TestRecord @pageName="jumpPageName" v-if="page==='TestRecord'"/>
            <TestImgHelp @pageName="jumpPageName" v-if="page==='TestImgHelp'"/>
            <DataArchive @pageName="jumpPageName" v-if="page==='DataArchive'"/>
            <InquiryMember @pageName="jumpPageName" v-if="page==='InquiryMember'"/>
            <InquiryRecord @pageName="jumpPageName" v-if="page==='InquiryRecord'"/>
            <InquiryDetail v-if="page==='InquiryDetail'"/>
        </div>
    </div>
</template>

<script>
    import { Icon } from 'vant'
    import TestMember from '@c/healthTest/TestMember'
    import TestRecord from '@c/healthTest/TestRecord'
    import TestImgHelp from '@c/healthTest/TestImgHelp'
    import DataArchive from '@c/healthInquiry/DataArchive'
    import InquiryMember from '@c/healthInquiry/InquiryMember'
    import InquiryRecord from '@c/healthInquiry/InquiryRecord'
    import InquiryDetail from '@c/healthInquiry/InquiryDetail'

    export default {
        name: 'UserRecord',
        props: [],
        components: {
            Icon,
            TestMember,
            TestRecord,
            TestImgHelp,
            DataArchive,
            InquiryMember,
            InquiryRecord,
            InquiryDetail
        },
        data () {
            return {
                title: '',
                page: '',
                fromPage: ''
            }
        },
        methods: {
            backPage () {
                switch (this.page) {
                    case 'TestRecord':
                        this.page = 'TestMember'
                        break;
                    case 'DataArchive':
                        this.page = this.fromPage
                        break
                    case 'InquiryRecord':
                        this.page = 'InquiryMember'
                        break
                    case 'InquiryDetail':
                        this.page = 'InquiryRecord'
                        break
                    case 'TestMember':
                        this.$router.push('MyFamily');
                        break
                    default:
                        this.$router.back();
                        break
                }
            },
            jumpPageName (name, fromPage) {
                console.log(name)
                this.page = name;
                this.fromPage = fromPage;
            }
        },
        watch: {
            page (val) {
                console.log(this.page)
                let pageObj = Object;
                pageObj = {
                    TestMember: '检测人员',
                    TestRecord: '检测记录',
                    TestImgHelp: '检测帮助',
                    InputData: '输入数据',
                    DataArchive: '数据归档',
                    InquiryMember: '问诊人员',
                    InquiryRecord: '问诊记录',
                    InquiryDetail: '问诊详情'
                }
                this.title = pageObj[val]
            }
        },
        beforeMount () {
            var title = this.$route.params.title;
            if (title === '检测人员' || !title) {
                this.title = '检测人员'
                this.page = 'TestMember'
            }
            if (title === '问诊人员') {
                this.title = '问诊人员'
                this.page = 'InquiryMember'
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~@stylus/common.styl"
    .page
        height 100vh
        background-color $bgTheme
        .page-head
            display flex
            align-items center
            width 100%
            background #fff
            font-size 5.2vw
            padding 2vw 0
            .back-arrow
                position absolute
                left 0.5vw
                line-height 1

                i.van-icon
                    vertical-align middle

            .page-title
                width 100vw
</style>
