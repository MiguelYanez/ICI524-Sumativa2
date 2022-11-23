# MiguelYanez-ICI524-Sumativa2

## Instalación

1. Clonar repositorio
```
git clone https://github.com/MiguelYanez/ICI524-Sumativa2
```
2. Añadir archivo .env

 2.1 En \node_project\ crear archivo '.env'
 2.2 Escribir lo siguiente en el archivo creado y guardar
 ```
 MONGO_USERNAME=sammy
 MONGO_PASSWORD=your_password
 MONGO_PORT=27017
 MONGO_DB=sharkinfo
 ```

3. Recrear archivo 'wait-for.sh'

  3.1 En \node_project\, copiar contenido del archivo 'wait-for.sh'
  3.2 Eliminar archivo 'wait-for.sh'
  3.3 Crear nuevamente el archivo archivo 'wait-for.sh' en \node_project\
  3.4 Pegar contenido en 'wait-for.sh' y guardar
  3.5 ejecutar: ```chmod +x wait-for.sh```

4. Iniciar proyecto: ```docker-compose up -d```
