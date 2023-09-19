$("#enviar").click(cadastrarUsuario);

function cadastrarUsuario(){
    let nome = $("#nome").val();
    let matricula = $("#matricula").val();
    let email = $("#email").val();
    let cargo = $("#cargo").value;

    $.ajax({
        type: "POST",
        url: "/cadastro",
        data:{
            nome:nome,
            matricula:matricula,
            email:email,
            cargo:cargo,
        },
        success:function(){
            alert("ok");
        },
        error: function(){
            alert("deu ruim lek");
        }
    })
}