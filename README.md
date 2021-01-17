## Bitcoin transaction and blocks tracker

### Technology stack:
* Apollo Graphql
* InMemoryCache
* Styled-Components
* React Navigation
* Some fancy babel loaders 


### Application development: 
To start running the application you have to have installed `expo-cli` <br/>
In project root just enter `expo start` to run application in development mode. After that you will be prompted what platform you want to use, you can even run the app on a native device, just install the `Expo` Application from AppStore or GooglePlay and login thought application on your native devices as well via `expo-cli` in your terminal: `expo login` 

### Project structure:
```
src
├── App.tsx 
├── containers  // Containers are just a screens which are separated by routing
│   ├── BlocksInfo.tsx
│   ├── Details.tsx
│   ├── TransactionsInfo.tsx
│   └── types.ts
├── dataViews // Components that are responsible for displaying and manipulating with data
│   └── DataList.tsx
├── graphql // GraphQL client and definitions
│   ├── apolloClient.ts
│   ├── queries
│   │   ├── bitcoinBlocks.graphql
│   │   └── bitcoinTransactions.graphql
│   └── responseTypes.ts
├── hooks // React hooks
│   └── useBitcoinInfo.ts
├── layouts // React layout components that are just displaying it's chidren and adding some fancy functionality
│   ├── BlockCard.tsx
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Error.tsx
│   ├── Layout.tsx
│   ├── Primitives.ts
│   ├── TransactionCard.tsx
│   └── index.ts
├── router // React Navigation 
│   ├── StackNavigator.tsx
│   └── TabNavigator.tsx
├── types // This makes TypeScript go silent, when importing .gql files via loader :)
│   └── graphql.d.ts
└── utils // Fancy additions that don't belong anywhere else
    └── createShadow.ts
```
