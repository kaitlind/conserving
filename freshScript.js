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


var moveToAll = function(){
    var dropDownSelect = x('crustSizes').value;
    var allAtOnce = x('allAtOnce');
        
    if(dropDownSelect == ''){
        allAtOnce.style.display ="none"
    } else {
        allAtOnce.style.display = "block";
    }    
};


var calculate = function(){
    //Crust Dough and Size
    var sizeDoughPrice = x('crustSizes');
    
    //Cheese values
    var lightCheese = x('lightCheese').value;
    var normalCheese = x('normalCheese').value;
    var extraCheese = x('extraCheese').value;
    var dbleCheese = x('doubleCheese').value;
    
    //Sauce values
    var tomatoSauce = x('regularSauce').value;
    var heartyTomato = x('heartyTomatoSauce').value;
    var bbqSauce = x('bbqSauce').value;
    
    //Toppings values
    var toppings = document.getElementsByName('topping');
    
    //Default Values
    var totalCheese = 0;
    var totalSauce = 0;
    var totalToppings = 0;
    var totalDoughSize= 0;
    
    //HTML Element this appears inside
    var aside = x('totalPrice');
    
    //Size selection
    for (var p = 0; p < sizeDoughPrice.options.length; p++){        
        if (sizeDoughPrice.options[p].selected){
            totalDoughSize += parseFloat(sizeDoughPrice.options[p].value);
        }
    }
        
    
    //Cheese Selection
    if (x('lightCheese').selected){
        totalCheese += parseFloat(lightCheese);
    } else if (x('normalCheese').selected){
        totalCheese += parseFloat(normalCheese);
    } else if (x('extraCheese').selected){
        totalCheese += parseFloat(extraCheese);
    } else if (x('doubleCheese').selected){
        totalCheese += parseFloat(dbleCheese);
    } 
    
    //Sauce Selection
    if (x('regularSauce').selected){
        totalSauce += parseFloat(tomatoSauce);
    } else if (x('heartyTomatoSauce').selected){
        totalSauce += parseFloat(heartyTomato);
    } else if (x('bbqSauce').selected){
        totalSauce += parseFloat(bbqSauce);
    } 
    
    //Toppings Selection
    for (var i=0;i<toppings.length;i++){
        if (toppings[i].checked){
            totalToppings += parseFloat(toppings[i].value);
        }
    }
    
    var grandTotal = eval(totalCheese + totalSauce + totalToppings+totalDoughSize)
    
    if (isNaN(grandTotal)== true){
        aside.innerHTML = 'Total = $0';
    } else {
        aside.innerHTML = 'Total = $' + grandTotal;
    }
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
    
        var handTossedCrust = x('handTossed');
        var thinCrustPizza = x('thinCrust');
        var newYorkCrust = x('nyStyle');
        var glutenFreeCrust = x('glutenFree');
        var sizeValue = x('crustSizes').value;
    
  /*  
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
    //Validate Dough and Size is Checked
        if(handTossedCrust.checked || thinCrustPizza.checked || newYorkCrust.checked || glutenFreeCrust.checked){
            x('crustLabel').nextElementSibling.firstChild.nodeValue = '';
        } else {
            x('crustLabel').nextElementSibling.firstChild.nodeValue = 'This field is required.';
            isValid = false;
        }
    //Validate Size is chosen
        if (sizeValue == '' || sizeValue == ' '){
            x('sizeLabel').nextElementSibling.firstChild.nodeValue = 'This field is required.';
            isValid = false;
        } else {
            x('sizeLabel').nextElementSibling.firstChild.nodeValue = '';
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
        
        isEmail(email);*/
                
        if(isValid == true){
            var done = confirm("Are you sure you're done with your order?");
            if (done == true){

                
                    //x('billingInformation').submit();
                
                var billingDiv = x('invisibleBilling');
                billingDiv.style.display = "block";
                
                //console.log(sameAsDelivery.value)
                
                
            }
        }
};

var autoPopulate = function(){
    var name = x('name').value;
    var addressNumber = x('addressNumber').value;
    var billingName = x('billingName').value;
    var billingAddressStreet = x('billingAddressStreet').value;
    var billingAddressNumber = x('billingAddressNumber').value;
    var billingCity = x('billingCity').value;
    var billingState = x('billingState').value;
    var billingZip = x('billingZip').value;
    var sameAsDelivery = x('sameAsDelivery');
    
    if(sameAsDelivery.checked){
            console.log('a')
            billingName = name;
            billingAddressStreet = addressStreet;
            billingAddressNumber = addressNumber;
        console.log(billingName);
        
            x('billingName').innerHTML= name;

        }
}

