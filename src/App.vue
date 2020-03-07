<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item v-for="item in items" :key="item.text" link>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-subheader class="mt-4 grey--text text--darken-1"
          >PROGRAMADOR</v-subheader
        >
        <v-list>
          <v-list-item v-for="item in items2" :key="item.text" link>
            <v-list-item-avatar>
              <img src="../public/img/postulante.gif" alt="" />
            </v-list-item-avatar>
            <v-list-item-title v-text="item.text" />
            <v-list-item-action>
              <v-icon color="grey darken-1">mdi-card-account-mail</v-icon>
            </v-list-item-action>
          </v-list-item>
        </v-list>
        <v-subheader class="overline">Contacto</v-subheader>
        <v-list-item class="mt-4" link>
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-phone</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1"
            >+569 4810 6304</v-list-item-title
          >
        </v-list-item>
        <!-- <v-list-item link>
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-email</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1"
            >hectorluisgonzalezlarreal@gmail.com</v-list-item-title
          >
        </v-list-item> -->
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left color="blue" dense>
      <v-app-bar-nav-icon class="white--text" @click.stop="drawer = !drawer" />

      <v-toolbar-title class="mr-12 align-center">
        <span class="title white--text">VIIA TI SPA - TEST</span>
      </v-toolbar-title>
      <v-spacer />
    </v-app-bar>

    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  components: {},

  data: () => ({
    drawer: null,
    items: [{ icon: "mdi-chart-pie", text: "Datos Generales" }],
    items2: [{ picture: 28, text: "Hector Gonzalez" }]
  })
});
</script>
