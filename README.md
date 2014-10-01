# msa-logging

The core logging component that everyone should be using with node.js

##Setting up bamboo

1. Create a new build plan
2. Configure this git repo as your source repository
    * Use the ssh://git@ and a SSH key
    * You can add a new SSH key directly to the repo so it can only be used to checkout that project
3. Add a new stage and do the following steps
    a. Source Code Checkout
    b. npm install
        * Command task
        * executable: Node.js v0.10.29
        * command: install
    c. run grunt bamboo
        * Command task
        * executable: Node.js
        * script: node_modules/grunt-cli/bin/grunt
        * arguments: bamboo
    d. Final Tasks
        1. JUnit Parser
            * Directory: build/report/junit-output.xml
        2. Parse Mocha Results
            * Testfile Pattern: mocha.json
            * Sub Directory: build/report
    e. Artifacts
        1. Coverage Report
            * Location: build/report/coverage
            * copy pattern: \*\*/\*
        2. Plato-Report
            * Location: build/plato
            * copy pattern: \*\*/\*
    f. Miscellaneous
        1. Check User Clover to collect code coverage
        2. clover xml location: build/report/coverage/clover.xml
4. Enable automatic branches if you choose.
5. Enjoy :)