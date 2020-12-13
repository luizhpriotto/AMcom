pipeline {
    agent none
    stages {
        stage('Building...'){
            steps{
                echo env.VARNAME
            }
        }
    }
    post {
        always {
            echo 'post echo...'
        }
    }
}