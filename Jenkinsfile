pipeline{
    agent{label 'nodejs'}
    stages{
        stage('source code'){
            git url:'https://github.com/Rajanikanthraju/js-e2e-express-server.git',
                branch:'sprint_develop'
        }
        stage('Build'){
            sh 'npm install'
            sh 'npm run compile'
        }
    }
}