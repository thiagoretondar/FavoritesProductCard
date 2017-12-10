    node {
        try {
            stage('Checkout') {
                sh "rm -rf public/"
                checkout scm
            }
        } catch (err) {
            throw err
        }
    }
