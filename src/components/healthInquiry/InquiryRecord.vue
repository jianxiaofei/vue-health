<template>
    <div class="page page-inquiry-record">
        <div class="user-wrap">
            <img :src="member.picture">
            <span>{{member.name}}</span>
        </div>
        <div class="table-wrap">
            <table>
                <tr>
                    <th>问诊医生</th>
                    <th>问诊时间</th>
                    <th>问诊时长</th>
                </tr>
                <tbody>
                <tr @click="jumpInquiryDetail(val)" v-for="(val, idx) of inquiryList" :key="idx">
                    <td class="doctor">{{val.doctor}}</td>
                    <td class="date">{{val.date}}</td>
                    <td class="time">{{val.time}}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'InquiryRecord',
        props: [],
        components: {},
        data () {
            return {
                UserInfo: {},
                inquiryList: [],
                member: {}
            }
        },
        methods: {
            jumpInquiryDetail (val) {
                sessionStorage.setItem('inquiryInfo', JSON.stringify(val))
                this.$emit('pageName', 'InquiryDetail', 'InquiryRecord')
            }
        },
        beforeMount () {
            this.member = JSON.parse(sessionStorage.getItem('member'))
            console.log(this.member)
            this.UserInfo = JSON.parse(sessionStorage.getItem('UserInfo'))
            for (let i = 10; i--;) {
                this.inquiryList.push({
                    doctor: '傲娇' + i,
                    doctorImg: 'http://p.qpic.cn/music_cover/icLTHicH8iakBFAJbiazGT3DnywHfOoiaVzdZWJ4pVcDdoVCqlU5hLx8K7A/600?n=1',
                    date: new Date().toLocaleTimeString(),
                    time: '00小时00分钟00秒',
                    mainAsk: '主诉主诉主诉主诉主诉主诉主诉主诉主诉主诉主诉主诉主诉主诉主诉主诉主诉主诉主诉主诉',
                    historyAsk: '问诊病史问诊病史问诊病史问诊病史问诊病史问诊病史问诊病史问诊病史问诊病史问诊病史问诊病史问诊病史',
                    firstAsk: '问诊初诊问诊初诊问诊初诊问诊初诊问诊初诊问诊初诊问诊初诊问诊初诊问诊初诊问诊初诊'
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .user-wrap
        display flex
        justify-content left
        align-items center
        padding 6vh 0 6vh 6vw

        img
            width 22vw
            height 12vh
            border-radius 50%

        span
            margin-left 6vw
            font-size 5vw

    .table-wrap
        padding 2vw 2vw;
        background-color #fff

        table
            margin 0 auto

            tr
                &:nth-child(even)
                    background-color rgba(204, 204, 204, 0.41)

                td
                    padding 2vw 4vw

                th
                    background-color #3862cc
                    color #fff
</style>
