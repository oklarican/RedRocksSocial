function noPic(url){
    var urlNew="";
    if(url.length >0){
        urlNew="<img src="+url+" width=100%>";
    } else {
        urlNew;
    }
    return urlNew
}