import "./Feed.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Mousewheel } from "swiper";
import Card from "./UI/Card";
import { Link } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";

export default function Feed() {
  const [feed, setFeed] = useState([]);

  const fetchPostData = useCallback(async () => {
    try {
      const response = await fetch("https://geckos-11-default-rtdb.firebaseio.com/feed.json");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedPost = [];
      for (const key in data) {
        loadedPost.push({
          id: key,
          profileImg: data[key].profileImg,
          userID: data[key].userID,
          location: data[key].location,
          cardImg: data[key].cardImg,
          contents: data[key].contents,
        });
      }
      setFeed(loadedPost);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchPostData();
  }, [fetchPostData]);

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
        <Link to="/new">
          <button className="tempBtn">New Post</button>
        </Link>
        {feed.map((item, idx) => {
          return <Card data={item} key={item.id} />;
        })}
      </div>
    </section>
  );
}
