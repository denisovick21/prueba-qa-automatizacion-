# Prueba QA Automatización - Playwright & TypeScript (POM)

Repositorio oficial para la automatización de casos de prueba sobre la tienda de pruebas [PrestaShop TestStore](https://teststore.automationtesting.co.uk/index.php).

## Estructura del Proyecto
El proyecto implementa el patrón de diseño **Page Object Model (POM)** para garantizar la mantenibilidad, escalabilidad y separación de responsabilidades:

```text
prueba-qa-automatizacion/
│
├── pages/                  # Clases del Page Object Model
│   ├── BasePage.ts         # Métodos y configuraciones base
│   ├── HomePage.ts         # Localizadores y acciones de la página principal / búsqueda
│   ├── ProductPage.ts      # Detalle de producto, cantidades y selección
│   ├── CartPage.ts         # Modal de confirmación y validaciones del carrito
│   └── LoginPage.ts        # Autenticación y validación de errores
│   └── NoMatches.ts        # Clase que contiene localizadores cuando no hay ningun elemento de la busqueda
│
├── tests/                  # Archivos de pruebas (.spec.ts)
│   └── cp01-flujo-tienda.spec.ts
│   └── cp03-busqueda-sin-resultado.spec.ts
│   └── cp04-login.spec.ts
│
├── evidencia/              # Capturas de pantalla y evidencias de ejecución
│
├── .gitignore              # Archivos excluidos de Git (node_modules, reportes)
├── package.json            # Dependencias y scripts del proyecto
├── playwright.config.ts    # Configuración global de Playwright
└── README.md               # Documentación del proyecto