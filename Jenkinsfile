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
            withSonarQubeEnv('SONAR_LATEST') {
                    sh script: "npm run build sonar:sonar"
                }
                 }
                       }
       stage('Test results'){
            steps{
            sh 'npm run test'
                  }
                       }
    }
}