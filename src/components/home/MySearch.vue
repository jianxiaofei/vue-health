<template>
    <form action="/">
        <Search
                v-model="value"
                shape="round"
                @search="onSearch"
                placeholder="请输入搜索关键词"
        />
    </form>
</template>

<script>
import { Search } from 'vant'

export default {
  name: 'MySearch',
  components: { Search },
  data: function () {
    return {
      value: ''
    }
  },
  methods: {
    onSearch (val) {
      this.$toast(val)
    }
  }
}
</script>

<style lang="stylus" scoped>
    .van-search
        padding-top 0

    .van-search__content
        background-color transparent
        border 1pt solid #ccc
        border-radius 100vw
        box-shadow 3pt 3pt 2pt 0 rgba(204, 204, 204, 0.29)
        text-align left
        font-size 14pt
</style>
