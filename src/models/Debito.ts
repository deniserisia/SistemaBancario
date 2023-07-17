export class Debito {
    private valor: number;
    private data: Date;
  
    constructor(valor: number) {
      this.valor = valor;
      this.data = new Date();
    }
  
    getValor(): number {
      return this.valor;
    }
  
    getData(): Date {
      return this.data;
    }
}  