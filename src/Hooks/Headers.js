const token = localStorage.getItem('accessToken')

const headers = {
    "Authorization": `Bearer ${token}`,
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}


export { headers }