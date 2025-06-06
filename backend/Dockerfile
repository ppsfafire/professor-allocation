# Use uma imagem oficial do Java 17
FROM eclipse-temurin:17-jdk

# Crie o diretório de trabalho
WORKDIR /app

# Copie o projeto para dentro do container
COPY . .

# Tente usar o Maven Wrapper, se existir, senão use o Maven do container
RUN if [ -f ./mvnw ]; then ./mvnw clean package -DskipTests; else mvn clean package -DskipTests; fi

RUN printenv

# Comando para rodar a aplicação
CMD printenv && java -jar target/professor-allocation-0.0.1-SNAPSHOT.jar 

echo "# trigger redeploy" >> backend/Dockerfile 