export const openAI_Key=import.meta.env.VITE_openAI_Key;  

export const SignIn_Bg="https://cinedz.com/browse/images/misc/home-bg.jpg"
export const Card_Img_CDN="https://image.tmdb.org/t/p/w500/"



export const options = {
  method: 'GET',
  headers: {accept: 'application/json', Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`}
};


export const chooseLang=[
        {lang:"English",val:"en"},
        {lang:"Hindi",val:"hindi"},
        {lang:"French",val:"french"},
        {lang:"Spanish",val:"spanish"},
        {lang:"Russian",val:"russian"},
      ]

