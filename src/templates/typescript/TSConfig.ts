export var TSConfigFile = 
`{
    "compilerOptions": {
      "module": "CommonJS", // required
      "target": "ESNext", // required
      "noImplicitAny": true,
      "sourceMap": true,
      "strict": true,
      "outDir": "build",
      "rootDir": "./src",
      "emitDecoratorMetadata": true, // required
      "experimentalDecorators": true, // required
      "declaration": false,
      "importHelpers": true, // required
      "forceConsistentCasingInFileNames": true,
      "moduleResolution": "Node", // required
      "esModuleInterop": true,  // required
      "resolveJsonModule": true,
    },
    "exclude": ["node_modules"]
  }`