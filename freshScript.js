var x = function(id){
    return document.getElementById(id);
}

var hideShow = function(){
    var addressType = x('addressType').value;
    var hiddenInput = x('otherOption');
    
    if (addressType == 'Other'){
        hiddenInput.style.display = "block";
    } else {
        hiddenInput.style.display = "none";
    }
};


var populateCrusts = function(){
    var handTossed = x('handTossed');
    var thinCrust = x('thinCrust');
    var newYorkStyle = x('nyStyle');
    var glutenFree = x('glutenFree');
    var dropDownSelect = x('crustSizes');
    dropDownSelect.innerHTML = '';
    
    var handTossedPrices = {
        blank: 'Choose a size:',
        small: 'Small $9.99',
        medium:'Medium $12.99',
        large: 'Large $14.99'
    }
    var thinCrustPrices = {
        blank: 'Choose a size:',
        medium: 'Medium $11.99',
        large: 'Large $13.99'
    }
    var newYorkStylePrices = {
        blank: 'Choose a size:',
        large: 'Large $16.99',
        extraLarge: 'Extra Large $19.99'
    }
    var glutenFreePrices = {
        blank: 'Choose a size:',
        small: 'Small $10.99'
    }
    
    if (handTossed.checked){
        var optionArray = handTossedPrices;
    } else if(thinCrust.checked){
       var optionArray = thinCrustPrices;
    } else if(newYorkStyle.checked){
        var optionArray = newYorkStylePrices;
    } else if (glutenFree.checked){
        var optionArray = glutenFreePrices;
    }
    
    for (var price in optionArray){
        var newOptions = document.createElement('option');
        var splitPrice = optionArray[price].split('$');
        newOptions.value = splitPrice[1];
        newOptions.innerHTML = optionArray[price];
        dropDownSelect.options.add(newOptions);
    }

};

/*
var moveTo = function(){
    
    var dropDownOptions = x('crustSizes').value;
    var cheeseDropDown = x('cheeseTypes');
    var cheeseDropDownVal = x('cheeseTypes').value;
    cheeseDropDownVal = '';
    var sauceDropDown = x('sauceTypes');
    
    console.log(dropDownOptions);
    
    if(dropDownOptions == ''){
            cheeseDropDown.disabled = true;
        } else {
            cheeseDropDown.disabled = false;
            //sauceDropDown.disabled = false;
        }
    
    if(cheeseDropDown.changed){
        sauceDropDown.disabled = false;
    } else {
        sauceDropDown.disabled = true;
    }
    
    console.log(cheeseDropDown);
//    
//     if (cheeseDropDownVal == ''){
//            sauceDropDown.disabled = true;
//        } else {
//            sauceDropDown.disabled = false;
//        }
//    
//    x('crustSizes').onchange = moveToCheese;
//
//    var moveToCheese = function(){
//        if(dropDownSelect == ''){
//            cheeseDropDown.disabled = true;
//        } else {
//            cheeseDropDown.disabled = false;
//        }    
//    };
//
//    cheeseDropDown.onchange = moveToSauce;
//
//    var moveToSauce = function(){
//        console.log(cheeseDropDownVal)
//
//        if (cheeseDropDownVal == ''){
//            sauceDropDown.disabled = true;
//        } else {
//            sauceDropDown.disabled = false;
//                }
//    };

    
};
*/

    var moveToCheese = function(){
        var dropDownSelect = x('crustSizes').value;
        var cheeseDropDown = x('cheeseTypes');
        cheeseDropDown.value = 0;
        
        if(dropDownSelect == ''){
            cheeseDropDown.style.display = "none"
        } else {
            cheeseDropDown.style.display = "block";
        }    
        
        console.log(cheeseDropDown.value);
    };


    var moveToSauce = function(){
        var cheeseDropDownVal = x('cheeseTypes').value;
        var sauceDropDown = x('sauceDropDown');
        
        

        if (cheeseDropDownVal == ''){
            sauceDropDown.style.display ="none"
        } else {
            sauceDropDown.style.display = "block";
        }
        
        console.log(cheeseDropDownVal);
    };


            
