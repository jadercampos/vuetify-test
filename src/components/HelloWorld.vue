<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" color="background" app>
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img
              src="https://media-exp1.licdn.com/dms/image/C4D03AQGaaDa7lEEgiw/profile-displayphoto-shrink_800_800/0/1624426580958?e=1661385600&v=beta&t=cGEjJQVcsi-VxFZXj-rNjXaPNeJsrh4H3DxpqTRwlBc"
            ></v-img>
          </v-list-item-avatar>
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
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-folder</v-icon>
          </v-list-item-icon>
          <v-list-item-title>My Files</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-account-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Shared with me</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Starred</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="background" app>
      <v-app-bar-nav-icon icon @click="drawer = !drawer">
        <v-icon v-if="drawer">mdi-menu-open</v-icon>
        <v-icon v-else>mdi-menu</v-icon>
      </v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <meu-menu @feelingHappy="changeFeelings" />
    </v-app-bar>

    <v-main> </v-main>
  </v-app>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ConfigMenu from "./ConfigMenu.vue";

@Component({
  components: {
    meuMenu: ConfigMenu,
  },
})
export default class HelloWorld extends Vue {
  happyFeelings: boolean = false;
  data() {
    return {
      drawer: null,
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
