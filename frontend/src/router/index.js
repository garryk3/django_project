import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/pages/home/Home'
import Project from '@/components/pages/project/Project'
import ProjectContainer from '@/components/pages/project-container/ProjectContainer'
import GalleryContainer from '@/components/pages/gallery-container/GalleryContainer'
import Gallery from '@/components/pages/gallery/Gallery'
import PageNotFound from '@/components/pages/page-not-found/PageNotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
        // , offset: { x: 0, y: 10 }
      }
    }
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
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
    },
    {
      path: '/gallery',
      name: 'GalleryContainer',
      component: GalleryContainer
    },
    {
      path: '/gallery/:id',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '*',
      name: 'PageNotFound',
      component: PageNotFound
    }
  ]
})
