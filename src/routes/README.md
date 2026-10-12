# Rutas

| Archivo               | URL                                   |
| --------------------- | ------------------------------------- |
| __root.tsx            | Layout, metadatos y manejo de errores |
| index.tsx             | /                                     |
| about.tsx             | /about                                |
| projects.index.tsx    | /projects                             |
| projects.$slug.tsx    | /projects/:slug, incluido SeekerBot   |
| communities.$slug.tsx | /communities/:slug                    |

Para añadir páginas, crea un archivo con createFileRoute. Los detalles de proyectos y comunidades se resuelven desde los datos compartidos, con slugs estables.

Vite genera src/routeTree.gen.ts automáticamente. No lo edites a mano.
