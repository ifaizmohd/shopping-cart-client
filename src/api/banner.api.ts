import axios from "axios";
import { BannerModel } from "../models/banner.model";

export const getBanners = (): Promise<any> =>
  axios.get<BannerModel>("http://localhost:5000/banners");
