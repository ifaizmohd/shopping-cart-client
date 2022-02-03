export class BannerModel {
  constructor(
    public bannerImageUrl: string,
    public bannerImageAlt: string,
    public isActive: boolean,
    public order: number,
    public id: string
  ) {}
}
