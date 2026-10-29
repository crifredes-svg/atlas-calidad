FROM node:18-alpine

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm ci --ignore-scripts

# Copiar el código de la aplicación
COPY src ./src

# Cambiar la propiedad de los archivos al usuario no-root 'node'
RUN chown -R node:node /app

# Cambiar al usuario no privilegiado 'node'
USER node

EXPOSE 3000

CMD ["npm", "start"]