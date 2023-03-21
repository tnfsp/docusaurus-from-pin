import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/tags',
    component: ComponentCreator('/tags', '966'),
    exact: true
  },
  {
    path: '/tags/archive',
    component: ComponentCreator('/tags/archive', '207'),
    exact: true
  },
  {
    path: '/tags/capture',
    component: ComponentCreator('/tags/capture', '1e9'),
    exact: true
  },
  {
    path: '/tags/organize',
    component: ComponentCreator('/tags/organize', '569'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '736'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '58d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/changelog',
        component: ComponentCreator('/changelog', 'ef8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/devonthink',
        component: ComponentCreator('/devonthink', '28a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/life',
        component: ComponentCreator('/life', 'cc2'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
