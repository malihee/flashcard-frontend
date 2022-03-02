
<template>
  <div class="home">
    <div style="height:100%">
      <SideBar id="sidebar" />
      <v-container class="c">
        <!-- <NewCard/> -->
        <AllCards :cards=cards />
      </v-container>
    </div>
 </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
 import SideBar from '@/components/SideBar.vue'
//  import NewCard from '@/components/NewCard.vue'
 import AllCards from '@/components/AllCards.vue'

export default {
  name: 'Home',
  data:function(){
    return{
      cards:[{vocab:'water', pronuns:'/vater/',
       discription:'for drink', transl:'آب'},
       {vocab:'ice', pronuns:'/Aise/',
       discription:'dridge water', transl:'یخ'},
       {vocab:'umbrella', pronuns:'/amberella/',
       discription:'protecting from being wet in rain', transl:'چتر'},
       {vocab:'crafty', pronuns:'/krafty/',
       discription:'defrauding someone', transl:'زیرکانه ، فریب کارانه'},
       {vocab:'linger', pronuns:'/linger/',
       discription:'stay on', transl:'باقی ماندن'},]
    }
  },
  components: {
    // HelloWorld
    SideBar,
    // NewCard,
    AllCards    
  }
}
</script>
<style lang="scss">
.c{
  // background-color: rgb(255, 251, 0);
  height: 100%;
  padding-top: 20%;
  top: 30%;
  // position: absolute;
  left: 5%;
  right: 5%;
  bottom:10%;
  padding-bottom: 50px;
  width: 80%;
  }
#sidebar{
  margin-left: -10 px;
  // width: 20%;
  float: left;
  height: 100%;
  position: fixed;
  // z-index: 1;
}
.home{
  height: 100%;
  width: 100%;
}
</style>