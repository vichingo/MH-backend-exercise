const { gql } = require('apollo-server');

const typeDefs = gql`
  type Commit {
    sha: String,
    node_id: String,
    url: String,
    html_url: String
    author: User,
    committer: User,
    tree: Tree,
    message: String,
    parents: [Parents],
    verification: Verification
  }

  scalar Date

  type User {
    name: String,
    email: String,
    date: Date
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
    commit(owner: String, repo: String, commit_sha: String): Commit
  }
`;

module.exports = typeDefs;