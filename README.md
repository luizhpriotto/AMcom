<!-- ABOUT THE PROJECT -->
## Web Application using NODE.JS

### Important Points

* Start the PRD shark aplication and the Traefik using the YML. (docker stack deploy -c traefik.yml shark --with-registry-auth)
* What do you think about to access the Jenkins to execute some pipelines? (http://10.1.0.60:9090)
* In the pipeline, PRD services on docker swarm always be updated.
* QAS shark services, can be updated or created. You can access with a new dinamic DNS.
* DEV, should be tested on your local machine.
* When you are creating the acme.json, remeber the set the permission to 600 (chmod 600) 
* Traefik is running on port 9091 (http://10.1.0.60:9081)

## Services
* [Jenkins](http://10.1.0.60:9090)
* [Traefik](http://10.1.0.60:9081)
* [Nexus](http://10.1.0.60:8081)
* [Rancher](http://10.1.0.60:8280)
* [Vizualizer](http://10.1.0.60:8282)


## Testing
* PRD -> master (pending)
* QAS -> master (pending)
* QAS -> version1 (pending)
* QAS -> new service (pending)
* Change the branch "version".