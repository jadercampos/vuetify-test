import Vue from 'vue';
import Vuetify from 'vuetify';
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import { colors } from 'vuetify/lib';
import { Framework } from 'vuetify'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: { customProperties: true },
    themes: {
      light: {
        primary: colors.green.darken1,
        secondary: colors.green.darken4,
        accent: colors.shades.black,
        background: colors.green.lighten5, 
        backgroundSecondary: colors.green.lighten4, 
        // error: colors.red.lighten3,
        //warning: colors.yellow.lighten3,
        //info: colors.blue.lighten3,
        // success:  colors.green.lighten3
      },
      dark: {
        primary: colors.lime.lighten3,
        secondary: colors.lime.lighten1,
        //background: colors.grey.darken4,
        //accent: colors.shades.black,
        // error: colors.red.lighten3,
        warning: colors.yellow.lighten3,
        //info: colors.blue.lighten3,
        // success:  colors.green.lighten3
      },
    },
  },
  icons: {
    iconfont: 'fa', // default - only for display purposes
  },
});

declare module 'vue/types/vue' {
  interface Vue {
    $vuetify: Framework
  }
}