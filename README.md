# 🌐 Red Social - Documentación Completa

## 📋 Descripción del Proyecto

**Red Social** es una aplicación moderna que permite a los usuarios registrarse, autenticarse y compartir publicaciones. Es un proyecto completo que demuestra cómo construir una aplicación web escalable usando **microservicios**, **Docker** y **bases de datos**.

### ¿Qué es una Red Social?

Es una plataforma donde los usuarios pueden:

- Crear una cuenta (registro)
- Iniciar sesión (login)
- Compartir publicaciones (posts)
- Conectar con otros usuarios

---

## 🏗️ Arquitectura del Proyecto

El proyecto está dividido en **3 partes principales**:

### 1. **Frontend (Interfaz de Usuario)**

- Es lo que ves en la pantalla
- Construido con **React** (biblioteca JavaScript para crear interfaces)
- Usa **Tailwind CSS** para el diseño visual bonito
- Corre en el puerto `3000`

### 2. **Backend - Microservicios (La inteligencia)**

Tenemos 2 servicios independientes:

**a) Auth Service (Servicio de Autenticación)**

- Maneja el registro e inicio de sesión
- Verifica contraseñas y crea tokens de seguridad
- Corre en el puerto `4001`
- Base de datos PostgreSQL en puerto `5433`

**b) Posts Service (Servicio de Publicaciones)**

- Maneja la creación y visualización de posts
- Corre en el puerto `4002`
- Base de datos PostgreSQL en puerto `5434`

### 3. **Bases de Datos (Almacenamiento)**

- Dos bases de datos **PostgreSQL** independientes
- Una para autenticación
- Otra para publicaciones

---

## 🛠️ Tecnologías Utilizadas

### **Frontend**

| Tecnología       | Uso                                              |
| ---------------- | ------------------------------------------------ |
| **React 19**     | Crear la interfaz de usuario                     |
| **TypeScript**   | JavaScript más seguro con tipos                  |
| **Tailwind CSS** | Diseño visual rápido y moderno                   |
| **Zustand**      | Manejo de estado global                          |
| **Lucide Icons** | Iconos bonitos (como el ojo para ver contraseña) |

### **Backend**

| Tecnología                | Uso                                   |
| ------------------------- | ------------------------------------- |
| **Node.js**               | Ejecutar JavaScript en el servidor    |
| **Express**               | Framework para crear APIs             |
| **TypeScript**            | JavaScript seguro con tipos           |
| **PostgreSQL**            | Base de datos confiable               |
| **Sequelize**             | Manejo de base de datos               |
| **JWT (JSON Web Tokens)** | Autenticación segura                  |
| **CORS**                  | Permitir comunicación entre servicios |

### **DevOps**

| Tecnología         | Uso                                     |
| ------------------ | --------------------------------------- |
| **Docker**         | Empaquetar aplicaciones en contenedores |
| **Docker Compose** | Orquestar múltiples contenedores        |

---

## 📁 Estructura del Proyecto

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

---

## 🚀 Cómo Instalar y Ejecutar el Proyecto

### **Requisitos Previos**

Necesitas tener instalado en tu computadora:

