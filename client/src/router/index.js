import Vue from 'vue'
import Router from 'vue-router'

//Ovenes
import OvenIndex from '@/components/Ovens/Index'
import OvenCreate from '@/components/Ovens/CreateOven'
import OvenEdit from '@/components/Ovens/EditOven'
import OvenShow from '@/components/Ovens/ShowOven'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/ovens',
      name: 'ovens',
      component: OvenIndex
    },
    {
      path: '/oven/create',
      name: 'oven-create',
      component: OvenCreate
    },
    {
      path: '/oven/edit/:ovenId',
      name: 'oven-edit',
      component: OvenEdit
    },
    {
      path: '/oven/:ovenId',
      name: 'oven',
      component: OvenShow
    }
  ]
})
