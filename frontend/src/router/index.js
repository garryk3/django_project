import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/pages/home/Home'
import Project from '@/components/pages/project/Project'
import ProjectContainer from '@/components/pages/project-container/ProjectContainer'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/projects/:id',
      name: 'Project',
      component: Project
    },
    {
      path: '/projects',
      name: 'ProjectContainer',
      component: ProjectContainer
    }
  ]
})
