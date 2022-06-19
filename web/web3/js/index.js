(function(){
    const page1 = document.querySelector("#page1");

    page1.addEventListener("click", function(){
        const content = document.querySelector("#content");
        url = "html/page1.html";
        loader(content,url);
    });

    const page2 = document.querySelector("#page2");

    page2.addEventListener("click", function(){
        const content = document.querySelector("#content");
        url = "html/page2.html";
        loader(content,url);
    });

    const page3 = document.querySelector("#page3");

    page3.addEventListener("click", function(){
        const content = document.querySelector("#content");
        url = "html/page3.html";
        loader(content,url);
    });
})();

//Funciones flecha porque ocupan una flecha para dividir a la función
const loader = (element,url) => {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            element.innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.setRequestHeader("Access-Control-Allow-Origin","*");
    xmlhttp.send(); //para que se ejecute la petición
};