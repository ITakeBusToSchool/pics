import axios from 'axios';

const searchImages = async (term) =>{
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers: {
            Authorization: 'Client-ID 1xo1mpa-T4r4olczyZZOCdbf0y9qsge6Gh2aU6kza6U'
        },
        params: {
            query: term,
        }
    });

    // console.log(response);
    return response.data.results;
};

export default searchImages ;