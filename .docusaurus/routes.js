import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '8b6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '6d3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '71f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'ddb'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'd75'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '603'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '2a1'),
    exact: true
  },
  {
    path: '/tags',
    component: ComponentCreator('/tags', '7fc'),
    exact: true
  },
  {
    path: '/tags/archive',
    component: ComponentCreator('/tags/archive', 'da3'),
    exact: true
  },
  {
    path: '/tags/capture',
    component: ComponentCreator('/tags/capture', 'f9a'),
    exact: true
  },
  {
    path: '/tags/distill',
    component: ComponentCreator('/tags/distill', '3b5'),
    exact: true
  },
  {
    path: '/tags/express',
    component: ComponentCreator('/tags/express', 'bf3'),
    exact: true
  },
  {
    path: '/tags/organize',
    component: ComponentCreator('/tags/organize', '60e'),
    exact: true
  },
  {
    path: '/tags/prompts',
    component: ComponentCreator('/tags/prompts', 'e9c'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '56f'),
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
        path: '/chatgpt/prompt/tutor',
        component: ComponentCreator('/chatgpt/prompt/tutor', '1e5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/chatgpt/prompt/tutor',
        component: ComponentCreator('/chatgpt/prompt/tutor', 'b98'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/devonthink',
        component: ComponentCreator('/devonthink', '471'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus',
        component: ComponentCreator('/docusaurus', '8ca'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/heptabase',
        component: ComponentCreator('/heptabase', '965'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/logseq',
        component: ComponentCreator('/logseq', '4eb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/toolbox',
        component: ComponentCreator('/toolbox', 'b71'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/toolbox/express',
        component: ComponentCreator('/toolbox/express', '17b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/toolbox/featured',
        component: ComponentCreator('/toolbox/featured', 'b97'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/unused-tools',
        component: ComponentCreator('/unused-tools', 'a0d'),
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
