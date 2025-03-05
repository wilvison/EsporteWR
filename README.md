# EsporteWR - Aplicativo de Controle Esportivo

## Sobre o Projeto
EsporteWR é um aplicativo móvel desenvolvido para gerenciar partidas esportivas, incluindo placar, cronômetro, clinômetro e controle de pagamentos(coleta). O aplicativo foi projetado para ser utilizado em dispositivos Android e iOS.

## Autor
- **Nome:** Wilvison Ralis Cardoso
- **Email:** [wilvison@gmail.com]
- **GitHub:** [[https://github.com/wilvison/](https://github.com/wilvison/)]

## Funcionalidades Principais
1. **Placar e Cronômetro**
   - Controle de placar em tempo real
   - Cronômetro da partida
   - Registro de gols por jogador

2. **Clinômetro**
   - Medição de inclinação do campo
   - Integração com sensores do dispositivo
   - Visualização em tempo real

3. **Gestão de Jogadores**
   - Cadastro de jogadores
   - Categorização (titular/visitante/convidado)
   - Histórico de participação

4. **Controle Financeiro**
   - Registro de pagamentos
   - Controle de mensalidades
   - Histórico de contribuições

5. **Histórico e Estatísticas**
   - Histórico de partidas
   - Estatísticas por jogador
   - Relatórios de desempenho

## Estrutura do Projeto
```
EsporteWR/ 
├── src/ 
│ ├── components/ # Componentes reutilizáveis 
│ ├── screens/ # Telas do aplicativo │ 
├── services/ # Serviços e utilitários 
│ └── navigation/ # Configuração de rotas 
├── assets/ # Recursos estáticos 
└── App.js # Arquivo principal
```
## Tecnologias Utilizadas
- React Native
- Expo
- AsyncStorage
- React Navigation
- Expo Sensors

## Requisitos
- Node.js >= 14
- Expo CLI
- Android Studio (para desenvolvimento Android)
- Xcode (para desenvolvimento iOS - apenas Mac)

## Instalação
1. Clone o repositório

```bash
git clone [url-do-repositorio]
cd EsporteWR
```
Instale as dependências
```
npm install
```
Inicie o projeto
```
expo start
```
Build do Aplicativo
```
expo start
```
Para gerar o APK/IPA:

```
expo build:android  # Para Android
expo build:ios     # Para iOS
```

Licença
Este projeto está sob a licença MIT. Veja o arquivo [[LICENSE](/LICENSE.md/)] para mais detalhes.

Contato
Para sugestões, dúvidas ou contribuições, entre em contato através do email [wilvison@gmail.com].
