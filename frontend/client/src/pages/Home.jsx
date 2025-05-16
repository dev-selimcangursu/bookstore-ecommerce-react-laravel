import Master from "./partials/Master";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./Home.css";
function Home() {
  return (
    <Master>
      <section id="home__banner">
        <Splide aria-label="My Favorite Images">
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
    </Master>
  );
}

export default Home;
