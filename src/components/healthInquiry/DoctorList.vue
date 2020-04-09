<template>
    <div id="doctor-wrap">
        <div
            v-for="(v,k) of doctorList"
            :key="k"
            @click="showDetail(v)"
            class="doctor-item">
            <img class="doctor-picture" src="https://img.yzcdn.cn/vant/apple-1.jpg" alt="">
            <div class="doctor-intro">
                <p>
                    <span class="doctor-name">{{v.name}} </span>
                    <span class="doctor-inquiry-count">问诊量：{{v.askn}}（人）</span>
                </p>
                <p>
                    <span class="doctor-hosp">{{v.hosp}}</span>
                    <span class="doctor-dept">{{v.dept}}</span>
                </p>
                <p><span class="doctor-posn">{{v.posn}}</span></p>
                <input v-if="v.line " type="button" value="在线">
                <input v-else type="button" value="离线" disabled>
            </div>
        </div>
        <DoctorDetails :doctorData="doctorData" :isShow="show"/>
    </div>
</template>

<script>
    import DoctorDetails from './DoctorDetails'

    export default {
        props: {
            deptName: {
                type: String,
                default: ''
            }
        },
        name: 'doctors',
        components: { DoctorDetails },
        data: function () {
            return {
                show: false,
                doctorList: [],
                doctorData: {
                    type: Object,
                    default: null
                }
            }
        },
        beforeMount () {
            this.mockData()
        },
        methods: {
            showDetail (v) {
                this.doctorData = v
                this.show = !this.show
            },
            mockData () {
                console.log(this.doctorList)
                for (var i = 10; i--;) {
                    let rand = ''
                    rand = Math.random()
                    this.doctorList.push({
                        id: i,
                        img: 'https://img.yzcdn.cn/vant/apple-1.jpg',
                        name: '傲娇' + i,
                        hosp: '39健康医院',
                        dept: '全科',
                        posn: '高级院士',
                        line: rand > 0.5 ? 1 : 0,
                        askn: parseInt(rand * 1000),
                        goodAt: '擅长各种推拿，擅长各种推拿，擅长各种推拿擅长各种推拿擅长各种推拿',
                        intro: '长得漂亮，长得帅，技术一流长得漂亮，长得帅，技术一流长得漂亮，长得帅，技术一流长得漂亮，长得帅，技术一流'
                    })
                }
            }
        },
        watch: {
            deptName: {
                handler (newName, oldName) {
                    this.doctorList = []
                    this.mockData()
                },
                immediate: true
            }
        }
    }
</script>

<style lang="stylus" scoped>
    #doctor-wrap
        max-height 200vw
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

                    span.doctor-name
                        font-size 4.4vw

                    span.doctor-inquiry-count
                        color #4b70ea

                input
                    padding 0 6pt
                    border-radius 100pt
                    background-color #01d0a0
                    color #fff
                    border none
                    outline none

                input[value='离线']
                    background-color #ccc;
</style>
