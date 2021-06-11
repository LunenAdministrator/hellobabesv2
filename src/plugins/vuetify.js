import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({

    theme: {
        themes: {
            light: {
                primary: '#ED64A6',
                primary100: '#FDEDF5',
                primary200: '#F8BFDA',
                primary300: '#F292C0',
                primary400: '#E8368C',
                primary500: '#D31872',
                primary600: '#A51359',
                primary700: '#A13368',
                secondary: '#4CD8ED',
                secondary100: '#D7F6FB',
                secondary200: '#A9ECF6',
                secondary300: '#7AE2F2',
                secondary400: '#1ECEE8',
                secondary500: '#13A9C0',
                secondary600: '#0F8091',
                secondary700: '#3B93A1',
                acent: '#EDE17B',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107',

            }
        }
    }
});
