function ajaxex(){
    const xhr= new XMLHttpRequest();
    
    xhr.onload= function(){
        let xhrData= this.responseText;
        console.log(xhrData);
    }
    xhr.open("GET","new.txt");
    xhr.send();

}
ajaxex();