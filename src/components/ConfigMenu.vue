<template>
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
          <v-list-item-icon>
            <v-badge color="warning" right overlap>
              <template v-slot:badge>
                <span>69</span>
              </template>
              <v-avatar size="36">
                <v-img :src="src"></v-img>
              </v-avatar>
            </v-badge>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Jader Campos</v-list-item-title>
            <v-list-item-subtitle>Encantador de códigos</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn icon @click="toggleHappyFeelings">
              <v-badge color="success" right overlap>
              <template v-slot:badge>
                <span>69</span>
              </template>
              <v-icon v-if="this.happyFeelings">fa-face-grin-stars</v-icon>
              <v-icon v-else>fa-heart-crack</v-icon>
            </v-badge>

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
        <v-btn class="error" text @click="closeConfigMenu"> Cancel </v-btn>
        <v-btn class="success" text> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>
<script lang="ts">
import vuetify from "@/plugins/vuetify";
import { Component, Vue } from "vue-property-decorator";
@Component
export default class ConfigMenu extends Vue {
  happyFeelings: boolean = false;
  darkTheme: boolean = false;
  configMenu: boolean = false;
  created(): void {
    this.getHappySettings();
  }
    data() {
    return {
      src: "https://media-exp1.licdn.com/dms/image/C4D03AQGaaDa7lEEgiw/profile-displayphoto-shrink_800_800/0/1624426580958?e=1661385600&v=beta&t=cGEjJQVcsi-VxFZXj-rNjXaPNeJsrh4H3DxpqTRwlBc",
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
      this.$emit("feelingHappy", this.happyFeelings);
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
    this.$emit("feelingHappy", this.happyFeelings);
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
