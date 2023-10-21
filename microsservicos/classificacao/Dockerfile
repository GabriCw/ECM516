FROM node:alpine

#um diretório no sistema de arquivos do contêiner para os comandos a seguir
WORKDIR /app

#copia o arquivo package.json para poder executar o npm install
COPY package.json .

#instalar dependencias
RUN npm install

#copia todo o conteudo local para a imagem
COPY . .

#executa quando o contêiner entrar em execução
CMD ["npm", "start"]