const button = document.querySelector('.section__button')
const resultWrapper = document.querySelector('.result__wrapper')

 async function fetchImage() {
    button.innerHTML = 'loading...'
     button.disabled = true

     try{
        const imgData = await fetch('https://api.catboys.com/img')
            .then((response)=>response.json())
         if(imgData){
             resultWrapper.innerHTML = ''
             console.log(imgData)
            button.innerHTML = 'Get Picture'
             button.disabled = false

             const imgContainer = document.createElement('div')
             imgContainer.classList.add('result__block','result__block--img-container')

             const img = document.createElement('img')
             img.src = imgData.url

             const artistContainer = document.createElement('div')
             artistContainer.classList.add('result__block')

             const artist = document.createElement('a')
             artist.classList.add('result__link')
             artist.innerHTML = `Artist: ${imgData.artist}`
                 if(imgData.artist === 'unknown'){
                     console.log('aaa')
                     artist.disabled = true
                 }else {
                     artist.href = imgData.artist_url
                     artist.target = '_blank'
                 }

             imgContainer.append(img)
             artistContainer.append(artist)

             resultWrapper.append(imgContainer,artistContainer)
         }

     }
     catch (err){
        console.log(err)
         resultWrapper.innerHTML = 'Something went wrong. Please try again'
     }
}



button.addEventListener('click',fetchImage)