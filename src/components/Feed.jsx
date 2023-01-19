import "./Feed.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Mousewheel } from "swiper";

export default function Feed() {
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
        <div className="post">
          <div className="postHeader">
            <div className="profile">
              <img src="../images/icons/profile.jpg" alt="" />
            </div>
            <div className="userID">Evelyn Jonas</div>
            <div className="location"></div>
          </div>
          <div className="postBody">
            <div className="leftBar"></div>
            <div className="postImg">
              <img src="../images/post1.png" alt="" />
            </div>
            <div className="rightBar"></div>
          </div>
          <div className="contents">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
        </div>
        <div className="post">
          <div className="postHeader">
            <div className="profile">
              <img src="../images/icons/profile.jpg" alt="" />
            </div>
            <div className="userID">Evelyn Jonas</div>
            <div className="location"></div>
          </div>
          <div className="postBody">
            <div className="leftBar"></div>
            <div className="postImg">
              <img src="../images/post2.png" alt="" />
            </div>
            <div className="rightBar"></div>
          </div>
          <div className="contents">
            Consectetur explicabo sint, tenetur officia atque veniam quia iste nobis eius quos eveniet? Nisi eligendi exercitationem fuga accusantium
            assumenda qui quibusdam voluptas.
          </div>
        </div>
      </div>
    </section>
  );
}
