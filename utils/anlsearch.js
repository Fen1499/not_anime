query = `query($search: String, $type: MediaType) {
  Media(search: $search ,type: $type) {
    id
    type
    title {
      english
      romaji
      native
    }
    description(asHtml: false)
    format
    episodes
    volumes
    source
    averageScore
    meanScore
    coverImage {
      medium
    }
  }
}`

module.exports = {query}