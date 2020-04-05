<template>
    <div id="inquiring" v-if="line">
        <div class="doctor-camera">
            <img src="https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg" alt="">
        </div>
        <div class="my-camera">
            <img src="http://p.qpic.cn/music_cover/icLTHicH8iakBFAJbiazGT3DnywHfOoiaVzdZWJ4pVcDdoVCqlU5hLx8K7A/600?n=1"
                 alt="">
        </div>
        <div class="button-action">
            <Icon size="50" name="expand"/>
            <img @click="closeLine" class="close-line" src="../assets/close-line.png" alt="">
            <Icon size="50" name="volume"/>
        </div>
        <div class="inquiry-time">
            <span>问诊时长：{{!(this.hour>9) ? '0'+this.hour : this.hour}}</span>
            <span>:{{!(this.minute>9) ? '0'+this.minute : this.minute}}</span>
            <span>:{{!(this.second>9) ? '0'+this.second : this.second}}</span>
        </div>
    </div>
</template>

<script>
    import { Icon } from 'vant'

    export default {
        name: 'Inquiring',
        props: [],
        components: { Icon },
        data () {
            return {
                line: true,
                hour: 0,
                minute: 0,
                second: 0
            }
        },
        methods: {
            closeLine () {
                this.$toast('问诊结束~')
                this.line = false
                this.$router.go(-1)
            }
        },
        beforeMount () {
            this.line = this.$route.params.isConnected
        },
        mounted () {
            var that = this
            setInterval(function () {
                that.second++
            }, 1000)
        },
        watch: {
            second (newSecond) {
                if (newSecond === 60) {
                    this.second = 0
                    this.minute += 1
                }
            },
            minute (newMinute) {
                if (newMinute === 60) {
                    this.minute = 0
                    this.hour += 1
                }
            }
        }
    }
</script>
<style lang="stylus" scoped>
    .doctor-camera

        img
            width: 100vw
            height 100vh

    .my-camera
        position absolute
        top 12vh
        right 3vw

        img
            width 33vw
            height 20vh

    .button-action
        position absolute
        bottom 8vh
        z-index 1
        display flex
        justify-content space-evenly
        align-items center
        width 100vw

        .close-line
            width 22vw

        & > *
            color #fff

    .inquiry-time
        position absolute
        bottom 3.5vh
        width 100vw
        text-align center
        color #fff
</style>
