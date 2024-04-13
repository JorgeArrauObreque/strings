
function vocal_common(string){
    if (typeof string == "string" && !isNaN(string) && !string == undefined){
        string = string.trim();
        let a,e,i,o,u = 0
        a = count_character(string,'a');
        e = count_character(string,'e');
        i = count_character(string,'i');
        o = count_character(string,'o');
        u = count_character(string,'u');
        let letras = [{"letter":'a',"count":a},{"letter":'e',"count":e},
        {"letter":'i',"count":i},{"letter":'o',"count":o},
        {"letter":'u',"count":u}]
        
        return letras.find(f=>f.count ==  Math.max(...letras.map((item)=>{
            return item.count;
        })));;
    }

}

console.log( vocal_common("         hooolaa").letter);


function count_character(string,character){

    string = string.toLowerCase();
    character = character.toLowerCase();
    return string.split('').reduce((counter,item)=>{
        return item === character? counter+1:counter;
    },0);
}

function is_string(string){
    if (typeof string == "string" && !isNaN(string) && !string == undefined){
        return true;
    }
}

