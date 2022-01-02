export default [
  {
    component: 'CNavItem',
    name: 'Inicio',
    to: '/dashboard',
    icon: 'cil-cursor',
    badge: {
      color: 'primary',
    },
  },
  {
    component: 'CNavTitle',
    name: 'ir a:',
  },
  {
    component: 'CNavItem',
    name: 'Experiencia laboral',
    to: '/goto/experience',
    icon: 'cil-notes',
  },
  {
    component: 'CNavItem',
    name: 'Formación / Sobre mí',
    to: '/goto/aboutme',
    icon: 'cil-pencil',
  },
  {
    component: 'CNavItem',
    name: 'Currículum',
    to: '/goto/curriculum',
    icon: 'cil-clipboard',
  },

  // {
  //   component: 'CNavItem',
  //   name: 'Download CoreUI',
  //   href: 'http://coreui.io/vue/',
  //   icon: { name: 'cil-cloud-download', class: 'text-white' },
  //   _class: 'bg-success text-white',
  //   target: '_blank'
  // },
  // {
  //   component: 'CNavItem',
  //   name: 'Try CoreUI PRO',
  //   href: 'http://coreui.io/pro/vue/',
  //   icon: { name: 'cil-layers', class: 'text-white' },
  //   _class: 'bg-danger text-white',
  //   target: '_blank'
  // }
]
