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
