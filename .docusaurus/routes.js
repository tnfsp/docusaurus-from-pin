import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/search',
    component: ComponentCreator('/search', '7a9'),
    exact: true
  },
  {
    path: '/tags',
    component: ComponentCreator('/tags', '966'),
    exact: true
  },
  {
    path: '/tags/aortic-dissection',
    component: ComponentCreator('/tags/aortic-dissection', '4f1'),
    exact: true
  },
  {
    path: '/tags/aortic-regurgitation',
    component: ComponentCreator('/tags/aortic-regurgitation', '01e'),
    exact: true
  },
  {
    path: '/tags/aortic-stenosis',
    component: ComponentCreator('/tags/aortic-stenosis', '9a7'),
    exact: true
  },
  {
    path: '/tags/archive',
    component: ComponentCreator('/tags/archive', '207'),
    exact: true
  },
  {
    path: '/tags/atrial-fibrillation',
    component: ComponentCreator('/tags/atrial-fibrillation', '87c'),
    exact: true
  },
  {
    path: '/tags/basics',
    component: ComponentCreator('/tags/basics', '44a'),
    exact: true
  },
  {
    path: '/tags/books',
    component: ComponentCreator('/tags/books', 'bbf'),
    exact: true
  },
  {
    path: '/tags/cad',
    component: ComponentCreator('/tags/cad', 'cb8'),
    exact: true
  },
  {
    path: '/tags/capture',
    component: ComponentCreator('/tags/capture', '1e9'),
    exact: true
  },
  {
    path: '/tags/cardiac-echo',
    component: ComponentCreator('/tags/cardiac-echo', 'e1d'),
    exact: true
  },
  {
    path: '/tags/drug',
    component: ComponentCreator('/tags/drug', 'a70'),
    exact: true
  },
  {
    path: '/tags/heart-failure',
    component: ComponentCreator('/tags/heart-failure', 'e03'),
    exact: true
  },
  {
    path: '/tags/icu',
    component: ComponentCreator('/tags/icu', 'dc3'),
    exact: true
  },
  {
    path: '/tags/infective-endocarditis',
    component: ComponentCreator('/tags/infective-endocarditis', '45d'),
    exact: true
  },
  {
    path: '/tags/inotropes',
    component: ComponentCreator('/tags/inotropes', 'b43'),
    exact: true
  },
  {
    path: '/tags/links',
    component: ComponentCreator('/tags/links', 'a1e'),
    exact: true
  },
  {
    path: '/tags/medicine',
    component: ComponentCreator('/tags/medicine', 'fb0'),
    exact: true
  },
  {
    path: '/tags/mitral-regurgitation',
    component: ComponentCreator('/tags/mitral-regurgitation', '8b5'),
    exact: true
  },
  {
    path: '/tags/mitral-stenosis',
    component: ComponentCreator('/tags/mitral-stenosis', '22b'),
    exact: true
  },
  {
    path: '/tags/movies',
    component: ComponentCreator('/tags/movies', '25c'),
    exact: true
  },
  {
    path: '/tags/nutrition',
    component: ComponentCreator('/tags/nutrition', '6ac'),
    exact: true
  },
  {
    path: '/tags/operation',
    component: ComponentCreator('/tags/operation', '82f'),
    exact: true
  },
  {
    path: '/tags/organize',
    component: ComponentCreator('/tags/organize', '569'),
    exact: true
  },
  {
    path: '/tags/port-a',
    component: ComponentCreator('/tags/port-a', 'dff'),
    exact: true
  },
  {
    path: '/tags/questions',
    component: ComponentCreator('/tags/questions', '717'),
    exact: true
  },
  {
    path: '/tags/quotes',
    component: ComponentCreator('/tags/quotes', 'c74'),
    exact: true
  },
  {
    path: '/tags/snapshot',
    component: ComponentCreator('/tags/snapshot', 'd07'),
    exact: true
  },
  {
    path: '/tags/vasopressors',
    component: ComponentCreator('/tags/vasopressors', '7f4'),
    exact: true
  },
  {
    path: '/tags/vsr',
    component: ComponentCreator('/tags/vsr', '68a'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '11b'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '58d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Blog',
        component: ComponentCreator('/Blog', '4aa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/books',
        component: ComponentCreator('/books', '41b'),
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
        path: '/Collection',
        component: ComponentCreator('/Collection', 'e91'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/comments',
        component: ComponentCreator('/comments', '575'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/devonthink',
        component: ComponentCreator('/devonthink', 'ca7'),
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
        path: '/life/snapshot/2023-snapshot',
        component: ComponentCreator('/life/snapshot/2023-snapshot', 'a17'),
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
        path: '/medicine/A',
        component: ComponentCreator('/medicine/A', 'a7e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/medicine/AD',
        component: ComponentCreator('/medicine/AD', 'd48'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/medicine/AR',
        component: ComponentCreator('/medicine/AR', '56f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/medicine/AR',
        component: ComponentCreator('/medicine/AR', '2d0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/medicine/AR',
        component: ComponentCreator('/medicine/AR', '51d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/medicine/AS',
        component: ComponentCreator('/medicine/AS', 'f3b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/medicine/CAD',
        component: ComponentCreator('/medicine/CAD', 'cc4'),
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
        path: '/medicine/echocardiogram/basics',
        component: ComponentCreator('/medicine/echocardiogram/basics', 'ecd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/medicine/inotropes',
        component: ComponentCreator('/medicine/inotropes', '2a7'),
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
        path: '/medicine/MR',
        component: ComponentCreator('/medicine/MR', 'bf1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/medicine/MS',
        component: ComponentCreator('/medicine/MS', '40a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/medicine/nutrition',
        component: ComponentCreator('/medicine/nutrition', 'c37'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/medicine/operation',
        component: ComponentCreator('/medicine/operation', '6db'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/medicine/operation/operation/port-A',
        component: ComponentCreator('/medicine/operation/operation/port-A', 'cf3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/medicine/VSR',
        component: ComponentCreator('/medicine/VSR', 'aa2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/movies',
        component: ComponentCreator('/movies', 'c96'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/questions',
        component: ComponentCreator('/questions', 'f28'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/quotes',
        component: ComponentCreator('/quotes', 'b93'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Snapshot',
        component: ComponentCreator('/Snapshot', '3b0'),
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
        path: '/tool/tool/common-drug',
        component: ComponentCreator('/tool/tool/common-drug', 'f81'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tool/tool/common-links',
        component: ComponentCreator('/tool/tool/common-links', 'c22'),
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
