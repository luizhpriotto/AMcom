pipeline {
    agent any
    stages {
        stage('Testing...'){
            steps{
                script{
                    env.BNUMBER = ${currentBuild.number}
                }
                
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
                sh 'echo build -t 10.1.0.60:8083/shark:$SCOPE --no-cache .'
            }
        }
    }
    post {
        always {
            echo 'post echo...'
        }
    }
}