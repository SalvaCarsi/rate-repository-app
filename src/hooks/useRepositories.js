import { useState, useEffect } from 'react'

const useRepositories = () => {
  const [repositories, setRepositories] = useState(null)
  const fetchRepositories = async () => {
    globalThis
      .fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          query: `query Repositories {
                    repositories {
                      edges {
                        node {
                          fullName
                          id
                          language
                          name
                          ownerAvatarUrl
                          ownerName
                          ratingAverage
                          reviewCount
                      }
                    }
                  }
                }`,
          variables: {},
        }),
      })
      .then((res) => res.json())
      .then((result) => {
        setRepositories(result.data)
      })
  }

  useEffect(() => {
    fetchRepositories()
  }, [])

  const repositoriesNodes = repositories
    ? repositories?.repositories?.edges?.map((edge) => edge.node)
    : []

  return { repositories: repositoriesNodes }
}

export { useRepositories }
