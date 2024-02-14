import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/OpenlabIT-SDR/__docusaurus/debug',
    component: ComponentCreator('/OpenlabIT-SDR/__docusaurus/debug', 'dbd'),
    exact: true
  },
  {
    path: '/OpenlabIT-SDR/__docusaurus/debug/config',
    component: ComponentCreator('/OpenlabIT-SDR/__docusaurus/debug/config', '458'),
    exact: true
  },
  {
    path: '/OpenlabIT-SDR/__docusaurus/debug/content',
    component: ComponentCreator('/OpenlabIT-SDR/__docusaurus/debug/content', '1fe'),
    exact: true
  },
  {
    path: '/OpenlabIT-SDR/__docusaurus/debug/globalData',
    component: ComponentCreator('/OpenlabIT-SDR/__docusaurus/debug/globalData', '026'),
    exact: true
  },
  {
    path: '/OpenlabIT-SDR/__docusaurus/debug/metadata',
    component: ComponentCreator('/OpenlabIT-SDR/__docusaurus/debug/metadata', 'bb1'),
    exact: true
  },
  {
    path: '/OpenlabIT-SDR/__docusaurus/debug/registry',
    component: ComponentCreator('/OpenlabIT-SDR/__docusaurus/debug/registry', '277'),
    exact: true
  },
  {
    path: '/OpenlabIT-SDR/__docusaurus/debug/routes',
    component: ComponentCreator('/OpenlabIT-SDR/__docusaurus/debug/routes', 'a74'),
    exact: true
  },
  {
    path: '/OpenlabIT-SDR/blog',
    component: ComponentCreator('/OpenlabIT-SDR/blog', '978'),
    exact: true
  },
  {
    path: '/OpenlabIT-SDR/blog/archive',
    component: ComponentCreator('/OpenlabIT-SDR/blog/archive', '3d0'),
    exact: true
  },
  {
    path: '/OpenlabIT-SDR/blog/first-blog-post',
    component: ComponentCreator('/OpenlabIT-SDR/blog/first-blog-post', '695'),
    exact: true
  },
  {
    path: '/OpenlabIT-SDR/blog/long-blog-post',
    component: ComponentCreator('/OpenlabIT-SDR/blog/long-blog-post', 'fe2'),
    exact: true
  },
  {
    path: '/OpenlabIT-SDR/blog/mdx-blog-post',
    component: ComponentCreator('/OpenlabIT-SDR/blog/mdx-blog-post', 'ba0'),
    exact: true
  },
  {
    path: '/OpenlabIT-SDR/blog/tags',
    component: ComponentCreator('/OpenlabIT-SDR/blog/tags', '229'),
    exact: true
  },
  {
    path: '/OpenlabIT-SDR/blog/tags/docusaurus',
    component: ComponentCreator('/OpenlabIT-SDR/blog/tags/docusaurus', '5fd'),
    exact: true
  },
  {
    path: '/OpenlabIT-SDR/blog/tags/facebook',
    component: ComponentCreator('/OpenlabIT-SDR/blog/tags/facebook', '5c0'),
    exact: true
  },
  {
    path: '/OpenlabIT-SDR/blog/tags/hello',
    component: ComponentCreator('/OpenlabIT-SDR/blog/tags/hello', 'cf8'),
    exact: true
  },
  {
    path: '/OpenlabIT-SDR/blog/tags/hola',
    component: ComponentCreator('/OpenlabIT-SDR/blog/tags/hola', '023'),
    exact: true
  },
  {
    path: '/OpenlabIT-SDR/blog/welcome',
    component: ComponentCreator('/OpenlabIT-SDR/blog/welcome', '6a2'),
    exact: true
  },
  {
    path: '/OpenlabIT-SDR/markdown-page',
    component: ComponentCreator('/OpenlabIT-SDR/markdown-page', 'ef3'),
    exact: true
  },
  {
    path: '/OpenlabIT-SDR/docs',
    component: ComponentCreator('/OpenlabIT-SDR/docs', 'e1a'),
    routes: [
      {
        path: '/OpenlabIT-SDR/docs/category/instalación-y-configuración-gnu-radio',
        component: ComponentCreator('/OpenlabIT-SDR/docs/category/instalación-y-configuración-gnu-radio', '993'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OpenlabIT-SDR/docs/category/primeros-pasos-con-gnu-radio',
        component: ComponentCreator('/OpenlabIT-SDR/docs/category/primeros-pasos-con-gnu-radio', 'ef5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OpenlabIT-SDR/docs/Inicio',
        component: ComponentCreator('/OpenlabIT-SDR/docs/Inicio', '62d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OpenlabIT-SDR/docs/Instalacion/Configuracion-USRP',
        component: ComponentCreator('/OpenlabIT-SDR/docs/Instalacion/Configuracion-USRP', 'e8a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OpenlabIT-SDR/docs/Instalacion/Instalacion-GNURADIO',
        component: ComponentCreator('/OpenlabIT-SDR/docs/Instalacion/Instalacion-GNURADIO', '600'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OpenlabIT-SDR/docs/Primeros-pasos/Conceptos-basicos',
        component: ComponentCreator('/OpenlabIT-SDR/docs/Primeros-pasos/Conceptos-basicos', 'd53'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OpenlabIT-SDR/docs/Primeros-pasos/Ejemplos-Basicos',
        component: ComponentCreator('/OpenlabIT-SDR/docs/Primeros-pasos/Ejemplos-Basicos', 'ee7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OpenlabIT-SDR/docs/SDR',
        component: ComponentCreator('/OpenlabIT-SDR/docs/SDR', '15d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OpenlabIT-SDR/docs/Software',
        component: ComponentCreator('/OpenlabIT-SDR/docs/Software', 'e65'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/OpenlabIT-SDR/',
    component: ComponentCreator('/OpenlabIT-SDR/', '9de'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
