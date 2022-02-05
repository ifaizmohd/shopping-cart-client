import { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import Banner from "../component/banner/banner.component";
import { BannerModel } from "../models/banner.model";
import { fetchBannerStart } from "../redux/banner/banner.actions";
import IStoreState from "../types/store.types";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles.scss";
import { CategoryModel } from "../models/category.model";
import { fetchCategoriesStart } from "../redux/category/category.action";

const HomePage: FunctionComponent<any> = () => {
  const { banner, category } = useSelector((store: IStoreState) => store);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBannerStart());
    dispatch(fetchCategoriesStart());
  }, [dispatch]);
  return (
    <div className="homepage-container">
      <Carousel showArrows={false} autoPlay infiniteLoop axis="horizontal">
        {banner.banners.map((ban: BannerModel) => (
          <div key={ban.id}>
            <img
              src={require(`../assets${ban.bannerImageUrl}`)}
              alt={ban.bannerImageAlt}
            />
          </div>
        ))}
      </Carousel>
      <div className="categories">
        {category.categories
          .filter((cat: CategoryModel) => cat.order > 0)
          .map((cate: CategoryModel) => (
            <Banner key={cate.id} category={cate} />
          ))}
      </div>
    </div>
  );
};

export default HomePage;
