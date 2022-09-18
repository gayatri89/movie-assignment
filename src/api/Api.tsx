export const fetchMovies = async (url:string) => {
    const response = await fetch("http://localhost:3002/api/movies") 
    const { data } = await response.json()
    return data  
}

/** 
export const createMovie = async () => {
  console.log('posting.....')
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'test from client'
    })
  }

  const response = await fetch('http://localhost:3002/api/movies',requestOptions);
  const data = await response.json();
  console.log('post response:', data)
}
*/

export const filterMoviesGen = (arrObj) => {
    console.log('Entry', arrObj)

    let uniqueArr = [];
    arrObj.filter((item, index) => {
        item.genres.forEach((gen, index) => {
          if (!uniqueArr.includes(gen)) {
            uniqueArr.push(gen);
          }
        });
        console.log('Exit', uniqueArr)

        return uniqueArr;
   
      });
}
