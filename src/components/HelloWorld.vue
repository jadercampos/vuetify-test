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

      <v-menu
        :value="configMenu"
        :offset-y="true"
        transition="slide-y-transition"
        :close-on-content-click="false"
        :close-on-click="false"
        shaped
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-cog-outline</v-icon>
          </v-btn>
        </template>

        <v-card>
          <v-list>
            <v-list-item>
              <v-list-item-avatar>
                <img
                  src="https://media-exp1.licdn.com/dms/image/C4D03AQGaaDa7lEEgiw/profile-displayphoto-shrink_800_800/0/1624426580958?e=1661385600&v=beta&t=cGEjJQVcsi-VxFZXj-rNjXaPNeJsrh4H3DxpqTRwlBc"
                  alt="John"
                />
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>Jader Campos</v-list-item-title>
                <v-list-item-subtitle
                  >Encantador de códigos</v-list-item-subtitle
                >
              </v-list-item-content>

              <v-list-item-action>
                <v-btn icon @click="toggleHappyFeelings">
                  <v-icon v-if="this.happyFeelings"
                    >mdi-emoticon-outline</v-icon
                  >
                  <v-icon v-else>mdi-emoticon-frown-outline</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list>
            <v-list-item>
              <v-list-item-action>
                <v-switch
                  inset
                  v-model="this.darkTheme"
                  @click="toggleDarkMode"
                ></v-switch>
              </v-list-item-action>
              <v-list-item-title v-if="this.darkTheme"
                >Dark Mode On</v-list-item-title
              >
              <v-list-item-title v-else>Dark Mode Off</v-list-item-title>
              <v-list-item-icon>
                <v-icon v-if="this.darkTheme">mdi-brightness-3</v-icon>
                <v-icon v-else>mdi-white-balance-sunny</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn class="primary" text @click="closeConfigMenu">
              Cancel
            </v-btn>
            <v-btn class="secondary" text> Save </v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
    </v-app-bar>

    <v-main>
      <h1>{{ msg }}</h1>
    </v-main>
  </v-app>
</template>
<script lang="ts">
import vuetify from "@/plugins/vuetify";
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  happyFeelings: boolean = false;
  darkTheme: boolean = false;
  configMenu: boolean = false;
  created(): void {
    this.getHappySettings();
  }
  data() {
    return {
      drawer: null,
    };
  }

  getHappySettings(): void {
    let _happyFeelings = localStorage.getItem("happy_feelings");
    let _darkTheme = localStorage.getItem("dark_theme");
    if (_happyFeelings) {
      if (_happyFeelings === "true") {
        this.happyFeelings = true;
      } else {
        this.happyFeelings = false;
      }
    }
    if (_darkTheme) {
      if (_darkTheme === "true") {
        vuetify.framework.theme.dark = true;
      } else {
        vuetify.framework.theme.dark = false;
      }
      this.darkTheme = vuetify.framework.theme.dark;
    }
  }
  toggleHappyFeelings(): void {
    this.happyFeelings = !this.happyFeelings;
    localStorage.setItem("happy_feelings", this.happyFeelings.toString());
  }
  toggleDarkMode(): void {
    vuetify.framework.theme.dark = !vuetify.framework.theme.dark;
    this.darkTheme = vuetify.framework.theme.dark;
    localStorage.setItem("dark_theme", vuetify.framework.theme.dark.toString());
  }
  closeConfigMenu(): void {
    this.configMenu = false;
  }
}
</script>

<style scoped>
div {
  color: var(--v-secondary-base) !important;
}
i.v-icon.v-icon {
  color: var(--v-secondary-base) !important;
}
</style>
