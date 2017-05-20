<template>
  <div class="home-view has-header">
    <sub-nav mold="quickNav"></sub-nav>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import InfiniteLoading from 'vue-infinite-loading'
import SubNav from '../components/SubNav'
import List from '../components/List'
import Loading from '../components/Loading'

export default {
  name: 'home-view',
  components: { SubNav, List, InfiniteLoading, Loading },
  data () {
    return {}
  },
  computed: {
    ...mapState({
    })
  },
  methods: {
    onInfinite () {
      setTimeout(() => {
        this.loadMore()
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
      }, 1000)
    },
    ...mapActions([
      'loadMore',
      'getEvent'
    ])
  }
}
</script>

<style lang="scss" scoped>
.sub-nav {
  margin: 0 1.8rem;
  padding-top: 0.2rem;
}
</style>
