import axios from 'axios';

export const getApps = () => {
  return (dispatch) => {
    axios.get('./api/apps')
      .then( res => dispatch({ type: 'APPS', apps: res.data}) )
  }
}

export const addApps = (app) => {
  return (dispatch) => {
    axios.post('/api/apps', { app })
      .then( res => dispatch({ type: 'ADD_APP', app: res.data }))
  }
}

export const updateApp = (app) => {
  return (dispatch) => {
    axios.put(`/api/apps/${app.id}`, { app })
      .then( res => dispatch({ type: 'UPDATE_APP', app: res.data }))
  }
}

export const deleteApp = (id) => {
  return (dispatch => {
    axios.delete(`/api/apps/${id}`)
      .then( res => dispatch({ type: 'DELETE_APP', id }))
  })
}
