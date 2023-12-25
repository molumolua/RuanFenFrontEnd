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
  }
}
</script>