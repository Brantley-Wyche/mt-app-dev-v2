import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LocationPicker from '@/components/LocationPicker'
import SearchingFor from '@/components/SearchingFor'
import Results from '@/components/Results'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
      },
      {
        path: "/location",
        name: "Location",
        component: LocationPicker,
      },
      {
        path: '/search/',
        name: 'Places',
        component: SearchingFor,
        props: true
      },
      {
        path: "/results/",
        name: "Results",
        component: Results,
        props: true,
      }
    ]
  })