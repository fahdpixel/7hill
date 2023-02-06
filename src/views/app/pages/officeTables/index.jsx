import React from "react";
import Header from "../../../../layouts/utility/header/Header";
import Footer from "../../../../layouts/utility/footer/Footer";
import OfficeTablesBanner from "../../../../assets/images/office-tables-banner.jpg";
import OfficeTablesContent from "../../components/officeTablesContent";
import OfficeTablesLists from "../../components/officeTablesLists";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Helmet } from "react-helmet";
// import { useSelector } from "react-redux";

const OfficeTables = () => {
  // const category = useSelector((state) => state.category);
  // const [institutionalFurniture, setInstitutionalFurniture] = useState("");
  // useEffect(() => {
  //   let institutionalFurn = category?.filter((item) => item.slug === "institutional-furniture");
  //   institutionalFurn &&
  //     institutionalFurn.forEach((item) => {
  //       console.log(item.childCategory)
  //       setInstitutionalFurniture(item.image);
  //     });
  // }, [category]);
  return (
    <>
      <Helmet>
        <title>7Hill Furniture | Office Table</title>
        <meta
          name="description"
          content="Home furniture, office furniture in Chennai in India"
        />
        <meta
          name="keywords"
          content="Furniture, Home furniture, office furniture"
        />
      </Helmet>
      <Header />
      <LazyLoadImage
        src={OfficeTablesBanner}
        alt=""
        className="img-fluid w-100"
      />
      <OfficeTablesContent />
      <OfficeTablesLists />
      <Footer />
    </>
  );
};

export default OfficeTables;
