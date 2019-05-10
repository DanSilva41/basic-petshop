echo "Building back-end service"

cd basic-petshop-api

echo "Update project back-end"
mvn clean install -DskipTests

echo "Building..."
mvn spring-boot:run