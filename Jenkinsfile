
12303842 - Abhishek Kumar Mandal
11:30 AM
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