pipeline {
  agent any
  
  tools {nodejs "Nodejs"}

  environment {
    imagename = "profile"
    containername = "profile-local"
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
    stage('Building and deploy image') {
      steps{
        script {
          sh 'docker ps -f name=${containername} -q | xargs --no-run-if-empty docker container stop'
          sh 'docker container ls -a -fname=${containername} -q | xargs -r docker container rm'

          dockerImage = docker.build("${imagename}:${env.BUILD_ID}")
          
          sh "docker run -p 8080:80 -td --name ${containername} ${imagename}:${env.BUILD_ID}"
        }
      }
    }
  }
}