pipeline {
  agent any
 
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
    
  }
}