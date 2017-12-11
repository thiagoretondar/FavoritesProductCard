@Library('jenkins-mosby') _

node {
    try {
        stage('Checkout') {
            sh "rm -rf public/"
            checkout scm
        }

        stage('Testing groovy helper') {
            echo "Calling helper"
            someGroovyHelper 'Thiago'
        }
    } catch (err) {
        throw err
    }
}
