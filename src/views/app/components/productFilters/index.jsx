import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { RiFilter2Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { API_URL } from "../../../../redux/constant/ApiRoute";
import axios from "axios";

const ProductFilters = ({ menu }) => {
  // console.log(menu);
  const [isActive, setActive] = useState("false");
  // const [filterId, setFilterId] = useState();

  const ToggleClass = () => {
    setActive(!isActive);
  };

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);

  const getProducts = () => {
    return axios
      .post(API_URL.PRODUCT_FILTER, {
        // category: menu.slug,
        // filter_id: filterId,
      })
      .then((res) => {
        // setProduct(res.data);
        // console.log(res.data);
      })
      .catch((err) => console.error(err));
  };
  // let arr = [];
  // const filterIdValue = (ids) => {
  //   arr.push(ids);
  //   arr.join('-')
  //   // setFilterId(arr);
  //   console.log(arr);
  // };
  return (
    <>
      <h5 className="heading5">
        <Link className="product-filter-btn" onClick={ToggleClass}>
          <RiFilter2Fill /> Filters
        </Link>
      </h5>
      {menu && menu.filter_menus?.length !== 0 ? (
        <>
          <Form
            className={isActive ? "product-filters" : "active product-filters"}
          >
            <Link className="close-btn" onClick={ToggleClass}>
              <IoMdClose />
            </Link>
            {["checkbox"].map((type) => (
              <div key={`default-${type}`}>
                {menu.filter_menus?.map((item, i) => {
                  return (
                    <div key={i}>
                      <h6 className="heading6 text-orange">{item.title}</h6>
                      {item?.attributes_fields.map((item, i) => {
                        return (
                          <Form.Check
                            key={i}
                            type={type}
                            label={item.attribute_values}
                            id={item.attribute_values}
                            value={item.id}
                            // onChange={() => {
                            //   setFilterId(item.id);
                            //   filterIdValue(item.id)
                            //   console.log(item.id);
                            // }}
                          />
                        );
                      })}
                      {i !== menu?.filter_menus.length - 1 && (
                        <div className="divider"></div>
                      )}
                    </div>
                  );
                })}
                <button className="clear-btn">Clear All</button>
              </div>
            ))}
            {/* {["checkbox"].map((type) => (
          <div key={`default-${type}`}>
            <h6 className="heading6 text-orange">Bed Size</h6>
            <Form.Check type={type} label={`Single`} id={`single`} />
            <Form.Check type={type} label={`Queen`} id={`queen`} />
            <Form.Check type={type} label={`King`} id={`king`} />
            <Form.Check type={type} label={`Super King`} id={`superking`} />
            <div className="divider"></div>
            <h6 className="heading6 text-orange">Storage Type</h6>
            <Form.Check type={type} label={`No Storage`} id={`nostorage`} />
            <Form.Check type={type} label={`Side Storage`} id={`sidestorage`} />
            <Form.Check
              type={type}
              label={`Hydraulic Storage`}
              id={`hydraulicstorage`}
            />
            <div className="divider"></div>
            <h6 className="heading6 text-orange">Finishes</h6>
            <Form.Check type={type} label={`Natural`} id={`natural`} />
            <Form.Check type={type} label={`Dark Walnut`} id={`darkwalnut`} />
            <Form.Check type={type} label={`Light Walnut`} id={`lightwalnut`} />
            <Form.Check type={type} label={`Rosewood`} id={`rosewood`} />
            <button className="clear-btn">Clear All</button>
          </div>
        ))} */}
          </Form>
          <div className={isActive ? "backdrop" : "active backdrop"}></div>
        </>
      ) : (
        <>
          <small>No Filters Available</small>
        </>
      )}
    </>
  );
};

export default ProductFilters;
