pipeline{
    agent{label 'nodejs'}
    stages{
        stage('source code'){
            steps{
            git url:'https://github.com/Rajanikanthraju/js-e2e-express-server.git',
                branch:'sprint_develop'
                }
                             }
        stage('Build'){
            steps{
            sh 'npm install'
            sh 'npm run compile'
                 }
                       }
    }
}