FROM node:18-alpine

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el código de la aplicación
COPY . .

# Cambiar la propiedad de los archivos al usuario no-root 'node'
RUN chown -R node:node /app

# Cambiar al usuario no privilegiado 'node'
USER node

EXPOSE 3000

CMD ["npm", "start"]