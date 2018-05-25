
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/index'), name: 'home-page', meta: { title: 'BPWN Home' } },
      { path: '/at-a-glance/about-bpwn', component: () => import('pages/at-a-glance/about-bpwn'), name: 'about-bpwn', meta: { title: 'About BPWN' } },
      { path: '/at-a-glance/achievements', component: () => import('pages/at-a-glance/achievements'), name: 'achievements', meta: { title: 'Achievements' } },
      { path: '/at-a-glance/annual-plan', component: () => import('pages/at-a-glance/annual-plan'), name: 'annual-plan', meta: { title: 'Annual Plan' } },
      { path: '/at-a-glance/biography-of-sr-officers', component: () => import('pages/at-a-glance/biography-of-sr-officers'), name: 'biography-of-sr-officers', meta: { title: 'Biography Of Sr Officers' } },
      { path: '/at-a-glance/bpm-and-ppm', component: () => import('pages/at-a-glance/bpm-and-ppm'), name: 'bpm-and-ppm', meta: { title: 'Bpm and Ppm' } },
      { path: '/at-a-glance/executive-commitee', component: () => import('pages/at-a-glance/executive-commitee'), name: 'executive-commitee', meta: { title: 'Executive Commitee' } },
      { path: '/at-a-glance/objectives', component: () => import('pages/at-a-glance/objectives'), name: 'objectives', meta: { title: 'Objectives' } },
      { path: '/at-a-glance/vision-and-formation', component: () => import('pages/at-a-glance/vision-and-formation'), name: 'vision-and-formation', meta: { title: 'Vision and Formation' } },
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
