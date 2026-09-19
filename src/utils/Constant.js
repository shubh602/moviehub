export const SignIn_Bg="https://cinedz.com/browse/images/misc/home-bg.jpg"

const TMDB_TOKEN='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5N2E5ZWQyNmZjNDRkYjRiMjUyOWQ5YTBkMDBiZDdlMCIsIm5iZiI6MTc4OTcxODQzMS4wNjA5OTk5LCJzdWIiOiI2YWFjZWY5ZmJmYTQ4M2UxZDE1YmQyNTciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.UBnTJxF5NdqIjsXz-hzE_rBF14z-nY4ccA8UlxtWKyo';

export const options = {
  method: 'GET',
  headers: {accept: 'application/json', Authorization: `Bearer ${TMDB_TOKEN}`}
};