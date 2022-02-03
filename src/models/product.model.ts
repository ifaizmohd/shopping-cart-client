export class ProductModel {
  constructor(
    public name: string,
    public imageURL: string,
    public description: string,
    public price: number,
    public stock: number,
    public category: string,
    public sku: string,
    public id: string,
    public quantity: number = 0
  ) {}
}
