const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner(
  {
    serverUrl : 'http://172.31.28.218:9000/',
    options: {
      'sonar.projectName': 'NodeJsProject',
      'sonar.projectDescription': 'Code analysis for NodeJs Project',
      'sonar.sources': '.',
      'sonar.login': 'admin',
      'sonar.password': 'admin123',
      //'sonar.tests': 'specs',
      'sonar.language' : 'js',
      'sonar.projectVersion': '1.0'
    },
  },
  () => process.exit()
);