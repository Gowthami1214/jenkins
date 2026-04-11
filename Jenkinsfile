pipeline {
    agent any

    stages {
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'echo Build done'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}