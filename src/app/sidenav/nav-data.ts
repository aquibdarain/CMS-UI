import { INavbarData } from "./helper";

export const navbarData =  [
  {
    routeLink: 'dashboard',
    icon: 'fal fa-home',
    label: 'Dashboard'
  },
  {
    routeLink: 'blogs',
    icon: 'fa fa-address-book',
    label: 'Contact',
    items:[
      {
        routerLink: 'blogs/list',
        label: 'List Blogs'
      },
      {
        routerLink: 'blogs/create',
        label: 'Create Blogs'
      },
    ]
  },
  {
    routeLink: 'services',
    icon: 'fal fa-chart-bar',
    label: 'Add Contact'
  },
  // {
  //   routeLink: 'exams',
  //   icon: 'fal fa-file',
  //   label: 'Edit Contact'
  // },
  // {
  //   routeLink: 'quiz',
  //   icon: 'fal fa-tags',
  //   label: 'Quiz'
  // },
  // {
  //   routeLink: 'setting',
  //   icon: 'fal fa-cog',
  //   label: 'Delete Contact'
  // },
];
