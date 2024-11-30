# Usa la imagen base oficial de Node.js
FROM node:23-alpine as builder

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json al contenedor
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación al contenedor
COPY . .

# Expone el puerto que utiliza tu aplicación (por defecto el 3000)
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]