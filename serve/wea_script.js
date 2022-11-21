const subbtn = document.getElementById('subbtn');
const cityname = document.getElementById('cityname');
const city_name = document.getElementById('city_name');
const tempok = document.getElementById('tempok');
const temp_status = document.getElementById('temp_status');
const hidedata = document.querySelector('.middle_layer');


const get = async(event) => {
    event.preventDefault();
    let cityvalue = cityname.value;
    if(cityvalue === ""){
       alert("Enter city name"); 
       hidedata.classList.add('data_hide');
    }
    else{
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&units=metric&appid=a7efb3490257f45fc003dc04f23c3a0c`;
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data);
            const arrData = [data];
            
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            tempok.innerText = arrData[0].main.temp;
            // temp_status.innerText = arrData[0].weather[0].main;
            const tempshow = arrData[0].weather[0].main;
            if(tempshow == "Clouds"){
                temp_status.innerHTML = 
                    "<i class='fas fa-cloud' style = 'color: #f1f2f6;'></i>";
            }
            else if(tempshow == "Rain"){
                temp_status.innerHTML = 
                    "<i class='fas fa-cloud-rain' style = 'color: #a4b0be;'></i>";
            }
            else if(tempshow == "Clear"){
                temp_status.innerHTML = 
                    "<i class='fas fa-sun' style = 'color: #eccc68;'></i>";
            }
            else{
                temp_status.innerHTML = 
                    "<i class='fas fa-cloud' style = 'color: #f1f2f6;'></i>";
            }
            hidedata.classList.remove('data_hide');

        } catch {
            alert("Enter correct city name");
            hidedata.classList.add('data_hide');
        }
    }

}

subbtn.addEventListener('click', get);