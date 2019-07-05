const { ApolloServer, gql } = require("apollo-server");
const fetch = require("node-fetch");

// Example result from get request https://api.github.com/repos/:owner/:repo/git/commits/:commit_sha
/*
    "sha": "5e342581c328f39ebcab3e986652b13cedd2779c",
    "node_id": "MDY6Q29tbWl0MTQ0NDgwMzg1OjVlMzQyNTgxYzMyOGYzOWViY2FiM2U5ODY2NTJiMTNjZWRkMjc3OWM=",
    "url": "https://api.github.com/repos/vichingo/tascman/git/commits/5e342581c328f39ebcab3e986652b13cedd2779c",
    "html_url": "https://github.com/vichingo/tascman/commit/5e342581c328f39ebcab3e986652b13cedd2779c",
    "author": {
        "name": "Milo van Loon",
        "email": "vichingo.sl@gmail.com",
        "date": "2018-08-12T15:54:56Z"
    },
    "committer": {
        "name": "Milo van Loon",
        "email": "vichingo.sl@gmail.com",
        "date": "2018-08-12T15:54:56Z"
    },
    "tree": {
        "sha": "bbfda1a2e5ec92c93e8c1c28658ab3f026834c12",
        "url": "https://api.github.com/repos/vichingo/tascman/git/trees/bbfda1a2e5ec92c93e8c1c28658ab3f026834c12"
    },
    "message": "init",
    "parents": [],
    "verification": {
        "verified": false,
        "reason": "unsigned",
        "signature": null,
        "payload": null
    }
*/

const typeDefs = gql`
  type Commit {
    sha: String!,
    node_id: String!,
    url: String,
    html_url: String
    author: User,
    committer: User,
    tree: Tree,
    message: String,
    parents: [Parents],
    verification: Verification
  }
  type User {
    name: String,
    email: String,
    date: String
  }
  type Tree {
    sha: String,
    url: String
  }
  type Parents {
    sha: String,
    url: String
  }
  type Verification {
    verified: Boolean,
    reason: String,
    signature: String,
    payload: String
  }
  type Query {
    commit: Commit
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
      commit: async(owner, repo, commit_sha) => {
        const res = await fetch("https://api.github.com/repos/${owner}/${repo}/git/commits/${commit_sha}");
        const data = await res.json();
        return data;
      }
    }
  };

const server = new ApolloServer({
    typeDefs,
    resolvers
});
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
});
