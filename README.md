### Requisitos
    *** Node.js 22 ou superior - Conferir a versao: node -v

### Como rodar o projeto baixado


### Sequencia para criar o projeto
    *** Criar o arquivo package.json
        * npm init (Cria o arquivo manualmente)
        * npm init -y (Cria o arquivo automaticamente)

### Instalar o TypeScript como uma dependencia de desenvolvimento.
    *** npm install --save-dev typescript

### Criar o arquivo tsconfig.json, executar quando o typescript foi instalado somente no projeto.
    *** npx tsc --init

### Coloca no arquivo tsconfig.json:
    *** "outDir": "./dist",
    *** "rootDir": "./src",
    *** "include": [
        "./src/**/*.ts"
    ]

### Compilar os arquivos TypeScript.
    *** npx tsc

### Executar o arquivo JavaScript compilado.
    *** node dist/index.js