const accountRoute = [
  {
    path: '/account',
    name: 'account',
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/pc/About.vue')
  }
]
export default accountRoute