var submitEntireForm = function(){
        var isValid = true;
                
        var name= x('name').value;
        var addressType = x('addressType').value;
        var addressStreet= x('addressStreet').value;
        var city = x('city').value;
        var state = x('state').value;
        var zip = x('zip').value;
        var phone = x('phone').value;
        var email = x('email').value;
    
        var billingName = x('billingName').value;
        var billingAddressStreet = x('billingAddressStreet').value;
        var billingAddressNumber = x('billingAddressNumber').value;
        var billingCity = x('billingCity').value;
        var billingState = x('billingState').value;
        var billingZip = x('billingZip').value;
        var ccNum = x('ccNum').value;
        var cvc = x('cvc').value;
        var yearExp = x('yearExp').value;
        var monthExp = x('monthExp').value;
        
        var namePattern = /[a-z \-A-Z]/;
        var zipPattern = /^\d{5}?$/;
        var phonePattern = /^\d{3}-\d{3}-\d{4}$/;
        var statePattern = /^[a-zA-Z]{2}$/;
        var ccPattern = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
        var cvcPattern = /^\d{3}$/;
    
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth();
    console.log(currentMonth + " " + currentYear)
    
//    if(daysMonth && yearTime){
//        
//    }
    
    
     if(billingName == '' || billingName == ' '){
            x('billingName').nextElementSibling.firstChild.nodeValue = 'This field is required.';
            isValid = false;
        } else if( !billingName.match(namePattern)) {
            x('billingName').nextElementSibling.firstChild.nodeValue = 'Names must only contain letters.';
            isValid = false;
        } else {
            x('billingName').nextElementSibling.firstChild.nodeValue = '';
        }
    //Validate Address Street
        if(billingAddressStreet == '' || billingAddressStreet== ' '){
            x('billingAddressStreet').nextElementSibling.firstChild.nodeValue = 'This field is required';
            isValid = false;
        } else {
            x('billingAddressStreet').nextElementSibling.firstChild.nodeValue = '';
        }
    //Validate City
        if(billingCity == '' || billingCity == ' '){
            x('billingCity').nextElementSibling.firstChild.nodeValue = 'This field is required.';
            isValid = false;
        } else {
            x('billingCity').nextElementSibling.firstChild.nodeValue = '';
        }
    //Validate State
        if(billingState == '' || billingState == ' '){
            x('billingState').nextElementSibling.firstChild.nodeValue = 'This field is required.';
            isValid = false;
        } else if( !billingState.match(statePattern)){
            x('billingState').nextElementSibling.firstChild.nodeValue = 'Please format using state abbreviations.'
            isValid = false;
        } else {
            x('billingState').nextElementSibling.firstChild.nodeValue = '';
        }
    //Validate Zip Code
        if(billingZip == '' || billingZip == ' '){
            x('billingZip').nextElementSibling.firstChild.nodeValue = 'This field is required.';
            isValid = false;
        } else if( !billingZip.match(zipPattern)){
            x('billingZip').nextElementSibling.firstChild.nodeValue = 'Please format this zip code using 5 numbers.';
            isValid = false;
        } else {
            x('billingZip').nextElementSibling.firstChild.nodeValue = '';
        }
    //Validate Credit Card
        if(ccNum == '' || ccNum == ' '){
            x('ccNum').nextElementSibling.firstChild.nodeValue = 'This field is required.';
            isValid = false;
        } else if ( !ccNum.match(ccPattern)){
            x('ccNum').nextElementSibling.firstChild.nodeValue = 'Please format using 9999-9999-9999-9999 pattern.';
            isValid = false;
        } else {
            x('ccNum').nextElementSibling.firstChild.nodeValue = '';
        }
    //Validate CVC
        if (cvc == '' || cvc == ' '){
            x('cvc').nextElementSibling.firstChild.nodeValue = 'This field is required.';
            isValid = false;
        } else if (!cvc.match(cvcPattern)){
            x('cvc').nextElementSibling.firstChild.nodeValue = 'The CVC code is the 3 letters on the back of your credit card.';
            isValid = false;
        } else {
            x('cvc').nextElementSibling.firstChild.nodeValue = '';
        }
    //Validate The Year is Filled In
        if ( yearExp == '' || yearExp == ' '){
            x('yearLabel').nextElementSibling.firstChild.nodeValue = 'This field is required.';
            isValid = false;
        } else if (yearExp < currentYear) {
            x('yearLabel').nextElementSibling.firstChild.nodeValue = 'You\'ve chosen a year that has already passed.';
            isValid = false;
        } else {
            x('yearLabel').nextElementSibling.firstChild.nodeValue = '';
        }
    //Validate the Month is Filled In
        if (monthExp == '' || monthExp == ' '){
            x('monthLabel').nextElementSibling.firstChild.nodeValue = 'This field is required.';
            isValid = false;
        } else if (monthExp < currentMonth && yearExp <= currentDate){
            x('monthLabel').nextElementSibling.firstChild.nodeValue = 'You\'ve chosen a date that has already passed.';
            isValid = false;
        } else {
            x('monthLabel').nextElementSibling.firstChild.nodeValue = '';
        }
    
    //Check if it's correctly filled out or not
    if(isValid == true){
        x('billingInformation').submit();
    }
}

            
window.onload = function(){
    x('inputMyInfo').onclick = submitInfo;
    x('addressType').onchange = hideShow;
    x('handTossed').onchange = populateCrusts;
    x('thinCrust').onchange = populateCrusts;
    x('nyStyle').onchange = populateCrusts;
    x('glutenFree').onchange = populateCrusts;
    x('crustSizes').onchange = moveToAll;
    x('pizzaBuilding').onchange = calculate;
    x('sameAsDelivery').onchange = autoPopulate;
    x('submitAll').onclick = submitEntireForm;
};

//x('crustSizes').addEventListener('change', moveToCheese, false);
//x('cheeseDropDown').addEventListener('change', moveToSauce, false);