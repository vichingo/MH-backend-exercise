# GraphQL

Create a GraphQL endpoint that reads information from a commit on GitHub and exposes all fields returned by it.

The GitHub endpoint is `https://api.github.com/repos/:owner/:repo/git/commits/:commit_sha`.

Further documentation abou the GitHub API's can be found here:  
<https://developer.github.com/v3/#authentication>  
<https://developer.github.com/v3/git/commits/>  

## Solution

Steps taken:

1. npm init on folder

   `npm init -y`

2. install packages needed

    ```bash
    # eslint to just make it pretty
    npm i apollo-server apollo-datasource-rest graphql eslint

    # nodemon to do some hotreloading
    npm i --save-dev nodemon
    ```

3. create index.js to request data
4. make schema
5. Get data from REST API with resolvers
6. Test by running Appollo server .....

### END

I struggled to get the arguments across in the Appollo server.
