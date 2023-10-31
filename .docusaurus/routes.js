import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'edd'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '9cd'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'cc5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '7bb'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'b4a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'd34'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'dc9'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '9f5'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '7d6'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '53a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '352'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '21e'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '432'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '299'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '92d'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '9e1'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '52c'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'fe7'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'ee8'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '8b9'),
    routes: [
      {
        path: '/docs/category/instalación-y-configuración-gnu-radio',
        component: ComponentCreator('/docs/category/instalación-y-configuración-gnu-radio', '0bc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/primeros-pasos-con-gnu-radio',
        component: ComponentCreator('/docs/category/primeros-pasos-con-gnu-radio', '547'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/tutorial---basics',
        component: ComponentCreator('/docs/category/tutorial---basics', 'd44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/tutorial---extras',
        component: ComponentCreator('/docs/category/tutorial---extras', 'f09'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Inicio',
        component: ComponentCreator('/docs/Inicio', '260'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Instalacion/Configuracion-USRP',
        component: ComponentCreator('/docs/Instalacion/Configuracion-USRP', 'cf8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Instalacion/Instalacion-GNURADIO',
        component: ComponentCreator('/docs/Instalacion/Instalacion-GNURADIO', 'd1c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Primeros-pasos/Conceptos-basicos',
        component: ComponentCreator('/docs/Primeros-pasos/Conceptos-basicos', '4a5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Primeros-pasos/Ejemplos-Basicos',
        component: ComponentCreator('/docs/Primeros-pasos/Ejemplos-Basicos', '3bc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SDR',
        component: ComponentCreator('/docs/SDR', '23b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Software',
        component: ComponentCreator('/docs/Software', '78f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/docs/tutorial-basics/congratulations', '793'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '68e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/docs/tutorial-basics/create-a-document', 'c2d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/docs/tutorial-basics/create-a-page', 'f44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', 'e46'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/docs/tutorial-basics/markdown-features', '4b7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', 'fdd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/tutorial-extras/translate-your-site', '2d7'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'be5'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
