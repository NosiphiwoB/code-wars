// 1
function alphanumeric(string){
    return /^[0-9a-z]+$/i.test(string)
    }


// 2
 function alphanumeric(string){
        return string.match(/^[A-Za-z0-9]+$/) ? true : false;
      }