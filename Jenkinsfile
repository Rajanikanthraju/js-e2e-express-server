pipeline{
    agent{label 'nodejs'}
    stages{
        stage('source code'){
            steps{
            git url:'https://github.com/Rajanikanthraju/js-e2e-express-server.git',
                branch:'sprint_develop'
                }
                             }
        stage('Install dependencies'){
            steps{
            sh 'npm install'
            
                 }
                       }
       stage('Build'){
            steps{
            sh 'npm run build'
                 }
                       }
       stage('Test results'){
            steps{
            sh 'npm test'
                  }
                       }
    }
}