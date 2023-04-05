let dropdown = document.getElementById('fruit1');

dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'Choice';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

let dropdown2 = document.getElementById('fruit2');
 dropdown2.length = 0;

let defaultOption2 = document.createElement('option');
defaultOption2.text ='Choice';

dropdown2.add(defaultOption2);
dropdown2.selectedIndex = 0;

let dropdown3 = document.getElementById('fruit3');
 dropdown3.length = 0;

let defaultOption3 = document.createElement('option');
defaultOption3.text ='Choice';

dropdown3.add(defaultOption3);
dropdown3.selectedIndex = 0;

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
      	  dropdown.add(option);
       	}    
    
    	for (let i = 0; i < data.length; i++) {
          option2 =     document.createElement('option');
      	  option2.text = data[i].name; 
        
          dropdown2.add(option2);
          
    	} 
       for (let i = 0; i < data.length; i++) {
          option3 =     document.createElement('option');
      	  option3.text = data[i].name; 
        
          dropdown3.add(option3);
      }
      });  
    }  
  )  
  .catch(function(err) {  
    console.error('Fetch Error -', err);  
  });

  function ShowAndHide(){
    var x = document.getElementById('ready');
    if(x.style.display =='none'){
       x.style.display ='block';
    }else{
      x.style.display='none';
    }
  }
  //var count = 0;
  //var button = document.getElementById("submitBtn");
  //var countDisplay = document.getElementById("count");
  //button.onclick = function(){
  //  count++;
    //countDisplay.innerHTML = count;}
  
    // summary of order information

   // var els = new Array();
   // $(".mainForm").each(function(){
    //  els.push ({
     //   label: $(this).find('label').text(),
       // value: $(this).find('input').val()
      //});
    //});

 