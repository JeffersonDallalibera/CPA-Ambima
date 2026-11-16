window.CPA_MAPAS_OFICIAIS = [
  {
    "codigoItem": "000140",
    "oficial": true,
    "modulo": 2,
    "cliente": "Claudete",
    "profissional": "Marcos",
    "topicoPD": "Tesouro Prefixado, Tesouro Selic, Tesouro IPCA+, Tesouro Educa+, Tesouro Renda+.",
    "dificuldade": "Média",
    "ano": 2026,
    "limite": 5,
    "etapas": {
      "1": {
        "id": "1",
        "falaCliente": "Marcos, você tem um minutinho? Eu tô ouvindo umas colegas falando desse tal de Tesouro Direto. Disseram que é investimento... do governo? Isso é tipo uma poupança nova?",
        "opcoes": [
          {
            "texto": "Não exatamente. O Tesouro Direto é um programa do governo federal onde você empresta dinheiro e recebe de volta com juros. É considerado de baixo risco e pode render mais que a poupança.",
            "proximo": "2A",
            "peso": 1
          },
          {
            "texto": "É parecido com guardar dinheiro, mas funciona diferente. No Tesouro Direto você aplica em títulos públicos e o governo paga juros. É acessível e tem baixo risco.",
            "proximo": "2A",
            "peso": 1
          },
          {
            "texto": "É quase a mesma coisa que a poupança. O Tesouro Direto é um produto que o banco oferece pra quem quer guardar dinheiro com rendimento.",
            "proximo": "2B",
            "peso": 0
          },
          {
            "texto": "É um pouco técnico. O banco oferece esse investimento, mas costuma ser mais pra quem já conhece o mercado. A poupança é mais simples pra começar.",
            "proximo": "2B",
            "peso": 0
          }
        ]
      },
      "2A": {
        "id": "2A",
        "falaCliente": "Ah, entendi... então eu estaria emprestando pro governo. Mas por que o governo precisa do meu dinheiro? Ele não tem dinheiro suficiente?",
        "opcoes": [
          {
            "texto": "Boa pergunta. O governo capta recursos pra financiar serviços e obras públicas. Em troca, paga juros. Cada título tem um prazo, mas dá pra vender antes se precisar.",
            "proximo": "3A",
            "peso": 1
          },
          {
            "texto": "Isso mesmo. O governo usa esses recursos pra projetos e paga juros a quem investe. É um mecanismo seguro. Tem prazo de vencimento, mas é possível resgatar antes.",
            "proximo": "3A",
            "peso": 1
          },
          {
            "texto": "Na prática é só um jeito de o governo arrecadar mais dinheiro. Quem investe ajuda a financiar os gastos públicos, como impostos.",
            "proximo": "3B",
            "peso": 0
          },
          {
            "texto": "O governo sempre precisa de dinheiro, né? Por isso criou esse programa. Mas eu confesso que não sei explicar muito bem os detalhes técnicos.",
            "proximo": "3B",
            "peso": 0
          }
        ]
      },
      "2B": {
        "id": "2B",
        "falaCliente": "Ah... então o banco é que inventou esse Tesouro Direto? Pensei que fosse coisa do governo. E se é parecido com a poupança, por que eu nunca ouvi falar?",
        "opcoes": [
          {
            "texto": "Ele é do governo federal, não do banco. A gente só intermedia o acesso. Você pode conferir no site oficial do Tesouro. Cada título tem prazo, mas dá pra resgatar antes.",
            "proximo": "3A",
            "peso": 1
          },
          {
            "texto": "É do governo, sim. Bancos e corretoras só fazem a intermediação. É normal não ouvir tanto quanto a poupança, mas é uma opção segura e acessível.",
            "proximo": "3A",
            "peso": 1
          },
          {
            "texto": "O banco começou a oferecer isso recentemente, por isso pouca gente conhece ainda. É um produto relativamente novo no mercado.",
            "proximo": "3B",
            "peso": 0
          },
          {
            "texto": "É uma opção que apareceu faz pouco tempo. Ainda não temos muita experiência com esse produto aqui no banco, por isso não é tão divulgado.",
            "proximo": "3B",
            "peso": 0
          }
        ]
      },
      "3A": {
        "id": "3A",
        "falaCliente": "Entendi... parece interessante. Mas e se eu precisar do dinheiro antes do prazo? Eu posso pegar de volta? Perco alguma coisa?",
        "opcoes": [
          {
            "texto": "Pode sim. O Tesouro recompra diariamente. No Selic a variação é pequena; no IPCA+ e Prefixado pode oscilar mais. Se levar ao vencimento, recebe o combinado.",
            "proximo": "4A",
            "peso": 1
          },
          {
            "texto": "Pode resgatar antes, mas o valor pode variar dependendo do título. O ideal é manter até o vencimento. Existem tipos diferentes, cada um com suas características.",
            "proximo": "4A",
            "peso": 1
          },
          {
            "texto": "Dá pra tirar antes, mas aí você pode não receber tudo o que esperava. Depende muito do momento. É um pouco imprevisível.",
            "proximo": "4B",
            "peso": 0
          },
          {
            "texto": "O ideal é não tirar antes do prazo. Se precisar do dinheiro com urgência, pode ser que não compense. Tem que avaliar bem antes de aplicar.",
            "proximo": "4B",
            "peso": 0
          }
        ]
      },
      "3B": {
        "id": "3B",
        "falaCliente": "Então quer dizer que o governo pode usar meu dinheiro do jeito que quiser... e se der algum problema? Eu posso perder tudo? E se eu precisar resgatar antes?",
        "opcoes": [
          {
            "texto": "O Tesouro tem garantia do governo federal, o menor risco de crédito do país. Dá pra resgatar antes com recompra diária. No Selic a oscilação é menor que em outros títulos.",
            "proximo": "4A",
            "peso": 1
          },
          {
            "texto": "É seguro na prática. O risco existe em qualquer investimento, mas no Tesouro é considerado baixo. Dá pra resgatar antes, e existem tipos diferentes de títulos.",
            "proximo": "4A",
            "peso": 1
          },
          {
            "texto": "O governo costuma pagar direitinho, mas nunca se sabe, né? Se precisar resgatar antes, pode ter alguma variação. Depende do momento.",
            "proximo": "4B",
            "peso": 0
          },
          {
            "texto": "Olha, risco sempre existe em qualquer investimento. Se está insegura, talvez seja melhor esperar um pouco mais antes de decidir qualquer coisa.",
            "proximo": "4B",
            "peso": 0
          }
        ]
      },
      "4A": {
        "id": "4A",
        "falaCliente": "Tá certo. E esses nomes diferentes — Tesouro Selic, IPCA+, Renda+, Educa+ — são tudo a mesma coisa ou cada um serve pra uma coisa diferente?",
        "opcoes": [
          {
            "texto": "São diferentes. Selic é pra liquidez, IPCA+ protege da inflação, Prefixado tem taxa fixa. Renda+ e Educa+ pagam renda mensal futura. Posso mostrar custos e prazos na tela.",
            "proximo": "5A",
            "peso": 1
          },
          {
            "texto": "São diferentes, sim. Uns priorizam liquidez, outros proteção contra inflação ou taxa fixa. O importante é escolher conforme seu objetivo. Dá pra começar com pouco.",
            "proximo": "5A",
            "peso": 1
          },
          {
            "texto": "Mudam os nomes, mas a ideia é parecida: você empresta pro governo e recebe juros. A diferença é mais no prazo e na forma de calcular o rendimento.",
            "proximo": "5B",
            "peso": 0
          },
          {
            "texto": "Confesso que esses nomes confundem um pouco. O mais conhecido é o Selic. Os outros são variações. Posso te passar um material pra você ler em casa.",
            "proximo": "5B",
            "peso": 0
          }
        ]
      },
      "4B": {
        "id": "4B",
        "falaCliente": "Olha, eu ainda acho meio confuso... esses nomes todos — Selic, IPCA+, Renda+, Educa+. Como vou saber se é seguro mesmo?",
        "opcoes": [
          {
            "texto": "Entendo. Todos são emitidos pelo governo federal e comprados por canais oficiais. Eu te mostro passo a passo e você vê taxas, prazos e custos antes de confirmar.",
            "proximo": "5A",
            "peso": 1
          },
          {
            "texto": "É muita informação, eu sei. Mas é seguro e regulado. Se quiser, te mostro onde ficam as taxas na plataforma. Dá pra começar com valor pequeno.",
            "proximo": "5A",
            "peso": 1
          },
          {
            "texto": "É seguro, pode ficar tranquila. O banco cuida de tudo isso pra você. Não precisa entender todos os detalhes, a gente faz a parte complicada.",
            "proximo": "5B",
            "peso": 0
          },
          {
            "texto": "Se você acha confuso, talvez seja melhor ir com calma. A poupança é mais simples de entender. Quando se sentir mais segura, a gente conversa de novo.",
            "proximo": "5B",
            "peso": 0
          }
        ]
      },
      "5A": {
        "id": "5A",
        "falaCliente": "Obrigada pelas explicações. Acho que agora entendi o básico. Por onde eu começo, então, se quiser investir um pouquinho nesse Tesouro Direto?",
        "opcoes": [
          {
            "texto": "Nosso especialista pode te acompanhar nesse processo ou, se preferir, pode fazer direto no app do banco ou no site do Tesouro.",
            "proximo": "END",
            "peso": 1
          },
          {
            "texto": "Ótimo! Você pode começar pelo app do banco ou pelo site do Tesouro. Antes de confirmar, dá pra ver taxas e custos. Te acompanho no primeiro se quiser.",
            "proximo": "END",
            "peso": 1
          },
          {
            "texto": "É só acessar o aplicativo, escolher o título e colocar o valor. O sistema faz o resto. Se tiver dúvida na hora, me chama que eu ajudo.",
            "proximo": "END",
            "peso": 0
          },
          {
            "texto": "É só acessar o app e escolher qualquer um desses títulos. Se der algum problema depois, você me avisa que a gente vê o que fazer.",
            "proximo": "END",
            "peso": 0
          }
        ]
      },
      "5B": {
        "id": "5B",
        "falaCliente": "Ah, acho que esse negócio não é pra mim mesmo... parece complicado. Melhor eu deixar o dinheiro quieto na poupança, né?",
        "opcoes": [
          {
            "texto": "Entendo. Se topar, posso agendar uma reunião com um de nossos especialistas. Ele pode apresentar mais cenários que se adequem ao seu perfil.",
            "proximo": "END",
            "peso": 1
          },
          {
            "texto": "Tudo bem. Quando quiser, a gente conversa de novo. Posso te mandar um resumo simples depois, pra você ver que é mais fácil do que parece.",
            "proximo": "END",
            "peso": 1
          },
          {
            "texto": "A poupança é mais simples mesmo. Se um dia você quiser explorar outras opções, estou à disposição. Não precisa ter pressa.",
            "proximo": "END",
            "peso": 0
          },
          {
            "texto": "Entendo. Cada pessoa tem seu perfil. A poupança é tradicional e você já conhece. Qualquer coisa, estamos aqui. Boa semana!",
            "proximo": "END",
            "peso": 0
          }
        ]
      },
      "END": {
        "id": "END",
        "falaCliente": "[Fim do diálogo]",
        "opcoes": []
      }
    },
    "questoesObjetivas": [
      {
        "numero": 1,
        "enunciado": "Claudete perguntou se o Tesouro Direto era 'tipo uma poupança nova'. Se o gerente tivesse confirmado essa comparação sem ressalvas, a implicação para as expectativas da cliente seria de",
        "alternativas": [
          {
            "texto": "possível surpresa ao descobrir que alguns títulos podem ter valor de resgate inferior ao aplicado, diferente da poupança, que não tem essa variação.",
            "correta": true,
            "justificativa": "O profissional demonstrou capacidade de analisar como uma comparação imprecisa pode gerar expectativas equivocadas sobre o comportamento dos títulos."
          },
          {
            "texto": "expectativa correta, pois o Tesouro Direto funciona exatamente como a poupança em termos de liquidez, rentabilidade e garantias.",
            "correta": false,
            "justificativa": "O profissional não demonstrou conhecimento das diferenças estruturais entre poupança e títulos públicos quanto a risco de mercado e rentabilidade."
          },
          {
            "texto": "benefício para a cliente, pois a simplificação facilita a decisão de investimento sem necessidade de entender detalhes técnicos.",
            "correta": false,
            "justificativa": "O profissional não demonstrou compreensão de que simplificações imprecisas podem induzir decisões inadequadas ao perfil e expectativas do cliente."
          },
          {
            "texto": "nenhuma implicação relevante, pois clientes conservadores como Claudete não precisam conhecer diferenças entre produtos de renda fixa.",
            "correta": false,
            "justificativa": "O profissional não demonstrou compreensão do dever de informação adequada independente do perfil, conforme diretrizes de suitability."
          }
        ],
        "gabaritoComentado": "O profissional demonstrou capacidade de analisar como uma comparação imprecisa pode gerar expectativas equivocadas sobre o comportamento dos títulos."
      },
      {
        "numero": 2,
        "enunciado": "Se Claudete, após investir em Tesouro Selic conforme seu perfil, decidisse também aplicar em Tesouro IPCA+ com vencimento em 8 anos, o risco adicional que ela assumiria, em caso de necessidade de resgate antecipado, seria",
        "alternativas": [
          {
            "texto": "a possibilidade de resgatar valor inferior ao aplicado, pois o IPCA+ tem maior sensibilidade às variações de juros antes do vencimento.",
            "correta": true,
            "justificativa": "O profissional demonstrou capacidade de aplicar o conceito de marcação a mercado, diferenciando o comportamento do IPCA+ em relação ao Selic quanto à volatilidade."
          },
          {
            "texto": "a perda total do valor investido, pois títulos de longo prazo não permitem resgate antes do vencimento pelo Tesouro Nacional.",
            "correta": false,
            "justificativa": "O profissional não demonstrou conhecimento sobre a liquidez diária garantida pelo Tesouro, confundindo restrição de resgate com volatilidade de preço."
          },
          {
            "texto": "a cobrança de multa pelo governo federal, já que o resgate antecipado de títulos indexados à inflação gera penalidade contratual.",
            "correta": false,
            "justificativa": "O profissional não demonstrou conhecimento sobre o funcionamento do Tesouro Direto, inventando penalidade inexistente no programa."
          },
          {
            "texto": "nulo, pois a proteção contra inflação do IPCA+ garante que o valor resgatado seja sempre superior ao aplicado.",
            "correta": false,
            "justificativa": "O profissional não demonstrou compreensão de que a correção pela inflação não elimina o risco de marcação a mercado em resgates antecipados."
          }
        ],
        "gabaritoComentado": "O profissional demonstrou capacidade de aplicar o conceito de marcação a mercado, diferenciando o comportamento do IPCA+ em relação ao Selic quanto à volatilidade."
      }
    ]
  },
  {
    "codigoItem": "000158",
    "oficial": true,
    "modulo": 2,
    "cliente": "Antônio",
    "profissional": "Especialista",
    "topicoPD": "Letra de Crédito do Agronegócio (LCA).",
    "dificuldade": "Média",
    "ano": 2026,
    "limite": 5,
    "etapas": {
      "1": {
        "id": "1",
        "falaCliente": "Boa-tarde! Preciso resgatar 80 mil pra dar um carro de presente para minha neta, que vai fazer 18 anos agora. Tenho uma LCA do CDI e outra do IPCA. Pode me explicar a diferença para me ajudar na decisão?",
        "opcoes": [
          {
            "texto": "A diferença é o indexador: uma acompanha os juros, a outra a inflação mais uma taxa fixa.",
            "proximo": "2A",
            "peso": 1
          },
          {
            "texto": "Uma rende conforme os juros e a outra conforme a inflação. São indexadores diferentes.",
            "proximo": "2A",
            "peso": 1
          },
          {
            "texto": "Posso consultar os valores no sistema e ver qual rendeu mais até agora pra você decidir.",
            "proximo": "2B",
            "peso": 0
          },
          {
            "texto": "As duas são LCAs, então são bem parecidas. A diferença é só na forma de calcular o rendimento.",
            "proximo": "2B",
            "peso": 0
          }
        ]
      },
      "2A": {
        "id": "2A",
        "falaCliente": "Entendi. E na prática, isso muda o quê? Porque vi que a do CDI tá rendendo mais, mas sempre preferi coisas atreladas à inflação. Passei pelos anos 80, né...",
        "opcoes": [
          {
            "texto": "A do IPCA garante inflação mais ganho real. A do CDI acompanha os juros, que costumam subir junto.",
            "proximo": "3A",
            "peso": 1
          },
          {
            "texto": "A do CDI rende mais quando os juros estão altos. A do IPCA protege melhor se a inflação disparar.",
            "proximo": "3A",
            "peso": 1
          },
          {
            "texto": "O CDI tá alto agora, por isso rende mais. A inflação tá controlada, não precisa se preocupar tanto.",
            "proximo": "3B",
            "peso": 0
          },
          {
            "texto": "Hoje em dia a inflação tá bem diferente dos anos 80. O risco de hiperinflação não existe mais.",
            "proximo": "3B",
            "peso": 0
          }
        ]
      },
      "2B": {
        "id": "2B",
        "falaCliente": "Tá, mas não entendi direito. Qual a diferença real entre as duas? Sempre preferi coisa atrelada à inflação por causa dos anos 80, mas minha filha me falou que a do CDI tá rendendo mais.",
        "opcoes": [
          {
            "texto": "A do CDI rende conforme os juros. A do IPCA paga a inflação mais uma taxa fixa, por isso protege direto.",
            "proximo": "3A",
            "peso": 1
          },
          {
            "texto": "Uma segue o CDI, a taxa de juros entre bancos. A outra segue o IPCA, que mede a inflação.",
            "proximo": "3A",
            "peso": 1
          },
          {
            "texto": "Na prática, as duas rendem parecido no longo prazo. A diferença aparece mais no curto prazo.",
            "proximo": "3B",
            "peso": 0
          },
          {
            "texto": "A principal diferença é o prazo de carência. A do CDI costuma ter prazo menor que a do IPCA.",
            "proximo": "3B",
            "peso": 0
          }
        ]
      },
      "3A": {
        "id": "3A",
        "falaCliente": "Então a do IPCA me protege certeiro contra inflação e a do CDI depende do Banco Central subir os juros, é isso?",
        "opcoes": [
          {
            "texto": "Isso. A do IPCA te protege direto. A do CDI depende dos juros acompanharem a inflação.",
            "proximo": "4A",
            "peso": 1
          },
          {
            "texto": "Exato. A do IPCA garante a inflação, a do CDI depende da política monetária do Banco Central.",
            "proximo": "4A",
            "peso": 1
          },
          {
            "texto": "Mais ou menos. As duas acabam te protegendo contra inflação, só que de formas diferentes.",
            "proximo": "4B",
            "peso": 0
          },
          {
            "texto": "Não é bem assim. O CDI sempre acompanha a inflação porque o Banco Central ajusta os juros.",
            "proximo": "4B",
            "peso": 0
          }
        ]
      },
      "3B": {
        "id": "3B",
        "falaCliente": "Deixa eu ver se entendi: a do IPCA me garante a inflação e a do CDI depende de como o Banco Central mexer nos juros?",
        "opcoes": [
          {
            "texto": "Isso. Na do IPCA a proteção é garantida. Na do CDI depende dos juros acompanharem a inflação.",
            "proximo": "4A",
            "peso": 1
          },
          {
            "texto": "Exato. A do IPCA garante a inflação, a do CDI depende da política monetária do Banco Central.",
            "proximo": "4A",
            "peso": 1
          },
          {
            "texto": "Mais ou menos. As duas te protegem contra a inflação, só que de jeitos um pouco diferentes.",
            "proximo": "4B",
            "peso": 0
          },
          {
            "texto": "Não é bem assim. O CDI sempre acompanha a inflação porque o Banco Central ajusta os juros.",
            "proximo": "4B",
            "peso": 0
          }
        ]
      },
      "4A": {
        "id": "4A",
        "falaCliente": "Faz sentido. E dá pra ver quanto cada uma tá rendendo? Queria comparar antes de decidir.",
        "opcoes": [
          {
            "texto": "A do CDI a 92% dá uns 13,8% ao ano. A do IPCA + 5,5% dá uns 9,8%. Hoje a do CDI rende mais.",
            "proximo": "5A",
            "peso": 1
          },
          {
            "texto": "A do CDI dá uns 13,7% ao ano e a do IPCA uns 9,8%. A diferença é por causa dos juros altos.",
            "proximo": "5A",
            "peso": 1
          },
          {
            "texto": "A do CDI tá rendendo mais que a do IPCA no cenário atual, por causa dos juros altos.",
            "proximo": "5B",
            "peso": 0
          },
          {
            "texto": "A do CDI rende mais quando a Selic tá alta, ainda mais no curto prazo igual a sua.",
            "proximo": "5B",
            "peso": 0
          }
        ]
      },
      "4B": {
        "id": "4B",
        "falaCliente": "Tá, mas na prática, quanto cada uma tá rendendo? Queria ver os números antes de decidir.",
        "opcoes": [
          {
            "texto": "A do CDI a 92% dá uns 13,8% ao ano. A do IPCA + 5,5% dá uns 9,8% hoje.",
            "proximo": "5A",
            "peso": 1
          },
          {
            "texto": "A do CDI dá uns 13,7% e a do IPCA uns 9,8% ao ano. Essa diferença é pelo cenário atual.",
            "proximo": "5A",
            "peso": 1
          },
          {
            "texto": "Com os juros atuais, a do CDI tá rendendo mais que a do IPCA no momento.",
            "proximo": "5B",
            "peso": 0
          },
          {
            "texto": "Com a Selic nesse patamar, a do CDI rende mais, ainda mais pensando no curto prazo dela.",
            "proximo": "5B",
            "peso": 0
          }
        ]
      },
      "5A": {
        "id": "5A",
        "falaCliente": "Maravilha, vou tirar da LCA do CDI mesmo. Ela rendeu mais até agora e quero manter a do IPCA pro longo prazo, vai que a inflação volta. Faz o resgate pra mim?",
        "opcoes": [
          {
            "texto": "Consigo sim. Vou fazer o resgate dos 80 mil da LCA CDI. O valor cai na conta em um dia útil.",
            "proximo": "END",
            "peso": 1
          },
          {
            "texto": "Posso fazer agora. Só confirmar: são 80 mil da LCA CDI, certo? Cai na conta em um dia útil.",
            "proximo": "END",
            "peso": 1
          },
          {
            "texto": "Posso fazer. São 80 mil da LCA CDI, né? Vou processar aqui e o dinheiro cai na conta em breve.",
            "proximo": "END",
            "peso": 0
          },
          {
            "texto": "Posso fazer, sim. Mas a do IPCA rendeu menos, talvez fosse melhor resgatar dela. Não quer pensar melhor?",
            "proximo": "END",
            "peso": 0
          }
        ]
      },
      "5B": {
        "id": "5B",
        "falaCliente": "Tá bom. Acho que vou tirar da do CDI mesmo, que rendeu mais. Quero guardar a do IPCA pro futuro, por segurança. Faz o resgate pra mim?",
        "opcoes": [
          {
            "texto": "Claro. Vou resgatar os 80 mil da LCA CDI. O valor fica disponível na conta em um dia útil.",
            "proximo": "END",
            "peso": 1
          },
          {
            "texto": "Faço agora. São 80 mil da LCA CDI, certo? O dinheiro cai na conta normalmente no dia seguinte.",
            "proximo": "END",
            "peso": 1
          },
          {
            "texto": "Claro, vou resgatar da LCA CDI pra você. O dinheiro deve cair na conta nos próximos dias.",
            "proximo": "END",
            "peso": 0
          },
          {
            "texto": "Posso fazer, sim. Mas pense bem: se quer segurança pro futuro, talvez fosse melhor manter a do CDI.",
            "proximo": "END",
            "peso": 0
          }
        ]
      },
      "END": {
        "id": "END",
        "falaCliente": "[Fim do diálogo]",
        "opcoes": []
      }
    },
    "questoesObjetivas": [
      {
        "numero": 1,
        "enunciado": "Se o banco não apresentar taxa de corretagem para a LCA solicitada, o valor bruto a resgatar para atingir o líquido solicitado seria de",
        "alternativas": [
          {
            "texto": "R$ 80.000",
            "correta": true,
            "justificativa": "O profissional demonstrou capacidade de identificar que a LCA é isenta de IR para pessoa física, resultando em bruto igual ao líquido desejado."
          },
          {
            "texto": "R$ 82.000",
            "correta": false,
            "justificativa": "O profissional não demonstrou capacidade de diferenciar a tributação da LCA e do CDB (ou LCA PJ), calculando como se houvesse IR de 22,5% sobre o rendimento."
          },
          {
            "texto": "R$ 82.300",
            "correta": false,
            "justificativa": "O profissional não demonstrou capacidade de distinguir LCA de Tesouro Direto, calculando como se houvesse IR de 22,5% mais taxa de custódia."
          },
          {
            "texto": "R$ 84.200",
            "correta": false,
            "justificativa": "O profissional não demonstrou capacidade de compreender que IOF não incide em LCA."
          }
        ],
        "gabaritoComentado": "O profissional demonstrou capacidade de identificar que a LCA é isenta de IR para pessoa física, resultando em bruto igual ao líquido desejado."
      },
      {
        "numero": 2,
        "enunciado": "Se ambas as LCAs de Antônio tivessem carência mínima regulamentada e tivessem sido contratadas juntas há 7 meses, o resgate solicitado",
        "alternativas": [
          {
            "texto": "ainda seria viável.",
            "correta": true,
            "justificativa": "O profissional demonstrou capacidade de compreender que, após o prazo de carência mínima de 6 meses, as LCAs atreladas ao CDI podem ter liquidez para resgate conforme condições contratuais."
          },
          {
            "texto": "seria viável, mas mudaria de tributação no resgate.",
            "correta": false,
            "justificativa": "O profissional não demonstrou capacidade de identificar que, cumprida a carência mínima de 6 meses, o resgate de LCAs não tem dedução de IR."
          },
          {
            "texto": "seria viável apenas se o cliente topasse resgatar da outra LCA.",
            "correta": false,
            "justificativa": "O profissional não demonstrou capacidade de identificar carência mínima de LCA IPCA, que é de 9 meses."
          },
          {
            "texto": "não seria mais viável.",
            "correta": false,
            "justificativa": "O profissional não demonstrou capacidade de reconhecer que 7 meses de aplicação superam a carência mínima regulamentada de 6 meses para LCAs indexadas ao CDI."
          }
        ],
        "gabaritoComentado": "O profissional demonstrou capacidade de compreender que, após o prazo de carência mínima de 6 meses, as LCAs atreladas ao CDI podem ter liquidez para resgate conforme condições contratuais."
      }
    ]
  },
  {
    "codigoItem": "000314",
    "oficial": true,
    "modulo": 3,
    "cliente": "Alberto",
    "profissional": "Especialista",
    "topicoPD": "Finanças pessoais.",
    "dificuldade": "Média",
    "ano": 2026,
    "limite": 5,
    "etapas": {
      "1": {
        "id": "1",
        "falaCliente": "Oi, obrigado por me atender. Eu tenho percebido que, mesmo me esforçando, meu dinheiro não rende como eu gostaria. Eu não entendo muito de investimentos e fico meio perdido com tantas opções. Por onde eu começo?",
        "opcoes": [
          {
            "texto": "Antes de pensarmos nos investimentos, quero conhecer melhor seus hábitos financeiros e seus objetivos de vida. Assim construímos juntos um plano seguro e rentável.",
            "proximo": "2A",
            "peso": 1
          },
          {
            "texto": "Antes de investir, Alberto, pode me contar um pouco mais sobre gastos? Assim vemos o quanto você pode investir.",
            "proximo": "2A",
            "peso": 1
          },
          {
            "texto": "Alberto, antes de investir, seria interessante entendermos mais sobre as opções de investimento disponíveis. Assim você já tem visibilidade de quanto seu dinheiro pode render.",
            "proximo": "2B",
            "peso": 0
          },
          {
            "texto": "Entendi, Alberto. Posso te apresentar algumas opções de investimento. Assim você já vai aplicando o dinheiro que conseguir poupar.",
            "proximo": "2B",
            "peso": 0
          }
        ]
      },
      "5": {
        "id": "5",
        "falaCliente": "Obrigado pela ajuda até aqui. Sinto que estou começando a entender melhor meus gastos e meus objetivos, mas ainda quero ter certeza de que estou tomando as decisões de investimento certas.",
        "opcoes": [
          {
            "texto": "Podemos revisar sua situação periodicamente e, se precisar, estarei disponível para dúvidas no dia a dia.",
            "proximo": "END",
            "peso": 1
          },
          {
            "texto": "Por ora, o melhor é seguir o plano que traçamos aqui juntos e, em uns 30 dias, falamos de novo para ver como está indo.",
            "proximo": "END",
            "peso": 1
          },
          {
            "texto": "O importante é continuar o que você começou e ir aprendendo aos poucos.",
            "proximo": "END",
            "peso": 0
          },
          {
            "texto": "Não posso garantir resultados, mas, se seguir o que discutimos aqui, provavelmente vai melhorar.",
            "proximo": "END",
            "peso": 0
          }
        ]
      },
      "2A": {
        "id": "2A",
        "falaCliente": "Então, você disse que precisa entender meu perfil financeiro. Eu gasto quase tudo com a família e algumas contas fixas, mas nunca anotei direito quanto entra e quanto sai. Como eu posso começar a me organizar?",
        "opcoes": [
          {
            "texto": "Podemos começar anotando seus gastos por categorias de forma simples, até mesmo em um caderno ou aplicativo gratuito. Depois revisamos juntos.",
            "proximo": "3A",
            "peso": 1
          },
          {
            "texto": "O ideal é usar planilhas detalhadas desde já, assim você saberá ao certo onde está colocando cada centavo. Aí com esse controle a gente define uma meta de poupança.",
            "proximo": "3A",
            "peso": 1
          },
          {
            "texto": "Podemos estabelecer uma meta para você poupar mensalmente, assim não precisa se preocupar com detalhes de gastos, desde que o valor seja alcançado.",
            "proximo": "3B",
            "peso": 0
          },
          {
            "texto": "O ideal é que você passe a poupar o máximo que conseguir a partir de agora, e assim vemos o quanto é possível traçarmos de meta mensal.",
            "proximo": "3B",
            "peso": 0
          }
        ]
      },
      "2B": {
        "id": "2B",
        "falaCliente": "Ok, obrigado. Mas, eu sei que preciso aprender a organizar meu dinheiro e nunca fiz isso. Tenho medo de começar errado e perder o pouco que consigo guardar. Por onde eu começo sem arriscar demais?",
        "opcoes": [
          {
            "texto": "Podemos mapear juntos seus gastos e objetivos, para que você se sinta seguro, e, depois, discutimos opções de investimento.",
            "proximo": "3A",
            "peso": 1
          },
          {
            "texto": "Podemos começar traçando um plano de controle de gastos. Assim você entende pra onde vai seu dinheiro.",
            "proximo": "3A",
            "peso": 1
          },
          {
            "texto": "Podemos começar discutindo opções de investimento adequadas aos seus objetivos e, depois, quanto poupar para cumpri-los.",
            "proximo": "3B",
            "peso": 0
          },
          {
            "texto": "Podemos começar identificando as opções de investimento mais adequadas ao seu perfil e objetivos.",
            "proximo": "3B",
            "peso": 0
          }
        ]
      },
      "3A": {
        "id": "3A",
        "falaCliente": "Agora que comecei a entender meus gastos, percebi que quero guardar dinheiro para pequenas melhorias em casa e também para garantir uma reserva de emergência. Como devo priorizar isso sem comprometer o que já gasto com a família?",
        "opcoes": [
          {
            "texto": "Podemos criar um plano simples para equilibrar esses dois objetivos, definindo metas mensais sem afetar suas despesas essenciais.",
            "proximo": "4A",
            "peso": 1
          },
          {
            "texto": "Entre esses dois objetivos, o mais importante é a reserva de emergência; as melhorias podem esperar.",
            "proximo": "4A",
            "peso": 1
          },
          {
            "texto": "Considerando esses dois objetivos, o mais interessante seria criar uma reserva comum e depois ver como alocar.",
            "proximo": "4B",
            "peso": 0
          },
          {
            "texto": "Independente do objetivo, precisamos planejar o quanto você consegue investir.",
            "proximo": "4B",
            "peso": 0
          }
        ]
      },
      "3B": {
        "id": "3B",
        "falaCliente": "Entendi. Na verdade eu sei que preciso de uma reserva de emergência, mas me sinto perdido com tantas coisas que quero fazer. Não sei se consigo planejar direito. Por onde começo sem me frustrar?",
        "opcoes": [
          {
            "texto": "Podemos começar com pequenas metas focadas na reserva de emergência, e aos poucos, no acompanhamento, vamos incluindo os outros objetivos.",
            "proximo": "4A",
            "peso": 1
          },
          {
            "texto": "Podemos começar com a reserva de emergência que é mais urgente. Quando já tivermos um valor razoável, vemos das outras coisas que quer fazer.",
            "proximo": "4A",
            "peso": 1
          },
          {
            "texto": "Podemos fazer um planejamento considerando todos esses objetivos agora mesmo, aí vemos o que conseguimos atender e, o que não der, a gente replaneja depois.",
            "proximo": "4B",
            "peso": 0
          },
          {
            "texto": "Podemos fazer um planejamento para esses objetivos primeiro e, depois, compomos a reserva de emergência.",
            "proximo": "4B",
            "peso": 0
          }
        ]
      },
      "4A": {
        "id": "4A",
        "falaCliente": "Já tenho uma ideia de quanto posso separar por mês. Mas fico na dúvida sobre como funcionam alguns investimentos mais conservadores",
        "opcoes": [
          {
            "texto": "Posso te explicar produtos simples, falando de risco, liquidez e rendimento. Se quiser, marcamos outro encontro pra detalhar com mais tempo.",
            "proximo": "5",
            "peso": 1
          },
          {
            "texto": "Posso te explicar alternativas de baixo risco e boa liquidez, comparando os benefícios de cada uma pra seu caso.",
            "proximo": "5",
            "peso": 1
          },
          {
            "texto": "Posso compartilhar com você alguns documentos explicativos dos produtos, assim você pode analisar com calma e decidir onde investir.",
            "proximo": "5",
            "peso": 0
          },
          {
            "texto": "Posso te orientar quanto a isso, mas sugiro que primeiro veja o quanto consegue poupar e aí conversamos melhor.",
            "proximo": "5",
            "peso": 0
          }
        ]
      },
      "4B": {
        "id": "4B",
        "falaCliente": "Estou preocupado em escolher errado e acabar perdendo dinheiro. Não sei se consigo entender essas opções de investimento. O que você sugere para alguém como eu?",
        "opcoes": [
          {
            "texto": "Posso explicar as principais alternativas, destacando risco, liquidez e rendimento. Se preferir, um especialista pode fazer uma recomendação personalizada.",
            "proximo": "5",
            "peso": 1
          },
          {
            "texto": "Posso te explicar produtos de menor risco pra você entender os impactos antes de decidir. Um especialista também pode recomendar uma carteira.",
            "proximo": "5",
            "peso": 1
          },
          {
            "texto": "Posso te passar o contato de um especialista que vai te explicar tudo direitinho, assim você saberá quais os investimentos mais seguros e rentáveis.",
            "proximo": "5",
            "peso": 0
          },
          {
            "texto": "Posso explicar pra você os principais investimentos e sugerir alguns produtos adequados ao que conversamos sobre seu perfil.",
            "proximo": "5",
            "peso": 0
          }
        ]
      },
      "END": {
        "id": "END",
        "falaCliente": "Muito obrigado! [Fim do diálogo]",
        "opcoes": []
      }
    },
    "questoesObjetivas": [
      {
        "numero": 1,
        "enunciado": "O diálogo em que Alberto busca orientação reflete principalmente a importância de",
        "alternativas": [
          {
            "texto": "construir relacionamento com o cliente por meio de atendimento e suporte voltados à organização de finanças pessoais.",
            "correta": true,
            "justificativa": "O profissional demonstrou capacidade de Compreender o contexto central do diálogo."
          },
          {
            "texto": "identificar rapidamente produtos financeiros de maior rentabilidade para aumentar o retorno do cliente.",
            "correta": false,
            "justificativa": "O profissional não demonstrou capacidade de Compreender o foco do diálogo, confundindo atendimento com priorização de produtos."
          },
          {
            "texto": "recomendar o estudo aprofundado de todos os tipos de investimentos antes de qualquer ação prática.",
            "correta": false,
            "justificativa": "O profissional não demonstrou capacidade de Compreender, pois interpreta o diálogo como foco em instrução teórica."
          },
          {
            "texto": "garantir resultados financeiros imediatos, independentemente do perfil ou das necessidades do cliente.",
            "correta": false,
            "justificativa": "O profissional não demonstrou capacidade de Conhecer no contexto de atendimento e suporte."
          }
        ],
        "gabaritoComentado": "O profissional demonstrou capacidade de Compreender o contexto central do diálogo."
      },
      {
        "numero": 2,
        "enunciado": "Considerando o diálogo, o perfil de investidor que melhor descreve a situação de Alberto é",
        "alternativas": [
          {
            "texto": "conservador, pois busca preservar o capital, evita riscos e prefere compreender bem antes de investir.",
            "correta": true,
            "justificativa": "O profissional demonstrou capacidade de Compreender o perfil do cliente no contexto de Finanças pessoais."
          },
          {
            "texto": "moderado, pois aceita alguns riscos em troca de rentabilidade maior, desde que balanceados com segurança.",
            "correta": false,
            "justificativa": "O profissional não demonstrou capacidade plena de Compreender, pois superestima a disposição de Alberto ao risco."
          },
          {
            "texto": "agressivo, pois demonstra interesse em aplicações de maior retorno, mesmo que envolvam risco elevado.",
            "correta": false,
            "justificativa": "O profissional não demonstrou capacidade de Compreender, pois interpreta de forma incorreta a cautela de Alberto."
          },
          {
            "texto": "indefinido, pois ainda não há informações suficientes para avaliar seu perfil de risco.",
            "correta": false,
            "justificativa": "O profissional não demonstrou capacidade de Conhecer no contexto de identificação de perfil de investidor."
          }
        ],
        "gabaritoComentado": "O profissional demonstrou capacidade de Compreender o perfil do cliente no contexto de Finanças pessoais."
      }
    ]
  },
  {
    "codigoItem": "000344",
    "oficial": true,
    "modulo": 1,
    "cliente": "Jorge",
    "profissional": "Renato",
    "topicoPD": "Princípio do “conheça seu cliente” – KYC.",
    "dificuldade": "Média",
    "ano": 2026,
    "limite": 5,
    "etapas": {
      "1": {
        "id": "1",
        "falaCliente": "Por que vocês estão pedindo meus documentos de novo? Já trouxe isso há anos. Parece até que estão querendo saber da minha vida toda...",
        "opcoes": [
          {
            "texto": "Jorge, entendo sua dúvida. Isso faz parte do KYC, que significa 'Conheça seu Cliente'. Serve para manter seu cadastro atualizado e garantir segurança contra fraudes. Podemos fazer juntos.",
            "proximo": "2A",
            "peso": 1
          },
          {
            "texto": "Jorge, isso é uma atualização que todos os clientes precisam fazer de tempos em tempos. Faz parte de regras de segurança do banco. É rápido e posso te ajudar agora mesmo.",
            "proximo": "2A",
            "peso": 1
          },
          {
            "texto": "Jorge, isso é uma atualização de cadastro que o banco pede periodicamente. Posso te ajudar a preencher agora mesmo se você tiver os documentos. É rapidinho.",
            "proximo": "2B",
            "peso": 0
          },
          {
            "texto": "Jorge, isso é padrão do sistema, aparece pra todo mundo de tempos em tempos. Vou te mandar o link do aplicativo e você preenche em casa quando puder, é bem tranquilo.",
            "proximo": "2B",
            "peso": 0
          }
        ]
      },
      "2A": {
        "id": "2A",
        "falaCliente": "Tá, eu entendi que é por segurança... mas por que precisa de tanta coisa assim? Foto, documento, comprovante... Às vezes parece até que desconfiam da gente. Eu só trabalho e deposito o dinheiro da loja.",
        "opcoes": [
          {
            "texto": "Claro, Jorge. Esses documentos fazem parte da verificação de identidade. Ajudam a garantir que ninguém use sua conta para golpes ou movimentações indevidas, seguindo diretrizes do Banco Central.",
            "proximo": "3A",
            "peso": 1
          },
          {
            "texto": "Sim, Jorge, você entendeu o ponto principal. A quantidade de documentos é exigência das normas de segurança. Atualizar essas informações ajuda a prevenir uso indevido da sua conta.",
            "proximo": "3A",
            "peso": 1
          },
          {
            "texto": "É tudo exigência do Banco Central, Jorge. Mas é para o seu bem, não se preocupe. Posso te ajudar no preenchimento agora mesmo, se você quiser agilizar isso.",
            "proximo": "3B",
            "peso": 0
          },
          {
            "texto": "É muita coisa mesmo, Jorge, eu entendo. O sistema pede tudo isso automaticamente. Vou registrar aqui que você veio e, se der algum problema, a gente resolve depois.",
            "proximo": "3B",
            "peso": 0
          }
        ]
      },
      "2B": {
        "id": "2B",
        "falaCliente": "Mas pra que passar minhas informações tudo de novo? Acho isso um exagero...",
        "opcoes": [
          {
            "texto": "Jorge, parece que te passaram informações incompletas. As regras de KYC exigem revisão periódica dos dados para manter tudo seguro e cumprir normas de prevenção à lavagem de dinheiro.",
            "proximo": "3A",
            "peso": 1
          },
          {
            "texto": "Entendo sua confusão, Jorge. A atualização dos dados é obrigatória para todos os clientes, mesmo os antigos. Isso ajuda o banco a manter a segurança e seguir as normas.",
            "proximo": "3A",
            "peso": 1
          },
          {
            "texto": "Jorge, o sistema pede essas atualizações de tempos em tempos pra manter o cadastro em dia. Faz parte do processo. Quer que eu te ajude a preencher agora?",
            "proximo": "3B",
            "peso": 0
          },
          {
            "texto": "Entendo, Jorge. Olha, vou verificar no sistema se dá pra adiar esse prazo pra você. Às vezes a gente consegue uma extensão. Me dá um minuto aqui.",
            "proximo": "3B",
            "peso": 0
          }
        ]
      },
      "3A": {
        "id": "3A",
        "falaCliente": "Tá, entendi essa parte da segurança. Mas vocês falam também desse tal de 'risco'. Risco de quê exatamente? Eu só deposito o dinheiro da loja e pago minhas contas.",
        "opcoes": [
          {
            "texto": "Jorge, perfil de risco não significa que você faz algo errado. É uma classificação obrigatória do KYC que analisa sua atividade e movimentações. Como comerciante, seu risco costuma ser baixo.",
            "proximo": "4A",
            "peso": 1
          },
          {
            "texto": "Jorge, esse 'risco' é uma forma de organizar os tipos de clientes. A gente analisa quanto cada um movimenta e que tipo de operação faz, pra entender o perfil e manter a conta segura.",
            "proximo": "4A",
            "peso": 1
          },
          {
            "texto": "Esse 'risco', Jorge, é uma classificação que o banco faz de todos os clientes com base no tipo de conta e movimentação. No seu caso deve estar tudo certo.",
            "proximo": "4B",
            "peso": 0
          },
          {
            "texto": "Jorge, esse risco é calculado pelo sistema com base em vários fatores. No seu caso, como comerciante, não deve ter problema. Mas, se quiser, posso pedir revisão.",
            "proximo": "4B",
            "peso": 0
          }
        ]
      },
      "3B": {
        "id": "3B",
        "falaCliente": "Outra coisa que não entendi... falaram que vocês 'acompanham a conta', mas ninguém explicou direito. Um diz uma coisa, outro diz outra. O que vocês ficam olhando?",
        "opcoes": [
          {
            "texto": "Jorge, é natural essa dúvida. O monitoramento contínuo do KYC verifica se as movimentações estão de acordo com sua atividade declarada, ajudando a cumprir normas de prevenção à lavagem de dinheiro.",
            "proximo": "4A",
            "peso": 1
          },
          {
            "texto": "Entendo que você ouviu informações diferentes, Jorge. Esse acompanhamento garante que sua conta esteja segura e funcionando dentro do esperado para seu tipo de atividade. É procedimento padrão.",
            "proximo": "4A",
            "peso": 1
          },
          {
            "texto": "Esse acompanhamento, Jorge, é uma verificação que o banco faz nas contas pra garantir que está tudo dentro do esperado. É um procedimento padrão de segurança.",
            "proximo": "4B",
            "peso": 0
          },
          {
            "texto": "Jorge, esse acompanhamento é mais interno, pra organização do banco. Pra cliente como você, que movimenta valores normais, não precisa se preocupar com isso.",
            "proximo": "4B",
            "peso": 0
          }
        ]
      },
      "4A": {
        "id": "4A",
        "falaCliente": "Beleza, agora fez mais sentido. Mas uma dúvida prática: se eu não mandar os documentos quando vocês pedem, o que acontece? A conta continua normal ou pode dar problema?",
        "opcoes": [
          {
            "texto": "Ótima pergunta, Jorge. Se a atualização não for feita, as normas de KYC obrigam o banco a restringir serviços e, em alguns casos, bloquear a conta temporariamente.",
            "proximo": "5A",
            "peso": 1
          },
          {
            "texto": "É uma dúvida comum, Jorge. Se você não atualizar, sua conta pode ter limitações depois de um tempo. É algo obrigatório para manter a segurança. Recomendo fazer para evitar complicações.",
            "proximo": "5A",
            "peso": 1
          },
          {
            "texto": "Jorge, se você não atualizar, pode ter alguma limitação na conta depois de um tempo. O ideal é fazer quando pedirem pra evitar qualquer inconveniente.",
            "proximo": "5B",
            "peso": 0
          },
          {
            "texto": "Jorge, o banco sempre manda lembrete antes de qualquer restrição. Então você pode esperar chegar o aviso oficial e aí resolve. Não precisa correr com isso agora.",
            "proximo": "5B",
            "peso": 0
          }
        ]
      },
      "4B": {
        "id": "4B",
        "falaCliente": "Tá, mas ainda não sei o que acontece de verdade. Se eu não mandar nada — cadastro, selfie, documento — o banco faz o quê? Isso afeta aquele negócio de risco ou de acompanhar a conta?",
        "opcoes": [
          {
            "texto": "Jorge, entendo a confusão. Se a atualização não for feita, as regras de KYC obrigam o banco a limitar serviços e até bloquear a conta. Isso garante conformidade com prevenção à lavagem de dinheiro.",
            "proximo": "5A",
            "peso": 1
          },
          {
            "texto": "É normal ficar perdido com tanta informação diferente, Jorge. A atualização é obrigatória e, se não for feita, sua conta pode sofrer limitações. Faz parte das regras de segurança exigidas pelo KYC.",
            "proximo": "5A",
            "peso": 1
          },
          {
            "texto": "Jorge, se a atualização não for feita, a conta pode ter algumas restrições. O prazo varia, mas o melhor é resolver logo pra não ter problema depois.",
            "proximo": "5B",
            "peso": 0
          },
          {
            "texto": "Olha, Jorge, na prática o banco demora bastante pra tomar qualquer medida. Você tem tempo. Se chegar alguma notificação no app, aí sim você corre atrás.",
            "proximo": "5B",
            "peso": 0
          }
        ]
      },
      "5A": {
        "id": "5A",
        "falaCliente": "Entendi melhor agora. Mas uma última dúvida: esse negócio de atualizar cadastro e enviar documentos é algo que vou ter que fazer de tempos em tempos, ou é só agora?",
        "opcoes": [
          {
            "texto": "Ótimo que você trouxe isso, Jorge. O processo pode acontecer periodicamente, pois o KYC exige revisão quando necessário. Faz parte do monitoramento contínuo. Você será avisado com antecedência.",
            "proximo": "END",
            "peso": 1
          },
          {
            "texto": "Essa é uma dúvida bem comum, Jorge. A atualização pode ser solicitada novamente no futuro, conforme regras de segurança. Não é o tempo todo, mas pode acontecer para manter tudo regularizado.",
            "proximo": "END",
            "peso": 1
          },
          {
            "texto": "Jorge, essa atualização pode ser pedida de novo no futuro, mas não é frequente. Geralmente leva um tempo até o banco solicitar novamente. Depende de cada caso.",
            "proximo": "END",
            "peso": 0
          },
          {
            "texto": "Olha, Jorge, depois dessa atualização você fica tranquilo por um bom tempo. Geralmente só pedem de novo se você mudar de endereço ou algo assim.",
            "proximo": "END",
            "peso": 0
          }
        ]
      },
      "5B": {
        "id": "5B",
        "falaCliente": "Pra ser sincero, depois de ouvir explicações tão diferentes, nem sei mais o que é obrigatório. Esse negócio de atualizar cadastro é realmente importante ou só papelada?",
        "opcoes": [
          {
            "texto": "Entendo sua frustração, Jorge. Esses procedimentos são importantes e fazem parte das regras de KYC e prevenção à lavagem de dinheiro. Protegem sua conta e garantem conformidade.",
            "proximo": "END",
            "peso": 1
          },
          {
            "texto": "Essa sensação é comum mesmo, Jorge. Mas esses procedimentos têm função de segurança. Podem parecer burocráticos, mas ajudam a manter sua conta regularizada conforme as exigências.",
            "proximo": "END",
            "peso": 1
          },
          {
            "texto": "Jorge, esses procedimentos fazem parte das regras do setor financeiro. Pode parecer trabalhoso, mas é um padrão que todos os bancos seguem. Faz parte.",
            "proximo": "END",
            "peso": 0
          },
          {
            "texto": "Jorge, entendo sua frustração. Vou fazer o seguinte: registro aqui que você compareceu e conversamos. Se o sistema cobrar de novo, você volta e a gente resolve.",
            "proximo": "END",
            "peso": 0
          }
        ]
      },
      "END": {
        "id": "END",
        "falaCliente": "[Fim do diálogo]",
        "opcoes": []
      }
    },
    "questoesObjetivas": [
      {
        "numero": 1,
        "enunciado": "Dias após a conversa com Renato, Jorge tentou fazer uma transferência para pagar um fornecedor e a operação foi recusada pelo sistema. Considerando o contexto do atendimento, a causa mais provável para o bloqueio é",
        "alternativas": [
          {
            "texto": "restrição aplicada pela instituição por pendência na atualização cadastral.",
            "correta": true,
            "justificativa": "O profissional demonstrou capacidade de relacionar a situação do cliente com as consequências regulatórias discutidas no atendimento sobre KYC."
          },
          {
            "texto": "limite diário de transferência atingido.",
            "correta": false,
            "justificativa": "O profissional não demonstrou capacidade de conectar o bloqueio ao contexto específico do diálogo, atribuindo a causa a limitação operacional genérica."
          },
          {
            "texto": "bloqueio preventivo automático por movimentação atípica.",
            "correta": false,
            "justificativa": "O profissional confundiu monitoramento de movimentações atípicas com as consequências de não atualização cadastral discutidas no atendimento."
          },
          {
            "texto": "instabilidade temporária no sistema bancário.",
            "correta": false,
            "justificativa": "O profissional não demonstrou capacidade de analisar o contexto do diálogo, atribuindo o problema a falha técnica sem relação com KYC."
          }
        ],
        "gabaritoComentado": "O profissional demonstrou capacidade de relacionar a situação do cliente com as consequências regulatórias discutidas no atendimento sobre KYC."
      },
      {
        "numero": 2,
        "enunciado": "Jorge informou que é dono de uma loja de materiais elétricos e que apenas deposita o dinheiro da loja e paga contas. A análise dessa informação no contexto do atendimento indica que",
        "alternativas": [
          {
            "texto": "a atividade declarada serve como referência para o monitoramento contínuo, permitindo ao banco identificar movimentações incompatíveis com o perfil comercial informado.",
            "correta": true,
            "justificativa": "O profissional demonstrou capacidade de analisar como a atividade econômica do cliente se integra ao processo de monitoramento do KYC."
          },
          {
            "texto": "clientes com atividade comercial são automaticamente classificados como alto risco, exigindo atualização cadastral mais frequente que clientes pessoa física comum.",
            "correta": false,
            "justificativa": "O profissional não demonstrou conhecimento de que a classificação de risco considera múltiplos fatores, não apenas o tipo de atividade."
          },
          {
            "texto": "a informação sobre a atividade é meramente cadastral e não influencia o monitoramento da conta nem a classificação de risco do cliente.",
            "correta": false,
            "justificativa": "O profissional não demonstrou compreensão de que a atividade declarada é elemento central para o monitoramento contínuo no KYC."
          },
          {
            "texto": "o banco deve exigir documentação adicional da empresa antes de permitir que Jorge continue utilizando conta de pessoa física para movimentações da loja.",
            "correta": false,
            "justificativa": "O profissional confundiu o contexto do diálogo, que trata de atualização cadastral regular, com questões de adequação de tipo de conta."
          }
        ],
        "gabaritoComentado": "O profissional demonstrou capacidade de analisar como a atividade econômica do cliente se integra ao processo de monitoramento do KYC."
      }
    ]
  },
  {
    "codigoItem": "000147",
    "oficial": true,
    "modulo": 4,
    "cliente": "Arthur",
    "profissional": "Especialista",
    "topicoPD": "Open investment.",
    "dificuldade": "Baixa",
    "ano": 2026,
    "limite": 5,
    "etapas": {
      "1": {
        "id": "1",
        "falaCliente": "Oi... eu ouvi o pessoal do trabalho falando que agora dá pra 'abrir' informações do meu banco pra outros lugares. Não entendi nada disso. Isso é perigoso?",
        "opcoes": [
          {
            "texto": "Boa pergunta, Arthur. Posso te explicar com calma como funciona o compartilhamento autorizado de dados no sistema financeiro e o que isso significa pra você.",
            "proximo": "2A",
            "peso": 1
          },
          {
            "texto": "Fica tranquilo, Arthur. Isso só acontece se você autorizar. É um processo regulado. Se quiser, posso te explicar certinho como funciona.",
            "proximo": "2A",
            "peso": 1
          },
          {
            "texto": "Hoje isso é comum no mercado financeiro. É um sistema regulado, não precisa se preocupar muito. Posso te passar mais informações se quiser.",
            "proximo": "2B",
            "peso": 0
          },
          {
            "texto": "Ah, isso é coisa nova do mercado. Não precisa se preocupar, a maioria dos clientes nem usa. Se um dia você quiser saber mais, a gente conversa.",
            "proximo": "2B",
            "peso": 0
          }
        ]
      },
      "2A": {
        "id": "2A",
        "falaCliente": "Ah, entendi... só funciona se eu deixar. Mas por que outra instituição ia querer ver minhas informações? O que elas ganham com isso?",
        "opcoes": [
          {
            "texto": "Isso mesmo. Elas pedem acesso pra oferecer serviços mais adequados ao seu perfil. Por exemplo: analisar seus investimentos e sugerir opções melhores.",
            "proximo": "3A",
            "peso": 1
          },
          {
            "texto": "Exato, só com sua autorização. Elas usam seus dados pra entender seu perfil e oferecer alternativas mais competitivas, seguindo as regras do sistema.",
            "proximo": "3A",
            "peso": 1
          },
          {
            "texto": "Hoje em dia muita gente compartilha dados financeiros. Ajuda as instituições a conhecer melhor o cliente e oferecer produtos.",
            "proximo": "3B",
            "peso": 0
          },
          {
            "texto": "Na prática, elas usam pra tentar te oferecer produtos delas. Pode ser útil, mas o interesse maior é delas, não seu.",
            "proximo": "3B",
            "peso": 0
          }
        ]
      },
      "2B": {
        "id": "2B",
        "falaCliente": "Entendi... mas ainda fiquei confuso. Se isso é tão comentado, por que nunca me explicaram direito? Eu precisava ter feito alguma coisa ou isso começou agora?",
        "opcoes": [
          {
            "texto": "Isso é novidade no setor. Funciona assim: outras instituições podem, com sua autorização, ver seus dados pra oferecer serviços melhores. Posso explicar mais?",
            "proximo": "3A",
            "peso": 1
          },
          {
            "texto": "É normal não ter ouvido antes, é novidade. Basicamente, você pode autorizar outras instituições a ver seus dados pra comparar ofertas. Quer que eu explique?",
            "proximo": "3A",
            "peso": 1
          },
          {
            "texto": "Talvez não tenham explicado porque nem todo cliente se interessa por isso. É um sistema mais novo, ainda não é tão divulgado.",
            "proximo": "3B",
            "peso": 0
          },
          {
            "texto": "É um assunto mais técnico, nem todo mundo se interessa. Se quiser, posso te passar um material depois pra você ler com calma em casa.",
            "proximo": "3B",
            "peso": 0
          }
        ]
      },
      "3A": {
        "id": "3A",
        "falaCliente": "Tá... então elas querem ver pra me oferecer coisas melhores. Mas me diz: elas só conseguem olhar ou podem mexer no meu dinheiro também?",
        "opcoes": [
          {
            "texto": "É só visualização. O acesso é somente de leitura. Pra movimentar qualquer valor, precisa de outra autorização sua, totalmente separada.",
            "proximo": "4A",
            "peso": 1
          },
          {
            "texto": "É apenas consulta. Elas veem suas informações para análise, mas qualquer movimentação depende de uma autorização específica sua.",
            "proximo": "4A",
            "peso": 1
          },
          {
            "texto": "Em geral é só pra olhar mesmo. Mexer no dinheiro já é outra coisa. Mas cada instituição pode ter algumas diferenças no processo.",
            "proximo": "4B",
            "peso": 0
          },
          {
            "texto": "A princípio é só consulta, mas confesso que os detalhes técnicos variam. O importante é que você sempre pode perguntar antes de autorizar.",
            "proximo": "4B",
            "peso": 0
          }
        ]
      },
      "3B": {
        "id": "3B",
        "falaCliente": "Tá... mas ainda não entendi uma coisa. Se eu autorizar, essas instituições vão poder fazer o quê? Tipo, podem mexer no meu dinheiro?",
        "opcoes": [
          {
            "texto": "Deixa eu esclarecer: é só visualização. Outras instituições só consultam seus dados. Pra movimentar, precisaria de outra autorização específica.",
            "proximo": "4A",
            "peso": 1
          },
          {
            "texto": "Pode ficar tranquilo. O acesso é só pra consulta. Pra mexer no seu dinheiro, precisaria de outra autorização sua, totalmente diferente.",
            "proximo": "4A",
            "peso": 1
          },
          {
            "texto": "Em geral é só pra ver mesmo. Mexer no dinheiro já é outra história, tem outro processo pra isso. Mas cada caso pode variar um pouco.",
            "proximo": "4B",
            "peso": 0
          },
          {
            "texto": "Olha, na teoria é só visualização, mas na prática pode ter algumas variações. O melhor é sempre ler os termos antes de autorizar qualquer coisa.",
            "proximo": "4B",
            "peso": 0
          }
        ]
      },
      "4A": {
        "id": "4A",
        "falaCliente": "Entendi... mas se eu autorizar uma vez, isso fica valendo pra sempre? Posso cancelar quando quiser ou tem um prazo?",
        "opcoes": [
          {
            "texto": "Você define o prazo. Durante esse período, a instituição consulta automaticamente. E você pode cancelar a qualquer momento, sem complicação.",
            "proximo": "5A",
            "peso": 1
          },
          {
            "texto": "Sim, você escolhe o prazo e pode cancelar quando quiser. A revogação é imediata, a instituição perde o acesso na hora.",
            "proximo": "5A",
            "peso": 1
          },
          {
            "texto": "Geralmente tem um prazo definido. Pra cancelar, você acessa a área de autorizações. Mas pode variar um pouco entre instituições.",
            "proximo": "5B",
            "peso": 0
          },
          {
            "texto": "Acho que tem prazo sim, mas pra cancelar pode demorar um pouco. É bom pensar bem antes de autorizar qualquer coisa.",
            "proximo": "5B",
            "peso": 0
          }
        ]
      },
      "4B": {
        "id": "4B",
        "falaCliente": "Certo... mas se eu deixar uma instituição ver minhas informações, depois eu consigo tirar esse acesso? Ou não tem mais volta?",
        "opcoes": [
          {
            "texto": "Você pode cancelar quando quiser. A revogação é imediata e a instituição perde o acesso na hora. Você tem controle total.",
            "proximo": "5A",
            "peso": 1
          },
          {
            "texto": "Sim, dá pra cancelar tranquilamente. Basta acessar a área de autorizações no app ou site e remover o acesso.",
            "proximo": "5A",
            "peso": 1
          },
          {
            "texto": "Acho que dá pra cancelar, mas pode demorar um pouco pra ter efeito. O processo varia de uma instituição pra outra.",
            "proximo": "5B",
            "peso": 0
          },
          {
            "texto": "Cancelar pode ser mais difícil depois que você autoriza. É bom pensar bem antes, porque reverter nem sempre é simples.",
            "proximo": "5B",
            "peso": 0
          }
        ]
      },
      "5A": {
        "id": "5A",
        "falaCliente": "Entendi... então eu tenho controle sobre isso. Mas me diz: se eu usar esse sistema, tem algum benefício prático pra mim?",
        "opcoes": [
          {
            "texto": "Sim. Você pode receber ofertas mais alinhadas ao seu perfil, comparar investimentos com clareza e ter visão unificada do que possui.",
            "proximo": "6A",
            "peso": 1
          },
          {
            "texto": "Provavelmente sim. Ter seus dados organizados facilita comparar opções e entender o que pode melhorar nos seus investimentos.",
            "proximo": "6A",
            "peso": 1
          },
          {
            "texto": "Pode ser que você perceba alguma mudança, mas varia bastante de pessoa pra pessoa. Depende de como você vai usar o sistema.",
            "proximo": "6A",
            "peso": 0
          },
          {
            "texto": "É difícil garantir. Às vezes ajuda bastante, às vezes não muda muita coisa. Depende do seu perfil e de como você usa.",
            "proximo": "6A",
            "peso": 0
          }
        ]
      },
      "5B": {
        "id": "5B",
        "falaCliente": "Entendi... mas com tudo isso, ainda fico pensando: vale a pena usar esse sistema? Tem alguma vantagem real pra mim?",
        "opcoes": [
          {
            "texto": "Sim. Você pode receber ofertas mais alinhadas ao seu perfil e comparar investimentos com mais clareza. Costuma trazer vantagens práticas.",
            "proximo": "6A",
            "peso": 1
          },
          {
            "texto": "Provavelmente sim. Com seus dados organizados, fica mais fácil comparar opções e entender o que pode melhorar nos seus investimentos.",
            "proximo": "6A",
            "peso": 1
          },
          {
            "texto": "Pode ser que você perceba alguma diferença, mas depende bastante de cada caso e de como você vai usar o sistema no dia a dia.",
            "proximo": "6A",
            "peso": 0
          },
          {
            "texto": "É difícil garantir vantagem. Às vezes ajuda bastante, às vezes não muda muita coisa. Depende muito da situação de cada pessoa.",
            "proximo": "6A",
            "peso": 0
          }
        ]
      },
      "6A": {
        "id": "6A",
        "falaCliente": "Certo, agora ficou mais claro. Vou avaliar isso. Obrigado!",
        "proximo": "END",
        "terminal": true,
        "opcoes": []
      },
      "END": {
        "id": "END",
        "falaCliente": "Certo, agora ficou mais claro. Vou avaliar isso. Obrigado! [Fim do diálogo]",
        "opcoes": []
      }
    },
    "questoesObjetivas": [
      {
        "numero": 1,
        "enunciado": "Arthur questionou se precisaria enviar seus dados repetidamente após autorizar o compartilhamento. A análise correta sobre o funcionamento das consultas autorizadas no Open Finance é de que",
        "alternativas": [
          {
            "texto": "as consultas, após a autorização, ocorrem automaticamente durante o prazo definido pelo cliente, sem necessidade de reenvio manual de informações.",
            "correta": true,
            "justificativa": "Correta: aplica o conceito do diálogo a uma análise de entendimento, e não à explicação técnica já avaliada."
          },
          {
            "texto": "o cliente precisa confirmar cada consulta individualmente através do aplicativo da instituição de origem para garantir a segurança.",
            "correta": false,
            "justificativa": "Incorreta: não existe período de transição de acesso."
          },
          {
            "texto": "as consultas automáticas dependem de acordos bilaterais entre as instituições, podendo funcionar de formas diferentes em cada caso.",
            "correta": false,
            "justificativa": "Incorreta: cria barreiras inexistentes e assusta o cliente."
          },
          {
            "texto": "o compartilhamento ocorre em lotes periódicos definidos pelo regulador, geralmente uma vez por semana ou por mês.",
            "correta": false,
            "justificativa": "Incorreta: revogação não está ligada ao encerramento de relacionamento."
          }
        ],
        "gabaritoComentado": "Correta: aplica o conceito do diálogo a uma análise de entendimento, e não à explicação técnica já avaliada."
      },
      {
        "numero": 2,
        "enunciado": "Se Arthur autorizasse o compartilhamento de dados e posteriormente a instituição receptora encerrasse suas atividades, a análise correta sobre o tratamento dos dados compartilhados seria de que",
        "alternativas": [
          {
            "texto": "a instituição deve seguir as normas de encerramento que incluem descarte seguro dos dados, e o consentimento se extingue automaticamente.",
            "correta": true,
            "justificativa": "Correta: reforça pluralidade metodológica e autonomia do cliente, sem repetir avaliação do diálogo."
          },
          {
            "texto": "os dados são automaticamente transferidos para a instituição de origem, que passa a armazená-los em nome do cliente.",
            "correta": false,
            "justificativa": "Incorreta: confunde padronização de dados com padronização de análise."
          },
          {
            "texto": "o cliente precisa solicitar formalmente a devolução dos dados antes do encerramento, caso contrário perderá acesso a eles.",
            "correta": false,
            "justificativa": "Incorreta: atualização não determina qualidade analítica."
          },
          {
            "texto": "a instituição sucessora, se houver, herda automaticamente todos os consentimentos vigentes junto com a carteira de clientes.",
            "correta": false,
            "justificativa": "Incorreta: contraria interoperabilidade e competitividade do mercado."
          }
        ],
        "gabaritoComentado": "Correta: reforça pluralidade metodológica e autonomia do cliente, sem repetir avaliação do diálogo."
      }
    ]
  },
  {
    "codigoItem": "000412",
    "oficial": false,
    "modulo": 2,
    "cliente": "Helena",
    "profissional": "Camila",
    "topicoPD": "Previdência Complementar Aberta: PGBL, VGBL e Regimes de Tributação.",
    "dificuldade": "Média",
    "ano": 2026,
    "limite": 5,
    "etapas": {
      "1": {
        "id": "1",
        "falaCliente": "Camila, recebi uma bonificação este ano e quero começar uma previdência privada para complementar minha aposentadoria daqui a 15 anos. Vi que tem PGBL e VGBL, mas não sei qual escolher. Eles rendem diferente?",
        "opcoes": [
          {
            "texto": "A rentabilidade depende do fundo escolhido, Helena. A diferença entre PGBL e VGBL está na forma de tributação e na possibilidade de deduzir os aportes na declaração completa do IR.",
            "proximo": "2A",
            "peso": 1
          },
          {
            "texto": "Eles podem investir nos mesmos fundos e render igual. O que muda é a regra fiscal: o PGBL permite abater até 12% da renda bruta na declaração completa, enquanto o VGBL é ideal para declaração simplificada.",
            "proximo": "2A",
            "peso": 1
          },
          {
            "texto": "O PGBL costuma render mais para quem tem renda alta, enquanto o VGBL é um plano mais simples e conservador para quem está começando a poupar agora.",
            "proximo": "2B",
            "peso": 0
          },
          {
            "texto": "Na prática são produtos bem parecidos. A maioria dos clientes escolhe o VGBL porque paga menos imposto no final. Posso simular um valor para você?",
            "proximo": "2B",
            "peso": 0
          }
        ]
      },
      "2A": {
        "id": "2A",
        "falaCliente": "Entendi! Eu faço a declaração completa do Imposto de Renda e já contribuo para o INSS pelo meu trabalho CLT. Então o PGBL me ajuda a pagar menos imposto agora? Como funciona quando eu for sacar lá na frente?",
        "opcoes": [
          {
            "texto": "Exato! Como você declara no modelo completo e contribui para o INSS, pode deduzir aportes no PGBL até 12% da sua renda bruta anual. No resgate, porém, o IR incide sobre o valor total acumulado.",
            "proximo": "3A",
            "peso": 1
          },
          {
            "texto": "Sim, você posterga o imposto. No PGBL você abate até 12% da renda bruta tributável hoje, mas no futuro a alíquota de IR incidirá sobre todo o montante resgatado, capital mais rendimentos.",
            "proximo": "3A",
            "peso": 1
          },
          {
            "texto": "Isso mesmo. Você ganha o desconto de 12% na declaração anual agora e, lá na frente, paga imposto somente sobre o que o dinheiro rendeu no período.",
            "proximo": "3B",
            "peso": 0
          },
          {
            "texto": "Sim, o PGBL te dá isenção fiscal nos aportes. No futuro, se você mantiver por mais de 10 anos, o resgate fica isento de Imposto de Renda.",
            "proximo": "3B",
            "peso": 0
          }
        ]
      },
      "2B": {
        "id": "2B",
        "falaCliente": "Espera, mas uma amiga do escritório falou que usa o PGBL para abater no Imposto de Renda todo ano. Eu também faço a declaração completa e contribuo para o INSS. Por que isso funciona pra ela?",
        "opcoes": [
          {
            "texto": "Sua amiga está certa. Quem faz declaração completa e contribui para o INSS pode deduzir aportes em PGBL até 12% da renda bruta anual. Em compensação, no resgate o IR incide sobre o valor total.",
            "proximo": "3A",
            "peso": 1
          },
          {
            "texto": "Deixa eu esclarecer melhor: o PGBL permite deduzir até 12% da renda bruta anual na declaração completa. Já no VGBL não há dedução anual, mas o IR no resgate incide só sobre os rendimentos.",
            "proximo": "3A",
            "peso": 1
          },
          {
            "texto": "É que o PGBL tem esse abatimento na declaração anual, mas no fim dá quase na mesma porque a taxa de administração costuma compensar a diferença.",
            "proximo": "3B",
            "peso": 0
          },
          {
            "texto": "Sim, dá para abater no PGBL, mas apenas para quem é servidor público ou empresário. Para CLT, o VGBL costuma ser a única opção vantajosa.",
            "proximo": "3B",
            "peso": 0
          }
        ]
      },
      "3A": {
        "id": "3A",
        "falaCliente": "Ah, então no PGBL o imposto lá na frente é sobre tudo, e no VGBL é só sobre o lucro. E se eu quiser colocar mais do que esses 12% da minha renda no ano, coloco tudo no PGBL mesmo assim?",
        "opcoes": [
          {
            "texto": "Não vale a pena exceder os 12% no PGBL. O ideal é aportar até o limite de 12% da renda bruta no PGBL para aproveitar o benefício fiscal e direcionar o valor excedente para um VGBL.",
            "proximo": "4A",
            "peso": 1
          },
          {
            "texto": "Boa observação! O que passar de 12% da sua renda bruta anual deve ir para o VGBL. Se colocar o excedente no PGBL, você não deduz na entrada e ainda paga IR sobre o principal na saída.",
            "proximo": "4A",
            "peso": 1
          },
          {
            "texto": "Pode concentrar tudo no PGBL para facilitar a gestão em um único contrato. O excedente que passar de 12% este ano você acumula para deduzir no ano que vem.",
            "proximo": "4B",
            "peso": 0
          },
          {
            "texto": "O sistema da Receita Federal bloqueia aportes acima de 12% no PGBL automaticamente, então o próprio aplicativo já separa o restante para a poupança.",
            "proximo": "4B",
            "peso": 0
          }
        ]
      },
      "3B": {
        "id": "3B",
        "falaCliente": "Fiquei na dúvida sobre o limite: ouvi dizer que tem um teto de 12% da renda. O que acontece se eu aplicar 20% da minha renda anual tudo dentro de um PGBL?",
        "opcoes": [
          {
            "texto": "Se você aplicar 20% no PGBL, só poderá deduzir 12% na declaração completa. Os 8% excedentes sofrerão bitributação econômica, pois pagarão IR sobre o valor total no resgate. O excedente deve ir para o VGBL.",
            "proximo": "4A",
            "peso": 1
          },
          {
            "texto": "Você perderia eficiência fiscal nos 8% acima do limite. No PGBL o benefício é limitado a 12% da renda bruta tributável; para qualquer valor acima disso, o VGBL é mais adequado por tributar apenas os rendimentos.",
            "proximo": "4A",
            "peso": 1
          },
          {
            "texto": "Não tem problema aplicar 20% no PGBL, porque na hora do resgate o banco separa automaticamente a parte que teve desconto fiscal da parte que não teve.",
            "proximo": "4B",
            "peso": 0
          },
          {
            "texto": "Se passar de 12%, você paga uma multa para a Susep no momento da declaração anual. Por isso é melhor deixar tudo no VGBL desde o início.",
            "proximo": "4B",
            "peso": 0
          }
        ]
      },
      "4A": {
        "id": "4A",
        "falaCliente": "Perfeito, vou usar o PGBL até os 12% e o VGBL para o resto! E quanto àquela escolha entre tabela progressiva e regressiva? Como meu objetivo é para daqui a 15 anos, como funciona essa decisão?",
        "opcoes": [
          {
            "texto": "Pela Lei 14.803/2024, você só precisa definir o regime de tributação no momento do primeiro resgate ou recebimento da renda. Para 15 anos, a tabela regressiva chega à alíquota mínima de 10% após 10 anos.",
            "proximo": "5A",
            "peso": 1
          },
          {
            "texto": "Para um horizonte de 15 anos, a tabela regressiva costuma ser muito vantajosa, pois reduz a alíquota até 10% para aportes com mais de 10 anos. E a legislação atual permite escolher o regime até o momento do resgate.",
            "proximo": "5A",
            "peso": 1
          },
          {
            "texto": "Você precisa escolher obrigatoriamente hoje na contratação e nunca mais pode mudar. Como são 15 anos, a tabela progressiva é melhor porque chega a 10% no longo prazo.",
            "proximo": "5B",
            "peso": 0
          },
          {
            "texto": "Tanto faz escolher agora ou depois, porque na tabela regressiva a alíquota de 10% vale para todo o saldo assim que o plano completa 10 anos de abertura, mesmo para aportes feitos na véspera.",
            "proximo": "5B",
            "peso": 0
          }
        ]
      },
      "4B": {
        "id": "4B",
        "falaCliente": "Tá, e sobre o Imposto de Renda no resgate: falaram que tem tabela progressiva e regressiva. Eu sou obrigada a escolher isso hoje sem poder mudar nunca mais?",
        "opcoes": [
          {
            "texto": "Não mais, Helena. Com a mudança legal recente, você pode optar pelo regime progressivo ou regressivo até o momento do primeiro resgate ou conversão em renda. Acima de 10 anos, o regressivo chega a 10%.",
            "proximo": "5A",
            "peso": 1
          },
          {
            "texto": "Fique tranquila: hoje a escolha do regime tributário pode ser feita até a data do primeiro resgate. Na tabela regressiva, cada aporte com mais de 10 anos tem alíquota definitiva de 10% na fonte.",
            "proximo": "5A",
            "peso": 1
          },
          {
            "texto": "Sim, a escolha é feita na adesão e você pode trocar livremente da regressiva para a progressiva a qualquer momento durante a fase de acumulação.",
            "proximo": "5B",
            "peso": 0
          },
          {
            "texto": "A escolha é automática pelo banco: PGBL usa sempre a tabela regressiva e VGBL usa sempre a tabela progressiva conforme sua faixa salarial.",
            "proximo": "5B",
            "peso": 0
          }
        ]
      },
      "5A": {
        "id": "5A",
        "falaCliente": "Excelente saber que posso decidir o regime no resgate e que a regressiva chega a 10%! E se eu não gostar do rendimento do fundo daqui a uns 2 anos, fico presa ou perco o tempo contado?",
        "opcoes": [
          {
            "texto": "Você não fica presa. Pode fazer a portabilidade gratuita para outro fundo de previdência da mesma modalidade (PGBL para PGBL, VGBL para VGBL), sem pagar IR na troca e preservando o tempo de cada aporte.",
            "proximo": "END",
            "peso": 1
          },
          {
            "texto": "Pode usar a portabilidade a qualquer momento na fase de acumulação, sem incidência de IR e mantendo a contagem do prazo dos aportes, desde que mantenha a mesma modalidade de plano.",
            "proximo": "END",
            "peso": 1
          },
          {
            "texto": "Você pode fazer a portabilidade gratuita, inclusive mudando o saldo do PGBL diretamente para um VGBL se mudar seu modelo de declaração no futuro.",
            "proximo": "END",
            "peso": 0
          },
          {
            "texto": "Para trocar de fundo você precisa resgatar, pagar o Imposto de Renda correspondente e aplicar novamente, reiniciando a contagem de prazo.",
            "proximo": "END",
            "peso": 0
          }
        ]
      },
      "5B": {
        "id": "5B",
        "falaCliente": "Ainda fico receosa de deixar o dinheiro preso por 15 anos em um fundo só. Se o gestor do fundo for mal, eu tenho como mudar de fundo sem pagar imposto?",
        "opcoes": [
          {
            "texto": "Sim, existe a portabilidade da previdência. Você transfere o saldo para outro fundo sem pagar IR e sem perder o prazo acumulado dos aportes, respeitando a mesma modalidade (PGBL para PGBL ou VGBL para VGBL).",
            "proximo": "END",
            "peso": 1
          },
          {
            "texto": "Com certeza. A portabilidade permite trocar de fundo ou até de instituição sem tributação e preservando a antiguidade de cada aporte, desde que seja entre planos da mesma natureza.",
            "proximo": "END",
            "peso": 1
          },
          {
            "texto": "Dá para transferir sem imposto sim, e você ainda aproveita para migrar de PGBL para VGBL na mesma operação se achar mais vantajoso.",
            "proximo": "END",
            "peso": 0
          },
          {
            "texto": "Infelizmente na previdência não dá para trocar de fundo sem resgatar antes, mas nossos fundos têm garantia do FGC até 250 mil reais.",
            "proximo": "END",
            "peso": 0
          }
        ]
      },
      "END": {
        "id": "END",
        "falaCliente": "Muito obrigada, Camila! Agora ficou cristalino como organizar meus aportes. [Fim do diálogo]",
        "opcoes": []
      }
    },
    "questoesObjetivas": [
      {
        "numero": 1,
        "enunciado": "Helena possui renda bruta anual tributável de R$ 200.000,00, entrega a declaração completa do IR e contribui para o INSS. Caso decida aportar R$ 34.000,00 este ano em previdência complementar buscando a máxima eficiência tributária, a alocação recomendada é",
        "alternativas": [
          {
            "texto": "R$ 24.000,00 em um plano PGBL e R$ 10.000,00 em um plano VGBL.",
            "correta": true
          },
          {
            "texto": "R$ 34.000,00 integralmente em um plano PGBL, aproveitando o diferimento total na entrada.",
            "correta": false
          },
          {
            "texto": "R$ 34.000,00 integralmente em um plano VGBL, evitando a incidência de IR sobre o principal.",
            "correta": false
          },
          {
            "texto": "R$ 17.000,00 em PGBL e R$ 17.000,00 em VGBL para diversificar o risco fiduciário da seguradora.",
            "correta": false
          }
        ],
        "gabaritoComentado": "O limite de dedução do PGBL na declaração completa é de 12% da renda bruta tributável anual (12% de R$ 200.000 = R$ 24.000). O excedente de R$ 10.000 deve ser alocado em VGBL para evitar tributação sobre o principal no resgate."
      },
      {
        "numero": 2,
        "enunciado": "Se Helena realizar aportes mensais em seu plano de previdência e, após 12 anos do primeiro aporte, optar pela tabela regressiva no momento de um resgate total, a alíquota de Imposto de Renda de 10% incidirá",
        "alternativas": [
          {
            "texto": "apenas sobre os aportes (e respectivos rendimentos) que tiverem completado individualmente mais de 10 anos de permanência (sistema PEPS).",
            "correta": true
          },
          {
            "texto": "sobre a totalidade do saldo acumulado no plano, visto que o contrato já superou 10 anos desde a data de adesão.",
            "correta": false
          },
          {
            "texto": "como antecipação na fonte, devendo ser ajustada posteriormente na Declaração de Ajuste Anual conforme a tabela progressiva.",
            "correta": false
          },
          {
            "texto": "exclusivamente sobre os rendimentos, independentemente de o plano contratado ser um PGBL ou um VGBL.",
            "correta": false
          }
        ],
        "gabaritoComentado": "Na tabela regressiva, o prazo de acumulação é contado individualmente para cada aporte pelo critério PEPS (Primeiro que Entra, Primeiro que Sai) ou média ponderada na conversão em renda, de modo que aportes recentes têm alíquotas maiores que 10%."
      }
    ]
  },
  {
    "codigoItem": "000489",
    "oficial": false,
    "modulo": 2,
    "cliente": "Roberto",
    "profissional": "Lucas",
    "topicoPD": "Fundos de Investimento (Resolução CVM 175): Classes, Subclasses e Responsabilidade Limitada.",
    "dificuldade": "Alta",
    "ano": 2026,
    "limite": 5,
    "etapas": {
      "1": {
        "id": "1",
        "falaCliente": "Lucas, fui olhar a lâmina de um fundo aqui no aplicativo e vi que agora aparece 'Classe A - Subclasse Varejo' e as siglas 'RL' no nome. Mudou alguma coisa nos fundos de investimento? Fiquei receoso.",
        "opcoes": [
          {
            "texto": "Mudou sim, Roberto, para melhor! A Resolução CVM 175 modernizou os fundos: agora um fundo pode ter diferentes classes de cotas com patrimônios separados, e 'RL' significa Responsabilidade Limitada do cotista.",
            "proximo": "2A",
            "peso": 1
          },
          {
            "texto": "Boa observação! São as novas regras da CVM 175. A estrutura em classes e subclasses organiza melhor o fundo, e a sigla 'RL' garante que sua responsabilidade fica limitada ao valor das suas cotas.",
            "proximo": "2A",
            "peso": 1
          },
          {
            "texto": "São apenas nomenclaturas internas que a CVM criou para padronizar os bancos, mas na prática o funcionamento jurídico do fundo continua igual ao que era antes.",
            "proximo": "2B",
            "peso": 0
          },
          {
            "texto": "A sigla 'RL' significa Renda Líquida garantida, e a Subclasse Varejo indica que o fundo tem proteção especial do FGC para pequenos investidores.",
            "proximo": "2B",
            "peso": 0
          }
        ]
      },
      "2A": {
        "id": "2A",
        "falaCliente": "Entendi! Mas como funciona essa história de um mesmo fundo ter várias 'classes'? Se uma outra classe desse fundo fizer uma operação arriscada e der prejuízo, isso pode atingir o meu dinheiro na minha classe?",
        "opcoes": [
          {
            "texto": "Não atinge, Roberto. Pela CVM 175, cada classe de cotas possui patrimônio segregado por lei. Os ativos e obrigações de uma classe não se comunicam com os de outra classe do mesmo fundo.",
            "proximo": "3A",
            "peso": 1
          },
          {
            "texto": "Pode ficar tranquilo: há segregação patrimonial entre as classes. Cada classe responde apenas por suas próprias obrigações, funcionando como caixas separadas dentro do mesmo fundo.",
            "proximo": "3A",
            "peso": 1
          },
          {
            "texto": "Como o CNPJ principal do fundo é o mesmo, em caso de prejuízo grande em uma classe, o administrador usa a reserva das outras classes para cobrir o buraco.",
            "proximo": "3B",
            "peso": 0
          },
          {
            "texto": "Não atinge porque o banco administrador é obrigado por lei a cobrir com recursos próprios qualquer prejuízo que passe de uma classe para outra.",
            "proximo": "3B",
            "peso": 0
          }
        ]
      },
      "2B": {
        "id": "2B",
        "falaCliente": "Mas eu li no jornal que antes o investidor podia ser chamado para colocar mais dinheiro se o fundo quebrasse, e que agora tem separação de patrimônio. Como funciona isso de verdade?",
        "opcoes": [
          {
            "texto": "Você leu certo! Com a CVM 175, as classes têm patrimônios segregados entre si, e nos fundos com Responsabilidade Limitada ('RL') o cotista não precisa aportar recursos extras se o patrimônio ficar negativo.",
            "proximo": "3A",
            "peso": 1
          },
          {
            "texto": "Exato. A nova regra trouxe duas proteções: a segregação patrimonial entre classes diferentes do mesmo fundo e a limitação da responsabilidade do cotista ao valor das cotas que ele já subscreveu.",
            "proximo": "3A",
            "peso": 1
          },
          {
            "texto": "Isso só acontecia em fundos de ações. Nos fundos de renda fixa ou multimercado nunca existiu risco de patrimônio negativo para o investidor.",
            "proximo": "3B",
            "peso": 0
          },
          {
            "texto": "Na verdade, todo fundo sempre teve separação de patrimônio e garantia do administrador contra perdas, a CVM só deixou isso mais claro no nome.",
            "proximo": "3B",
            "peso": 0
          }
        ]
      },
      "3A": {
        "id": "3A",
        "falaCliente": "Que alívio saber que as classes têm patrimônio separado! E qual a diferença entre 'Classe' e 'Subclasse'? Por que a minha é 'Subclasse Varejo' e tem outra 'Subclasse Institucional'?",
        "opcoes": [
          {
            "texto": "A Classe define a carteira de ativos e a política de investimento. Já as Subclasses dividem a mesma carteira apenas por público-alvo, aplicação mínima, taxas de administração ou prazos de resgate.",
            "proximo": "4A",
            "peso": 1
          },
          {
            "texto": "As subclasses compartilham exatamente a mesma carteira de ativos da classe, mas permitem diferenciar condições comerciais, como taxas menores para grandes valores ou prazos distintos para cada público.",
            "proximo": "4A",
            "peso": 1
          },
          {
            "texto": "Cada subclasse compra ativos diferentes: a Subclasse Varejo compra títulos mais seguros e a Institucional compra ativos mais arriscados, com patrimônios separados entre elas.",
            "proximo": "4B",
            "peso": 0
          },
          {
            "texto": "A diferença é apenas tributária: a Subclasse Varejo tem come-cotas semestral e a Subclasse Institucional é isenta de Imposto de Renda para qualquer cotista.",
            "proximo": "4B",
            "peso": 0
          }
        ]
      },
      "3B": {
        "id": "3B",
        "falaCliente": "Ainda fiquei confuso: vi que dentro da 'Classe A' existem duas subclasses com taxas de administração diferentes. Elas investem em carteiras diferentes ou têm patrimônios separados entre si?",
        "opcoes": [
          {
            "texto": "Não há separação de patrimônio entre subclasses da mesma classe. Elas investem na mesmíssima carteira da Classe A; o que muda entre subclasses são apenas taxas, valores mínimos e público-alvo.",
            "proximo": "4A",
            "peso": 1
          },
          {
            "texto": "A segregação patrimonial ocorre entre Classes, não entre Subclasses. As subclasses da Classe A dividem o mesmo patrimônio e carteira, diferenciando-se só em taxas, prazos ou público-alvo.",
            "proximo": "4A",
            "peso": 1
          },
          {
            "texto": "Sim, cada subclasse tem uma carteira própria e um CNPJ separado, por isso conseguem cobrar taxas de administração diferentes.",
            "proximo": "4B",
            "peso": 0
          },
          {
            "texto": "Elas têm carteiras iguais, mas se uma subclasse der prejuízo, a outra subclasse fica protegida por uma trava do custodiante.",
            "proximo": "4B",
            "peso": 0
          }
        ]
      },
      "4A": {
        "id": "4A",
        "falaCliente": "Agora entendi a diferença entre classe e subclasse! Mas me explica um caso extremo: se acontecer uma crise grave e a minha classe 'RL' ficar com patrimônio líquido negativo, o que acontece na prática?",
        "opcoes": [
          {
            "texto": "Como sua classe tem Responsabilidade Limitada ('RL'), você não será chamado a colocar dinheiro novo. Se o patrimônio ficar negativo, o administrador fecha a classe e pode acionar o regime de insolvência civil.",
            "proximo": "5A",
            "peso": 1
          },
          {
            "texto": "No fundo 'RL', sua perda máxima é o valor que você investiu. Diante de patrimônio negativo, a classe é bloqueada para resgates e passa por um plano de resolução ou declaração de insolvência daquela classe.",
            "proximo": "5A",
            "peso": 1
          },
          {
            "texto": "Se ficar negativo, você perde o que investiu na classe, mas o gestor é obrigado a devolver 50% do capital inicial por conta do seguro obrigatório da CVM.",
            "proximo": "5B",
            "peso": 0
          },
          {
            "texto": "Mesmo sendo 'RL', a CVM exige que os cotistas paguem as taxas de administração e custódia do bolso até o fundo ser encerrado em assembleia.",
            "proximo": "5B",
            "peso": 0
          }
        ]
      },
      "4B": {
        "id": "4B",
        "falaCliente": "Certo, mas e se der tudo errado no mercado e essa minha classe com 'RL' ficar devendo mais do que tem em caixa? Quem paga a conta e o que acontece com o fundo?",
        "opcoes": [
          {
            "texto": "Na classe 'RL', os cotistas não respondem pessoalmente pela dívida excedente. O administrador suspende aplicações e resgates e submete a classe a um plano de resolução ou pedido de insolvência.",
            "proximo": "5A",
            "peso": 1
          },
          {
            "texto": "Você não precisa tirar nada do bolso além do que já investiu. O patrimônio negativo fica restrito àquela classe, que pode ter sua insolvência decretada sem afetar seu CPF nem as outras classes.",
            "proximo": "5A",
            "peso": 1
          },
          {
            "texto": "A dívida é transferida automaticamente para o FGC até o limite de R$ 250 mil por CPF, e o fundo continua operando normalmente no dia seguinte.",
            "proximo": "5B",
            "peso": 0
          },
          {
            "texto": "O banco administrador assume o prejuízo no próprio balanço, pois pela CVM 175 o administrador responde solidariamente pelas perdas de mercado da carteira.",
            "proximo": "5B",
            "peso": 0
          }
        ]
      },
      "5A": {
        "id": "5A",
        "falaCliente": "Muito mais seguro assim! Uma última pergunta: nessa nova regra da CVM 175, quem é o responsável por escolher os ativos da carteira e quem cuida da parte legal e fiduciária do fundo?",
        "opcoes": [
          {
            "texto": "A CVM 175 definiu dois prestadores essenciais: o Gestor (responsável pela seleção e negociação dos ativos da carteira) e o Administrador Fiduciário (responsável pela constituição, controladoria e supervisão legal).",
            "proximo": "END",
            "peso": 1
          },
          {
            "texto": "São os dois prestadores essenciais: o Gestor de Recursos toma as decisões de compra e venda dos ativos, enquanto o Administrador Fiduciário cuida da governança, documentação e cálculo das cotas.",
            "proximo": "END",
            "peso": 1
          },
          {
            "texto": "O Administrador Fiduciário continua sendo o único responsável por tudo, inclusive por escolher os ativos e responder solidariamente por qualquer ato do gestor.",
            "proximo": "END",
            "peso": 0
          },
          {
            "texto": "Quem escolhe os ativos agora é o Custodiante, e o Gestor passou a cuidar apenas da distribuição comercial das cotas para os clientes.",
            "proximo": "END",
            "peso": 0
          }
        ]
      },
      "5B": {
        "id": "5B",
        "falaCliente": "Entendi. Mas antes de aplicar, quero saber quem manda no fundo: se o gestor fizer uma operação fora da regra, a culpa é do administrador também?",
        "opcoes": [
          {
            "texto": "Pela CVM 175, o Administrador Fiduciário e o Gestor são os prestadores essenciais e cada um responde individualmente por sua esfera de atuação, sem responsabilidade solidária automática entre eles.",
            "proximo": "END",
            "peso": 1
          },
          {
            "texto": "A nova norma separou claramente os papéis: o Gestor responde pela gestão da carteira e enquadramento dos ativos, e o Administrador Fiduciário pelas obrigações legais e fiduciárias, cada qual na sua função.",
            "proximo": "END",
            "peso": 1
          },
          {
            "texto": "Sim, eles têm responsabilidade solidária irrestrita: qualquer erro do gestor obriga o administrador e a ANBIMA a ressarcirem o cotista imediatamente.",
            "proximo": "END",
            "peso": 0
          },
          {
            "texto": "Na verdade, quem responde pelas decisões de investimento da carteira perante o cotista é o Auditor Independente contratado pelo fundo.",
            "proximo": "END",
            "peso": 0
          }
        ]
      },
      "END": {
        "id": "END",
        "falaCliente": "Excelente explicação, Lucas! Vou aplicar na Subclasse Varejo com muito mais tranquilidade agora. [Fim do diálogo]",
        "opcoes": []
      }
    },
    "questoesObjetivas": [
      {
        "numero": 1,
        "enunciado": "De acordo com a Resolução CVM 175, caso um fundo de investimento possua duas classes distintas de cotas (Classe A - Renda Fixa Conservadora e Classe B - Multimercado Alavancado) e a Classe B apresente patrimônio líquido negativo, a consequência jurídica para os cotistas da Classe A será",
        "alternativas": [
          {
            "texto": "nula sobre seus recursos, pois há segregação patrimonial legal entre as classes, respondendo cada classe exclusivamente por suas próprias obrigações.",
            "correta": true
          },
          {
            "texto": "o bloqueio temporário de resgates na Classe A até que os cotistas da Classe B aportem recursos adicionais para cobrir o déficit.",
            "correta": false
          },
          {
            "texto": "a utilização parcial do patrimônio da Classe A para quitar credores da Classe B, dado que ambas compartilham o mesmo CNPJ matriz do fundo.",
            "correta": false
          },
          {
            "texto": "a liquidação compulsória de todas as classes do fundo pela CVM, com rateio proporcional do passivo entre todos os cotistas.",
            "correta": false
          }
        ],
        "gabaritoComentado": "A Resolução CVM 175 instituiu a segregação patrimonial entre classes de cotas de um mesmo fundo: o patrimônio de cada classe é autônomo e responde apenas por obrigações vinculadas à respectiva classe."
      },
      {
        "numero": 2,
        "enunciado": "No âmbito da Resolução CVM 175, a criação de diferentes Subclasses dentro de uma mesma Classe de cotas permite diferenciar os investidores quanto a",
        "alternativas": [
          {
            "texto": "público-alvo, prazos de aplicação/resgate e taxas de administração e gestão, mantendo a mesma carteira de ativos da classe.",
            "correta": true
          },
          {
            "texto": "política de investimento e composição da carteira de ativos, atribuindo CNPJ e patrimônio segregado para cada subclasse.",
            "correta": false
          },
          {
            "texto": "limitação ou ilimitação de responsabilidade dos cotistas perante insolvência dentro da mesma classe de ativos.",
            "correta": false
          },
          {
            "texto": "regime tributário de come-cotas, permitindo isenção fiscal apenas para a subclasse destinada a investidores qualificados.",
            "correta": false
          }
        ],
        "gabaritoComentado": "As subclasses não possuem patrimônio próprio separado da classe; elas compartilham a mesma carteira de ativos da classe a que pertencem, diferenciando-se apenas por público-alvo, prazos e taxas."
      }
    ]
  },
  {
    "codigoItem": "000523",
    "oficial": false,
    "modulo": 3,
    "cliente": "Eduardo",
    "profissional": "Rafael",
    "topicoPD": "Finanças Pessoais: Gestão de Dívidas, Custo Efetivo Total (CET) e Orçamento.",
    "dificuldade": "Média",
    "ano": 2026,
    "limite": 5,
    "etapas": {
      "1": {
        "id": "1",
        "falaCliente": "Rafael, preciso de uma luz. Estou com R$ 15 mil presos no rotativo do cartão e no cheque especial, mas tenho R$ 10 mil guardados na poupança e recebi duas propostas de empréstimo para quitar o resto. Não quero mexer na minha poupança de jeito nenhum!",
        "opcoes": [
          {
            "texto": "Eduardo, entendo o apego à poupança, mas os juros do rotativo e do cheque especial são muito superiores ao rendimento dela. O mais racional é usar parte da poupança e trocar o saldo restante por uma dívida mais barata.",
            "proximo": "2A",
            "peso": 1
          },
          {
            "texto": "Compreendo sua preocupação em manter uma reserva, Eduardo. Porém, como os juros dessas dívidas crescem muito mais rápido que a poupança, precisamos comparar o custo real das linhas e estancar esse juro caro já.",
            "proximo": "2A",
            "peso": 1
          },
          {
            "texto": "Você está certíssimo em não tocar na poupança! Reserva é sagrada. O melhor é pegar um empréstimo de R$ 15 mil em 60 meses para a parcela ficar bem pequenininha.",
            "proximo": "2B",
            "peso": 0
          },
          {
            "texto": "Se você tem R$ 10 mil na poupança, sugiro aplicar esse valor em um fundo de ações para tentar ganhar mais que os juros do cheque especial.",
            "proximo": "2B",
            "peso": 0
          }
        ]
      },
      "2A": {
        "id": "2A",
        "falaCliente": "É... faz sentido, a poupança rende menos de 1% ao mês e o cheque especial me cobra quase 8% ao mês. Mas para o valor que faltar, recebi duas propostas: um Crédito Pessoal com juros de 2,1% a.m. e um Consignado com juros de 1,8% a.m. Olho só essa taxa de juros?",
        "opcoes": [
          {
            "texto": "Não olhe apenas a taxa nominal de juros, Eduardo. Você deve comparar o Custo Efetivo Total (CET) das duas propostas, pois o CET inclui juros, IOF, tarifas, seguros e demais encargos.",
            "proximo": "3A",
            "peso": 1
          },
          {
            "texto": "Para comparar corretamente, precisamos olhar o CET (Custo Efetivo Total) no mesmo prazo. Ele mostra o custo real da operação com todos os encargos, IOF e taxas embutidas, além do juro nominal.",
            "proximo": "3A",
            "peso": 1
          },
          {
            "texto": "Sim, basta escolher a menor taxa de juros nominal. Tarifas de cadastro e IOF são tabelados pelo governo e não mudam a comparação entre bancos.",
            "proximo": "3B",
            "peso": 0
          },
          {
            "texto": "Mais importante que a taxa ou o CET é escolher a opção que tiver a menor parcela mensal, mesmo que o prazo seja três vezes maior.",
            "proximo": "3B",
            "peso": 0
          }
        ]
      },
      "2B": {
        "id": "2B",
        "falaCliente": "Mas Rafael, fazendo as contas aqui, meu cheque especial e o rotativo estão cobrando uma fortuna todo mês, enquanto minha poupança rende pouquinho! E entre dois empréstimos para trocar essa dívida, como sei qual é mais barato de verdade?",
        "opcoes": [
          {
            "texto": "Exatamente por essa diferença de taxas vale abater parte da dívida e trocar o restante por um crédito mais barato, como o consignado, comparando sempre pelo Custo Efetivo Total (CET).",
            "proximo": "3A",
            "peso": 1
          },
          {
            "texto": "Você tem razão: manter dívida cara com dinheiro parado na poupança corrói seu patrimônio. Para escolher o empréstimo substituto, devemos comparar o CET (Custo Efetivo Total), que soma juros, IOF e tarifas.",
            "proximo": "3A",
            "peso": 1
          },
          {
            "texto": "Para saber qual empréstimo é mais barato, basta somar o valor das parcelas e dividir pelo número de meses, sem precisar olhar taxas percentuais.",
            "proximo": "3B",
            "peso": 0
          },
          {
            "texto": "Qualquer empréstimo pessoal serve, porque quando você quita o cartão à vista o banco devolve metade dos juros que você pagou nos últimos meses.",
            "proximo": "3B",
            "peso": 0
          }
        ]
      },
      "3A": {
        "id": "3A",
        "falaCliente": "Olhei aqui na simulação! Uma financeira me ofereceu juro de 1,7% ao mês, mas colocou seguro prestamista e tarifa, deixando o CET em 2,6% ao mês. Já o Consignado aqui do banco tem juro de 1,8% e CET de 1,92% ao mês. Qual eu pego e por que o consignado é mais barato?",
        "opcoes": [
          {
            "texto": "O Consignado com CET de 1,92% a.m. é mais vantajoso que os 2,6% a.m. da financeira. Ele cobra menos porque a parcela é descontada direto na folha de pagamento, reduzindo o risco de inadimplência.",
            "proximo": "4A",
            "peso": 1
          },
          {
            "texto": "Escolha o Consignado, pois o que sai do seu bolso é o CET (1,92% contra 2,60%). Além disso, nenhum seguro facultativo pode ser imposto como venda casada, e o consignado tem menor risco por descontar em folha.",
            "proximo": "4A",
            "peso": 1
          },
          {
            "texto": "Pegue o da financeira de 1,7% ao mês, porque os encargos extras do CET são pagos uma única vez e não entram no cálculo composto das parcelas.",
            "proximo": "4B",
            "peso": 0
          },
          {
            "texto": "O consignado é mais barato apenas porque é subsidiado pelo governo federal e isento da cobrança de IOF para qualquer trabalhador.",
            "proximo": "4B",
            "peso": 0
          }
        ]
      },
      "3B": {
        "id": "3B",
        "falaCliente": "Vi nas folhas de proposta uma sigla chamada 'CET'. Uma proposta tem juros de 1,7% a.m. e CET de 2,6% a.m., e o Consignado tem juros de 1,8% a.m. e CET de 1,92% a.m. Por que deu essa diferença?",
        "opcoes": [
          {
            "texto": "Porque a primeira proposta embutiu tarifas e seguros que elevaram o Custo Efetivo Total para 2,6% a.m. Você deve escolher o Consignado com menor CET (1,92% a.m.), que é mais barato pelo desconto direto em folha.",
            "proximo": "4A",
            "peso": 1
          },
          {
            "texto": "O CET mostra a taxa real com todos os custos incluídos. Por isso o Consignado de CET 1,92% a.m. é mais econômico que a proposta de CET 2,6% a.m., já que a garantia do desconto em folha reduz a taxa.",
            "proximo": "4A",
            "peso": 1
          },
          {
            "texto": "O CET é só uma estimativa teórica do Banco Central para o caso de você atrasar as parcelas; se pagar em dia, vale apenas a taxa de 1,7%.",
            "proximo": "4B",
            "peso": 0
          },
          {
            "texto": "A diferença é o imposto de renda que incide sobre o empréstimo pessoal, enquanto o consignado é isento de tributos.",
            "proximo": "4B",
            "peso": 0
          }
        ]
      },
      "4A": {
        "id": "4A",
        "falaCliente": "Boa! Vou usar R$ 8 mil da poupança (deixando R$ 2 mil para uma urgência imediata) e pegar R$ 7 mil no Consignado de menor CET para zerar tudo hoje! E se daqui a 4 meses entrar meu 13º salário, posso abater parcelas do consignado?",
        "opcoes": [
          {
            "texto": "Sim, é um direito seu garantido pelo Código de Defesa do Consumidor e pelo Banco Central: na amortização ou liquidação antecipada, você tem direito à redução proporcional dos juros futuros, sem cobrança de tarifa.",
            "proximo": "5A",
            "peso": 1
          },
          {
            "texto": "Com certeza! Você pode amortizar antecipadamente a qualquer momento com desconto proporcional dos juros das parcelas antecipadas e isenção total de multa ou tarifa de liquidação.",
            "proximo": "5A",
            "peso": 1
          },
          {
            "texto": "No consignado não dá para antecipar porque a folha de pagamento já fica travada no RH da sua empresa até o fim do contrato.",
            "proximo": "5B",
            "peso": 0
          },
          {
            "texto": "Você pode antecipar as parcelas, mas o valor continua o mesmo previsto no contrato porque os juros do consignado são prefixados na contratação.",
            "proximo": "5B",
            "peso": 0
          }
        ]
      },
      "4B": {
        "id": "4B",
        "falaCliente": "Entendi que o Consignado com menor CET é o caminho. Mas se eu fechar em 24 vezes e receber meu 13º salário no fim do ano, o banco me cobra multa se eu quiser adiantar umas parcelas?",
        "opcoes": [
          {
            "texto": "É proibida qualquer cobrança de tarifa ou multa por liquidação ou amortização antecipada. Além disso, o banco é obrigado a conceder o abatimento proporcional dos juros do período antecipado.",
            "proximo": "5A",
            "peso": 1
          },
          {
            "texto": "Não há multa nenhuma, Eduardo. A regulamentação garante a você o direito de quitar ou amortizar dívidas antecipadamente com redução proporcional dos juros pactuados.",
            "proximo": "5A",
            "peso": 1
          },
          {
            "texto": "O banco cobra uma pequena taxa administrativa de 2% sobre o saldo devedor para recalcular o contrato junto ao seu empregador.",
            "proximo": "5B",
            "peso": 0
          },
          {
            "texto": "Você pode adiantar sem multa, mas o desconto proporcional de juros só vale se você quitar 100% do contrato de uma vez só.",
            "proximo": "5B",
            "peso": 0
          }
        ]
      },
      "5A": {
        "id": "5A",
        "falaCliente": "Que alívio, Rafael! Agora que vou sair do sufoco do cheque especial e do rotativo, o que eu faço para não cair nessa bola de neve de novo e recompor minha reserva de emergência?",
        "opcoes": [
          {
            "texto": "Ajuste seu orçamento para que as despesas mais a parcela do consignado caibam na renda líquida, evite pagar o mínimo do cartão e destine um valor mensal fixo para recompor sua reserva em ativo de liquidez diária e baixo risco.",
            "proximo": "END",
            "peso": 1
          },
          {
            "texto": "O segredo é mapear seus gastos mensais, pagar sempre a fatura integral do cartão e programar uma aplicação automática todo mês no Tesouro Selic ou CDB de liquidez diária para reconstruir sua reserva.",
            "proximo": "END",
            "peso": 1
          },
          {
            "texto": "Cancele todos os seus cartões de crédito imediatamente e guarde o dinheiro em espécie em casa para não correr o risco de gastar além da conta.",
            "proximo": "END",
            "peso": 0
          },
          {
            "texto": "Assim que sobrar dinheiro no mês que vem, aplique em criptomoedas ou ações para recuperar rapidamente os juros que você pagou ao banco.",
            "proximo": "END",
            "peso": 0
          }
        ]
      },
      "5B": {
        "id": "5B",
        "falaCliente": "Certo, vamos fechar a troca da dívida então. Mas confesso que tenho medo de daqui a seis meses estar devendo o consignado e o cartão de novo. Como evito isso?",
        "opcoes": [
          {
            "texto": "Como a parcela do consignado já sai direto do salário, precisamos adequar seus gastos variáveis à sua nova renda líquida disponível e criar o hábito de recompor sua reserva de emergência mensalmente.",
            "proximo": "END",
            "peso": 1
          },
          {
            "texto": "Vamos organizar seu orçamento considerando o salário líquido já descontado do consignado, reduzir o limite do cheque especial e separar um valor mensal para recompor sua reserva com segurança.",
            "proximo": "END",
            "peso": 1
          },
          {
            "texto": "Se faltar dinheiro no mês, você pode fazer um novo refinanciamento do consignado alongando o prazo para 84 meses sempre que precisar.",
            "proximo": "END",
            "peso": 0
          },
          {
            "texto": "O ideal é usar apenas o cheque especial nos meses apertados e deixar o cartão de crédito guardado só para compras parceladas longas.",
            "proximo": "END",
            "peso": 0
          }
        ]
      },
      "END": {
        "id": "END",
        "falaCliente": "Perfeito, Rafael! Muito obrigado por me mostrar as contas com tanta transparência. [Fim do diálogo]",
        "opcoes": []
      }
    },
    "questoesObjetivas": [
      {
        "numero": 1,
        "enunciado": "Na reestruturação financeira de Eduardo, a substituição da dívida no rotativo do cartão de crédito e no cheque especial por um crédito consignado fundamenta-se tecnicamente no fato de que",
        "alternativas": [
          {
            "texto": "a garantia de desconto em folha reduz o risco de crédito para a instituição financeira, resultando em menor Custo Efetivo Total (CET) e estancando o efeito composto de juros elevados.",
            "correta": true
          },
          {
            "texto": "as operações de crédito consignado são isentas de Imposto sobre Operações Financeiras (IOF) por determinação do Conselho Monetário Nacional.",
            "correta": false
          },
          {
            "texto": "o crédito consignado não compromete a renda disponível mensal do tomador, permitindo manter o mesmo padrão de gastos variáveis sem ajustes orçamentários.",
            "correta": false
          },
          {
            "texto": "a quitação do rotativo mediante novo empréstimo obriga a instituição emissora do cartão a estornar os encargos cobrados nos 90 dias anteriores.",
            "correta": false
          }
        ],
        "gabaritoComentado": "A troca de passivos caros (rotativo/cheque especial) por linhas com garantia de consignação em folha reduz drasticamente o CET devido ao menor risco de inadimplência."
      },
      {
        "numero": 2,
        "enunciado": "Ao comparar duas propostas de crédito de mesmo valor e prazo — Proposta X (taxa nominal de 1,70% a.m. e CET de 2,60% a.m.) e Proposta Y (taxa nominal de 1,80% a.m. e CET de 1,92% a.m.) —, o profissional deve orientar o cliente a optar pela",
        "alternativas": [
          {
            "texto": "Proposta Y, pois o Custo Efetivo Total (CET) reflete o desembolso real da operação ao englobar juros, tributos (IOF), tarifas e seguros.",
            "correta": true
          },
          {
            "texto": "Proposta X, pois a taxa nominal de juros é o único componente que incide de forma capitalizada ao longo do contrato.",
            "correta": false
          },
          {
            "texto": "Proposta X, solicitando posteriormente o ressarcimento em dobro do IOF cobrado na operação.",
            "correta": false
          },
          {
            "texto": "média simples entre as duas propostas, contratando metade do valor em cada instituição para diluir o custo fixo.",
            "correta": false
          }
        ],
        "gabaritoComentado": "O CET (Custo Efetivo Total) é o indicador oficial exigido pelo Banco Central que consolida todos os custos da operação de crédito (juros, tarifas, IOF, registros e seguros), devendo ser a base de decisão."
      }
    ]
  },
  {
    "codigoItem": "000571",
    "oficial": false,
    "modulo": 3,
    "cliente": "Sônia",
    "profissional": "Daniel",
    "topicoPD": "Ética, Padrões de Conduta, Conflito de Interesses e Ilícitos Financeiros (Churning).",
    "dificuldade": "Alta",
    "ano": 2026,
    "limite": 5,
    "etapas": {
      "1": {
        "id": "1",
        "falaCliente": "Daniel, que bom falar com você! O assessor que me atendia antes ficava trocando meus investimentos de carteira quase toda semana dizendo que era 'gestão ativa'. No fim do semestre, meu saldo quase não cresceu e paguei um monte de taxas e corretagem! Isso é normal?",
        "opcoes": [
          {
            "texto": "Sônia, girar excessivamente a carteira do cliente com o objetivo principal de gerar corretagem e comissões não é adequado; no mercado isso é conhecido como 'churning', uma prática abusiva e proibida pela CVM.",
            "proximo": "2A",
            "peso": 1
          },
          {
            "texto": "Entendo sua frustração, Sônia. Toda movimentação precisa ter justificativa técnica alinhada ao seu perfil e objetivo. O giro excessivo apenas para gerar taxas fere o dever fiduciário e configura prática irregular de churning.",
            "proximo": "2A",
            "peso": 1
          },
          {
            "texto": "É super normal no mercado financeiro, Sônia. Quanto mais movimentações a gente faz na conta, mais chances você tem de acertar a boa do mês.",
            "proximo": "2B",
            "peso": 0
          },
          {
            "texto": "Infelizmente cada profissional trabalha de um jeito e não existe regra da CVM ou da ANBIMA sobre quantidade de trocas ou conflito de interesses.",
            "proximo": "2B",
            "peso": 0
          }
        ]
      },
      "2A": {
        "id": "2A",
        "falaCliente": "Nossa, 'churning'! Era exatamente isso que parecia: toda vez que batia fim de mês ele me ligava pedindo para vender um título e comprar um COE ou fundo novo porque 'faltava pouco para a meta dele'. Você também vai me empurrar produto de meta?",
        "opcoes": [
          {
            "texto": "De forma alguma, Sônia. Pelo Código da ANBIMA e pelas regras da CVM, o interesse do cliente está sempre acima das metas comerciais da instituição ou da remuneração do profissional.",
            "proximo": "3A",
            "peso": 1
          },
          {
            "texto": "Pode ficar tranquila. Minha obrigação ética e regulatória é recomendar apenas produtos compatíveis com seu perfil (suitability) e objetivos, jamais priorizando metas internas ou comissões.",
            "proximo": "3A",
            "peso": 1
          },
          {
            "texto": "Olha, todo banco tem metas, então às vezes eu vou precisar que você me ajude comprando algum produto da campanha do mês, mas prometo avisar antes.",
            "proximo": "3B",
            "peso": 0
          },
          {
            "texto": "Aqui no banco nós não temos metas comerciais nem recebemos qualquer tipo de remuneração pelos produtos distribuídos.",
            "proximo": "3B",
            "peso": 0
          }
        ]
      },
      "2B": {
        "id": "2B",
        "falaCliente": "Mas Daniel, ele me fazia vender títulos bons antes do vencimento só para comprar produtos que davam comissão alta para ele no fim do mês! Não existe nenhuma regra que proteja o cliente contra esse conflito de interesses?",
        "opcoes": [
          {
            "texto": "Existe sim, Sônia, e é rigorosa. A Resolução CVM 62 e o Código da ANBIMA proíbem o giro excessivo para gerar comissões (churning) e exigem que o profissional coloque o interesse do cliente acima do seu próprio.",
            "proximo": "3A",
            "peso": 1
          },
          {
            "texto": "Você tem toda razão em questionar. Recomendar trocas sem benefício econômico para o cliente visando apenas bater metas ou ganhar comissão viola o dever de lealdade e caracteriza conflito de interesses ilícito.",
            "proximo": "3A",
            "peso": 1
          },
          {
            "texto": "Como você autorizou as ordens no aplicativo, a responsabilidade passa a ser 100% sua, mesmo que a recomendação tenha sido feita só pela comissão.",
            "proximo": "3B",
            "peso": 0
          },
          {
            "texto": "A única regra é que ele não pode operar sem te avisar, mas se ele te ligar e convencer a trocar toda semana, o banco considera um atendimento excelente.",
            "proximo": "3B",
            "peso": 0
          }
        ]
      },
      "3A": {
        "id": "3A",
        "falaCliente": "Fico muito mais aliviada de ouvir isso! E falando em transparência: hoje a instituição ganha alguma comissão diferente dependendo do produto que eu escolho? Eu tenho direito de saber disso?",
        "opcoes": [
          {
            "texto": "Sim, você tem total direito! As regras de transparência determinam que devemos informar de forma clara a remuneração pela distribuição e eventuais conflitos de interesses antes da sua decisão.",
            "proximo": "4A",
            "peso": 1
          },
          {
            "texto": "Com certeza, Sônia. Faz parte da transparência na distribuição divulgar os custos, taxas e a forma como a instituição é remunerada em cada produto, mitigando potenciais conflitos de interesse.",
            "proximo": "4A",
            "peso": 1
          },
          {
            "texto": "Essas informações de comissão e rebate são segredo comercial estratégico do banco e não podem ser abertas para clientes pessoa física.",
            "proximo": "4B",
            "peso": 0
          },
          {
            "texto": "Todos os produtos do mercado pagam exatamente a mesma comissão para o distribuidor, então nunca existe diferença de incentivo entre eles.",
            "proximo": "4B",
            "peso": 0
          }
        ]
      },
      "3B": {
        "id": "3B",
        "falaCliente": "Eu quero um atendimento transparente daqui para frente. Se um produto paga uma comissão maior para a corretora ou para o banco, vocês são obrigados a ser transparentes comigo sobre os custos e conflitos?",
        "opcoes": [
          {
            "texto": "Sim, é uma exigência regulatória. Devemos dar transparência sobre taxas, custos e potenciais conflitos de interesses na remuneração dos produtos, sempre respeitando seu perfil de investidora.",
            "proximo": "4A",
            "peso": 1
          },
          {
            "texto": "Sem dúvida. A regulamentação exige transparência ativa sobre a estrutura de remuneração e eventuais conflitos de interesses, garantindo que você decida com todas as informações na mesa.",
            "proximo": "4A",
            "peso": 1
          },
          {
            "texto": "Nós só informamos os custos se o cliente entrar com um pedido formal na ouvidoria após um ano de aplicação no produto.",
            "proximo": "4B",
            "peso": 0
          },
          {
            "texto": "Não precisamos informar nada sobre custos ou remuneração, porque tudo isso já fica subentendido quando você assina o contrato de abertura de conta.",
            "proximo": "4B",
            "peso": 0
          }
        ]
      },
      "4A": {
        "id": "4A",
        "falaCliente": "Outra coisa que aquele assessor me disse na época foi: 'Sônia, compra as ações da empresa X agora porque meu primo trabalha na diretoria de lá e me contou que vão anunciar uma fusão secreta amanhã!'. Ainda bem que eu não comprei! O que seria isso?",
        "opcoes": [
          {
            "texto": "Você fez muito bem em não entrar! Operar com base em informação relevante ainda não divulgada ao mercado é crime de uso de informação privilegiada (Insider Trading), punido com reclusão e multa.",
            "proximo": "5A",
            "peso": 1
          },
          {
            "texto": "Isso configuraria Insider Trading (uso indevido de informação privilegiada), que é crime contra o mercado de capitais e infração grave na CVM, tanto para quem passa a informação (tipping) quanto para quem opera.",
            "proximo": "5A",
            "peso": 1
          },
          {
            "texto": "Isso se chama 'Front Running', que é quando um parente da diretoria dá uma dica boa para os clientes do banco ganharem dinheiro antes do mercado.",
            "proximo": "5B",
            "peso": 0
          },
          {
            "texto": "Como você é investidora pessoa física e não trabalha na empresa X, não haveria nenhum problema legal em usar essa informação para lucrar.",
            "proximo": "5B",
            "peso": 0
          }
        ]
      },
      "4B": {
        "id": "4B",
        "falaCliente": "E teve um episódio pior: uma vez ele tentou me convencer a comprar ações de uma empresa dizendo que tinha uma 'informação confidencial de bastidor' antes de sair o fato relevante. Isso é permitido?",
        "opcoes": [
          {
            "texto": "Jamais! Utilizar informação relevante ainda não pública para negociar valores mobiliários com vantagem indevida é o ilícito de Insider Trading, crime previsto na Lei 6.385/76 e na Resolução CVM 62.",
            "proximo": "5A",
            "peso": 1
          },
          {
            "texto": "É estritamente proibido e criminoso. Trata-se de Insider Trading (uso de informação privilegiada), que fere a equidade do mercado e sujeita os envolvidos a sanções penais e administrativas na CVM.",
            "proximo": "5A",
            "peso": 1
          },
          {
            "texto": "É permitido desde que o valor da compra seja inferior a R$ 50 mil, faixa em que a CVM dispensa a fiscalização de informações confidenciais.",
            "proximo": "5B",
            "peso": 0
          },
          {
            "texto": "Essa prática faz parte da análise fundamentalista de mercado; os melhores profissionais sempre buscam informações internas antes do público geral.",
            "proximo": "5B",
            "peso": 0
          }
        ]
      },
      "5A": {
        "id": "5A",
        "falaCliente": "Ufa, ainda bem que segui minha intuição! Então, para revisarmos minha carteira hoje de um jeito ético e profissional, qual é o nosso passo a passo?",
        "opcoes": [
          {
            "texto": "Primeiro validamos seu API (Análise de Perfil do Investidor) e seus objetivos de liquidez e prazo; depois avaliamos sua carteira atual com transparência de custos, movimentando apenas o que trouxer benefício real para você.",
            "proximo": "END",
            "peso": 1
          },
          {
            "texto": "Vamos revisar seu perfil de risco atualizado, verificar se os ativos atuais atendem seus objetivos e só propor ajustes fundamentados tecnicamente, demonstrando todos os custos e impactos tributários.",
            "proximo": "END",
            "peso": 1
          },
          {
            "texto": "Vamos vender toda a carteira que o assessor antigo montou hoje mesmo e aplicar 100% em um único produto novo da nossa corretora.",
            "proximo": "END",
            "peso": 0
          },
          {
            "texto": "Você escolhe sozinha os produtos na plataforma sem nenhuma orientação minha, assim evitamos qualquer risco de conflito de interesses.",
            "proximo": "END",
            "peso": 0
          }
        ]
      },
      "5B": {
        "id": "5B",
        "falaCliente": "Depois de tudo o que passei, só quero ter certeza de que minhas próximas aplicações vão respeitar meu perfil conservador e não vão ficar girando sem necessidade. Como vamos trabalhar?",
        "opcoes": [
          {
            "texto": "Trabalharemos com foco no seu suitability conservador, horizonte de prazo e transparência total de taxas. Só faremos movimentações quando houver justificativa técnica clara em seu benefício.",
            "proximo": "END",
            "peso": 1
          },
          {
            "texto": "Respeitaremos rigorosamente seu perfil conservador no API, priorizando preservação de capital e custos baixos, com recomendações documentadas e alinhadas aos seus objetivos reais.",
            "proximo": "END",
            "peso": 1
          },
          {
            "texto": "Vou bloquear sua conta para resgates por dois anos no sistema, assim ninguém consegue mexer nos seus investimentos.",
            "proximo": "END",
            "peso": 0
          },
          {
            "texto": "Vamos assinar um termo de desenquadramento para você operar renda variável comigo, mas prometo girar a carteira só uma vez por mês.",
            "proximo": "END",
            "peso": 0
          }
        ]
      },
      "END": {
        "id": "END",
        "falaCliente": "Agora sim sinto confiança no atendimento, Daniel. Muito obrigada pela postura! [Fim do diálogo]",
        "opcoes": []
      }
    },
    "questoesObjetivas": [
      {
        "numero": 1,
        "enunciado": "A conduta do antigo profissional que atendia Sônia, caracterizada pela realização de negociações excessivas e frequentes na carteira da cliente com a finalidade primordial de gerar taxas de corretagem e comissões para bater metas, tipifica a prática abusiva denominada",
        "alternativas": [
          {
            "texto": "Churning (giro excessivo de carteira), vedada pela regulamentação por violar o dever de lealdade e a primazia do interesse do cliente.",
            "correta": true
          },
          {
            "texto": "Spoofing, consistente na inserção de ofertas artificiais no livro de negociação com cancelamento imediato.",
            "correta": false
          },
          {
            "texto": "Front Running, caracterizada pela execução de ordem própria do intermediário à frente da ordem de grande volume do cliente.",
            "correta": false
          },
          {
            "texto": "Layering, definida pela criação de múltiplas faixas falsas de liquidez para induzir o preço do ativo à alta ou à baixa.",
            "correta": false
          }
        ],
        "gabaritoComentado": "O churning consiste no giro excessivo da carteira de investimentos do cliente induzido pelo intermediário ou assessor com o objetivo de auferir receitas de corretagem, rebates ou comissões, em detrimento do retorno líquido do investidor."
      },
      {
        "numero": 2,
        "enunciado": "Caso Sônia tivesse adquirido ações da 'empresa X' com base na informação confidencial ainda não divulgada ao mercado repassada pelo assessor (que a obteve de um familiar diretor da companhia), do ponto de vista da Resolução CVM 62 e da Lei 6.385/76,",
        "alternativas": [
          {
            "texto": "tanto o diretor que vazou a informação quanto o assessor e a própria cliente poderiam responder por uso indevido de informação privilegiada (Insider Trading secundário/tipping).",
            "correta": true
          },
          {
            "texto": "apenas o diretor estatutário da companhia aberta responderia pelo ilícito, pois investidores de varejo são isentos da vedação ao uso de informação privilegiada.",
            "correta": false
          },
          {
            "texto": "a operação seria considerada lícita caso a valorização das ações após a publicação do Fato Relevante fosse inferior a 10%.",
            "correta": false
          },
          {
            "texto": "caracterizar-se-ia lavagem de dinheiro na fase de integração, exigindo comunicação imediata à Susep.",
            "correta": false
          }
        ],
        "gabaritoComentado": "A vedação ao uso de informação relevante ainda não divulgada ao mercado (Insider Trading) alcança tanto os insiders primários (administradores/controladores) quanto os insiders secundários (qualquer pessoa que tenha conhecimento da informação sabendo tratar-se de informação privilegiada ainda não pública e a utilize para negociar)."
      }
    ]
  },
  {
    "codigoItem": "000605",
    "oficial": false,
    "modulo": 4,
    "cliente": "Gabriel",
    "profissional": "Mariana",
    "topicoPD": "Finanças Descentralizadas (DeFi), Smart Contracts, Criptoativos e Real Digital (DREX).",
    "dificuldade": "Média",
    "ano": 2026,
    "limite": 5,
    "etapas": {
      "1": {
        "id": "1",
        "falaCliente": "Mariana, meus amigos estão falando direto de DeFi (Finanças Descentralizadas), Smart Contracts e também daquele tal de DREX do Banco Central. Eu confundo tudo! DeFi e DREX são criptomoedas que sobem e descem de preço?",
        "opcoes": [
          {
            "texto": "Boa pergunta, Gabriel! Eles usam tecnologia parecida (DLT/Blockchain), mas são bem diferentes: DeFi é um ecossistema de serviços financeiros automatizados sem intermediários tradicionais, enquanto o DREX é a moeda digital oficial do Banco Central (CBDC), com o mesmo valor do Real.",
            "proximo": "2A",
            "peso": 1
          },
          {
            "texto": "Vamos separar: o DREX não é uma criptomoeda volátil, e sim a versão digital do Real emitida e garantida pelo Banco Central (1 DREX = R$ 1,00). Já o DeFi usa contratos inteligentes em redes públicas para operações entre usuários sem bancos.",
            "proximo": "2A",
            "peso": 1
          },
          {
            "texto": "Sim, o DREX é a nova criptomoeda brasileira criada pelo Banco Central para competir com a valorização do Bitcoin no mercado internacional.",
            "proximo": "2B",
            "peso": 0
          },
          {
            "texto": "DeFi e DREX são exatamente a mesma coisa: é um novo aplicativo que vai substituir o Pix e o dinheiro em papel a partir do mês que vem.",
            "proximo": "2B",
            "peso": 0
          }
        ]
      },
      "2A": {
        "id": "2A",
        "falaCliente": "Ah, então 1 DREX vale sempre R$ 1,00 porque é o próprio Real em formato digital! Mas e se eu já tenho o Pix que transfere dinheiro em segundos de graça, para que o Banco Central está criando o DREX?",
        "opcoes": [
          {
            "texto": "O Pix faz pagamentos instantâneos, enquanto o DREX traz a 'programabilidade' via contratos inteligentes (Smart Contracts). Por exemplo: na compra de um carro ou imóvel tokenizado, o dinheiro só é transferido no exato instante em que a propriedade passa para o seu nome (entrega contra pagamento).",
            "proximo": "3A",
            "peso": 1
          },
          {
            "texto": "A grande inovação do DREX frente ao Pix é permitir serviços financeiros inteligentes em rede DLT regulada, automatizando liquidações complexas (como entrega contra pagamento de ativos tokenizados) com segurança jurídica.",
            "proximo": "3A",
            "peso": 1
          },
          {
            "texto": "O DREX foi criado apenas para cobrar tarifas nas transferências que hoje são gratuitas no Pix para pessoas físicas.",
            "proximo": "3B",
            "peso": 0
          },
          {
            "texto": "A diferença é que o DREX não passa pelos bancos nem segue regras de sigilo ou prevenção à lavagem de dinheiro, funcionando de forma totalmente anônima.",
            "proximo": "3B",
            "peso": 0
          }
        ]
      },
      "2B": {
        "id": "2B",
        "falaCliente": "Espera aí, eu li no site do próprio Banco Central que o DREX tem paridade de 1 para 1 com o Real e serve para contratos inteligentes. Qual é a diferença real dele para o Pix e para o mercado DeFi?",
        "opcoes": [
          {
            "texto": "Você leu certíssimo, Gabriel! O DREX é a CBDC brasileira (1 DREX = R$ 1,00) que adiciona programabilidade via Smart Contracts em ambiente regulado, permitindo entrega contra pagamento de bens tokenizados, diferente do DeFi público sem regulador.",
            "proximo": "3A",
            "peso": 1
          },
          {
            "texto": "Isso mesmo: enquanto o Pix liquida pagamentos simples, o DREX opera em rede DLT permissionada pelo Banco Central para liquidar contratos inteligentes e ativos tokenizados com garantia regulatória.",
            "proximo": "3A",
            "peso": 1
          },
          {
            "texto": "Na prática não há diferença técnica entre Pix e DREX; mudou apenas o nome comercial para facilitar transferências internacionais.",
            "proximo": "3B",
            "peso": 0
          },
          {
            "texto": "O DREX funciona na mesma blockchain pública e sem regulação do Bitcoin, onde qualquer pessoa emite moedas livremente.",
            "proximo": "3B",
            "peso": 0
          }
        ]
      },
      "3A": {
        "id": "3A",
        "falaCliente": "Que incrível esse exemplo de só liberar o dinheiro quando o documento do carro passa pro meu nome! E no DeFi (Finanças Descentralizadas), me disseram que dá para pegar empréstimo usando esses Smart Contracts sem análise de crédito do banco. Como funciona?",
        "opcoes": [
          {
            "texto": "No DeFi, os protocolos de empréstimo funcionam por código autoexecutável (Smart Contracts) e geralmente exigem 'sobrecolateralização': você trava criptoativos em valor superior ao empréstimo, e se a garantia cair abaixo do limite, o contrato liquida seus ativos automaticamente.",
            "proximo": "4A",
            "peso": 1
          },
          {
            "texto": "Funciona sem intermediário humano via Smart Contracts, mas exige que você deposite criptoativos como garantia em valor maior do que o valor tomado. Se o mercado oscilar forte, o próprio código executa a liquidação automática da sua garantia.",
            "proximo": "4A",
            "peso": 1
          },
          {
            "texto": "No DeFi você pega empréstimos sem precisar dar nenhuma garantia, e se não pagar o protocolo envia seu nome para o Serasa e para o SCR do Banco Central.",
            "proximo": "4B",
            "peso": 0
          },
          {
            "texto": "Os empréstimos em DeFi têm garantia do FGC até R$ 250 mil caso o código do contrato inteligente sofra algum ataque hacker.",
            "proximo": "4B",
            "peso": 0
          }
        ]
      },
      "3B": {
        "id": "3B",
        "falaCliente": "Entendi o papel do DREX. Mas sobre o DeFi em redes públicas: um colega falou que aplicou criptoativos num protocolo de empréstimo descentralizado para ganhar juros altos. Isso tem a mesma segurança de um CDB do banco?",
        "opcoes": [
          {
            "texto": "Não tem a mesma segurança, Gabriel. No DeFi as operações rodam em Smart Contracts sem garantia do FGC nem supervisão bancária; há riscos de falha ou invasão no código (bug de smart contract), alta volatilidade das garantias e liquidação automática.",
            "proximo": "4A",
            "peso": 1
          },
          {
            "texto": "É bem diferente de um CDB. No DeFi não existe cobertura do FGC nem instituição central responsável: você corre risco tecnológico de falhas no código do contrato inteligente, além do risco de mercado dos criptoativos.",
            "proximo": "4A",
            "peso": 1
          },
          {
            "texto": "Sim, tem a mesma segurança porque a tecnologia blockchain impede qualquer perda financeira ou queda no preço das moedas.",
            "proximo": "4B",
            "peso": 0
          },
          {
            "texto": "É até mais seguro que um CDB, pois se o protocolo DeFi for hackeado, o Banco Central reverte as transações na blockchain pública em até 24 horas.",
            "proximo": "4B",
            "peso": 0
          }
        ]
      },
      "4A": {
        "id": "4A",
        "falaCliente": "Caramba, então se tiver uma falha no código do Smart Contract ou se a moeda despencar, não tem FGC nem gerente para reclamar! E sobre guardar criptoativos: qual a diferença de deixar numa corretora (Exchange) ou numa carteira própria (autocustódia) para usar uma DEX?",
        "opcoes": [
          {
            "texto": "Na corretora centralizada (CEX), a instituição guarda as chaves privadas para você e pode recuperar sua senha, mas você assume o risco da corretora. Na autocustódia (usada em DEX), você detém a chave privada (seed phrase): tem controle total, mas se perder a chave, perde o acesso aos ativos de forma irreversível.",
            "proximo": "5A",
            "peso": 1
          },
          {
            "texto": "Nas DEX (corretoras descentralizadas) você opera direto da sua carteira de autocustódia: ninguém bloqueia seus ativos, porém a responsabilidade pela chave privada é 100% sua — não existe 'esqueci minha senha' se perder a chave.",
            "proximo": "5A",
            "peso": 1
          },
          {
            "texto": "Na carteira de autocustódia, se você perder sua chave privada ou seed phrase, basta ir a um cartório com seu RG para emitir uma segunda via na blockchain.",
            "proximo": "5B",
            "peso": 0
          },
          {
            "texto": "Não existe diferença: tanto nas corretoras centralizadas quanto nas DEX os criptoativos ficam guardados dentro da B3 vinculados ao seu CPF.",
            "proximo": "5B",
            "peso": 0
          }
        ]
      },
      "4B": {
        "id": "4B",
        "falaCliente": "E quando a pessoa resolve operar nessas corretoras descentralizadas (DEX) usando uma carteira própria onde ela mesma guarda a 'chave privada', o que acontece se ela esquecer a senha ou perder essa chave?",
        "opcoes": [
          {
            "texto": "Na autocustódia, quem detém a chave privada (ou frase-semente) é o único dono dos ativos. Se você perder essa chave ou enviá-la para um golpista, os criptoativos são perdidos para sempre, pois não há central de suporte na blockchain para resetar a chave.",
            "proximo": "5A",
            "peso": 1
          },
          {
            "texto": "A perda é irreversível, Gabriel. Nas carteiras não custodiantes usadas em DEX, você tem autonomia total sem intermediários, mas a perda da chave privada significa perder definitivamente o acesso aos fundos.",
            "proximo": "5A",
            "peso": 1
          },
          {
            "texto": "Basta abrir um chamado no suporte da rede Ethereum ou Bitcoin enviando uma selfie com documento que eles restauram sua chave privada em 48 horas.",
            "proximo": "5B",
            "peso": 0
          },
          {
            "texto": "O próprio aplicativo do seu banco consegue recuperar qualquer carteira de autocustódia por meio do sistema Open Finance.",
            "proximo": "5B",
            "peso": 0
          }
        ]
      },
      "5A": {
        "id": "5A",
        "falaCliente": "Entendi perfeitamente os riscos da autocustódia e do DeFi! Como eu quero investir um percentual pequeno em criptoativos na minha carteira, mas sem dor de cabeça com chave privada nem risco de código hacker, qual a melhor forma por aqui?",
        "opcoes": [
          {
            "texto": "Para quem busca praticidade, segurança operacional e regulação, você pode investir via ETFs de criptoativos listados na B3 ou fundos de investimento regulados pela CVM, sempre respeitando seu perfil de risco (suitability) e uma fatia moderada da carteira.",
            "proximo": "END",
            "peso": 1
          },
          {
            "texto": "O caminho mais seguro e prático é utilizar veículos regulados no mercado tradicional, como fundos ou ETFs de criptoativos negociados em bolsa, onde a custódia institucional e a governança são auditadas, mantendo uma alocação compatível com seu perfil.",
            "proximo": "END",
            "peso": 1
          },
          {
            "texto": "Como você quer segurança, o ideal é colocar 100% da sua reserva de emergência em um único criptoativo recém-lançado em uma DEX.",
            "proximo": "END",
            "peso": 0
          },
          {
            "texto": "Você pode passar sua chave privada pessoal para mim que eu guardo anotada na gaveta da agência e opero na DEX em seu nome.",
            "proximo": "END",
            "peso": 0
          }
        ]
      },
      "5B": {
        "id": "5B",
        "falaCliente": "Realmente, mexer direto em DEX e guardar chave privada sozinho parece arriscado demais para o meu momento. Existe algum jeito regulado de eu ter uma pequena exposição a esse mercado sem precisar fazer autocustódia?",
        "opcoes": [
          {
            "texto": "Sim, Gabriel! Você pode investir por meio de fundos de criptoativos regulados pela CVM ou ETFs negociados na B3. Assim você conta com custódia profissional qualificada e regulação, desde que o produto seja compatível com seu perfil de investidor.",
            "proximo": "END",
            "peso": 1
          },
          {
            "texto": "Com certeza. Os ETFs e fundos de criptoativos disponíveis na nossa plataforma oferecem exposição regulada, com custódia institucional segura e tributação clara, sem que você precise gerenciar chaves privadas.",
            "proximo": "END",
            "peso": 1
          },
          {
            "texto": "Não existe nenhum produto regulado pela CVM que invista em criptoativos no Brasil; a única forma é comprar diretamente em plataformas estrangeiras sem CNPJ.",
            "proximo": "END",
            "peso": 0
          },
          {
            "texto": "Você pode comprar DREX para especular, já que a cotação do DREX costuma dobrar de valor em relação ao Real quando o Bitcoin sobe.",
            "proximo": "END",
            "peso": 0
          }
        ]
      },
      "END": {
        "id": "END",
        "falaCliente": "Show de bola, Mariana! Tirou todas as minhas dúvidas sobre DREX, DeFi e como investir com segurança. [Fim do diálogo]",
        "opcoes": []
      }
    },
    "questoesObjetivas": [
      {
        "numero": 1,
        "enunciado": "Ao comparar o Real Digital (DREX), desenvolvido pelo Banco Central do Brasil, com os criptoativos descentralizados negociados em protocolos DeFi públicos, verifica-se que o DREX",
        "alternativas": [
          {
            "texto": "é uma Moeda Digital de Banco Central (CBDC) que mantém paridade de 1:1 com o Real e opera em infraestrutura DLT permissionada para viabilizar liquidações programáveis via contratos inteligentes.",
            "correta": true
          },
          {
            "texto": "possui cotação flutuante determinada pela oferta e demanda em corretoras descentralizadas (DEX), oferecendo alto potencial de ganho de capital especulativo.",
            "correta": false
          },
          {
            "texto": "opera em rede blockchain pública anônima e sem intermediários regulados, dispensando o cumprimento de normas de KYC e PLD/FTP.",
            "correta": false
          },
          {
            "texto": "substitui integralmente o meio circulante físico e o sistema Pix, extinguindo a figura dos depósitos bancários à vista no Sistema Financeiro Nacional.",
            "correta": false
          }
        ],
        "gabaritoComentado": "O DREX é a CBDC (Central Bank Digital Currency) brasileira emitida pelo BCB em rede DLT permissionada, mantendo paridade 1:1 com a moeda soberana (Real) e permitindo serviços financeiros programáveis (como DvP - Entrega contra Pagamento de ativos tokenizados) sob supervisão regulatória."
      },
      {
        "numero": 2,
        "enunciado": "Caso Gabriel decidisse utilizar diretamente uma corretora descentralizada (DEX) conectando uma carteira de autocustódia (non-custodial wallet) para fornecer liquidez ou tomar empréstimos via Smart Contracts, um risco específico que ele assumiria seria",
        "alternativas": [
          {
            "texto": "a perda irreversível de acesso aos criptoativos em caso de extravio da chave privada (seed phrase) e o risco tecnológico de vulnerabilidades no código do contrato inteligente, sem cobertura do FGC.",
            "correta": true
          },
          {
            "texto": "o bloqueio administrativo de sua chave privada pelo FGC caso o volume financeiro movimentado supere R$ 250.000,00.",
            "correta": false
          },
          {
            "texto": "a obrigatoriedade de aprovação prévia do gerente de relacionamento do seu banco comercial para cada assinatura criptográfica na rede.",
            "correta": false
          },
          {
            "texto": "a incidência automática de come-cotas semestral descontado diretamente pela blockchain pública nos meses de maio e novembro.",
            "correta": false
          }
        ],
        "gabaritoComentado": "Em finanças descentralizadas (DeFi) com carteiras de autocustódia, o usuário detém exclusivamente a chave privada (sem possibilidade de recuperação centralizada se perdida) e assume riscos operacionais/tecnológicos de falhas ou exploits nos Smart Contracts, inexistindo proteção do FGC."
      }
    ]
  }
];
