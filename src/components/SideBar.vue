<template>
  <div class=" ml-0 pt-15 container " >
    <!-- <v-card> -->
      <v-navigation-drawer
        permanent
        expand-on-hover
        id="nav"
      >
        <v-list dense>
          <v-list-item-group
        color="primary"
      >
          <v-list-item >
            <v-list-item-content>
               <v-list-item-title>
                total : {{$store.state.cards.length}}
                </v-list-item-title>
            </v-list-item-content>

                 </v-list-item>
                  <v-list-item >
            <v-list-item-content>
              <v-list-item-title>
                  memorized : {{$store.state.cards.filter(item=>item.memorized==true).length}}
                </v-list-item-title> 
                </v-list-item-content>
             </v-list-item>   
              <v-list-item >
            <v-list-item-content>
                 <v-list-item-title>
                  unmemorized : {{$store.state.cards.filter(item=>item.memorized==false).length}}
                </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          </v-list-item-group>
        </v-list>

        <v-divider></v-divider>

        <v-list
          nav
          dense
        >
        <router-link class="router-link router-link-active" to="/new_card">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-plus</v-icon>
            </v-list-item-icon>
            <v-list-item-title>New Word</v-list-item-title>
          </v-list-item>
        </router-link>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-trash-can-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Delete</v-list-item-title>
          </v-list-item>
      <router-link class="router-link" to="/favorites">
          <v-list-item link active-class="router-link-active">
            <v-list-item-icon>
              <v-icon>mdi-cards-heart-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Favorite</v-list-item-title>
          </v-list-item>
      </router-link>

          <v-list-item  link @click="$vuetify.theme.dark=!$vuetify.theme.dark">
            <v-list-item-icon>
              <v-icon>mdi-brightness-4</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Theme</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    <!-- </v-card> -->
  </div>
</template>

<script>
export default {
 
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/mixins.scss';
  .router-link{
    @include links;
     &-active{
      background-color: rgba(85, 85, 85, 0.425);
      border-radius: 100%;
    }
  }
.container {
    height: 100%;
}
// .v{
//     width: 100 px;
// }

#nav {
&.router-link-exact-active {
      color: #42b983;
    }
  a {
    text-decoration: none;
    font-weight: bold;
    color: #2c3e50;
    
  }
}
</style>