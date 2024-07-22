all : up

up :
	@docker-compose -f ./docker-compose.yml up -d --build

down :
	@docker-compose -f ./docker-compose.yml down

stop :
	@docker-compose -f ./docker-compose.yml stop 

remove :
	@docker-compose -f ./docker-compose.yml rm -f

status :
	@docker ps

clear: stop down remove
	docker system prune --all --force --volumes
	docker volume rm $(docker volume ls -q)
