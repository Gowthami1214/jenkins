pipeline {
    agent any

    stages {
        stage('Install') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run App') {
            steps {
                bat 'node index.js'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }
        }
    }
}