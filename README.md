# 📋 Lista de Tarefas

Um aplicativo desenvolvido em React Native (TypeScript) para gerenciar tarefas de forma simples, intuitiva e eficiente.
Este projeto foi criado como parte de um teste técnico para vaga de Desenvolvedor React Native.

🚀 Tecnologias Utilizadas

⚛️ React Native (CLI) — ambiente configurado sem Expo

🟦 TypeScript — tipagem estática e código mais seguro

💾 AsyncStorage — persistência local das tarefas

💅 Styled Components — estilização moderna e desacoplada

🧩 React Native Vector Icons — ícones de ação (editar, excluir, concluir)

🪝 React Hooks — controle de estado e lógica reutilizável

# 🧠 Funcionalidades

➕ Adicionar tarefas

✏️ Editar tarefas existentes

✅ Marcar tarefas como concluídas

🗑️ Excluir tarefas

💾 Persistência local com AsyncStorage

📱 Interface moderna, intuitiva e responsiva

# 🧩 Estrutura do Projeto

ToDoListApp
├── src
│   ├── components
│   │   ├── Header/
│   │   ├── TaskInput/
│   │   └── TaskItem/
│   ├── hooks/
│   │   └── useTasks.ts
│   ├── screens/
│   │   └── HomeScreen.tsx
│   ├── storage/
│   │   └── taskStorage.ts
│   ├── types/
│   │   └── Task.ts
│   └── App.tsx
├── __tests__/            # pasta reservada para testes
├── android/              # build Android
├── ios/                  # build iOS
└── README.md

# ⚙️ Instalação e Execução

1️⃣ Clonar o repositório

git clone https://github.com/ycaina/ToDoListApp.git

cd ToDoListApp

2️⃣ Instalar dependências

npm install

3️⃣ Executar no Android

Certifique-se de que um emulador esteja rodando ou um dispositivo conectado via USB:

npx react-native run-android

# 🧾 Observações

🧠 As tarefas são salvas localmente usando AsyncStorage, garantindo persistência mesmo após fechar o app.

💡 O código segue boas práticas de organização e separação de responsabilidades (hooks, componentes e storage).

🧰 Pode ser facilmente expandido para integração com APIs externas ou sincronização em nuvem.

