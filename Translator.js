async function translate(textoTraducir, selIdioma, idioma){
    opciones = {
        method: 'POST',
        headers : {
            
            'Content-Type': 'application/json'
           
        },
        body : JSON.stringify(
            {"q": textoTraducir,
            "target": idioma,
            "source": selIdioma
        })
    }
    const response = await fetch('https://translation.googleapis.com/language/translate/v2?key=AIzaSyDuuGE6Nz8C9iCWkA88FSpIEHuAPKiJZhc',opciones)
    const data = await response.json()
    console.log(data)
    return data
}

async function probarApi(){
    selIdioma = document.getElementById('selectIdioma').value
    texto = document.getElementById('original').value
    idioma = document.getElementById('lenguaje').value

    translate(texto,selIdioma,idioma).then(function(data){console.log(data)
    document.getElementById("translated").innerText= data.data.translations[0].translatedText
    })
}
