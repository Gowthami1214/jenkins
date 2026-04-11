pipeline {
    agent any

    stages {
        stage('Install') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                bat 'echo Build done'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }
        }
    }
}