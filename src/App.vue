<template>
    <div id="app">
        <tab-bar/>
        <router-view/>
    </div>
</template>
<script>
import TabBar from '@c/tabBar/Navigation'

export default ({
    components: { TabBar }
})
</script>
<style lang="stylus">
    // CSS loader 会把把非根路径的url解释为相对路径， 加~前缀才会解释成模块路径。
    #app
        font-family Avenir, Helvetica, Arial, sans-serif
        -webkit-font-smoothing antialiased
        -moz-osx-font-smoothing grayscale
        text-align center
        color #2c3e50
        overflow hidden
        max-width 750px
        margin 0 auto
</style>
