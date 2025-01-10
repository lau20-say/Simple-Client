import { Link } from "react-router-dom";
import "../css/home.css";
import { FaFacebookF } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import ImageViewer from "react-simple-image-viewer";
import { useState, useEffect, useRef, useCallback } from "react";
import HomeFeedBackCard from "../components/Home/HomeFeedBackCard";
import img1 from "../assets/communities.png";
import img2 from "../assets/fast-delivery.png";
import img3 from "../assets/diversity.png";
import img4 from "../assets/comfort.png";
import img5 from "../assets/gallery-image-1.jpg";
import img6 from "../assets/gallery-image-2.jpg";
import img7 from "../assets/gallery-image-3.jpg";
import img8 from "../assets/gallery-image-4.jpg";
import img9 from "../assets/gallery-image-5.jpg";
import img10 from "../assets/gallery-image-6.jpg";
import img11 from "../assets/dancer.jpg";
import img12 from "../assets/user-1.jpg";
import img13 from "../assets/user-2.jpg";
import img14 from "../assets/user-3.jpg";

import "animate.css";

const Home = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [visibleCommunity, setVisibleCommunity] = useState([]);
  const [visibleImages, setVisibleImages] = useState([]);
  const sectionsRef = useRef([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const galleryRef = useRef(null);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
    setIsNavbarFixed(window.scrollY > 600); // Thêm class fixed khi trượt quá 900px
  };

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionsRef.current.findIndex(
              (el) => el === entry.target
            );
            setTimeout(() => {
              setVisibleCommunity((prev) => [...prev, index]);
            }, index * 200);
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    const galleryObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            images.forEach((_, index) => {
              setTimeout(() => {
                setVisibleImages((prev) => [...prev, index]);
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (galleryRef.current) galleryObserver.observe(galleryRef.current);

    return () => {
      if (galleryRef.current) galleryObserver.unobserve(galleryRef.current);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const communityData = [
    { title: "Big Community", image: img1 },
    { title: "Fast", image: img2 },
    { title: "Diversity", image: img3 },
    { title: "Easy", image: img4 },
  ];
  const feedback = [
    {
      img: img12,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      people: "John Doe - Happy Customer",
    },
    {
      img: img13,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      people: "Roslyn Doe - Happy Customer",
    },
    {
      img: img14,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      people: "Thomas Doe - Happy Customer",
    },
  ];
  const images = [img5, img6, img7, img8, img9, img10];

  return (
    <section className="sec_home animate__animated animate__fadeIn">
      <div className="markI animate__animated animate__slideInDown"></div>
      <div className="markII animate__animated animate__slideInUp"></div>
      <div className="markIII animate__animated animate__slideInLeft "></div>
      <div className="markIIII animate__animated animate__slideInRight"></div>
      {offsetY > 490 ? <div className="navbar_mark"></div> : ""}
      <nav
        className={`navbar animate__animated ${
          offsetY > 490
            ? "navbarII animate__animated animate__slideInDown"
            : " navbarI "
        }`}
      >
        <div className="logo">
          <Link>SImple</Link>
        </div>
        <div className="menu">
          <button>HOME</button>
          <button>ABOUT</button>
          <button>GALLERY</button>
          <button>SERVICES</button>
          <button>TESTIMONIALS</button>
          <button>CLIENTS</button>
          <button>PRICING</button>
        </div>
        <div className="info">
          <FaFacebookF className="icon" />
          <SiGmail className="icon" />
          <FaInstagram className="icon" />
        </div>
      </nav>
      <div
        className="image-background animate__animated animate__fadeIn"
        style={{
          backgroundPositionY: `${offsetY * 0.4 - 70}px`,
        }}
      >
        <span></span>
        <h1>
          A FREE WEBSITE <br /> AND SIMPLE TO <br /> LEARNING
        </h1>
        <p>
          Simple is a free website you <br />
          can use for your learning. It is free <br />
          to use for your personal and commercial <br /> projects, enjoy!
        </p>
        <span className="aa"></span>
      </div>
      <section className="sec_home_I">
        <div className="I">
          <p className="haha">Success</p>
          <h1>How We Help You To Learning</h1>
          <span></span>
          <p className="hehe">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam!
          </p>
        </div>
        <div className="II">
          {communityData.map((community, index) => (
            <div
              key={index}
              ref={(el) => (sectionsRef.current[index] = el)}
              className={`${
                visibleCommunity.includes(index)
                  ? "animate__animated animate__fadeInUp hidden"
                  : "hidden"
              }`}
            >
              <img
                src={community.image}
                className="icon"
                alt={community.title}
              />
              <h3>{community.title}</h3>
              <p>
                Has ne tritani atomorum conclusionemque, in dolorum volumus
                cotidieque eum. At vis choro neglegentur iudico
              </p>
            </div>
          ))}
        </div>
      </section>
      <section ref={galleryRef} className="sec_home_II flex">
        <div className="image_gallery">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              onClick={() => openImageViewer(index)}
              width="450"
              className={`hover ${
                visibleImages.includes(index)
                  ? "animate__animated animate__fadeIn"
                  : "hidden"
              }`}
              style={{ margin: "2px" }}
              alt={`Gallery Image ${index + 1}`}
            />
          ))}
          {isViewerOpen && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0, 0, 0, 0.9)",
                zIndex: 1000,
              }}
            >
              <ImageViewer
                src={images}
                currentIndex={currentImage}
                onClose={closeImageViewer}
                disableScroll={false}
                backgroundStyle={{
                  height: "98%",
                  width: "98%",
                  backgroundColor: "transparent",
                }}
                closeOnClickOutside={true}
              />
            </div>
          )}
        </div>
      </section>
      <section className="sec_home_III">
        <div className="I">
          <h3>
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit, sed
            <br /> do eiusmod tempor incididunt ut <br />
            labore et dolore magna <br />
            aliqua
          </h3>
          <p>— John Doe, Happy Customer</p>
        </div>
        <div className="II">
          <p>BELIEVING</p>
          <h1>Focusing On What Matters Most</h1>
          <span></span>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam!
          </h2>
          <h3>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet!
          </h3>
        </div>
        <div className="III">
          <img src={img11} alt="" />
        </div>
      </section>
      <section className="sec_home_IV">
        <div className="I">
          <p>FEEDBACK</p>
        </div>
        <div className="II">
          <p className="af">What our customers are saying</p>
        </div>
        <span></span>
        <div className="III">
          {feedback.map((item, index) => (
            <HomeFeedBackCard
              img={item.img}
              text={item.text}
              people={item.people}
              key={index}
            />
          ))}
        </div>
      </section>
      <section className="sec_home_V">
        <p className="zzz">We have the right package for you</p>
        <div className="II">
          <div
            style={{
              height: "80vh", // 80% chiều cao màn hình
              width: "20vw", // Chiếm 1/5 chiều ngang màn hình
              margin: "auto", // Căn giữa theo chiều ngang
              border: "8px solid rgb(185, 185, 185)", // Viền màu vàng
              display: "flex", // Sử dụng flexbox để căn chỉnh nội dung
              flexDirection: "column", // Sắp xếp các phần tử theo chiều dọc
              alignItems: "center", // Căn giữa theo trục ngang
              justifyContent: "space-around", // Phân bổ đều các phần tử theo chiều dọc
              fontFamily: "Arial, sans-serif", // Font chữ
              borderRadius: "8px", // Bo tròn góc
              backgroundColor: "#f9f9f9", // Màu nền sáng
            }}
          >
            <h3 style={{ margin: 0, fontWeight: "bold", fontSize: "1.2rem" }}>
              PERSONAL
            </h3>
            <p style={{ margin: 0, color: "#999", fontSize: "0.9rem" }}>
              The standard version
            </p>
            <div style={{ textAlign: "center" }}>
              <h1 style={{ margin: 0, fontSize: "2.5rem", color: "#000" }}>
                $19
              </h1>
              <p style={{ margin: 0, color: "#999", fontSize: "0.9rem" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                width: "100%",
                textAlign: "center",
                color: "#666",
                fontSize: "0.9rem",
                borderTop: "1px solid #ddd",
              }}
            >
              <li style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                5 Downloads
              </li>
              <li style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                2 Extensions
              </li>
              <li style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Tutorials
              </li>
              <li style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Forum Support
              </li>
              <li style={{ padding: "10px" }}>1 year free updates</li>
            </ul>
            <button
              style={{
                backgroundColor: "#fff",
                color: "#000",
                border: "2px solid #000",
                padding: "10px 20px",
                fontSize: "0.9rem",
                fontWeight: "bold",
                cursor: "pointer",
                textTransform: "uppercase",
                borderRadius: "4px",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#000";
                e.target.style.color = "#fff";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "#fff";
                e.target.style.color = "#000";
              }}
            >
              Buy Today
            </button>
          </div>
          <div
            style={{
              height: "80vh", // 80% chiều cao màn hình
              width: "20vw", // Chiếm 1/5 chiều ngang màn hình
              margin: "auto", // Căn giữa theo chiều ngang
              border: "8px solid rgb(185, 185, 185)", // Viền màu vàng
              display: "flex", // Sử dụng flexbox để căn chỉnh nội dung
              flexDirection: "column", // Sắp xếp các phần tử theo chiều dọc
              alignItems: "center", // Căn giữa theo trục ngang
              justifyContent: "space-around", // Phân bổ đều các phần tử theo chiều dọc
              fontFamily: "Arial, sans-serif", // Font chữ
              borderRadius: "8px", // Bo tròn góc
              backgroundColor: "#f9f9f9", // Màu nền sáng
              marginLeft: "30px",
              marginRight: "30px",
            }}
          >
            <h3 style={{ margin: 0, fontWeight: "bold", fontSize: "1.2rem" }}>
              PERSONAL
            </h3>
            <p style={{ margin: 0, color: "#999", fontSize: "0.9rem" }}>
              The standard version
            </p>
            <div style={{ textAlign: "center" }}>
              <h1 style={{ margin: 0, fontSize: "2.5rem", color: "#000" }}>
                $19
              </h1>
              <p style={{ margin: 0, color: "#999", fontSize: "0.9rem" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                width: "100%",
                textAlign: "center",
                color: "#666",
                fontSize: "0.9rem",
                borderTop: "1px solid #ddd",
              }}
            >
              <li style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                5 Downloads
              </li>
              <li style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                2 Extensions
              </li>
              <li style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Tutorials
              </li>
              <li style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Forum Support
              </li>
              <li style={{ padding: "10px" }}>1 year free updates</li>
            </ul>
            <button
              style={{
                backgroundColor: "#fff",
                color: "#000",
                border: "2px solid #000",
                padding: "10px 20px",
                fontSize: "0.9rem",
                fontWeight: "bold",
                cursor: "pointer",
                textTransform: "uppercase",
                borderRadius: "4px",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#000";
                e.target.style.color = "#fff";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "#fff";
                e.target.style.color = "#000";
              }}
            >
              Buy Today
            </button>
          </div>{" "}
          <div
            style={{
              height: "80vh", // 80% chiều cao màn hình
              width: "20vw", // Chiếm 1/5 chiều ngang màn hình
              margin: "auto", // Căn giữa theo chiều ngang
              border: "8px solid rgb(185, 185, 185)", // Viền màu vàng
              display: "flex", // Sử dụng flexbox để căn chỉnh nội dung
              flexDirection: "column", // Sắp xếp các phần tử theo chiều dọc
              alignItems: "center", // Căn giữa theo trục ngang
              justifyContent: "space-around", // Phân bổ đều các phần tử theo chiều dọc
              fontFamily: "Arial, sans-serif", // Font chữ
              borderRadius: "8px", // Bo tròn góc
              backgroundColor: "#f9f9f9", // Màu nền sáng
            }}
          >
            <h3 style={{ margin: 0, fontWeight: "bold", fontSize: "1.2rem" }}>
              PERSONAL
            </h3>
            <p style={{ margin: 0, color: "#999", fontSize: "0.9rem" }}>
              The standard version
            </p>
            <div style={{ textAlign: "center" }}>
              <h1 style={{ margin: 0, fontSize: "2.5rem", color: "#000" }}>
                $19
              </h1>
              <p style={{ margin: 0, color: "#999", fontSize: "0.9rem" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                width: "100%",
                textAlign: "center",
                color: "#666",
                fontSize: "0.9rem",
                borderTop: "1px solid #ddd",
              }}
            >
              <li style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                5 Downloads
              </li>
              <li style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                2 Extensions
              </li>
              <li style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Tutorials
              </li>
              <li style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Forum Support
              </li>
              <li style={{ padding: "10px" }}>1 year free updates</li>
            </ul>
            <button
              style={{
                backgroundColor: "#fff",
                color: "#000",
                border: "2px solid #000",
                padding: "10px 20px",
                fontSize: "0.9rem",
                fontWeight: "bold",
                cursor: "pointer",
                textTransform: "uppercase",
                borderRadius: "4px",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#000";
                e.target.style.color = "#fff";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "#fff";
                e.target.style.color = "#000";
              }}
            >
              Buy Today
            </button>
          </div>
        </div>
      </section>
      <div className="end">Made with love by SangSaiDepChiu</div>
    </section>
  );
};

export default Home;
