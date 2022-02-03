export class CategoryModel {
  constructor(
    public name: string,
    public key: string,
    public description: string,
    public enabled: boolean,
    public order: number,
    public imageUrl: string,
    public id: string
  ) {}
}
