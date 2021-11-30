pipeline {
  agent any
  
  tools {nodejs "Nodejs"}

  environment {
    imagename = "profile"
  }
 
  stages {
    stage('Install dependencies') {
      steps {
        sh 'yarn install'
      }
    }
    stage('Build') {
      steps {
        sh 'yarn build'
      }
    }
    stage('Building image') {
      steps{
        script {
          dockerImage = docker.build imagename
        }
      }
    }
  }
}