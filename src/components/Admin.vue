<template>
  <v-app id="admin">
    <v-app-bar color="backgroundSecondary" app>
      <v-app-bar-nav-icon icon @click="drawer = !drawer">
        <v-icon v-if="drawer">mdi-menu-open</v-icon>
        <v-icon v-else>mdi-menu</v-icon>
      </v-app-bar-nav-icon>

      <v-toolbar-title>{{ msg }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-responsive max-width="400">
        <v-text-field
          dense
          flat
          hide-details
          rounded
          solo-inverted
          clearable
          placeholder="Search"
        >
          <template v-slot:prepend>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-icon v-on="on"> mdi-help-circle-outline </v-icon>
              </template>
              <span  style="color:white">Dica do Dolinho!</span>
              
            </v-tooltip>
          </template>
          <template v-slot:append>
            <v-fade-transition leave-absolute>
              <v-progress-circular
                v-if="loading"
                size="24"
                color="info"
                indeterminate
              ></v-progress-circular>
              <img v-else width="24" height="24" src="../assets/1.png" alt="" />
            </v-fade-transition> </template
        ></v-text-field>
      </v-responsive>

    <v-btn
      class="mx-2"
      fab
      x-small
      color="background"
      elevation="5"
    >
      <v-icon>
        fa-solid fa-magnifying-glass
      </v-icon>
    </v-btn>

      <v-btn icon>
        <v-badge color="error" right overlap>
          <template v-slot:badge>
            <span>24</span>
          </template>
          <v-avatar size="36">
            <v-icon>fa-gamepad</v-icon>
          </v-avatar>
        </v-badge>
      </v-btn>

      <meu-menu @feelingHappy="changeFeelings" />
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" color="background" app>
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-icon>
            <v-badge color="info" right overlap>
              <template v-slot:badge>
                <span>69</span>
              </template>
              <v-avatar size="36">
                <v-img :src="src"></v-img>
              </v-avatar>
            </v-badge>
          </v-list-item-icon>
          <v-list-item-title v-if="this.happyFeelings"
            >Estou Feliz!</v-list-item-title
          >
          <v-list-item-title v-else>Estou Triste ...</v-list-item-title>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              Jader Campos
            </v-list-item-title>
            <v-list-item-subtitle>jadercampos@gmail.com</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item link to="/">
          <v-list-item-icon>
            <v-icon>fa-house-medical</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/gatos">
          <v-list-item-icon>
            <v-icon>fa-cat</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Gatos</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/cachorros">
          <v-list-item-icon>
            <v-icon>fa-dog</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Cachorros</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-breadcrumbs :items="items">
        <template v-slot:divider>
          <v-icon>fa-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ConfigMenu from "./ConfigMenu.vue";

@Component({
  components: {
    meuMenu: ConfigMenu,
  },
})
export default class Admin extends Vue {
  @Prop() private msg!: string;
  happyFeelings: boolean = false;
  created() {
    document.title = "App Lacostado";
  }
  data() {
    return {
      drawer: null,
      src: "https://media-exp1.licdn.com/dms/image/C4D03AQGaaDa7lEEgiw/profile-displayphoto-shrink_800_800/0/1624426580958?e=1661385600&v=beta&t=cGEjJQVcsi-VxFZXj-rNjXaPNeJsrh4H3DxpqTRwlBc",
      items: [
        {
          text: "Dashboard",
          disabled: false,
          href: "/",
        },
      ],
    };
  }
  changeFeelings(happy: boolean): void {
    this.happyFeelings = happy;
  }
}
</script>

<style lang="scss">
div {
  color: var(--v-secondary-base) !important;
}
i.v-icon.v-icon {
  color: var(--v-secondary-base) !important;
}
</style>
