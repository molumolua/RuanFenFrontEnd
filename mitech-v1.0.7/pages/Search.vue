<template>
    <div class="main-container">
        <Header/>
        <SearchBar></SearchBar>
        <ResultList></ResultList>
        <Footer/>
    </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchBar from '@/components/sections/SearchBar';
import ResultList from '@/components/sections/ResultList';
import { getLocale } from '@antv/g2plot/lib/core/locale';
export default {
  data() {
    return {
    }
  },
  methods: {
  },
  components:{
    SearchBar,
    ResultList,
    Footer,
    Header
  },
  mounted(){
    getLoacl()
  }
}
</script>