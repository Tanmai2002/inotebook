const host='http://localhost:5000';

async function getAllNotesApi(auth) {
    const url=`${host}/api/notes/allNotes`;
    const response = await fetch(url, {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
        'auth-token' : `${auth}`
      } });
  
    return response.json();
  
  }

  async function deleteNoteApi(auth,id) {

    const url=`${host}/api/notes/deleteNote/${id}`;
    const response = await fetch(url, {
      method: 'DELETE', 
      headers: {
        'Content-Type': 'application/json',
        'auth-token' : `${auth}`
      } });
  
    return response.json();
  
  }
  async function updateNoteApi(auth,id,title,description,tag) {
      const url=`${host}/api/notes/updateNote/${id}`
  const response = await fetch(url, {
    method: 'PUT', 
    headers: {
      'Content-Type': 'application/json',
      'auth-token' : `${auth}`
    },
   body: JSON.stringify({title,description,tag}) });

  return response.json();

}
async function addNoteApi(auth,title,description,tag) {
    const url=`${host}/api/notes/addNote`
  const response = await fetch(url, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
      'auth-token' : `${auth}`
    },
   body: JSON.stringify({title,description,tag}) });

  return response.json();

}



// async function postData(url = '', data = {}) {
//   const response = await fetch(url, {
//     method: 'POST', 
//     headers: {
//       'Content-Type': 'application/json'
//     },
//    body: JSON.stringify(data) });

//   return response.json();

// }

export {deleteNoteApi,updateNoteApi,addNoteApi};
export default getAllNotesApi;

