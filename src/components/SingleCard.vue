<template>
<div class="card-container">
  <div class="card" :id="card.id">
  <v-card
    
    class="mx-auto side"  
  >
<v-toolbar flat width="100%">
  
<!-- <input v-model="vocabb" > -->
<!-- <v-card-title v-else class="ml-n4">
    {{card.vocab}}
</v-card-title> -->
 <v-card-text>
      <editable-card v-model= "card.vocab" :data="'vocab'" @card_updating= " update_data "></editable-card>
  </v-card-text>
 <v-spacer></v-spacer>

    <v-card-actions class="mr-n6">
         <v-menu
            bottom
            left
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item @click="edit_card()"> 
              <v-list-item-title>Edit</v-list-item-title>
              </v-list-item>
              <v-list-item @click="delete_card()">
              <v-list-item-title>Delete</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        
    </v-card-actions>
</v-toolbar >
    <v-card-subtitle>
      <editable-card v-model= "card.pronuns" :data="'pronuns'" @card_updating= " update_data " ></editable-card>
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        @click="rotate()"
        icon
      >
      <v-icon>mdi-rotate-360</v-icon>
      </v-btn>

      <v-spacer></v-spacer>
      <v-btn
        @click="addToMem()"
        :color="card.memorized? 'pink' : ''"
        icon
      >
      <v-icon>mdi-emoticon-happy-outline</v-icon>
      </v-btn>

      <v-spacer></v-spacer>
      <v-btn
        @click="addToUnmem()"
        :color="!card.memorized? 'pink' : ''"
        icon
      >
      <v-icon>mdi-emoticon-sad-outline</v-icon>
      </v-btn>

      <v-spacer></v-spacer>
    <v-btn
        @click="favorite()"
        color="lighten-2"
        icon
      >
         <v-icon v-if="card.favorite" color="pink"> mdi-heart </v-icon>
      <v-icon v-else> mdi-cards-heart-outline </v-icon>
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon >{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text class="text">
      <editable-card v-model= "card.description" :data="'description'" @card_updating= " update_data "></editable-card>
            <!-- {{card.description}} -->
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  <v-card  class="side back">
    <v-card-text>
      <editable-card v-model= "card.translation" :data="'translation'" @card_updating= " update_data "></editable-card>
  </v-card-text>
  <v-card-actions  class="rotate-back">
    
      <v-btn 
        @click="rotate()"
        icon
      >
      <v-icon>mdi-rotate-360</v-icon>
      </v-btn>
    
      
  </v-card-actions>
  </v-card>
  </div>
  </div>
</template>
<script>
import EditableCard from './EditableCard.vue';
  export default {
  components: { EditableCard },
    data(){
      return{
        // back:false,
        show: false,
        edit:true,
        update_card :
         {vocabb: this.card.vocab,
          pronuns: this.card.pronuns,
          translation: this.card.translation,
          description: this.card.description}
      }
    },
      
    props:{
      card:Object,
    },
    methods:{
      rotate(){
        // this.back = true
        // document.getElementById(this.card.vocab)
        // .className = ' card side  rotate';

        // var card = document.querySelector('.card');
        // card.addEventListener( 'click', function() {
        // document.getElementById(this.card.vocab).classList.toggle('is-flipped');
        document.querySelector(`#${CSS.escape(this.card.id)}`).classList.toggle('is-flipped');
        
        // });
      },
      addToMem(){
        this.$store.dispatch('addToMem', this.card)
      },
      addToUnmem(){
        this.$store.dispatch('addToUnmem', this.card)
      },
      favorite(){
        this.$store.dispatch('favorite', this.card)
      },
      delete_card(){
        this.$store.dispatch('deleteSingleCard', this.card)
      },
      update_data({dataa, new_value}){
        
        if (dataa == "vocab"){
          this.update_card.vocabb = new_value
        }
        if (dataa == "pronuns"){
          this.update_card.pronuns = new_value
        }
        if (dataa == "translation"){
          this.update_card.translation = new_value
        }
        if (dataa == "description"){
          this.update_card.description = new_value
        }
        this.$store.dispatch('updateSingleCard', {old:this.card, new:this.update_card})
      },
    }
  }
</script>
<style lang="scss" scoped>
.card-container{
position: relative;
  @media only screen and (min-width: 400px) {
    width: 190px;
    height: 170px;
    // max-height: 200px;

  };
   @media only screen and (min-width: 600px) {
    width: 200px;
  height: 170px;

  };
   @media only screen and (min-width: 800px) {
    width: 230px;
  height: 200px;

  };
  @media only screen and (min-width: 1000px) {
    width: 230px;
  height: 200px;

  };
  // perspective: 600;
  // position: relative;
  // border: 1px solid;
  // border-radius: 2px;
}
.text{
  text-align: justify;
  text-justify: inter-word;
}

.card {
  
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: all 1s ease-in-out;
  transform-style: preserve-3d;
  width: 100%;
  .side{
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    height: 100%;
    position: absolute;
    width: 100%;
  }
  .back{
    background-color: rgba(122, 122, 122, 0.158);
    transform: rotateY(180deg);
    font-size: 20;
  }
}
  .card.is-flipped {
    transform: rotateY(180deg);
    }

.rotate-back {
  margin-top:30px;
}
</style>
