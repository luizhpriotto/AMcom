pipeline {
      environment {
        registry = "10.1.0.60:8083"
        registryCredential = 'nexus'
         }
    agent any
    stages {
        stage('Testing...'){
            steps{                
                echo "previous build number: ${currentBuild.previousBuild.getNumber()}"
                echo "${env.SCOPE}${currentBuild.number}"
            }
        }
        stage('Preparing to build:'){
            steps{
                script{
                    if (env.SCOPE == 'prd'){
                        echo 'PROD:'
                        env.RELEASE_PROD = input message: 'Select YES or NO to deploy on production...', ok: 'Release!', 
                        parameters: [choice(name: 'RELEASE_PROD', choices: ['yes', 'no'], description: 'Go ahead to deploy on prod (shark.alegra.com.br)?')]
                        if (env.RELEASE_PROD == 'yes') {
                            echo "You have accepted PROD."
                            git branch: 'master', url: 'https://github.com/luizhpriotto/amcom/'
                        }
                        else{
                            git branch: 'master', url: 'https://github.com/luizhpriotto/amcom/'
                        }
                    }
                } 
            }
        }
        stage('oO building Oo'){
            steps{
                script{                               
                    dir("node-project") {
                        dockerImage = docker.build "${registry}/shark:${SCOPE}${BUILD_NUMBER}"
                        docker.withRegistry( 'http://10.1.0.60:8083/', 'nexus') { 
                            dockerImage.push()
                            echo "Tagging new default image ${SCOPE}."
                            dockerImage.push("${SCOPE}") 
                        }
                    }
                }
            }
        }
        stage('Publishing Service...'){
            steps{
                catchError {
                    sh "docker network create --driver=overlay --attachable shark-${SCOPE}"
                    sh "docker service create --name shark-${SCOPE} --network shark-${SCOPE} ${registry}/shark:${SCOPE}${BUILD_NUMBER} -p 80:8080 --with-registry-auth"
                }
            }
        }
    }
    post {
        success {
            script{
                    if (env.SCOPE != 'prd'){
                        env.FQDN = "shark-${SCOPE}${BUILD_NUMBER}.alegra.com.br"
                        echo "FQDN: ${FQDN}"
                        env.DATA = '{\"type\":\"A\",\"name\":\"'+"${FQDN}"+'\",\"content\":\"177.91.38.105\",\"ttl\":120,\"priority\":10,\"proxied\":false}'
                        echo "Creating the DNS to access de aplication on ${SCOPE}..."                
                        sh 'curl -X POST "https://api.cloudflare.com/client/v4/zones/cfb6a7f79905716da43fa085422ffcb3/dns_records" \
                            -H "X-Auth-Email: luiz_priotto@castrolanda.coop.br" \
                            -H "X-Auth-Key: 34bc1d0cde15163b7fde296322d0e54e05c4c" \
                            -H "Content-Type: application/json" \
                            --data $DATA'
                        echo "https://shark-${SCOPE}${BUILD_NUMBER}.alegra.com.br"
                    }
                    echo "https://shark.alegra.com.br"
            }
        }
    }
}