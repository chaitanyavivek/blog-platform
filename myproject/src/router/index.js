import Vue from 'vue'
import Router from 'vue-router'
import PublishPage from '@/components/PublishPage'
import EditPosts from '@/components/EditPosts'
import ViewPosts from '@/components/ViewPosts'
import NavBar from '@/components/NavBar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PublishPage',
      component: PublishPage
    },
    {
      path: '/ViewPosts',
      name: 'ViewPosts',
      component: ViewPosts
    },
    {
      path: '/NavBar',
      name: 'NavBar',
      component: NavBar
    },
    {
      path: '/EditPosts/:id',
      params: true,
      name: 'EditPosts',
      component: EditPosts
    }
  ]
})
