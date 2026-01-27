# 🚀 Delivery Frontend

<div align="center">

![React](https://img.shields.io/badge/React-18.0-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=flat-square&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.0-06B6D4?style=flat-square&logo=tailwindcss)


> ✨ Uma aplicação frontend moderna e elegante de entrega de produtos desenvolvida com as tecnologias mais recentes e inovadoras da web.

</div>

---

## 📋 Visão Geral

Uma aplicação React moderna que oferece uma experiência de usuário **intuitiva**, **responsiva** e **otimizada** para plataforma de delivery. 

### ✨ Principais Características

- ⚡ **Performance Otimizada** - Desenvolvida com Vite para builds rápidas
- 🎨 **Design Responsivo** - Interface adaptável a todos os dispositivos
- 🔒 **Tipagem Segura** - Desenvolvida com TypeScript
- 🎯 **Componentes Reutilizáveis** - Arquitetura escalável e modular
- 🚀 **Hot Reload** - Desenvolvimento ágil com atualização em tempo real

## 🛠️ Tecnologias

<table>
  <tr>
    <td align="center"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" width="60"/><br><b>React</b><br>UI Library</td>
    <td align="center"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" width="60"/><br><b>TypeScript</b><br>Type Safety</td>
    <td align="center"><img src="https://vitejs.dev/logo.svg" width="60"/><br><b>Vite</b><br>Build Tool</td>
    <td align="center"><img src="https://www.svgrepo.com/show/374118/tailwind.svg" width="60"/><br><b>Tailwind</b><br>Styling</td>
  </tr>
</table>

- **React** - Biblioteca para construção de interfaces dinâmicas
- **TypeScript** - Tipagem estática e segurança de código
- **Vite** - Build tool ultrarrápido com desenvolvimento otimizado
- **Tailwind CSS** - Framework utilitário para styling moderno
- **Node.js** - Runtime JavaScript

## 🚀 Como Executar Localmente

### 📋 Pré-requisitos

Certifique-se de ter instalado:

```
✓ Node.js v16.0.0 ou superior
✓ npm v7.0.0 ou superior
```

Verifique as versões:

```bash
node --version  # v18.x.x
npm --version   # v9.x.x
```

### 📥 Instalação

**1️⃣ Clone o repositório**

```bash
git clone <url-do-repositorio>
cd delivery-frontend
```

**2️⃣ Instale as dependências**

```bash
npm install
```

### ▶️ Executando o Projeto

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

🎉 A aplicação estará disponível em:

> `http://localhost:5173`

## 📦 Scripts Disponíveis

Execute estes comandos no terminal:

| Comando | Descrição | Uso |
|---------|-----------|-----|
| `npm run dev` | 🔄 Dev com hot reload | Desenvolvimento local |
| `npm run build` | 📦 Build para produção | Deploy em servidor |
| `npm run preview` | 👀 Visualiza a build | Teste antes de deploy |
| `npm run lint` | ✅ Verifica código | Qualidade de código |

### Exemplos de Uso

```bash
# Iniciar desenvolvimento
npm run dev

# Criar build otimizada
npm run build

# Verificar código com ESLint
npm run lint
```

## 📁 Estrutura do Projeto

```
delivery-frontend/
│
├── 📄 src/
│   │
│   ├── 🎨 components/          # Componentes Reutilizáveis
│   │   ├── footer/             # Footer da página
│   │   ├── navbar/             # Navegação principal
│   │   ├── receitas/           # Lista de receitas
│   │   └── sobresection/       # Seção sobre
│   │
│   ├── 📄 pages/               # Páginas da Aplicação
│   │   ├── home/               # Página inicial
│   │   ├── produto/            # Detalhes do produto
│   │   └── sobre/              # Página sobre
│   │
│   ├── 🖼️ assets/              # Recursos estáticos
│   │   └── images/             # Imagens, ícones, fontes
│   │
│   ├── App.tsx                 # Componente raiz
│   ├── main.tsx                # Ponto de entrada
│   ├── App.css                 # Estilos globais
│   └── index.css               # Estilos base
│
├── 📂 public/                  # Arquivos públicos
├── 📄 index.html               # HTML principal
├── 📦 package.json             # Dependências
├── ⚙️ vite.config.ts           # Config Vite
├── ⚙️ tsconfig.json            # Config TypeScript
├── 🔍 eslint.config.js         # Config ESLint
└── 📋 README.md                # Este arquivo
```

## 💡 Boas Práticas

- ✅ Componentes devem usar **PascalCase** (`MyComponent.tsx`)
- ✅ Utilize **TypeScript** para melhor tipagem
- ✅ Mantenha componentes **pequenos e focados**
- ✅ Use **Tailwind CSS** para consistência
- ✅ Siga as regras do **ESLint**
- ✅ Componentes em **pastas próprias**
- ✅ Exports nomeados para melhor importação

## 🔧 Configurações Importantes

### Tailwind CSS
Estilos são aplicados via classes utilitárias, configure seu `tailwind.config.js` conforme necessário.

### TypeScript
O projeto utiliza TypeScript strict mode. Sempre adicione tipos às suas funções e variáveis.

### ESLint
Execute `npm run lint` regularmente para manter a qualidade do código.

## 📄 Licença

Este projeto é licenciado sob a licença **MIT** - veja o arquivo LICENSE para detalhes.

## � Equipe de Desenvolvimento

Este projeto foi desenvolvido pela equipe **Grupo 4** da **Turma JavaScript 10**:

- **[Gabrieli Martins](https://github.com/imgabrielimartins)** - Membro
- **[Kauã Gabriel de Farias](https://github.com/kauafarias1)** - Membro
- **[Assis Pires Neto](https://github.com/Lancellot)** - Membro
- **[Lilia](https://github.com/Lyliun)** - Membro
- **[Patrícia Souza](https://github.com/Patriciasdr)** - Membro
- **[Pedro](https://github.com/Perdop)** - Membro


---

<div align="center">


**Desenvolvido com ❤️ pela equipe Grupo 4 - Turma JavaScript 10**

</div>
