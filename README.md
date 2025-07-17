# Shop Backend

Este proyecto es una API backend para una tienda, desarrollada con Node.js y Express. Permite gestionar productos y órdenes utilizando archivos JSON como base de datos.

## Estructura del proyecto

```
src/
  server.ts                # Punto de entrada del servidor Express (TypeScript)
  data/
    products.json          # Datos de productos
    orders.json            # Datos de órdenes
  models/
    product.ts             # Modelo de producto
    order.ts               # Modelo de orden
  repositories/
    products.repository.ts # Lógica de acceso a productos
    orders.repository.ts   # Lógica de acceso a órdenes
  routes/
    products.routes.ts     # Rutas para productos
    orders.routes.ts       # Rutas para órdenes
  utils/                   # Utilidades (manejo de errores, escritura de archivos)
dist/                      # Archivos compilados por TypeScript
package.json               # Dependencias y scripts
```

## Instalación

1. Clona el repositorio:
   ```
   git clone https://github.com/PabloGastelum/shop.backend.git
   ```
2. Instala las dependencias:
   ```
   npm install
   ```

## Scripts disponibles

- `npm run dev`: Ejecuta el servidor en modo desarrollo con TypeScript usando ts-node.
- `npm run build`: Compila el código TypeScript a JavaScript en la carpeta `dist`.
- `npm start`: Compila y ejecuta el servidor desde `dist/index.js`.

Accede a la API en `http://localhost:3000` (puerto configurable en `server.ts`).

### Endpoints principales

- `GET /api/products` — Obtiene la lista de productos.
- `GET /api/orders` — Obtiene la lista de órdenes.

## Características

- Backend en TypeScript
- Uso de Express y Body-Parser
- CORS habilitado
- Persistencia en archivos JSON

## Personalización

Puedes modificar los archivos JSON en `src/data/` para agregar o editar productos y órdenes.

## Requisitos

- Node.js >= 14
- npm

## Licencia

MIT
