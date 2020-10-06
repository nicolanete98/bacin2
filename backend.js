var user1= "holas";
localStorage.lastname = "Smith";
con=document.getElementById("entrar");
user1=document.getElementById('user');
password1=document.getElementById("password");
con.onclick=function(){
    if(String(user1.value)==""||String(password1.value)==""){
        alert("Debe llenar todos los campos")
    }
    else{
    var ajax_url = "http://3.128.209.170/iot/sesion.php";
    var params = "t="+String(user1.value);
    ajax_url += '?' + params;
    var ajax_request = new XMLHttpRequest();
    ajax_request.onreadystatechange = function() {

        // readyState es 4
        if (ajax_request.readyState == 4 && ajax_request.status == 200) {    
            
           try{ // Analizaos el responseText que contendrá el JSON enviado desde el servidor
            var jsonObj = JSON.parse( ajax_request.responseText );
            if(jsonObj[0].contrasena==String(password1.value)){
               
                window.location="http://3.128.209.170/pagina/IMT/intelpro%20app/index2.html";
               


            }
            else{
                alert("Contrasena invalida, intentelo de nuevo")
            }
                        }
            catch(error){
                alert("usuario invalido, intentelo de nuevo")
            } // La variable jsonObj ahora contiene un objeto con los datos recibidos    
        }
    }
    
    ajax_request.open( "GET", ajax_url, true );
    ajax_request.send();
    }
}

