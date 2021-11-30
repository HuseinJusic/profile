pipeline {
  agent any
  imagename = "profile"
  tools {nodejs "Nodejs"}
 
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
    stage('Deploy Image') {
      steps{
        script {
            
        }
      }
    }
  }
}