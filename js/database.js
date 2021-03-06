// Banco de dados dos produtos
const data = [
  {
    id: 1,
    img: "./img/jaqueta.svg",
    nameItem: "Lightweight Jacket",
    description:
      "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Torso"],
    keyWord: [
      "Lightweight Jacket",
      "Camisetas",
      "Camisas",
      "Jaquetas",
      "Pretos",
      "Pretas",
      "Blusas",
      "Moletom",
      "Moletons",
      "Inverno",
      "Torso",
      "Longos",
      "Longas",
      "Masculinos",
      "Masculinas",
      100,
    ],
  },
  {
    id: 2,
    img: "./img/gorro.svg",
    nameItem: "Black Hat",
    description:
      "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
    value: 65.99,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
    keyWord: [
      "Black Hat",
      "Gorro",
      "Touca",
      "Preto",
      "Preta",
      "Inverno",
      "Acessórios",
      "Cabeça",
      "Cabeca",
      "Unissex",
      "Femininos",
      "Femininas",
      "Masculinos",
      "Masculinas",
      65.99,
    ],
  },
  {
    id: 3,
    img: "./img/mascara.svg",
    nameItem: "Mask",
    description:
      "Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...",
    value: 30,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
    keyWord: [
      "Mask",
      "Mascara",
      "Máscara",
      "Preto",
      "Preta",
      "Casual",
      "Acessórios",
      "Face",
      "Cabeça",
      "Cabeca",
      "Unissex",
      "Femininos",
      "Femininas",
      "Masculinos",
      "Masculinas",
      "Mascara facial",
      "Mascaras faciais",
      "Máscaras faciais",
      30,
    ],
  },
  {
    id: 4,
    img: "./img/camiseta_preta.svg",
    nameItem: "T-Shirt Preta",
    description:
      "Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...",
    value: 70,
    addCart: "Adicionar ao carrinho",
    tag: ["Torso"],
    keyWord: [
      "T-Shirt Preta",
      "Camisas",
      "Preto",
      "Preta",
      "Casual",
      "Camisetas",
      "Torso",
      "Masculinos",
      "Masculinas",
      70,
    ],
  },
  {
    id: 5,
    img: "./img/tenis-puma.png",
    nameItem: "Puma Ignite",
    description:
      "Ideal para o dia-a-dia, o tênis Puma ignite fornece a você o conforto necessário para...",
    value: 150,
    addCart: "Adicionar ao carrinho",
    tag: ["Calçados"],
    keyWord: [
      "Puma Ignite",
      "Sapatos",
      "Preto",
      "Preta",
      "Fit",
      "Corrida",
      "Calçados",
      "Calcados",
      "Tênis",
      "Tenis",
      "Pés",
      "Pes",
      "Unissex",
      "Femininos",
      "Femininas",
      "Masculinos",
      "Masculinas",
      150,
    ],
  },
  {
    id: 6,
    img: "./img/ray-ban.png",
    nameItem: "Rayban Sunglasses",
    description:
      "A peça é confeccionada em material preto fosco e conta com lentes cinzas que garantem...",
    value: 500,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
    keyWord: [
      "Rayban Sunglasses",
      "Cabeças",
      "Cabecas",
      "Face",
      "Pretas",
      "Pretos",
      "Casual",
      "Verão",
      "Verao",
      "Acessórios",
      "Unissex",
      "Femininos",
      "Femininas",
      "Masculinos",
      "Masculinas",
      "Óculos",
      "Oculos",
      500,
    ],
  },
  {
    id: 7,
    img: "./img/camiseta_branca.svg",
    nameItem: "Short-Sleeve T-Shirt",
    description:
      "Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...",
    value: 50,
    addCart: "Adicionar ao carrinho",
    tag: ["Torso"],
    keyWord: [
      "Short-Sleeve T-Shirt",
      "Camisas",
      "Branco",
      "Branca",
      "Casual",
      "Camisetas",
      "Torso",
      "Masculinos",
      "Masculinas",
      50,
    ],
  },
  {
    id: 8,
    img: "./img/moletom.svg",
    nameItem: "Champion Packable Jacket",
    description:
      "Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...",
    value: 200,
    addCart: "Adicionar ao carrinho",
    tag: ["Torso"],
    keyWord: [
      "Champion Packable Jacket",
      "Camiseta",
      "Camisa",
      "Jaqueta",
      "Preto",
      "Preta",
      "Blusa",
      "Moletom",
      "Moletons",
      "Inverno",
      "Gorro",
      "Campeão",
      "Torso",
      "Masculinos",
      "Masculinas",
      200,
    ],
  },
  {
    id: 9,
    img: "./img/Air-Jordan-PNG-File.png",
    nameItem: "Nike Air Jordan",
    description:
      "Talvez o tênis mais emblemático de todos os tempos, esta coloração original 'Chicago' é...",
    value: 175.5,
    addCart: "Adicionar ao carrinho",
    tag: ["Calçados"],
    keyWord: [
      "Nike Air Jordan",
      "Tênis",
      "Tenis",
      "Calçados",
      "Calcados",
      "Vermelho",
      "Preto",
      "Branco",
      "Casual",
      "Sapatos",
      "Pés",
      "Pes",
      "Unissex",
      "Femininos",
      "Femininas",
      "Masculinos",
      "Masculinas",
      175.5,
    ],
  },
  {
    id: 11,
    img: "./img/shorts-vermelho.png",
    nameItem: "Running Shorts",
    description:
      "Escolha perfeita para seu dia fitness, o Running Shorts foi desenvolvido com tecnologia de...",
    value: 45,
    addCart: "Adicionar ao carrinho",
    tag: ["Pernas"],
    keyWord: [
      "Running Shorts",
      "Shorts",
      "Shortes",
      "Bermuda",
      "Feminino",
      "Vermelho",
      "Fit",
      "Corrida",
      "Pernas",
      "Curto",
      "Femininos",
      "Femininas",
      "Verão",
      "Verao",
      45,
    ],
  },
  {
    id: 11,
    img: "./img/adidas-runfalcon.png",
    nameItem: "Adidas Runfalcon",
    description:
      "A escolha para seu momento fit. O tênis Adidas Runfalcon foi desenvolvido com a tecnologia...",
    value: 250,
    addCart: "Adicionar ao carrinho",
    tag: ["Calçados"],
    keyWord: [
      "Adidas Runfalcon",
      "Tênis",
      "Tenis",
      "Calçados",
      "Calcados",
      "Azul",
      "Branco",
      "Fit",
      "Corrida",
      "Pés",
      "Pes",
      "Sapatos",
      "Unissex",
      "Femininos",
      "Femininas",
      "Masculinos",
      "Masculinas",
      250,
    ],
  },
  {
    id: 12,
    img: "./img/jeans-masculina.png",
    nameItem: "Jeans NEXT Masculina",
    description:
      "Conforto, estilo e aquela escolha impossível de se errar para qualquer ocasião, a jeans NEXT...",
    value: 120,
    addCart: "Adicionar ao carrinho",
    tag: ["Pernas"],
    keyWord: [
      "Jeans NEXT Masculina",
      "Pernas",
      "Calças",
      "Calcas",
      "Azul",
      "Longos",
      "Longas",
      "Masculinos",
      "Masculinas",
      120,
    ],
  },
];