1. **Node.js** (versión 18 o superior) - [Descargar](https://nodejs.org/)
2. **Docker** - [Descargar](https://www.docker.com/products/docker-desktop)

Verifica que estén instalados:

```bash
node --version
npm --version
docker --version
```

### **Paso 1: Clonar o Descargar el Proyecto**

```bash
cd tu-carpeta-de-proyectos
```

### **Paso 2: Crear archivos de Configuración (.env)**

#### **Para auth-service:**

Crea un archivo `.env` en `backend/auth-service/`:

```
AUTH_DB_NAME=auth-service
AUTH_DB_USER=postgres
AUTH_DB_PASSWORD=postgres123
AUTH_DB_HOST=postgres-auth
AUTH_DB_PORT=5432
JWT_SECRET=tu_secreto_super_seguro_aqui
PORT=4001
```

#### **Para posts-service:**

Crea un archivo `.env` en `backend/posts-service/`:

```
POSTS_DB_NAME=posts-service
POSTS_DB_USER=postgres
POSTS_DB_PASSWORD=postgres123
POSTS_DB_HOST=postgres-posts
POSTS_DB_PORT=5432
PORT=4002
```

### **Paso 3: Ejecutar con Docker (Forma Fácil - Recomendado)**

```bash
# Desde la carpeta raíz del proyecto
docker compose up --build
```

Espera a que termine. Verás mensajes como:

- ✅ `postgres-auth is healthy`
- ✅ `postgres-posts is healthy`
- ✅ `auth-service started on port 4001`
- ✅ `posts-service started on port 4002`

### **Paso 4: Ejecutar el Frontend**

Abre una **nueva terminal** y ejecuta:

```bash
cd frontend
npm install        # Instala las dependencias
npm start          # Inicia el servidor
```

El frontend abrirá automáticamente en `http://localhost:3000`

---

## 📝 Cómo Usar la Aplicación

### **1. Login / Registro**

- Ve a `http://localhost:3000`
- Ingresa tu correo electrónico
- Ingresa tu contraseña
- Presiona el botón de **ojo** para ver/ocultar la contraseña
- Haz clic en **Login**

### **2. Ver Dashboard**

- Después de iniciar sesión, verás tu panel de usuario

### **3. Crear Publicaciones**

- Usa la sección de publicaciones para crear posts

---

## 🔄 Cómo Funciona la Comunicación

```
[Usuario en Navegador]
         ↓
     [Frontend React]
         ↓
[API Backend - Auth Service o Posts Service]
         ↓
[PostgreSQL Database]
```

1. El usuario escribe en el frontend
2. El frontend envía los datos al backend
3. El backend valida y guarda en la base de datos
4. El backend responde al frontend
5. El frontend muestra el resultado

---

## 🐛 Solución de Problemas Comunes

### Problema: "Puerto 5433 ya está en uso"

**Solución:**

```bash
# Ver qué está usando el puerto
lsof -i :5433
# Matar el proceso
kill -9 <PID>
```

### Problema: "Docker no está corriendo"

**Solución:** Abre Docker Desktop

### Problema: "Módulos no encontrados (npm not found)"

**Solución:**

```bash
npm install
```

### Problema: "La base de datos no está lista"

**Solución:** Espera a que los healthchecks terminen (5-10 segundos)

---

## 📊 Variables de Entorno Explicadas

| Variable      | Significado                    | Ejemplo            |
| ------------- | ------------------------------ | ------------------ |
| `DB_NAME`     | Nombre de la base de datos     | `auth-service`     |
| `DB_USER`     | Usuario PostgreSQL             | `postgres`         |
| `DB_PASSWORD` | Contraseña del usuario         | `postgres123`      |
| `DB_HOST`     | Dónde está la BD (en Docker)   | `postgres-auth`    |
| `JWT_SECRET`  | Clave secreta para tokens      | `mi-secreto-super` |
| `PORT`        | Puerto donde corre el servicio | `4001`             |

---

## 📚 Recursos de Aprendizaje

- [React Documentación](https://react.dev/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)
- [TypeScript](https://www.typescriptlang.org/)

---

## 🎯 Próximos Pasos (Ideas de Mejora)

- [ ] Agregar más funcionalidades a posts
- [ ] Sistema de comentarios
- [ ] Seguir/Unfollows
- [ ] Notificaciones en tiempo real
- [ ] Upload de imágenes

---

## 📞 Soporte

Si tienes preguntas o problemas, revisa:

1. Los logs de Docker: `docker compose logs`
2. La consola del navegador (F12)
3. Los errores en la terminal

---

**¡Felicidades! Ahora entiendes cómo funciona tu red social.** 🎉
