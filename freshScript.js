var x = function(id){
    return document.getElementById(id);
}

var hideShow = function(){
    var isValid = true;
    
    var addressType = x('addressType').value;
    var hiddenInput = x('otherOption');
    
    if (addressType == 'Other'){
        hiddenInput.style.display = "block";
    } else {
        hiddenInput.style.display = "none";
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
    
    
                
        if(name == '' || name == ' '){
            x('name').nextElementSibling.firstChild.nodeValue = 'This field is required.';
            isValid = false;
        } else if( !name.match(namePattern)) {
            x('name').nextElementSibling.firstChild.nodeValue = 'Names must only contain letters.';
            isValid = false;
        } else {
            x('name').nextElementSibling.firstChild.nodeValue = '';
        }
                
        if(addressType == '' || addressType==' '){
            x('addressType').nextElementSibling.firstChild.nodeValue = 'This field is required.';
            isValid = false;
        } else {
            x('addressType').nextElementSibling.firstChild.nodeValue = '';
        }
    
        if(addressStreet == '' || addressStreet== ' '){
            x('addressStreet').nextElementSibling.firstChild.nodeValue = 'This field is required';
            isValid = false;
        } else {
            x('addressStreet').nextElementSibling.firstChild.nodeValue = '';
        }
    
        if(city == '' || city == ' '){
            x('city').nextElementSibling.firstChild.nodeValue = 'This field is required.';
            isValid = false;
        } else {
            x('city').nextElementSibling.firstChild.nodeValue = '';
        }
    
        if(state == '' || state == ' '){
            x('state').nextElementSibling.firstChild.nodeValue = 'This field is required.';
            isValid = false;
        } else if( !state.match(statePattern)){
            x('state').nextElementSibling.firstChild.nodeValue = 'Please format using state abbreviations.'
            isValid = false;
        } else {
            x('state').nextElementSibling.firstChild.nodeValue = '';
        }
    
        if(zip == '' || zip == ' '){
            x('zip').nextElementSibling.firstChild.nodeValue = 'This field is required.';
            isValid = false;
        } else if( !zip.match(zipPattern)){
            x('zip').nextElementSibling.firstChild.nodeValue = 'Please format this zip code using 5 numbers.';
            isValid = false;
        } else {
            x('zip').nextElementSibling.firstChild.nodeValue = '';
        }
    
        if(phone == '' || phone == ' '){
            x('phone').nextElementSibling.firstChild.nodeValue = 'This field is required.';
            isValid = false;
        } else if (!phone.match(phonePattern)){
            x('phone').nextElementSibling.firstChild.nodeValue = 'Please format this number using this format: 555-555-5555';
            isValid = false;
        } else {
            x('phone').nextElementSibling.firstChild.nodeValue = '';
        }
    
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
    x('inputMyInfo').onclick = submitInfo;
    x('addressType').onchange = hideShow;
};