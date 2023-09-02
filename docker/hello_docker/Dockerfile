# Imagem base
FROM node:14

# Cria diretório de trabalho
WORKDIR /app

# Copia package.json
COPY package.json .

# Instala dependências
RUN npm install

COPY . .

# Expõe porta
EXPOSE 5200

# Comando de inicialização
CMD ["node", "index.js"]