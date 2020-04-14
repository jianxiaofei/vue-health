<template>
    <div id="doctor-wrap">
        <div
            v-for="(v,k) of data"
            :key="k"
            @click="showDetail(v)"
            class="doctor-item">
            <img class="doctor-picture" :src="v.avatar_url" alt="">
            <div class="doctor-intro">
                <p>
                    <span class="doctor-name">{{v.doc_name}} </span>
                    <span class="doctor-inquiry-count">问诊量：{{v.inquiry_num}}（人）</span>
                </p>
                <p>
                    <span class="doctor-hosp">{{v.hospital}}</span>
                    <span class="doctor-dept">{{v.department}}</span>
                </p>
                <p><span class="doctor-posn">{{v.job_title}}</span></p>
                <input type="button" :value="+v.online_state===3?'在线':+v.online_state===2?'忙碌':'离线'">
            </div>
        </div>
        <DoctorDetails :doctor="doctorData" :isShow="show"/>
        <div v-if="data.length===0">暂无数据~</div>
    </div>
</template>

<script>
    import DoctorDetails from './DoctorDetails'

    export default {
        name: 'doctors',
        components: { DoctorDetails },
        props: {
            data: {
                type: Array
            }
        },
        data () {
            return {
                show: false,
                doctorData: {}
            }
        },
        methods: {
            showDetail (v) {
                this.doctorData = v
                this.show = !this.show
            }
        }
    }
</script>

<style lang="stylus" scoped>
    #doctor-wrap
        max-height 66vh
        overflow auto
        padding-bottom 20vw

        .doctor-item
            display flex
            border-radius 10pt
            background-color #fff
            margin 1.5vw 2.2vw 1.5vw 2.2vw
            padding 8pt 2pt 8pt 10pt

            img.doctor-picture
                width 30vw
                height 30vw
                border-radius 100%
                margin-right 5pt

            .doctor-intro
                text-align left

                p
                    margin 1.6vw
                    font-size 3.3vw
                    word-break keep-all

                    span
                        display inline-block

                    span:first-child
                        width 20vw
                        margin-right 3vw

                    span.doctor-name
                        font-size 4.4vw

                    span.doctor-inquiry-count
                        color #4b70ea

                    span.doctor-hosp
                    span.doctor-dept
                    span.doctor-name
                        overflow hidden
                        text-overflow ellipsis
                        white-space nowrap

                input
                    padding 0 6pt
                    border-radius 100pt
                    background-color #01d0a0
                    color #fff
                    border none
                    outline none

                input
                    &[value='在线']
                        background-color #14ccb0;

                    &[value='忙碌']
                        background-color #ffd700;

                    &[value='离线']
                        background-color #ccc;
</style>
