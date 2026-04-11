pipeline {
agent any

stages {
stage('Install') {
steps {
nodejs('nodejs') {
sh 'npm install'
}
}
}

stage('Build') {
steps {
nodejs('nodejs') {
sh 'echo Build done'
}
}
}
}
}