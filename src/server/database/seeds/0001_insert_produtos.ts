import { Knex } from "knex";
import { IProduto } from "../../shared/models";

export const seed = async (knex: Knex) => {
    const [{count}] = await knex('produtos').count<[{count: number}]>('* as count');
    if(!Number.isInteger(count) || Number(count) > 0) return;

    await knex('produtos').insert(produtos);
}

const produtos: Omit<IProduto, 'id'>[] = [
    {
        nome: 'Valorant',
        foto: 'https://notadogame.com/uploads/game/cover/250x/5ec161df463ab.jpg',
        descricao: 'Valorant é um FPS tático 5x5 que tem como objetivo plantar ou desarmar a Spike. Os jogadores têm apenas uma vida por rodada e a partida é vencida pela equipe que ganhar 13 rodadas (de 25) primeiro.',
        categoria: 'jogos',
        valor: 100
    },
    {
        nome: 'Far Cry 6',
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwzFKZIKYNn9gDm1b1ClOMZhx20IMPuBmFTAEZzM8GAnlV8omein0296z28oFxfBWz6qg&usqp=CAU',
        descricao: 'Far Cry® 6 leva os jogadores ao mundo cheio de adrenalina de uma revolução moderna de guerrilha. Como ditador de Yara, Antón Castillo está empenhado em restaurar sua nação de volta à sua antiga glória por qualquer meio, com seu filho, Diego, obedientemente ao seu lado. Torne-se um guerrilheiro e destrua o regime deles.',
        categoria: 'jogos',
        valor: 200,
        promocao: 10
    },
    {
        nome: 'God of War',
        foto: 'https://upload.wikimedia.org/wikipedia/pt/8/82/God_of_War_2018_capa.png',
        descricao: 'Far Cry® 6 leva os jogadores ao mundo cheio de adrenalina de uma revolução moderna de guerrilha. Como ditador de Yara, Antón Castillo está empenhado em restaurar sua nação de volta à sua antiga glória por qualquer meio, com seu filho, Diego, obedientemente ao seu lado. Torne-se um guerrilheiro e destrua o regime deles.',
        categoria: 'jogos',
        valor: 200,
        promocao: 10
    },
    {
        nome: 'Battlefield V',
        foto: 'https://upload.wikimedia.org/wikipedia/pt/1/10/Battlefield_5_capa.png',
        descricao: 'Reviva as batalhas mais acirradas da Segunda Guerra Mundial. Não seja só mais um no campo de batalha com o elenco de Elites e o melhor conteúdo de personalização dos Anos 1 e 2.',
        categoria: 'jogos',
        valor: 80
    },
    {
        nome: 'Fortnite',
        foto: 'https://notadogame.com/uploads/game/cover/150x185/5bfdc4cbe3af4.jpg',
        descricao: 'Fortnite Battle Royale oferece uma batalha de armas de ponta que requer prática, habilidade, trabalho em equipe e reações rápidas.',
        categoria: 'jogos',
        valor: 45
    },
    {
        nome: 'FIFA 23',
        foto: 'https://image.api.playstation.com/vulcan/ap/rnd/202209/2709/NVml0h7plNHgwmLekJWm4Zb3.png',
        descricao: 'O FIFA 23 traz o Desporto Rei para o campo, com a Tecnologia HyperMotion2, os torneios FIFA World Cup™ masculino e feminino, disponíveis ao longo da época, a inclusão de equipas de clubes femininos, funcionalidades de cross-play* integradas e muito mais.',
        categoria: 'jogos',
        valor: 300,
        promocao: 20
    },
    {
        nome: 'Overwatch',
        foto: 'https://upload.wikimedia.org/wikipedia/pt/b/bf/Overwatch_logo.jpg',
        descricao: 'Overwatch designa jogadores em dois times de seis, com cada jogador tendo liberdade em escolher mais de 30 personagens, conhecidos como "heróis", cada um com um estilo de jogo único, dividido em três papéis gerais adequados ao seu objetivo.',
        categoria: 'jogos',
        valor: 30
    },
    {
        nome: 'Dom Casmurro',
        foto: 'https://m.media-amazon.com/images/I/51BxlPc6-sL.jpg',
        descricao: 'Dom Casmurro, a obra mais conhecida do escritor Machado de Assis, conta a história de Bentinho e Capitu, que, apaixonados na adolescência, têm que enfrentar um obstáculo à realização de seus anseios amorosos, pois a mãe de Bentinho, D. Glória, fez uma promessa de que seu filho seria padre.',
        categoria: 'livros',
        valor: 90
    },
    {
        nome: 'Bíblia Sagrada',
        foto: 'https://www.livrarialoyola.com.br/resizer/view/373/373/false/true/460038.jpg',
        descricao: 'A Bíblia é uma coleção ou compilação de livros sagrados, contendo as histórias, doutrinas, códigos e tradições escritas por profetas inspirados pelo espírito de Deus que guiam os cristãos, com base na tradição judaica (Antigo Testamento) e na divulgação do Evangelho (Novo Testamento).',
        categoria: 'livros',
        valor: 25
    },
    {
        nome: 'Os Três Porquinhos',
        foto: 'https://s3.amazonaws.com/img.iluria.com/product/59647F/DA471D/450xN.jpg',
        descricao: 'Em 1890, o conto foi popularizado, depois de ter sido reescrito por Joseph Jacobs. O conto Os Três Porquinhos mostra que o trabalho, esforço e inteligência são recompensados. A criança fica a perceber que a vida não é apenas brincadeira pois surgem dificuldades que têm de ser ultrapassadas.',
        categoria: 'livros',
        valor: 30,
        promocao: 15
    },
    {
        nome: 'Os Miseráveis',
        foto: 'https://m.media-amazon.com/images/I/61hcpcTLq4L._AC_UF350,350_QL50_.jpg',
        descricao: 'Os Miseráveis é considerado uma crítica à desigualdade social e da miséria decorrente de uma sociedade francesa com uma elite totalmente corrupta. De fato, a obra descreve de forma excepcional a injustiça da França. Victor Hugo era um declarado participante político, já tendo atuado como Senador e Deputado.',
        categoria: 'livros',
        valor: 75,
        promocao: 10
    },
    {
        nome: 'Turma da Mônica: Magalancia',
        foto: 'https://www.buobooks.com/wp-content/uploads/2020/10/Megalancia.jpg',
        descricao: 'Magali levou um tombo enquanto carregava uma enorme melancia. A menina caiu dentro de um buraco, mas a Monica achou que a amiga se transformou em melancia!',
        categoria: 'livros',
        valor: 9.99
    },
    {
        nome: 'Diário de um Banana: Rodrick é o Cara',
        foto: 'https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/mp_7531d8c7099000c9b6064ba9d884ead4.jpg',
        descricao: 'Faça o que quiser, só não pergunte a Greg Heffley como foram suas férias de verão, porque ele realmente não quer falar sobre isso. De volta às aulas, Greg está ansioso para enterrar de vez os últimos três meses... e um acontecimento em particular. Mas seu irmão mais velho, Rodrick, não vai deixar que as coisas caiam no esquecimento assim tão fácil. Ele é testemunha de um "pequeno" incidente que Greg quer manter em sigilo. Mas sabe como são os segredos, não é? Logo, logo estão na boca do povo, especialmente quando há um diário envolvido na confusão.',
        categoria: 'livros',
        valor: 30,
        promocao: 30
    },
    {
        nome: 'Peter Pan',
        foto: 'https://m.media-amazon.com/images/I/51xBRI0K7DL.jpg',
        descricao: 'Peter Pan é um menino que vive na ilha de Terra do Nunca. Ele tem um duende que é seu melhor amigo e companheiro e é o atual líder dos Meninos Perdidos. Ele passa a maioria dos dias ir em aventuras e lutando contra o notório Capitão Gancho.',
        categoria: 'livros',
        valor: 80
    },
    {
        nome: 'O Patinho Feio',
        foto: 'https://m.media-amazon.com/images/I/51ZzKM4Gr2L.jpg',
        descricao: 'Um patinho nasce muito diferente dos irmãos. Todos o achavam feio, por ser muito esquisito e desengonçado. Um dia, cansado daquela situação, o patinho foge para bem longe e passa por vários apuros. E, quando chega o verão, descobre sua verdadeira origem!',
        categoria: 'livros',
        valor: 20
    },
    {
        nome: 'Antevidência',
        foto: 'https://kovalpress.com/wp-content/uploads/2020/12/antevidencia-capa-3d-2a-ed-e1652808936944.png',
        descricao: 'Livro instigante. Nos leva a repensar as bases de certas posições filosóficas que naturalmente fazem parte da construção do edifício científico, mas que tem o poder de ofuscar uma compreensão mais profunda e acertada das causas verdadeiras de um dado fenômeno.',
        categoria: 'livros',
        valor: 30,
        promocao: 20
    },
    {
        nome: 'A Revolução dos Bichos',
        foto: 'https://m.media-amazon.com/images/I/51KXvVFa2HL.jpg',
        descricao: 'Verdadeiro clássico moderno, concebido por um dos mais influentes escritores do século XX, A revolução dos bichos é uma fábula sobre o poder. Narra a insurreição dos animais de uma granja contra seus donos. Progressivamente, porém, a revolução degenera numa tirania ainda mais opressiva que a dos humanos.',
        categoria: 'livros',
        valor: 50,
        promocao: 10
    },
    {
        nome: 'A Culpa é das Estrelas',
        foto: 'https://www.aculpaedasestrelas.com.br/wp-content/themes/culpadasestrelas/images/novolivro.png',
        descricao: '"A culpa é das estrelas" narra o romance de dois adolescentes que se conhecem (e se apaixonam) em um Grupo de Apoio para Crianças com Câncer: Hazel, uma jovem de dezesseis anos que sobrevive graças a uma droga revolucionária que detém a metástase em seus pulmões, e Augustus Waters, de dezessete, ex-jogador de basquete que perdeu a perna para o osteosarcoma.',
        categoria: 'livros',
        valor: 90,
        promocao: 10
    },
    {
        nome: 'Sítio do Picapau Amarelo',
        foto: 'https://a-static.mlcdn.com.br/450x450/col-historias-em-quadrinhos-do-sitio-do-picapau-amarelo/educarlivros/16272/90269aaf1fa667b5b7a5e68a4a5e6414.jpeg',
        descricao: 'Cada obra relata aventuras de personagens relacionados ao sítio de Dona Benta. Os personagens principais são Narizinho, Emília, Pedrinho, Visconde, Dona Benta e tia Nastácia. As histórias são marcadas pela aventura, pelo realismo fantástico e apresentam um tom didático.',
        categoria: 'livros',
        valor: 15.99
    },
    {
        nome: 'Romeu e Julieta',
        foto: 'https://www.pergamopapelaria.com.br/mestre/envio/imagens/38404/ROMEU_E_JULIETA.jpg',
        descricao: 'A história de Romeu e Julieta é provavelmente a mais conhecida das tragédias de Shakespeare e não é à toa. A peça envolve temas universais ao apelo de um amor proibido: conflito comunitário e geracional, amor e ódio, vingança e redenção e por aí vai.',
        categoria: 'livros',
        valor: 15.99
    },
    {
        nome: 'Forza Horizon 5',
        foto: 'https://upload.wikimedia.org/wikipedia/pt/d/dc/Capa_de_Forza_Horizon_5.jpg',
        descricao: 'Lidere expedições de tirar o fôlego pelas vibrantes e em constante evolução das paisagens mundiais abertas do México, com ação de direção divertida e ilimitada em centenas dos melhores carros do mundo.',
        categoria: 'jogos',
        valor: 299.99
    },
    {
        nome: 'Call Of Duty: Modern Warfare',
        foto: 'https://bdjogos.com.br/capas/4824-call-of-duty-modern-warfare-capa-1.jpg',
        descricao: 'Viva uma Campanha visceral ou monte sua equipe em uma derradeira experiência online com diversos desafios de Operações Especiais, uma mistura de mapas e modos Multijogador. Você também consegue acesso ao Warzone™, a experiência grátis para jogar no Modern Warfare®.',
        categoria: 'jogos',
        valor: 199.99,
        promocao: 15
    },
    {
        nome: 'Red Dead Redemption 2',
        foto: 'https://upload.wikimedia.org/wikipedia/pt/e/e7/Red_Dead_Redemption_2.png',
        descricao: 'Depois de tudo dar errado em um roubo na cidade de Blackwater, no faroeste, Arthur Morgan e a gangue Van der Linde são obrigados a fugir. Com agentes federais e os melhores caçadores de recompensas no seu encalço, a gangue terá que roubar, assaltar e lutar para sobreviver no implacável coração dos Estados Unidos.',
        categoria: 'jogos',
        valor: 199.99,
        promocao: 25
    },
    {
        nome: 'Grand Theft Auto V',
        foto: 'https://upload.wikimedia.org/wikipedia/pt/8/80/Grand_Theft_Auto_V_capa.png',
        descricao: 'O game se passa no estado ficcional de San Andreas, baseado na Califórnia do Sul, nos EUA. Traz a história de campanha simultânea de três criminosos: o ladrão de bancos aposentado Michael "Mike" De Santa, o gângster de rua Franklin Clinton e o traficante de armas psicopata Trevor Philips.',
        categoria: 'jogos',
        valor: 99.99,
        promocao: 20
    },
    {
        nome: 'UNO',
        foto: 'https://i.pinimg.com/236x/4a/58/08/4a58082caa58edbfd32123879594c304.jpg',
        descricao: 'O objetivo do UNO é ser o primeiro jogador a ficar sem cartas na mão. Para o efeito terá de jogar uma carta de cada vez, que corresponda ao número ou cor da carta jogada anteriormente. Quando tiver apenas uma carta na mão, deverá gritar “UNO”. O jogo termina quando os jogadores ficarem sem cartas na mão.',
        categoria: 'jogos',
        valor: 10
    },
    {
        nome: 'Dragon Ball Xenoverse 2',
        foto: 'https://cdn.cdkeys.com/700x700/media/catalog/product/m/o/mordhau-button-01-1558657551015_12__1.jpg',
        descricao: 'Dragon Ball Xenoverse 2 permite o jogador criar seu próprio guerreiro para aprender novas habilidades e enfrentar novos inimigos, dentro de uma história cativante e cheia de adrenalina para até 6 jogadores online. Está na hora de se transformar em Super Saiyajin!',
        categoria: 'jogos',
        valor: 79.99
    },
    {
        nome: 'Chapéuzinho Vermelho',
        foto: 'https://images.tcdn.com.br/img/img_prod/938111/chapeuzinho_vermelho_meu_livro_favorito_185_1_735e8dd05f093c99dbfe2d00d8127fdb.jpg',
        descricao: 'A história da Chapeuzinho Vermelho, contada há séculos, surgiu na Idade Média, a partir da tradição oral dos camponeses europeus. Conta sobre uma garota que atravessa a floresta para visitar sua avó doente, mas no meio do caminho é enganada por um lobo mau.',
        categoria: 'livros',
        valor: 15.99
    },
    {
        nome: 'João e Maria',
        foto: 'https://www.baixelivros.com.br/media/2019/05/joao-e-maria.jpg',
        descricao: 'Esse conto de fadas de tradição oral e um clássico da literatura infantil relata as aventuras de dois irmãos: João e Maria. Filhos de um lenhador, vivem com o pai e a madrastra perto de um bosque. Como era muito pobres, a mulher teve a ideia de leva-los à parte mais profunda do bosque e abandona-los a própria sorte.',
        categoria: 'livros',
        valor: 15.99,
        promocao: 10
    },
    {
        nome: 'Jogos Vorazes',
        foto: 'https://m.media-amazon.com/images/I/61zBhzjS4LL._AC_UF1000,1000_QL80_.jpg',
        descricao: 'Quando Katniss Everdeen, de 16 anos, decide participar dos Jogos Vorazes para poupar a irmã mais nova, causando grande comoção no país, ela sabe que essa pode ser a sua sentença de morte. Mas a jovem usa toda a sua habilidade de caça e sobrevivência ao ar livre para se manter viva.',
        categoria: 'livros',
        valor: 39.99
    },
    {
        nome: "Mirror's Edge Catalyst",
        foto: 'https://m.media-amazon.com/images/I/81xyGD3-+gL._AC_UF1000,1000_QL80_.jpg',
        descricao: 'Em Mirrors Edge Catalyst você controla Faith, uma Runner livre e ousada, que luta pela sua liberdade na cidade Glass. A cidade aparenta ser altamente desenvolvida por fora, onde todos tem uma boa qualidade de vida, mas esconde um terrível segredo.',
        categoria: 'jogos',
        valor: 99.99,
        promocao: 15
    }
]