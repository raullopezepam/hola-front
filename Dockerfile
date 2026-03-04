# Usamos una imagen ligera de Node.js
FROM node:18-slim

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos archivos de dependencias
COPY package*.json ./

# Instalamos (aunque ahora no tengas dependencias, es buena práctica)
RUN npm install

# Copiamos el resto del código
COPY . .

# Exponemos el puerto que usa nuestra App
EXPOSE 3000

# Comando para arrancar
CMD ["npm", "start"]
