const create = (params) => {
    return fetch('/api/video/' + params.videoId, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then((response) => {
        return response.json()
      }).catch((err) => console.log(err))
  }
  
  const read = (params) => {
    return fetch('/api/videos/' + params.videoId, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((response) => {
      return response.json()
    }).catch((err) => console.log(err))
  }
  
  const remove = (params) => {
    return fetch('/api/videos/' + params.videoId, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((response) => {
      return response.json()
    }).catch((err) => console.log(err))
  }
  
  export {
    create,
    read,
    remove
  }