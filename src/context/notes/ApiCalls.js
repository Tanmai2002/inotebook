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
// async function postData(url = '', data = {}) {
//   const response = await fetch(url, {
//     method: 'POST', 
//     headers: {
//       'Content-Type': 'application/json'
//     },
//    body: JSON.stringify(data) });

//   return response.json();

// }

export {deleteNoteApi};
export default getAllNotesApi;


