import * as queries from "../../src/graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import Amplify from "aws-amplify";
import configuration from "../../src/aws-exports";
import sha from "js-sha512";
Amplify.configure(configuration);
//{
//   aws_appsync_graphqlEndpoint: process.env.REACT_APP_appsync_graphqlEndpoint,
//   aws_appsync_region: process.env.REACT_APP_appsync_region,
//   aws_appsync_authenticationType:
//     process.env.REACT_APP_appsync_authenticationType,
//   aws_appsync_apiKey: process.env.REACT_APP_appsync_apiKey
// });

export default async (req, res) => {
  let raw = {};
  let nextToken = null;
  let results = [];
  res.statusCode = 200;

  if (
    req.method === "GET" &&
    req.query.agentId &&
    req.query.userName &&
    req.query.apiKey &&
    req.query.hash
  ) {
    const agentId = req.query.agentId;
    const userName = req.query.userName;
    const apiKey = req.query.apiKey;
    const hash = req.query.hash;
    if (hash === sha.sha512(userName + apiKey + agentId)) {
      try {
        raw = await API.graphql(
          graphqlOperation(queries.getUser, {
            id: apiKey
          })
        );
      } catch (errors) {
        console.log(errors);
      }
      if (raw.data !== null && raw.data.getUser.userName === userName) {
        raw = await API.graphql(
          graphqlOperation(queries.getAgent, {
            id: agentId
          })
        );

        results.push(raw.data.getAgent);

        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ status: "OK", data: results }));
      } else {
        res.setHeader("Content-Type", "application/json");
        res.end(
          JSON.stringify({ status: "Error", description: "Unauthorized User" })
        );
      }
    } else {
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ status: "Error", description: "Invalid hash" }));
    }
  } else {
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({ status: "Error", description: "Invalid parameters" })
    );
  }
};
