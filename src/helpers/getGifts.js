const API_URL = 'https://api.giphy.com/v1/gifs/search';


export const getGifts = async( category ) =>{

    const url = new URL(API_URL);
    url.searchParams.append('q',category);
    url.searchParams.append('limit',10);
    url.searchParams.append('api_key','VnAW0Z0MisIyjQNO4T8igpSht6vgNBhU');

    const dataJson = await fetch(url.href);
    const {data} = await dataJson.json();

    const dataMap = data.map( ( item ) => {

        return{
            id: item.id,
            title: item.title,
            url: item.images['downsized_medium']?.url,
        }
    });

    return dataMap;
}