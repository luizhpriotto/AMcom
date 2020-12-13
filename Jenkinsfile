pipeline {
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
                    }
                }
                git branch: 'master', url: 'https://github.com/luizhpriotto/amcom/'
                sh 'pwd'
                sh 'ls -ltr'
                sh 'cd node-project'
                sh 'pwd'
                sh 'ls'
                sh 'docker build -t shark:$SCOPE$BUILD_NUMBER --no-cache .'
                sh 'echo docker run --name shark-demo -p 80:8080 -d shark:$SCOPE$BUILD_NUMBER'
                sh ''
            }
        }
    }
    post {
        success {
            echo 'Creating the DNS to access de aplication on $SCOPE...'
            echo 'shark-$SCOPE$BUILD_NUMBER.alegra.com.br'
            sh 'curl -X POST "https://api.cloudflare.com/client/v4/zones/023e105f4ecef8ad9ca31a8372d0c353/dns_records" \
                -H "X-Auth-Email: luiz_priotto@castrolanda.coop.br" \
                -H "X-Auth-Key: $CLOUDFLARE_API_KEY" \
                -H "Content-Type: application/json" \
                -d "type=A&name=shark-$SCOPE$BUILD_NUMBER.alegra.com.br&content=177.91.35.105&ttl=120&priority=10&proxied=false"'
        }
    }
}