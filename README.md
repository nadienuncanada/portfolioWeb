Organizacion del proyecto
<br>
GestorFinanciero/
│
├── backend/
│ ├── app/
│ │ ├── **init**.py
│ │ ├── main.py # Archivo principal para FastAPI
│ │ ├── config.py # Configuración del proyecto
│ │ ├── db.py # Configuración de la base de datos
│ │ ├── models.py # Modelos SQLAlchemy
│ │ ├── schemas.py # Esquemas de datos (Pydantic)
│ │ ├── routers/ # Routers para organizar las rutas
│ │ │ ├── **init**.py
│ │ │ ├── auth.py # Endpoints para login y registro
│ │ │ └── users.py # Endpoints adicionales de usuarios
│ │ ├── utils/ # Utilidades compartidas
│ │ │ ├── **init**.py
│ │ │ └── security.py # Funciones para manejo de contraseñas y JWT
│ │ └── tests/ # Pruebas del backend
│ │ └── test_auth.py
│ └── Dockerfile # Configuración de Docker (opcional)
│
├── frontend/
│ ├── public/
│ │ └── index.html # HTML base
│ ├── src/
│ │ ├── api/ # Lógica para llamadas al backend
│ │ │ ├── apiClient.js # Configuración de Axios
│ │ │ └── auth.js # Funciones de autenticación (login, registro)
│ │ ├── components/ # Componentes React reutilizables
│ │ │ ├── LoginForm.js
│ │ │ └── RegisterForm.js
│ │ ├── pages/ # Páginas principales del frontend
│ │ │ ├── LoginPage.js
│ │ │ ├── RegisterPage.js
│ │ │ └── HomePage.js
│ │ ├── routes/ # Configuración de rutas (react-router-dom)
│ │ │ └── AppRouter.js
│ │ ├── styles/ # Estilos globales
│ │ │ └── global.css
│ │ └── App.js # Componente principal de React
│ └── package.json # Dependencias del frontend
│
└── README.md # Documentación del proyecto
