<template>
   <v-text-field
   dark
   class="searchbar"
    placeholder="search"
    rounded
    dense
    filled
    v-model="$store.state.search"
          ></v-text-field>
</template>

<script>
export default {
data(){
    return{
        search:''
    }
},
// computed:{
//     searchbar(){
//         this.$store.state.search = this.search
//         return this.search
//     }
// }
}
</script>

<style lang="scss" scoped>
.searchbar{
    width: 100px;
}
</style>
