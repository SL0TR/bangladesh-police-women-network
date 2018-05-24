
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/index'), name: 'home-page', meta: { title: 'BPWN Home' } },
      { path: '/at-a-glance', component: () => import('pages/at-a-glance'), name: 'at-a-glance', meta: { title: 'At A Glance' } },
      { path: '/int-affliation', component: () => import('pages/int-affliation'), name: 'int-affliation', meta: { title: 'Int. Affliation' } },
      { path: '/un-mission', component: () => import('pages/un-mission'), name: 'un-mission', meta: { title: 'UN Misison' } },
      { path: '/testimonials', component: () => import('pages/testimonials'), name: 'testimonials', meta: { title: 'Testimonials' } },
      { path: '/gallery', component: () => import('pages/gallery'), name: 'gallery', meta: { title: 'Gallery' } },
      { path: '/contact', component: () => import('pages/contact'), name: 'HomePage', meta: { title: 'contact' } }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
