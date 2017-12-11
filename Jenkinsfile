    node {
        try {
            stage('Checkout') {
                sh "rm -rf public/"
                checkout scm
            }
            
            stage('Testing groovy helper') {
                someGroovyHelper 'Thiago'
            }
        } catch (err) {
            throw err
        }
    }
