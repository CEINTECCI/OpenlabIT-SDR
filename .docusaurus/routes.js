import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/OpenlabIT-SDR/blog',
    component: ComponentCreator('/OpenlabIT-SDR/blog', '923'),
    exact: true
  },
  {
    path: '/OpenlabIT-SDR/blog/archive',
    component: ComponentCreator('/OpenlabIT-SDR/blog/archive', '7cd'),
    exact: true
  },
  {
    path: '/OpenlabIT-SDR/blog/first-blog-post',
    component: ComponentCreator('/OpenlabIT-SDR/blog/first-blog-post', '4f6'),
    exact: true
  },
  {
    path: '/OpenlabIT-SDR/blog/long-blog-post',
    component: ComponentCreator('/OpenlabIT-SDR/blog/long-blog-post', '815'),
    exact: true
  },
  {
    path: '/OpenlabIT-SDR/blog/mdx-blog-post',
    component: ComponentCreator('/OpenlabIT-SDR/blog/mdx-blog-post', '28e'),
    exact: true
  },
  {
    path: '/OpenlabIT-SDR/blog/tags',
    component: ComponentCreator('/OpenlabIT-SDR/blog/tags', '4cc'),
    exact: true
  },
  {
    path: '/OpenlabIT-SDR/blog/tags/docusaurus',
    component: ComponentCreator('/OpenlabIT-SDR/blog/tags/docusaurus', '3be'),
    exact: true
  },
  {
    path: '/OpenlabIT-SDR/blog/tags/facebook',
    component: ComponentCreator('/OpenlabIT-SDR/blog/tags/facebook', '2c6'),
    exact: true
  },
  {
    path: '/OpenlabIT-SDR/blog/tags/hello',
    component: ComponentCreator('/OpenlabIT-SDR/blog/tags/hello', '7cb'),
    exact: true
  },
  {
    path: '/OpenlabIT-SDR/blog/tags/hola',
    component: ComponentCreator('/OpenlabIT-SDR/blog/tags/hola', '4dd'),
    exact: true
  },
  {
    path: '/OpenlabIT-SDR/blog/welcome',
    component: ComponentCreator('/OpenlabIT-SDR/blog/welcome', '974'),
    exact: true
  },
  {
    path: '/OpenlabIT-SDR/markdown-page',
    component: ComponentCreator('/OpenlabIT-SDR/markdown-page', '316'),
    exact: true
  },
  {
    path: '/OpenlabIT-SDR/docs',
    component: ComponentCreator('/OpenlabIT-SDR/docs', '887'),
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
        component: ComponentCreator('/OpenlabIT-SDR/docs/SDR', 'dcb'),
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
    component: ComponentCreator('/OpenlabIT-SDR/', 'ca9'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
