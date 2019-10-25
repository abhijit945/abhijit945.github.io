import axios from "axios";

const USER = "abhijit945";
const TOKEN_SEGMENT_PRIMARY = "061cafea78ada32738e";
const TOKEN_SEGMENT_SEC = "95daa602d7ff24be9973a";
const getToken = () => `${TOKEN_SEGMENT_PRIMARY}${TOKEN_SEGMENT_SEC}`;
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
      repositories(first: 100, isFork: false, privacy:PUBLIC, orderBy: {field: CREATED_AT, direction: DESC}) {
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
        Authorization: `BEARER ${getToken()}`
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

const parsePinnedRepositories = data => {
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
  parsePinnedRepositories,
  parseRepoLanguages
};
