<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img
              src="https://media-exp1.licdn.com/dms/image/C4D03AQGaaDa7lEEgiw/profile-displayphoto-shrink_800_800/0/1624426580958?e=1661385600&v=beta&t=cGEjJQVcsi-VxFZXj-rNjXaPNeJsrh4H3DxpqTRwlBc"
            ></v-img>
          </v-list-item-avatar>
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

    <v-app-bar
      app
    >
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

      <v-menu left bottom transition="slide-y-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
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
                <v-btn :class="fav ? 'red--text' : ''" icon @click="fav = !fav">
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list>
            <v-list-item>
              <v-list-item-action>
                <v-switch @click="toggle_dark_mode"></v-switch>
              </v-list-item-action>
              <v-list-item-title>Dark Mode</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-action>
                <v-switch ></v-switch>
              </v-list-item-action>
              <v-list-item-title>Enable hints</v-list-item-title>
            </v-list-item>
          </v-list>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text @click="menu = false"> Cancel </v-btn>
            <v-btn color="primary" text @click="menu = false"> Save </v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
    </v-app-bar>

    <v-main>
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
      oi
      <br />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
  }),
  methods: {
    toggle_dark_mode: function () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    },
    mounted() {
      const theme = localStorage.getItem("dark_theme");
      if (theme) {
        if (theme === "true") {
          this.$vuetify.theme.dark = true;
        } else {
          this.$vuetify.theme.dark = false;
        }
      } else if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        this.$vuetify.theme.dark = true;
        localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
      }
    },
  },
};
</script>
