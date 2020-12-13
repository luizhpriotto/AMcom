pipeline {
    agent none
    stages {
        stage('Building...'){
            steps{
                echo "current build number: ${currentBuild.number}"
                echo "previous build number: ${currentBuild.previousBuild.getNumber()}"
            }
        }
    }
    post {
        always {
            echo 'post echo...'
        }
    }
}