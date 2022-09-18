export const fetchMovies = async (url:string) => {
    const response = await fetch(url) 
    const { data } = await response.json()
    console.log(data.length,'count')
    return data  
}


export const createMovie = async (obj) => {
  console.log('posting.....',obj)
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(obj)
  }

  const response = await fetch('http://localhost:3002/api/movies',requestOptions)
  const data = await response.json()
  console.log('post response:', data['status'])
  return data;
}

export const movieCount = async () => {
  const response = await fetch('http://localhost:3002/api/movies') 
  const { data } = await response.json()
  return data  
}

export const filterMoviesGen = (arrObj) => {
    //console.log('Entry', arrObj)

    let uniqueArr = [];
    arrObj.filter((item, index) => {
        item.genres.forEach((gen, index) => {
          if (!uniqueArr.includes(gen)) {
            uniqueArr.push(gen);
          }
        });
       // console.log('Exit', uniqueArr)

        return uniqueArr;
   
      });
}
