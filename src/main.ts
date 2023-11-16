import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// @ts-ignore
import App from './App.vue'
import router from './router'

// @ts-ignore
import Header from './components/Header.vue'

const app = createApp(App)

app.component('Header', Header)

app.use(createPinia())
app.use(router)

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA5Fv3qdoB_Kl-Rf6DxtoZjs4yRX3Yt8Jw',
  authDomain: 'population-graph-23d87.firebaseapp.com',
  projectId: 'population-graph-23d87',
  storageBucket: 'population-graph-23d87.appspot.com',
  messagingSenderId: '255537956976',
  appId: '1:255537956976:web:e09ff0ca92f24cc65e8cb5',
  measurementId: 'G-KJZWKYD3ZC'
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
const analytics = getAnalytics(firebaseApp)

app.mount('#app')