var submitInfo = function(){
                
        var isValid = true;
                
        var name= x('name').value;
        var addressType = x('addressType').value;
        var addressStreet= x('addressStreet').value;
        var city = x('city').value;
        var state = x('state').value;
        var zip = x('zip').value;
        var phone = x('phone').value;
        var email = x('email').value;
        
        var namePattern = /[a-z \-A-Z]/;
        var zipPattern = /^\d{5}?$/;
        var phonePattern = /^\d{3}-\d{3}-\d{4}$/;
        var statePattern = /^[a-zA-Z]{2}$/;
    
    
    //Validate Name            
        if(name == '' || name == ' '){
            x('name').nextElementSibling.firstChild.nodeValue = 'This field is required.';
            isValid = false;
        } else if( !name.match(namePattern)) {
            x('name').nextElementSibling.firstChild.nodeValue = 'Names must only contain letters.';
            isValid = false;
        } else {
            x('name').nextElementSibling.firstChild.nodeValue = '';
        }
     //Validate Address Type           
        if(addressType == '' || addressType==' '){
            x('addressType').nextElementSibling.firstChild.nodeValue = 'This field is required.';
            isValid = false;
        } else {
            x('addressType').nextElementSibling.firstChild.nodeValue = '';
        }
    //Validate Address Street
        if(addressStreet == '' || addressStreet== ' '){
            x('addressStreet').nextElementSibling.firstChild.nodeValue = 'This field is required';
            isValid = false;
        } else {
            x('addressStreet').nextElementSibling.firstChild.nodeValue = '';
        }
    //Validate City
        if(city == '' || city == ' '){
            x('city').nextElementSibling.firstChild.nodeValue = 'This field is required.';
            isValid = false;
        } else {
            x('city').nextElementSibling.firstChild.nodeValue = '';
        }
    //Validate State
        if(state == '' || state == ' '){
            x('state').nextElementSibling.firstChild.nodeValue = 'This field is required.';
            isValid = false;
        } else if( !state.match(statePattern)){
            x('state').nextElementSibling.firstChild.nodeValue = 'Please format using state abbreviations.'
            isValid = false;
        } else {
            x('state').nextElementSibling.firstChild.nodeValue = '';
        }
    //Validate Zip Code
        if(zip == '' || zip == ' '){
            x('zip').nextElementSibling.firstChild.nodeValue = 'This field is required.';
            isValid = false;
        } else if( !zip.match(zipPattern)){
            x('zip').nextElementSibling.firstChild.nodeValue = 'Please format this zip code using 5 numbers.';
            isValid = false;
        } else {
            x('zip').nextElementSibling.firstChild.nodeValue = '';
        }
    //Validate Phone
        if(phone == '' || phone == ' '){
            x('phone').nextElementSibling.firstChild.nodeValue = 'This field is required.';
            isValid = false;
        } else if (!phone.match(phonePattern)){
            x('phone').nextElementSibling.firstChild.nodeValue = 'Please format this number using this format: 555-555-5555';
            isValid = false;
        } else {
            x('phone').nextElementSibling.firstChild.nodeValue = '';
        }
    //Validate Email 
        var isEmail = function(y){
            var parts = y.split('@');
            var webAddress = "(^[\\w!#$%&'*+/=?^`{|}~-]+(\\.[\\w!#$%&'*+/=?^`{|}~-]+)*$)";
            var quotedText = "(^\"(([^\\\\\"])|(\\\\[\\\\\"]))+\"$)";
            var localPart = new RegExp(webAddress+ "|" +quotedText);
            var hostnames = "(([a-zA-Z0-9]\\.)|([a-zA-Z0-9][-a-zA-Z0-9]{0,62}[a-zA-Z0-9]\\.))+";
            var tld = "[a-zA-Z0-9]{2,6}";
            var domainPart = new RegExp("^"+hostnames+tld+"$");
            
            if (y.length === 0){
                x('email').nextElementSibling.firstChild.nodeValue = 'This field is required.';
                isValid = false;
            }            
            else if (parts.length !== 2) {
                x('email').nextElementSibling.firstChild.nodeValue = 'Your email does not fit the designated format.';
                isValid = false;
            } 
            else if (parts[0].length > 64){
                x('email').nextElementSibling.firstChild.nodeValue = 'Your email does not fit the designated format.';
                isValid = false;
            }
            else if (parts[1].length > 255) {
                x('email').nextElementSibling.firstChild.nodeValue = 'Your email does not fit the designated format.';
                isValid = false;
            }
            else if (!parts[0].match(localPart)){
                x('email').nextElementSibling.firstChild.nodeValue = 'Your email does not fit the designated format.';
                isValid = false;
            }
            else if (!parts[1].match(domainPart)){
                x('email').nextElementSibling.firstChild.nodeValue = 'Your email does not fit the designated format.';
                isValid = false
            } else {
                x('email').nextElementSibling.firstChild.nodeValue = '';
                isValid = true;
            }  
        };
        
        isEmail(email);
    
    
            
        
                
        if(isValid == true){
            x('billingInformation').submit();
        }
};
            
window.onload = function(){
var x = function(id){
    return document.getElementById(id);
}
    x('inputMyInfo').onclick = submitInfo;
    x('addressType').onchange = hideShow;
    x('handTossed').onchange = populateCrusts;
    x('thinCrust').onchange = populateCrusts;
    x('nyStyle').onchange = populateCrusts;
    x('glutenFree').onchange = populateCrusts;
    
    x('crustSizes').onchange = moveToCheese;
    //x('crustSizes').onchange = moveTo;
    x('cheeseDropDown').onchange = moveToSauce;
    
    
};

//x('crustSizes').addEventListener('change', moveToCheese, false);
//x('cheeseDropDown').addEventListener('change', moveToSauce, false);