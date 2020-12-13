pipeline {
    agent none
    stages {
        stage('Building...'){
            steps{
                echo "current build number: ${currentBuild.number}"
                echo "previous build number: ${currentBuild.previousBuild.getNumber()}"
            }
        }
        stage('Deploying on the:'){
            steps{
                script{
                    env.RELEASE_PROD = input message: 'Select the enviroment...', ok: 'Release!', 
                    parameters: [choice(name: 'RELEASE_PROD', choices: ['yes', 'no'], description: 'Go ahead to deploy on prod (shark.alegra.com.br)?')]
                    if (env.RELEASE_PROD == 'yes') {
                        echo "ok"
                    }
                    else {
                        echo "not ok"
                    }
                }
                echo 'branch:'
                git branch: env.BRANCH, url: 'https://github.com/luizhpriotto/amcom/'
                    echo "${env.RELEASE_PROD}"
                    echo "${env.SCOPE}"
                    echo "${env.BRANCH}"
            }   
        }
    }
    post {
        always {
            echo 'post echo...'
        }
    }
}