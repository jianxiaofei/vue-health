<template>
    <div id="btn-video-class">
        <router-link tag="p"
                     v-for="(val, idx) of data"
                     :key="idx"
                     :to="{ name: 'VideoClass', params: { type: idx+1, title: val }}">
            <Icon :class="clsName[idx]" :name="icons[idx]"/>
            {{val}}
            </router-link>
    </div>
</template>

<script>
import { Icon } from 'vant'

export default {
  name: 'VideoClass',
    components: { Icon },
    props: {
        data: Array
    },
    data () {
        return {
            icons: ['points', 'gem-o', 'like-o', 'video-o'],
            clsName: ['baby', 'old-age', 'female', 'wiki']
        }
    },
    created () {
        console.log(this.data)
    },
    computed: {}
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
