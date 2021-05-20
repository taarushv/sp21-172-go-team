all: clean

clean:
	gradle clean

compile:
	gradle build

test:
	gradle test

jar: 
	gradle build -x test
	gradle bootJar

run: jar
	echo Starting Spring at:  http://localhost:8080
	java -jar build/libs/backend-0.0.1-SNAPSHOT.jar

# Docker

docker-build: jar
	docker build -t backend .
	docker images

docker-run: docker-build
	docker run --name backend -td -p 80:8080 backend	
	docker ps

docker-clean:
	docker stop backend
	docker rm backend
	docker rmi backend

docker-shell:
	docker exec -it backend bash 

docker-push:
	docker login
	docker build -t $(account)/backend:v1 -t $(account)/backend:v1 .
	docker push $(account)/backend:v1 

# Compose

network-ls:
	docker network ls 

network-create:
	docker network create --driver bridge starbucks

network-prune:
	docker network prune

compose-up:
	docker-compose up --scale backend=2 -d

compose-down:
	docker-compose down 	

lb-stats:
	echo "user = admin | password = admin"
	open http://localhost:1936

lb-test:
	open http://localhost


# Pod

pod-run:
	kubectl apply -f pod.yaml

pod-list:
	kubectl get pods

pod-desc:
	kubectl describe pods backend

pod-delete:
	kubectl delete -f pod.yaml

pod-shell:
	kubectl exec -it backend -- /bin/bash

pod-logs:
	kubectl logs -f backend

# Deployment

deployment-create:
	kubectl create -f deployment.yaml --save-config 

deployment-get:
	kubectl get deployments

deployment-get-pods:
	kubectl get pods -l name=backend

deployment-pod-shell:
	kubectl exec -it $(pod) -- /bin/bash

deployment-upgrade:
	kubectl apply  -f deployment.yaml

deployment-delete:
	kubectl delete deployment backend-deployment

# Service

service-create:
	kubectl create -f service.yaml

service-get:
	kubectl get services

service-get-ip:
	kubectl get service backend -o wide

service-delete:
	kubectl delete service backend

# Ingress

ingress-apply:
	kubectl apply -f ingress.yaml

ingress-ip:
	kubectl get ingress backend-ingress




