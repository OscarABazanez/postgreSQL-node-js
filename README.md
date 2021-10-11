

# Migración
[Documentacion de Migracion en Sequelize](https://sequelize.org/master/manual/migrations.html)

Se requiere instalar la dependencia.
```
npm install --save-dev sequelize-cli
```
Archivo necesario:

- **.sequelizerc** - Debemos indicarle al CLI cómo conectarse a la base de datos con su configuración, models-path, migrations-path, seeders-path. Ejemplo:
```
module.exports = {
    'config': './db/config.js',
    'models-path': './db/models/',
    'migrations-path': './db/migrations/',
    'seeders-path': './db/seeders/',
}
```

**Scripts** para la migración: Configuración en **package.json**
```
    "migrations:generate": "sequelize-cli migration:generate --name",
    "migrations:run": "sequelize-cli db:migrate",
    "migrations:revert": "sequelize-cli db:migrate:undo",
    "migrations:delete": "sequelize-cli db:migrate:undo:all"
```
## Generar el archivo de configuración
El archivo será generado en la ruta establecida del **migrations-path**. En este caso en **./db/migrations/** y se le indicara que tipo de comportamiento va a tener, por ejemplo: crear una tabla, modificar columnas y etc.
```
npm run migrations:generate create-user
```
## Correr la migración
Si ya tenemos todo configurado, ya es hora de correr la migración.
```
npm run migrations:run
```
Ya se debieron haber generado todas las tablas que habíamos establecidos, pero se agregó una nueva tabla externa llamada **SequelizeMeta** dicha tabla almacena el histórico de las migraciones realizadas.

