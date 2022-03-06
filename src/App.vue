
<template>
  <v-app id="app">
    <v-app-bar id="bar">
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
      <router-link class="router-link" to="/">
       <v-btn icon>
        <v-icon
          color="white"
          v-bind="attrs"
          v-on="on"
        >
          mdi-border-all
        </v-icon>
       </v-btn>
      </router-link>
      </template>
      <span>All cards</span>
    </v-tooltip>
     
      <v-spacer></v-spacer>

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
      <router-link class="router-link" to="/unmemorized">
        
       <v-btn icon>
        <v-icon
        color="white"
            v-bind="attrs"
            v-on="on"
          >
            mdi-emoticon-sad-outline
          </v-icon>
       </v-btn>
      </router-link>
      </template>
      
      <span>Unmemorized</span>
    </v-tooltip>
      
      <v-spacer></v-spacer>
      
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
      <router-link class="router-link" to="/memorized">

        <v-btn 
        icon>
          <v-icon
          color="white"
            v-bind="attrs"
            v-on="on"
          >
            mdi-emoticon-happy-outline
          </v-icon>
        </v-btn>
      </router-link>
      </template>
      <span>Memorized</span>
    </v-tooltip>
   
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      
      <SearchField class="mt-5"/>
       <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      
    </v-app-bar>
    <InstallPWA/>
    <v-row class="container-div">
      <v-col  xs="2" sm="2" md="2" class="sidebar"  >     
         <SideBar class="side"/>
      </v-col>
      <!-- <v-col cols="10" xs="3" sm="2"> <v-spacer ></v-spacer></v-col> -->
      <v-col xs="10" sm="9" md="9" class="c">
          <router-view/>
      </v-col>
    </v-row>
  
  </v-app>
</template>
<script> 
 import SideBar from '@/components/SideBar.vue'
import SearchField from './components/SearchField.vue'
import InstallPWA from './components/InstallPWA.vue'
export default {
   data:function(){
    return{
      
    }
  },
  components: {
    // HelloWorld
    SideBar,
    SearchField,
    InstallPWA
    // NewCard,
    // AllCards    
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.router-link{
  text-decoration: none;
}
#bar{
  background-color: #610A26;
  position: fixed;
  z-index: 1;
  height: 60px;
}
.container-div{
  // margin: auto;
  height: 100%;
  width: 100%;
  // top: 50%;
  // position: fixed;
}
.c{
  // width:75% ;
  height: 100%;
  // float: left;
  // padding-top: 15%;
  // padding-bottom: 15% ;
   @media only screen and (min-width: 400px) {
    padding-top: 20%;
    padding-bottom: 15%;
    padding-right: 20%;
  }
  @media only screen and (min-width: 600px) {
   padding-top: 15%;
    padding-bottom: 15%;
    padding-right: 0%;
  };
  @media only screen and (min-width: 800px) {
 padding-top: 10%;
    padding-bottom: 15%;
    padding-right: 0%;
      }
  }
.sidebar{
//   width: 25%;
  // float: left;
  // position: absolute;
  height: 100%;
}
.side{
  position: fixed;
  height: 100%;
  
  @media only screen and (min-width: 400px) {
    left: -10px;
    width: 35%;
  }
  @media only screen and (min-width: 600px) {
     left: -10px;
    width: 25%;
  };
  @media only screen and (min-width: 800px) {
    width: 200px;
  }
}
</style>
