$("#cadastroNote").click(cadastrarNote);

function cadastrarNote(){
    let numeroNote = $("#numero").val();
    let patrimonio = $("#patrimonio").val();

    $.ajax({
        type: "POST",
        url: "/cadastroNote",
        data:{
            numero:numeroNote,
            patrimonio:patrimonio,
        },
        success:function(){
            alert("ok");
        },
        error: function(){
            alert("deu ruim lek, complicado");
        }
    });
}