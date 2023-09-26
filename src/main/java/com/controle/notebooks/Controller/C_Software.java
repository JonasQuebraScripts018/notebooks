package com.controle.notebooks.Controller;

import com.controle.notebooks.Service.S_software;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class C_Software {

    @GetMapping("/cadastro/software")
    public String getcadastro(){
        return "software/cadastro";
    }

    @PostMapping("/cadastro/software")
    @ResponseBody
    public String cadastrarSoftware(@RequestParam("nome") String nome,
                                    @RequestParam("exige_licensa") boolean exige_licensa){
        return S_software.cadastroSoftware(nome, exige_licensa);
    }
}
