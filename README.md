# Social Network

Es una aplicación moderna que permite a los usuarios autenticarse y crear publicaciones. Es un proyecto completo que demuestra cómo construir una aplicación web escalable usando **microservicios**, **Docker** y **bases de datos Postgres**.

## Arquitectura del Proyecto

El proyecto está dividido en **3 partes principales**:

### 1. **Frontend (IU)**

- Construido con **React**, **Typescript**, **Tailwind**, **Zustand**
- Corre en el puerto `3000`

### 2. **Backend - Microservicios (auth-service y posts-service)**

Tenemos 2 servicios independientes:

**a) Auth Service (Servicio de Autenticación)**

- Maneja el inicio de sesión
- Verifica coincidencia con el email y password
- Corre en el puerto `4001`
- Base de datos PostgreSQL en puerto `5433`

**b) Posts Service (Servicio de Publicaciones)**

- Creación de Posts
- Corre en el puerto `4002`
- Base de datos PostgreSQL en puerto `5434`

### 3. **Bases de Datos (Almacenamiento)**

- Dos bases de datos **PostgreSQL** independientes
- Una para autenticación - auth-service
- Otra para publicaciones - posts-service

---

## Estructura del Proyecto

```
social-network/
├── frontend/                    # La interfaz que ves
│   ├── src/
│   │   ├── components/          # Componentes reutilizables
│   │   ├── routes/              # Páginas (Login, Dashboard)
│   │   ├── services/            # Comunicación con backend
│   │   ├── global-state/        # Estado compartido (Zustand)
│   │   └── utils/               # Funciones auxiliares
│   └── package.json             # Dependencias del frontend
│
├── backend/                     # Los servidores
│   ├── auth-service/            # Servicio de autenticación
│   │   ├── src/
│   │   │   ├── controller.ts    # Lógica de autenticación
│   │   │   ├── router.ts        # Rutas de API
│   │   │   ├── config/          # Configuración de BD
│   │   │   ├── model/           # Modelos de datos (Usuario)
│   │   │   └── utils/           # Utilidades
│   │   ├── Dockerfile           # Instrucciones para Docker
│   │   └── package.json         # Dependencias
│   │
│   └── posts-service/           # Servicio de publicaciones
│       ├── src/
│       └── package.json
│
├── docker-compose.yml           # Configuración para ejecutar todo
└── README.md                    # Este archivo
```
