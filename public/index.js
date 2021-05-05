window.onload=function(){
    ucitaj();
    console.log("tufr")
    
}

function ucitaj(){
    $.ajax({
        type: "GET",
        url: `http://localhost:8080/gradovi`,
        success: (data) => {
            var json = JSON.parse(data)
            let tabela = '<ol>';
       
        for(let i of json){
            tabela += "<li>"+i.naziv+"</li>";
        }
        tabela += '</ol>';
        var ispisTabele = document.getElementById("gradovi");
        ispisTabele.innerHTML = tabela;

        },
        error: (err) => console.log(err),
    });
 }
    
 
