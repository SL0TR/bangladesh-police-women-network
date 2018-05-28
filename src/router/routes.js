
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
      { path: '/int-affiliation/association-with-iawp', component: () => import('pages/int-affiliation/association-with-iawp'), name: 'association-with-iawp', meta: { title: 'association-with-iawp' } },
      { path: '/int-affiliation/first-asia-conference', component: () => import('pages/int-affiliation/first-asia-conference'), name: 'first-asia-conference', meta: { title: 'first-asia-conference' } },
      { path: '/int-affiliation/networking-with-other-org', component: () => import('pages/int-affiliation/networking-with-other-org'), name: 'networking-with-other-org', meta: { title: 'networking-with-other-org' } },
      { path: '/int-affiliation/higher-study-and-fellowship', component: () => import('pages/int-affiliation/higher-study-and-fellowship'), name: 'higher-study-and-fellowship', meta: { title: 'higher-study-and-fellowship' } },
      { path: '/int-affiliation/achievements', component: () => import('pages/int-affiliation/achievements'), name: 'achievements', meta: { title: 'achievements' } },
      { path: '/un-mission', component: () => import('pages/un-mission'), name: 'un-mission', meta: { title: 'UN Misison' } },
      { path: '/testimonials/speech-of-mily-biswas', component: () => import('pages/testimonials/speech-of-mily-biswas'), name: 'speech-of-mily-biswas', meta: { title: 'speech-of-mily-biswas' } },
      { path: '/testimonials/second-national-conference', component: () => import('pages/testimonials/second-national-conference'), name: 'second-national-conference', meta: { title: 'second-national-conference' } },
      { path: '/testimonials/blog-corner', component: () => import('pages/testimonials/blog-corner'), name: 'blog-corner', meta: { title: 'blog-corner' } },
      { path: '/testimonials/news-coverage', component: () => import('pages/testimonials/news-coverage'), name: 'news-coverage', meta: { title: 'news-coverage' } },
      { path: '/testimonials/national-event', component: () => import('pages/testimonials/national-event'), name: 'national-event', meta: { title: 'national-event' } },
      { path: '/gallery', component: () => import('pages/gallery'), name: 'gallery', meta: { title: 'Gallery' } },
      { path: '/contact', component: () => import('pages/contact'), name: 'HomePage', meta: { title: 'contact' } }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
