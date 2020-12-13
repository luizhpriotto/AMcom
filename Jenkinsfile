pipeline {
    agent none
    stages {
        stage('Building...'){
            steps{
                echo env.currentBuild
            }
        }
    }
    post {
        always {
            echo 'post echo...'
        }
    }
}