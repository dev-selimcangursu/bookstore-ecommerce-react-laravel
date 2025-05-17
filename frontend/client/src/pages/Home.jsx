import Master from "./partials/Master";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import MiniCategoryCard from "../components/MiniCategoryCard";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { fetchBestSellerBooks } from "../features/bestSeller/bestSellerSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import "./Home.css";

function Home() {
  // Mini Kategori State
  const miniCategoryList = useSelector(
    (state) => state.homeMiniCategories.value
  );
  // İlgili Tab Açma & Kapama
  const [activeTab, setActiveTab] = useState("1");
  function openTabMain(e) {
    e.preventDefault();

    let data = e.currentTarget.dataset.number;
    console.log(data);
    setActiveTab(data);
  }
  // Tabs İçeriklerini Listeleme

  const dispatch = useDispatch();
  const bestSellerProducts = useSelector(
    (state) => state.bestSeller.bestSeller
  );

  useEffect(() => {
    dispatch(fetchBestSellerBooks());
  }, [dispatch]);

  return (
    <Master>
      <section id="home__banner">
        <Splide aria-label="">
          <SplideSlide>
            <img
              src="https://cdn.bkmkitap.com/Data/BlockUploadData/slider/img1/295/bahar-indirimleri-kampanyasi-parola-yayinlari-banner-tr-224.webp?1747374028"
              alt="Image 1"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://cdn.bkmkitap.com/Data/BlockUploadData/slider/img1/295/bahar-indirimleri-kampanyasi-serenad-yayinevi-banner-tr-214.webp?1747374028"
              alt="Image 2"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://cdn.bkmkitap.com/Data/BlockUploadData/slider/img1/295/bahar-indirimleri-kampanyasi-banner-tr-183.webp?1747374028"
              alt=""
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://cdn.bkmkitap.com/Data/BlockUploadData/slider/img1/295/callie-hart-indigo-kitap-quicksilver-kitap-tanitim-banner-tr-229.webp?1747374028"
              alt=""
            />
          </SplideSlide>
        </Splide>
      </section>
      <section id="home_mini_category_cards">
        {miniCategoryList.map((state, i) => (
          <MiniCategoryCard key={i} img={state.img} title={state.title} />
        ))}
      </section>
      <section id="home__book__categories__tabs">
        <div className="home__book__categories__list">
          <div className="tab__category">
            <a
              href="#"
              data-number="1"
              onClick={openTabMain}
              className={activeTab === 1 ? "active" : ""}
            >
              Çok Satanlar
            </a>
          </div>
          <div className="tab__category">
            <a
              href="#"
              data-number="2"
              onClick={openTabMain}
              className={activeTab === 2 ? "active" : ""}
            >
              Yeni Çıkanlar
            </a>
          </div>
          <div className="tab__category">
            <a
              href="#"
              data-number="3"
              onClick={openTabMain}
              className={activeTab === 3 ? "active" : ""}
            >
              Eğitim ve Okul
            </a>
          </div>
        </div>
        <div className="home__book__categories__main">
          <div
            className="best__seller__area"
            style={{ display: activeTab === "1" ? "block" : "none" }}
          >
            <Splide
              options={{
                perPage: 4,
                perMove: 1,
                gap: "1rem",
                arrows: true,
                pagination: false,
                drag: "free",
                breakpoints: {
                  1024: { perPage: 3 },
                  768: { perPage: 2 },
                  480: { perPage: 1 },
                },
              }}
            >
              {bestSellerProducts.map((product, i) => (
                <SplideSlide key={i}>
                  <ProductCard
                    image={product.image}
                    name={product.name}
                    publishing={product.publishingName}
                    author={product.authorName}
                    oldPrice={product.old_price}
                    price={product.price}
                  />
                </SplideSlide>
              ))}
            </Splide>
          </div>
          <div
            style={{ display: activeTab === "2" ? "block" : "none" }}
            className="new_books__area"
          >
            <Splide
              options={{
                perPage: 4,
                perMove: 1,
                gap: "1rem",
                arrows: true,
                pagination: false,
                drag: "free",
                breakpoints: {
                  1024: { perPage: 3 },
                  768: { perPage: 2 },
                  480: { perPage: 1 },
                },
              }}
            >
              <SplideSlide>
                <ProductCard />
              </SplideSlide>
            </Splide>
          </div>
          <div
            style={{ display: activeTab === "3" ? "block" : "none" }}
            className="education__area"
          >
            <Splide
              options={{
                perPage: 4,
                perMove: 1,
                gap: "1rem",
                arrows: true,
                pagination: false,
                drag: "free",
                breakpoints: {
                  1024: { perPage: 3 },
                  768: { perPage: 2 },
                  480: { perPage: 1 },
                },
              }}
            >
              <SplideSlide>
                <ProductCard />
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </section>
      <br />
    </Master>
  );
}

export default Home;
