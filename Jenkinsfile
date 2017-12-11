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
        
        stage('Verifying PR') {
            echo "BRANCH_NAME = ${env.BRANCH_NAME}"
            echo "CHANGE_TARGET = ${env.CHANGE_TARGET}"
            if (env.BRANCH_NAME == "develop" && !env.CHANGE_TARGET != "master") {
                error("O PR DEVE SER DA BRANCH DEVELOP -> MASTER")
            }
        }
    } catch (err) {
        throw err
    }
}
