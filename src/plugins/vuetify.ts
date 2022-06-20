import Vue from 'vue';
import Vuetify from 'vuetify';
import { colors } from 'vuetify/lib';
import { Framework } from 'vuetify'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: { customProperties: true },
    themes: {
      light: {
        primary: colors.pink.lighten2,
        secondary: colors.pink.darken1,
        accent: colors.shades.black,
        background: colors.grey.lighten5, 
        error: colors.red.lighten3,
        warning: colors.yellow.lighten3,
        info: colors.blue.lighten3,
        success:  colors.green.lighten3
      },
      dark: {
        primary: colors.pink.darken4,
        secondary: colors.pink.lighten3,
        background: colors.grey.darken4,
        accent: colors.shades.black,
        error: colors.red.lighten3,
        warning: colors.yellow.lighten3,
        info: colors.blue.lighten3,
        success:  colors.green.lighten3
      },
    },
  },
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
});

declare module 'vue/types/vue' {
  interface Vue {
    $vuetify: Framework
  }
}