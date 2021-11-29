pipeline {
  agent any
 
  tools {nodejs "Nodejs"}
 
  stages {
    stage('Cloning Git') {
      steps {
        git branch: 'main', url: 'https://github.com/HuseinJusic/profile'
      }
    }
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