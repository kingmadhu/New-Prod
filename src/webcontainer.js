class WebContainer {
      constructor() {
        this.shell = new Shell();
      }

      init() {
        this.shell.init();
      }

      writeCode(code) {
        // Use the WebContainer's API to write the code to a file
        const file = this.shell.createFile('code.js');
        file.write(code);
      }
    }

    export { WebContainer };
