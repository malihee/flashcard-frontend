import Vue from 'vue'
import Vuex from 'vuex'
import {api} from '../axios-api'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        search:'',
        cards:[
            // {vocab:'water', pronuns:'/vater/', discription:'for drink', transl:'آب', mem:false ,fav:false},
            // {vocab:'ice', pronuns:'/Aise/',discription:'dridge water', transl:'یخ', mem:false , fav:false},
            // {vocab:'umbrella', pronuns:'/amberella/',discription:'protecting from being wet in rain', transl:'چتر', mem:false , fav:false},
            // {vocab:'crafty', pronuns:'/krafty/',discription:'defrauding someone', transl:'زیرکانه ، فریب کارانه', mem:false , fav:false},
            // {vocab:'linger', pronuns:'/linger/',discription:'stay on', transl:'باقی ماندن', mem:false , fav:false},
                ]
    },
    getters:{
        cards(state){
            console.log('aaaa',state.cards);
            return state.cards
        }
    },
    mutations:{
        setCards(state,data){
            state.cards = data
        },
        addToCards(state, payload){
            state.cards.push(payload)

        },
        deleteCard(state , payload){
            state.cards = state.cards.filter(c => c.id != payload.id)
        },
        addToMem(state, payload){
            for (var i=0;i<state.cards.length;i++){
                if(state.cards[i].id == payload.id){
                    state.cards[i].memorized=true
                }
            }
        },
        addToUnmem(state, payload){
            for (var i=0;i<state.cards.length;i++){
                if(state.cards[i].id == payload.id){
                    state.cards[i].memorized=false
                }
            }
        },
        favoritee(){
            
        },
        update(){

        },
    },
    actions:{
        async get_cards({commit}){
            await api.get('/cards/')
            .then(res => {
                if(res.status ===200){
                    // state.cards = res.data
                    console.log('action',res.data);
                    commit('setCards', res.data)
                }})
            
            .catch(err=>{
                console.log('errorrrrrrrrrr',err);
            })
            // console.log(state.cards);
        },
        async deleteSingleCard({commit},payload){
            console.log('card:', payload);
            await api.delete(`/cards/${payload.id}/`).then(res => 
                { console.log(res.data)
                commit('deleteCard', payload)}
                )
            
        },
        async addCard({commit}, payload){
            await api.post('/cards/', payload).
            then(res => {console.log(res);
            commit('addToCards', payload)}
            ).
            catch(err => console.log('add_err:', err))
        },
        async addToMem({commit}, payload){
            payload.memorized = true
            await api.put(`/cards/${payload.id}/`,payload
            ).then(commit('addToMem',payload))
            .catch(err=> console.log(err))
        },
        async addToUnmem({commit}, payload){
            payload.memorized = false
            await api.put(`/cards/${payload.id}/`,payload
            ).then(commit('addToUnmem',payload))
            .catch(err=> console.log(err))
        },
        async favorite({commit}, payload){
            payload.favorite = !payload.favorite
            await api.put(`/cards/${payload.id}/`,payload
            ).then(commit('favoritee',payload))
            .catch(err=> console.log(err))
        },
        async updateSingleCard({commit},payload){
            payload.old.vocab = payload.new.vocabb
            payload.old.pronuns = payload.new.pronuns
            payload.old.translation = payload.new.translation
            payload.old.description = payload.new.description

            console.log('helloooo', payload.old);
            console.log('byeee',payload.new);
            await api.put(`/cards/${payload.old.id}/`,payload.old
            ).then(commit('update'))
            .catch(err=> console.log(err))
        }
    },
    modules:{}
})