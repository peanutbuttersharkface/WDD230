let dropdown2 = document.getElementById('fruit2');

dropdown2.length = 0;

let defaultOption2 = document.createElement('option');
defaultOption2.text = 'Choice';

dropdown2.add(defaultOption2);
dropdown2.selectedIndex = 0;

const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

fetch(url)  
  .then(  
    function(response) {  
      if (response.status !== 200) {  
        console.warn('Looks like there was a problem. Status Code: ' + 
          response.status);  
        return;  
      }

      // Examine the text in the response  
      response.json().then(function(data) {  
        let option;
    
    	for (let i = 0; i < data.length; i++) {
          option = document.createElement('option');
      	  option.text = data[i].name;
      	 // option.value = data[i].abbreviation;
      	  dropdown2.add(option);
    	}    
      });  
    }  
  )  
  .catch(function(err) {  
    console.error('Fetch Error -', err);  
  });