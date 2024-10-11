let nome;
let opcao1;
let opcao2;
let opcao3;
let controle;
let jogo;

function configurarJogo(){
    nome = prompt("Digite seu nome:");
    console.log("Configurando jogo...");
}
function start(){
    do{
       configurarJogo();
       console.log(`O jogo começou ${nome}!\nPolly decide, em uma manhã de sol, ir ao Shopping de Pollyville fazer umas comprinhas!\nPara tanto, ela necessita de sua ajuda para economizar recursos, se divertir ou, pelo menos, conseguir sair de lá com vida!\nVamos lá!!!`);
       faseum();
       fasedois();
       fasetres();
    }while(jogo==1)
}
function faseum(){
    console.log("********************** 1º FASE **********************");
    do{
        console.log("Escolha o que Polly irá fazer:");
        opcao1 = prompt("1: Entrar no Shopping e tomar uma casquinha\n2: Entrar no Shopping e guardar dinheiro para as roupas");
        if(opcao1==1){
            console.log("POLLY ENTRA NO SHOPPING E TOMA UMA CASQUINHA!")
            console.log("ATAQUE DUPLO: PREÇOS EXORBITANTES E AÇÚCAR EM EXCESSO!")
            console.log("Polly perdeu 50 de DINHEIRO!");
            console.log("Polly perdeu 50 de SAÚDE!");
            console.log("Polly perdeu 30 de VIDA!");
            console.log("***STATUS DE POLLY***");
            console.log("VIDA: 70\nDINHEIRO: 50\nSAÚDE: 50");
            controle=1;
        }

        else if(opcao1==2){
            console.log("POLLY ENTRA NO SHOPPING E PASSA LONGE DA CASQUINHA!")
            console.log("POLLY SE SENTE FELIZ POR ECONOMIZAR, MAS ISSO NÃO LHE ACRESCENTA NADA DE SAÚDE MENTAL!")
            console.log("ATAQUE: POLLY PISOU EM UM CACTO DE SHOPPING!")
            console.log("Polly perdeu 50 de VIDA!")
            console.log("***STATUS DE POLLY***");
            console.log("VIDA: 50\nDINHEIRO: 100\nSAÚDE: 100");
            controle=2;
        }

        else{
            console.log("DIGITE UMA OPÇÃO VÁLIDA!");
        }
    }while(opcao1 != 1 && opcao1 != 2);
}

function fasedois(){
    console.log("********************** 2º FASE **********************");
    if(controle==1){
        console.log("Polly perdeu um pouco de dinheiro, saúde e vida, mas não desanime!");
        console.log("Agora ela precisa continuar sua jornada e entrar em uma loja!");}
    else if(controle==2){
        console.log("Polly perdeu um pouco de vida, mas está bem! Por quanto tempo ela se manterá assim?");
        console.log("Agora ela precisa continuar sua jornada e entrar em uma loja!");}
    do{
        if(controle==1){
            console.log("Escolha o que Polly irá fazer:");
            opcao2 = prompt("1: Entrar na loja cara e fashion\n2: Entrar na loja barata");

            if(opcao2 == 1){
                console.log("POLLY ENTRA NA LOJA CARA E FASHION!")
                console.log("ATAQUE: PREÇOS EXORBITANTES! POLLY COMPROU O VESTIDO DE GLITTER!");
                console.log("Polly perdeu 20 de DINHEIRO!")
                console.log("BÔNUS: POLLY RENOVA SUA SAÚDE MENTAL APÓS ESSA AQUISIÇÃO!")
                console.log("Polly ganhou 15 de saúde");
                console.log("***STATUS DE POLLY***");
                console.log("VIDA: 70\nDINHEIRO: 30\nSAÚDE: 65");
                controle=3;
            }
            else if(opcao2 == 2){
                console.log("POLLY ENTRA NA LOJA BARATA!")
                console.log("UAU! POLLY NÃO QUIS NADA E ECONOMIZOU! MAS SUA SAÚDE MENTAL ESTÁ DIMINUINDO!");
                console.log("Polly perdeu 15 de saúde");
                console.log("***STATUS DE POLLY***");
                console.log("VIDA: 70 \nDINHEIRO: 50 \nSAÚDE: 35");
                controle=4;
            }
            else{
                console.log("DIGITE UMA OPÇÃO VÁLIDA!");
            }
        }
        if(controle == 2){
            console.log("Escolha o que Polly irá fazer:");
            opcao2 = prompt("1: Entrar na loja cara e fashion\n2: Entrar na loja barata");
            if(opcao2 == 1){
                console.log("POLLY ENTRA NA LOJA CARA E FASHION!")
                console.log("ATAQUE: PREÇOS EXORBITANTES! POLLY COMPROU O VESTIDO DE GLITTER!");
                console.log("Polly perdeu 20 de DINHEIRO!")
                console.log("POLLY SE SENTE FELIZ, MAS NÃO GANHA NADA DE SAÚDE MENTAL COM ISSO!")
                console.log("***STATUS DE POLLY***");
                console.log("VIDA: 50\nDINHEIRO: 80\nSAÚDE: 100");
                controle=5;
            }
            else if(opcao2 == 2){
                console.log("POLLY ENTRA NA LOJA BARATA!")
                console.log("UAU! POLLY NÃO QUIS NADA E ECONOMIZOU! MAS SUA SAÚDE MENTAL ESTÁ DIMINUINDO!");
                console.log("Polly perdeu 85 de saúde");
                console.log("***STATUS DE POLLY***");
                console.log("VIDA: 50\nDINHEIRO: 100\nSAÚDE: 15");
                controle=6;
            }
            else{
                console.log("DIGITE UMA OPÇÃO VÁLIDA!");
            }
        }
    }while(opcao2 != 1 && opcao2 != 2);
}

