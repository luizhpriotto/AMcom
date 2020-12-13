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
                    env.RELEASE_SCOPE = input message: 'Select the enviroment...', ok: 'Release!', 
                    parameters: [choice(name: 'RELEASE_SCOPE', choices: ['dev', 'qas', 'prd'], description: 'What is the release scope?')]
                }
                    echo "${env.RELEASE_SCOPE}"
            }   
        }
    }
    post {
        always {
            echo 'post echo...'
        }
    }
}