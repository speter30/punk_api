var value = "";
const url = 'https://api.punkapi.com/v2/beers';

fetch(url).then(function(response) {
  return response.text()
}).then(function(text) {
  value = text;
  return value;
}).then(function(){
  value = JSON.parse(value)
})

function getInputValue(){
  let searchedValue = document.querySelector('input').value
  let result = []
  for (let i = 0; i < value.length; i++) {
    if (value[i].name === searchedValue) {
      result.push(value[i])
    } 
  }
  if (result.length != 0) {
    for (let i = 0; i < result.length; i++) {
      let beerName = document.createElement("h3")
      beerName.innerHTML = result[i].name
      document.body.appendChild(beerName)

      let tagline = document.createElement("h4")
      tagline.innerHTML = result[i].tagline
      document.body.appendChild(tagline)

      let first_brewed = document.createElement("h5")
      first_brewed.innerHTML = result[i].first_brewed
      document.body.appendChild(first_brewed)

      let description = document.createElement("p")
      description.innerHTML = result[i].description
      document.body.appendChild(description)
    } 
  } else {
    let error = document.createElement("h5")
    error.innerHTML = "No beer was found"
    document.body.appendChild(error)
  }
}

//function getInputCheckBox(){
//  if (document.getElementById('alcohol').checked = true) {
//    let checkedValue = document.getElementById('alcohol')
//  }
//  console.log(checkedValue)
//}
