<template>
  <v-card  class="mx-auto card" max-width="300">
    <v-card-title class="">
      Add a new word 
    </v-card-title>
    <v-divider></v-divider>
    <v-card-title class="mx-auto card-title">
      <v-text-field  flat solo v-model="vocab" placeholder="New Vocabulary"></v-text-field>
    </v-card-title>
     <v-card-subtitle class=" mt-n10 mx-auto card-pronun">
      <v-text-field  flat solo v-model="pronunciation" placeholder="pronunciation"></v-text-field>
    </v-card-subtitle>
    <!-- <v-divider></v-divider> -->
    <v-card-text class="mt-n10">
      <!-- <v-text-field v-model="descriptions" placeholder="add the description"></v-text-field> -->
    <v-textarea
          rows="2"
          v-model="descriptions" 
          label="description"
          outlined
        >
    </v-textarea>
    </v-card-text>
    <v-card-text>
      <v-text-field class="text-right mt-n13" flat solo v-model="translate" placeholder="معنی کلمه را وارد کنید"></v-text-field>
    </v-card-text>
    <v-card-actions class="mt-n10">
      <v-btn color="primary" @click="add()"> add </v-btn>
      <v-spacer></v-spacer>
      <v-btn color="error" @click="cancel()">  cancel </v-btn>
    </v-card-actions>
    
  </v-card>
</template>

<script>
export default {
    name: 'NewCard',
    data:function(){
      return{
        vocab: null,
        descriptions:null,
        translate:null,
        show:false,
        pronunciation:null
      }
    },
    methods:{
      add(){
        this.$store.dispatch('addCard', {
        vocab: this.vocab,
        description :this.descriptions,
        translation:this.translate,
        pronuns:this.pronunciation,
        memorized :false,
        favorite:false
      })
        // this.$store.state.cards.push({vocab:this.vocab, pronuns:this.pronunciation, discription:this.descriptions, transl:this.translate, mem:false ,fav:false})
        this.$router.push({name:'AllCards'})
      },
      cancel(){
        this.$router.push({name:'AllCards'})
      }
    }
}
</script>

<style lang="scss" scoped>

.card{
  width: 100%;
  height: auto;
  &-title{
    width: 75%;
  }; 
  &-pronun{
    width: 70%;
  }; 
}
</style>