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
            input message: 'Select the enviroment...', parameters: [choice(choices: ['dev', 'qas', 'prd'], description: '', name: 'env')]
        }
    }
    post {
        always {
            echo 'post echo...'
        }
    }
}