function fasetres(){
    console.log("********************** 3º FASE **********************");
    if(controle==3){
        console.log("Polly está fashion, com boa saúde, mas não deixe sua vida acabar!");
        console.log("Vá em frente e enfrente as vendedoras da Loja Fashion");}
    else if(controle==4){
        console.log("Polly está relativamente bem! Mas cuidado com seus inimigos!");
        console.log("Vá em frente e enfrente as vendedoras da Loja Barata");}
    
    else if(controle==5){
        console.log("Polly está bem! Mas cuidado com o que virá pela frente!");
        console.log("Vá em frente e enfrente as vendedoras da Loja Fashion");}
    
    else if(controle==6){
        console.log("Polly está bem! Mas cuidado com o que virá pela frente!");
        console.log("Vá em frente e enfrente as vendedoras da Loja Barata");}
    do{
        if(controle==3){
            console.log("Escolha o que Polly irá fazer:");
            opcao3 = prompt("1: Fugir da vendedora insistente\n2: Seguir os conselhos da vendedora insistente");
            if(opcao3 == 1){
                console.log("POLLY FOGE DA VENDEDORA INSISTENTE!")
                console.log("ATAQUE: OBSTÁCULO ALEATÓRIO! POLLY TROPEÇOU EM UMA ARARA!");
                console.log("Polly perdeu 70 de VIDA!");
                console.log("Polly perdeu 70 de SAÚDE!");
                console.log("POLLY MANTÉM SEU DINHEIRO INTACTO!");
                console.log("***STATUS DE POLLY***");
                console.log("VIDA: 0\nDINHEIRO: 30\nSAÚDE: -5");
                console.log("VOCÊ PERDEU! POLLY PERDEU SUA VIDA!\nTENTE OUTRA VEZ!");
                jogo=prompt("Deseja jogar novamente?\n(1)SIM\n(2)NÃO");
                controle=7;
            }
            else if(opcao3 == 2){
                console.log("POLLY SEGUE AQUILO QUE A VENDEDORA INSISTENTE RECOMENDA!")
                console.log("ATAQUE: PREÇOS EXORBITANTES! POLLY COMPROU UMA CALÇA DE SHOPPING QUE NÃO VALIA NADA!");
                console.log("Polly perdeu 10 de dinheiro");
                console.log("POLLY MANTÉM SUA VIDA E SUA SAÚDE INTACTAS!");
                console.log("***STATUS DE POLLY***");
                console.log("VIDA: 70\nDINHEIRO: 20\nSAÚDE: 65");
                console.log("VOCÊ GANHOU!! JOGUE NOVAMENTE COM A POLLY!");
                jogo=prompt("Deseja jogar novamente?\n(1)SIM\n(2)NÃO");
                controle=8;
            }
            else{
                console.log("DIGITE UMA OPÇÃO VÁLIDA!");
            }
        }
        else if(controle == 4){
            console.log("Escolha o que Polly irá fazer:");
            opcao3 = prompt("1: Fugir da vendedora insistente\n2: Seguir os conselhos da vendedora insistente");
            if(opcao3 == 1){
                console.log("POLLY FOGE DA VENDEDORA INSISTENTE!")
                console.log("ATAQUE: OBSTÁCULO ALEATÓRIO! POLLY TROPEÇOU EM UMA ARARA!");
                console.log("Polly perdeu 70 de VIDA!");
                console.log("Polly perdeu 60 de SAÚDE!");
                console.log("POLLY MANTÉM SEU DINHEIRO INTACTO!");
                console.log("***STATUS DE POLLY***");
                console.log("VIDA: 0\nDINHEIRO: 50\nSAÚDE: -25");
                console.log("VOCÊ PERDEU! POLLY PERDEU SUA VIDA!\nTENTE OUTRA VEZ!");
                jogo=prompt("Deseja jogar novamente?\n(1)SIM\n(2)NÃO");
                controle=9;
            }
            else if(opcao3 == 2){
                console.log("POLLY SEGUE AQUILO QUE A VENDEDORA INSISTENTE RECOMENDA!")
                console.log("ATAQUE: PREÇOS EXORBITANTES! POLLY COMPROU UMA CALÇA DE SHOPPING QUE NÃO VALIA NADA!");
                console.log("Polly perdeu 30 de dinheiro");
                console.log("POLLY MANTÉM SUA VIDA E SUA SAÚDE INTACTAS!");
                console.log("***STATUS DE POLLY***");
                console.log("VIDA: 70\nDINHEIRO: 20\nSAÚDE: 35");
                console.log("VOCÊ GANHOU!! JOGUE NOVAMENTE COM A POLLY!");
                jogo=prompt("Deseja jogar novamente?\n(1)SIM\n(2)NÃO");
                controle=10;
            }
            else{
                console.log("DIGITE UMA OPÇÃO VÁLIDA!");
            }
        }
        else if(controle==5){
            console.log("Escolha o que Polly irá fazer:");
            opcao3 = prompt("1: Fugir da vendedora insistente\n2: Seguir os conselhos da vendedora insistente");
            if(opcao3 == 1){
                console.log("POLLY FOGE DA VENDEDORA INSISTENTE!")
                console.log("ATAQUE: OBSTÁCULO ALEATÓRIO! POLLY TROPEÇOU EM UMA ARARA!");
                console.log("Polly perdeu 50 de VIDA!");
                console.log("Polly perdeu 60 de SAÚDE!");
                console.log("POLLY MANTÉM SEU DINHEIRO INTACTO!");
                console.log("***STATUS DE POLLY***");
                console.log("VIDA: 0\nDINHEIRO: 80\nSAÚDE: 40");
                console.log("VOCÊ PERDEU! POLLY PERDEU SUA VIDA!\nTENTE OUTRA VEZ!");
                jogo=prompt("Deseja jogar novamente?\n(1)SIM\n(2)NÃO");
                controle=9;
            }
            else if(opcao3 == 2){
                console.log("POLLY SEGUE AQUILO QUE A VENDEDORA INSISTENTE RECOMENDA!")
                console.log("ATAQUE: PREÇOS EXORBITANTES! POLLY COMPROU UMA CALÇA DE SHOPPING QUE NÃO VALIA NADA!");
                console.log("Polly perdeu 30 de dinheiro");
                console.log("POLLY MANTÉM SUA VIDA E SUA SAÚDE INTACTAS!");
                console.log("***STATUS DE POLLY***");
                console.log("VIDA: 50\nDINHEIRO: 50\nSAÚDE: 100");
                console.log("VOCÊ GANHOU!! JOGUE NOVAMENTE COM A POLLY!");
                jogo=prompt("Deseja jogar novamente?\n(1)SIM\n(2)NÃO");
                controle=10;
            }
            else{
                console.log("DIGITE UMA OPÇÃO VÁLIDA!");
            }
        }
        else if(controle==6){
            console.log("Escolha o que Polly irá fazer:");
            opcao3 = prompt("1: Fugir da vendedora insistente\n2: Seguir os conselhos da vendedora insistente");
            if(opcao3 == 1){
                console.log("POLLY FOGE DA VENDEDORA INSISTENTE!")
                console.log("ATAQUE: OBSTÁCULO ALEATÓRIO! POLLY TROPEÇOU EM UMA ARARA!");
                console.log("Polly perdeu 50 de VIDA!");
                console.log("Polly perdeu 60 de SAÚDE!");
                console.log("POLLY MANTÉM SEU DINHEIRO INTACTO!");
                console.log("***STATUS DE POLLY***");
                console.log("VIDA: 0\nDINHEIRO: 100\nSAÚDE: -45");
                console.log("VOCÊ PERDEU! POLLY PERDEU SUA VIDA!\nTENTE OUTRA VEZ!");
                jogo=prompt("Deseja jogar novamente?\n(1)SIM\n(2)NÃO");
                controle=9;
            }
            else if(opcao3 == 2){
                console.log("POLLY SEGUE AQUILO QUE A VENDEDORA INSISTENTE RECOMENDA!")
                console.log("ATAQUE: PREÇOS EXORBITANTES! POLLY COMPROU UMA CALÇA DE SHOPPING QUE NÃO VALIA NADA!");
                console.log("Polly perdeu 90 de DINHEIRO");
                console.log("POLLY MANTÉM SUA VIDA E SUA SAÚDE INTACTAS!")
                console.log("***STATUS DE POLLY***");
                console.log("VIDA: 50\nDINHEIRO: 10\nSAÚDE: 15");
                console.log("VOCÊ GANHOU!! JOGUE NOVAMENTE COM A POLLY!");
                jogo=prompt("Deseja jogar novamente?\n(1)SIM\n(2)NÃO");
                controle=10;
            }
            else{
                console.log("DIGITE UMA OPÇÃO VÁLIDA!");
            }
        }
    }while(opcao3 != 1 && opcao3 != 2);
}
