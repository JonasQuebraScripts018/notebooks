$("#login").click(enviarLogin);

    $("#matricula").keyup(function(event){
            if(event.key === "Enter"){
               $("senha").focus();
            }
        });

    $("#senha").keyup(function(event){
        if(event.key === "Enter"){
            enviarLogin();
        }
    });

    function enviarLogin(){
    let matricula = $("#matricula").val();
    let senha = $("#senha").val();

    $.ajax({
        type: "POST",
        url: "/Login",
        data:{
            matricula: matricula,
            senha: senha,
        },
        success: function(data){
            if(data){
                window.location.href="/home"
            }else{
                alert("é deu ruim tente novamente!")
            }
        },
        error: function(){
            alert("DEU MUITO RUIM!");
        }
    });
    }