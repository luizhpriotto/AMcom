<!-- ABOUT THE PROJECT -->
## Web Application using NODE.JS

### Important Points

* Start the PRD shark aplication and the Traefik using the YML. (docker stack deploy -c traefik.yml shark --with-registry-auth)
* In the pipeline, PRD services on docker swarm always be updated and always branch master is used.
* QAS shark services can be reused or created created a new one. You can access with a new dinamic DNS.
* When you are creating the acme.json, remeber the set the permission to 600 (chmod 600)

## Services
* [Jenkins](http://10.1.0.60:9090)
* [Traefik](http://10.1.0.60:9081)
* [Nexus](http://10.1.0.60:8081)
* [Rancher](http://10.1.0.60:8280)
* [Vizualizer](http://10.1.0.60:8282)
