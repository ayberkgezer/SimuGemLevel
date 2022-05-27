
const urlApi = ("https://poe.ninja/api/data/itemoverview?league=Sentinel&type=SkillGem")

const options = {
    mode : 'no-cors',
    headers : {

    }
}

 var fetchApi =  fetch(urlApi)
    .then(res => res.json())
    .then(json => {
        var data = json.lines;
        return data;
        //console.log(data);
        }).then((completedata) => {
        var temp = ""
        for (var i = 0; i < completedata.length; i++){
            temp += "<tr class='tbody1'>";
            temp += "<td>" 
            temp +="<div theme='flush'>"
                temp += "<div class='t1body1'>"
                temp += "<div class='t1body2'>"
                    temp += "<img src='" + completedata[i].icon + "' alt='" + completedata[i].icon + "'></div>"
                temp += "<a class='t1bodya'"
                    temp += "<span class='heading-small'>" + completedata[i].name + "</span>"
                "</a>"
                "</div>"
            "</div>" 
            "</td>"
            temp += "<td class = ' text-center heading-small'>" 
            + completedata[i].gemLevel + "</td>"
            temp += "<td class = ' text-center heading-small'>" 
            + completedata[i].gemQuality + "</td>"
            temp += "<td class = ' text-center heading-small'>" 
            + completedata[i].corrupted + "</td>"
            temp += "<td class = 'sorted sorted-desk t1bodyv'>"
            temp += "<span title ='Exalted Orb' style='display: grid; grid: 1fr / min-content min-content 1.5rem; grid-gap: 0.5rem; align-items: center; justify-content: end;' >"
            + completedata[i].exaltedValue + 
                "<img src ='https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyAddModToRare.png?scale=1&w=1&h=1' alt='Exalted' title='Exalted Orb width='47'>"
            "</span>"
            "</td>" 
        }
        document.getElementById("tbodyGems").innerHTML = temp
        })
