import { createApp } from 'https://unpkg.com/vite@4.2.0/dist/node/es2022/index.js';
    import { WebContainer } from './webcontainer.js';
    import { CodeGenerator } from './codegenerator.js';

    const app = createApp({
      el: '#app',
      data() {
        return {
          webcontainer: new WebContainer(),
          codegenerator: new CodeGenerator(),
          prompt: ''
        }
      },
      methods: {
        generateCode() {
          const code = this.codegenerator.generateCode(this.prompt);
          this.webcontainer.writeCode(code);
        }
      },
      mounted() {
        this.webcontainer.init();
      }
    });
