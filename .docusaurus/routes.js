import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '10d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'b9e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'f0f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '819'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '9f6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'e34'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '053'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'a10'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'dec'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/tutorial---extras',
        component: ComponentCreator('/category/tutorial---extras', '3d7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/toolbox',
        component: ComponentCreator('/toolbox', 'cca'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/toolbox/featured',
        component: ComponentCreator('/toolbox/featured', '901'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/toolbox/featured/heptabase',
        component: ComponentCreator('/toolbox/featured/heptabase', '67b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/tutorial-extras/manage-docs-versions', '975'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial-extras/translate-your-site',
        component: ComponentCreator('/tutorial-extras/translate-your-site', 'ac7'),
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
