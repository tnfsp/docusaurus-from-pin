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
    path: '/tags/distill',
    component: ComponentCreator('/tags/distill', '69a'),
    exact: true
  },
  {
    path: '/tags/express',
    component: ComponentCreator('/tags/express', 'cdb'),
    exact: true
  },
  {
    path: '/tags/organize',
    component: ComponentCreator('/tags/organize', '569'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '3aa'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '58d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ai-vocabulary-builder',
        component: ComponentCreator('/ai-vocabulary-builder', '3bc'),
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
        path: '/devonthink',
        component: ComponentCreator('/devonthink', 'c49'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus',
        component: ComponentCreator('/docusaurus', '934'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/heptabase',
        component: ComponentCreator('/heptabase', '1a2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/life',
        component: ComponentCreator('/life', 'cc2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/logseq',
        component: ComponentCreator('/logseq', 'd59'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/logseq',
        component: ComponentCreator('/logseq', 'd58'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/medicine',
        component: ComponentCreator('/medicine', '3af'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/medicine/cardiology',
        component: ComponentCreator('/medicine/cardiology', 'da3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/medicine/intensive-care',
        component: ComponentCreator('/medicine/intensive-care', '90c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tool',
        component: ComponentCreator('/tool', '52c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/toolbox/featured',
        component: ComponentCreator('/toolbox/featured', 'ce6'),
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
