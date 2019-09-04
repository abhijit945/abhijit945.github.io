import axios from "axios";

const USER = "abhijit945";
const TOKEN = "26271f1ef9f025acba080eaf3b47c1d48d7f9850";
const GRAPHQL_PROPS = {
  OWNER: "repositoryOwner",
  PINNED_ITEMS: "pinnedItems",
  REPOSITORIES: "repositories",
  EDGES: "edges"
};

const graphQLQuery = `
query {
  repositoryOwner(login: "${USER}") {
    ... on User {
      pinnedItems(first: 6) {
        edges {
          node {
            __typename
            ... on Repository {
              name
              licenseInfo {
                spdxId
              }
              description
              url
              languages(first: 5) {
                nodes {
                  name
                  color
                }
              }
            }
          }
        }
      }
      repositories(first: 100, isFork: false, orderBy: {field: CREATED_AT, direction: DESC}) {
        edges {
          node {
            name
            url
            languages(first: 100) {
              nodes {
                name
                color
              }
            }
          }
        }
      }
    }
  }
}

`;
const getGitHubUserData = query =>
  new Promise((resolve, reject) =>
    axios({
      url: "https://api.github.com/graphql",
      headers: {
        Authorization: `token ${TOKEN}`
      },
      method: "post",
      data: {
        query
      }
    })
      .then(response => {
        if (response.status === 200) {
          resolve(response.data);
        } else {
          resolve([]);
        }
      })
      .catch(err => {
        reject(err);
      })
  );

const parsePinnedRepos = data => {
  if (
    !data ||
    !data[GRAPHQL_PROPS.OWNER] ||
    !data[GRAPHQL_PROPS.OWNER][GRAPHQL_PROPS.PINNED_ITEMS]
  ) {
    return [];
  }
  return data[GRAPHQL_PROPS.OWNER][GRAPHQL_PROPS.PINNED_ITEMS][
    GRAPHQL_PROPS.EDGES
  ];
};

const parseRepoLanguages = data => {
  if (
    !data ||
    !data[GRAPHQL_PROPS.OWNER] ||
    !data[GRAPHQL_PROPS.OWNER][GRAPHQL_PROPS.REPOSITORIES]
  ) {
    return [];
  }
  return data[GRAPHQL_PROPS.OWNER][GRAPHQL_PROPS.REPOSITORIES][
    GRAPHQL_PROPS.EDGES
  ];
};

export {
  graphQLQuery,
  getGitHubUserData,
  parsePinnedRepos,
  parseRepoLanguages
};
