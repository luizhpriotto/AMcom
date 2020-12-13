pipeline {
    agent any
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
                    if (env.SCOPE == 'prd'){
                        echo 'PROD:'
                        env.RELEASE_PROD = input message: 'Select the enviroment...', ok: 'Release!', 
                        parameters: [choice(name: 'RELEASE_PROD', choices: ['yes', 'no'], description: 'Go ahead to deploy on prod (shark.alegra.com.br)?')]
                        if (env.RELEASE_PROD == 'yes') {
                            echo "You have accepted PROD."
                            git branch: 'master', url: 'https://github.com/luizhpriotto/amcom/'
                        }
                    }
                }
                    echo "${env.RELEASE_PROD}"
                    echo "${env.SCOPE}${currentBuild.number}"
            }   
        }
    }
    post {
        always {
            echo 'post echo...'
        }
    }
}