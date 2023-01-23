import "./Feed.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Mousewheel } from "swiper";
import Card from "./UI/Card";

export default function Feed() {
  const demo = [
    {
      profileImg: "../images/icons/profile.jpg",
      userID: "Evelyn Jonas",
      locaation: "somewhere",
      cardImg: "../images/post1.png",
      contents: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      profileImg: "../images/icons/profile.jpg",
      userID: "Evelyn Jonas",
      locaation: "somewhere",
      cardImg: "../images/post2.png",
      contents:
        "Consectetur explicabo sint, tenetur officia atque veniam quia iste nobis eius quos eveniet? Nisi eligendi exercitationem fuga accusantiumassumenda qui quibusdam voluptas.",
    },
  ];

  return (
    <section id="mainFeed">
      <Swiper className="trending" modules={[Navigation, Mousewheel]} spaceBetween={20} navigation mousewheel slidesPerView={"auto"}>
        <SwiperSlide className="trendingBox">
          <div className="imgBox">
            <img src="../images/Image-1.png" alt="" />
          </div>
          <p className="tag">#Travels</p>
        </SwiperSlide>
        <SwiperSlide className="trendingBox">
          <div className="imgBox">
            <img src="../images/Image-2.png" alt="" />
          </div>
          <p className="tag">#Popular</p>
        </SwiperSlide>
        <SwiperSlide className="trendingBox">
          <div className="imgBox">
            <img src="../images/Image-3.png" alt="" />
          </div>
          <p className="tag">#Goals</p>
        </SwiperSlide>
        <SwiperSlide className="trendingBox">
          <div className="imgBox">
            <img src="../images/Image-4.png" alt="" />
          </div>
          <p className="tag">#Goals</p>
        </SwiperSlide>
        <SwiperSlide className="trendingBox">
          <div className="imgBox">
            <img src="../images/Image-5.png" alt="" />
          </div>
          <p className="tag">#Goals</p>
        </SwiperSlide>
      </Swiper>

      <div className="container">
        {demo.map((item, idx) => {
          return <Card data={item} />;
        })}
      </div>
    </section>
  );
}
