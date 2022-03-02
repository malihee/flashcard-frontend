<template>
<div>
    <div v-if="cards">
    <v-row > 
        <v-col xs="12" sm="6" md="4" lg="3" v-for="card in cards" :key="card.vocab">
            <single-card :card=card />
        </v-col>
    </v-row>
    </div>
    <div v-else>
        oOoOPS! there is nothing to show 
    </div>
</div>
</template>

<script>
import SingleCard from './SingleCard.vue'

export default {
    components: { SingleCard },
    name:'AllCards',
    data:function(){
        return {
            // cards:[]
        }
    },
    async created(){
        await this.$store.dispatch('get_cards')
        console.log('aa',this.$store.getters.cards);
    },
    computed:{
        cards(){
            var filterCard
            if(this.$route.name == 'AllCards'){
                 filterCard = this.$store.state.cards                
            }
            else if(this.$route.name == 'unmemorized'){
                 filterCard = this.$store.state.cards.filter(item => item.memorized == false)                
            }
            else if(this.$route.name == 'memorized'){
                 filterCard = this.$store.state.cards.filter(item => item.memorized == true)                
            }
            else if(this.$route.name == 'favorites'){
                 filterCard = this.$store.state.cards.filter(item => item.favorite == true)                
            }
            // return filterCard.reverse()
            return filterCard.filter(item=> {
                return item.vocab.toLowerCase().includes(this.$store.state.search.toLowerCase())|| 
                item.translation.toLowerCase().includes(this.$store.state.search.toLowerCase()) ||
                item.description.toLowerCase().includes(this.$store.state.search.toLowerCase())
                } )

        } 
    },
    props:{
        // cards: Array
    },


}
</script>

<style lang="scss" scoped>

</style>>

