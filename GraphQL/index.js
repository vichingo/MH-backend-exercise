const { ApolloServer } = require("apollo-server");
const fetch = require("node-fetch");
const typeDefs = require('./schema')



// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
      commit: async(_owner, _repo, _commit_sha) => {
        const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/commits/${commit_sha}`);
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
