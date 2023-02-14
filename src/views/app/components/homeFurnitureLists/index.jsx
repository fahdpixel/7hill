import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsArrowRight } from "react-icons/bs";
import { useSelector } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
// import axios from "axios";

const HomeFurnitureLists = () => {

  const category = useSelector((state) => state.category);
  const [homeFurniture, setHomeFurniture] = useState("");
  useEffect(() => {
    let homeFurn = category?.filter((item) => item.slug === "home-furniture");
    homeFurn &&
      homeFurn.forEach((item) => {
        setHomeFurniture(item.child);
      });
  }, [category]);
  // console.log(homeFurniture);
  // const { product } = useParams();
  // const getProductDetails = () => {
  //   return axios
  //     .post(`https://7hillfurniture.com/admin/public/api/get/other/category`, {
  //       category: { product },
  //     })
  //     .then((res) => {
  //       // setProductDetails(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((err) => console.error(err));
  // };
  return (
    <>
      <section className="orange-bg">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} sm={12} md={12} lg={10} xl={6}>
              <h2 className="heading2 mar-bot-20 text-center">
                Our Range of Home Furniture to Make your Aesthetic
              </h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            {homeFurniture &&
              homeFurniture?.map((product, i) => (
                <Col xs={12} sm={12} md={6} lg={4} xl={4} key={i}>
                  <Link
                    to={`/home-furniture/${product.slug}/`}
                    className="product-list"
                  >
                    <div className="blog-img">
                      <LazyLoadImage
                        src={product.image}
                        alt=""
                        className="img-fluid w-100 h-15-rem"
                      />
                    </div>
                    <div className="product-list-content">
                      <h3>
                        {product.name}
                        <span>
                          <BsArrowRight />
                        </span>
                      </h3>
                    </div>
                  </Link>
                </Col>
              ))}
          </Row>
          {/* 
            <Col xs={12} sm={12} md={6} lg={4} xl={4}>
              <Link to="/home-furniture/products/" className="product-list">
                <div className="blog-img">
                  <img
                    src={SofasArmchairs}
                    alt=""
                    className="img-fluid w-100"
                  />
                </div>
                <div className="product-list-content">
                  <h3>
                    Sofas &amp; Armchairs{" "}
                    <span>
                      <BsArrowRight />
                    </span>
                  </h3>
                </div>
              </Link>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={4}>
              <Link to="/home-furniture/products/" className="product-list">
                <div className="blog-img">
                  <img src={DinningTables} alt="" className="img-fluid w-100" />
                </div>
                <div className="product-list-content">
                  <h3>
                    Dinning Tables{" "}
                    <span>
                      <BsArrowRight />
                    </span>
                  </h3>
                </div>
              </Link>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={4}>
              <Link to="/home-furniture/products/" className="product-list">
                <div className="blog-img">
                  <img src={DinningChairs} alt="" className="img-fluid w-100" />
                </div>
                <div className="product-list-content">
                  <h3>
                    Dinning Chairs{" "}
                    <span>
                      <BsArrowRight />
                    </span>
                  </h3>
                </div>
              </Link>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={4}>
              <Link to="/home-furniture/products/" className="product-list">
                <div className="blog-img">
                  <img src={SideTable} alt="" className="img-fluid w-100" />
                </div>
                <div className="product-list-content">
                  <h3>
                    Side Table{" "}
                    <span>
                      <BsArrowRight />
                    </span>
                  </h3>
                </div>
              </Link>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={4}>
              <Link to="/home-furniture/products/" className="product-list">
                <div className="blog-img">
                  <img src={CenterTable} alt="" className="img-fluid w-100" />
                </div>
                <div className="product-list-content">
                  <h3>
                    Center Table{" "}
                    <span>
                      <BsArrowRight />
                    </span>
                  </h3>
                </div>
              </Link>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={4}>
              <Link to="/home-furniture/products/" className="product-list">
                <div className="blog-img">
                  <img src={Cupboards} alt="" className="img-fluid w-100" />
                </div>
                <div className="product-list-content">
                  <h3>
                    Cupboards{" "}
                    <span>
                      <BsArrowRight />
                    </span>
                  </h3>
                </div>
              </Link>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={4}>
              <Link to="/home-furniture/products/" className="product-list">
                <div className="blog-img">
                  <img src={TvUnits} alt="" className="img-fluid w-100" />
                </div>
                <div className="product-list-content">
                  <h3>
                    TV Units{" "}
                    <span>
                      <BsArrowRight />
                    </span>
                  </h3>
                </div>
              </Link>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={4}>
              <Link to="/home-furniture/products/" className="product-list">
                <div className="blog-img">
                  <img src={ShoeRacks} alt="" className="img-fluid w-100" />
                </div>
                <div className="product-list-content">
                  <h3>
                    Shoe Racks{" "}
                    <span>
                      <BsArrowRight />
                    </span>
                  </h3>
                </div>
              </Link>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={4}>
              <Link to="/home-furniture/products/" className="product-list">
                <div className="blog-img">
                  <img src={PoojaMandapam} alt="" className="img-fluid w-100" />
                </div>
                <div className="product-list-content">
                  <h3>
                    Pooja Mandapam{" "}
                    <span>
                      <BsArrowRight />
                    </span>
                  </h3>
                </div>
              </Link>
            </Col>
          </Row> */}
        </Container>
      </section>
    </>
  );
};

export default HomeFurnitureLists;
