users.sort(function(a, b){
    if(a.someText < b.someText) return -1;
    if(a.someText > b.someText) return 1;
    return 0;
})