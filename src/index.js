
    let temp = document.getElementById('temp');
    let ville = prompt('choisissez le nom de votre ville : ')
    let selectville = document.getElementById('ville')
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+ville+'&appid=8f91983681d3b66b246d7478ad1d774a&units=metric';
    let ajax = new XMLHttpRequest;
    ajax.responseType = "json";
    ajax.open("GET", url)
    ajax.send();
    ajax.addEventListener("readystatechange", function(){
        if(ajax.readyState === ajax.DONE){
            selectville.innerHTML = ville + ': ';
            temp.innerHTML = ajax.response.main.temp + '°C';
        }
    })