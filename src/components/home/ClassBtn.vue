<template>
    <div id="btn-video-class">
        <p>
            <router-link :to="{ name: 'VideoClass', params: { type: 1, title: '宝贝指南' }}">
                <Icon class="baby" name="points"/>
                宝贝指南
            </router-link>
        </p>
        <p>
            <router-link :to="{ name: 'VideoClass', params: { type: 2, title: '老年保健' }}">
                <Icon class="old-age" name="gem-o"/>
                老年保健
            </router-link>
        </p>
        <p>
            <router-link :to="{ name: 'VideoClass', params: { type: 3, title: '女性宝典' }}">
                <Icon class="female" name="like-o"/>
                女性宝典
            </router-link>
        </p>
        <p>
            <router-link :to="{ name: 'VideoClass', params: { type: 4, title: '健康百科' }}">
                <Icon class="wiki" name="video-o"/>
                健康百科
            </router-link>
        </p>
    </div>
</template>

<script>
import { Icon } from 'vant'

export default {
  name: 'VideoClass',
  components: { Icon },
  data () {
    return { test: '123' }
  }
}
</script>

<style lang="stylus" scoped>
    #btn-video-class
        display flex
        justify-content space-evenly
        flex-wrap nowrap
        justify-items center
        p
            font-size 3vw
            word-break keep-all

            i
                font-size 8vw
                padding-bottom 10px
                display block

            .baby
                color #48fffa

            .old-age
                color #6bff67

            .female
                color #ff67a4

            .wiki
                color #599cff
</style>
