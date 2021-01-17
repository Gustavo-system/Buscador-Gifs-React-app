export const getGifs = async(categoria) =>{
    const urlHttps = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=ZmFOD8u5nINIlarCbA4aLqBDN28ZFZNa`;
    const resp = await fetch(urlHttps);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    
    //console.log(gifs);
    //setImgenes(gifs);
    return gifs;
}