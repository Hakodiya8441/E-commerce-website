 import { useEffect, useState } from "react";
 import { useLocation } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import { Box } from "@mui/material";

function SingleProduct() {
  const [items, setItems] = useState([]);
  const location = useLocation();
  const url = location.pathname.split("/").pop();
  console.log(url);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${url}`)
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        console.log(data);
        setItems(data);
      });
  }, []);
  return (
    <MDBContainer fluid className="my-5">
      <MDBRow className="justify-content-center">
        <MDBCol md="8" lg="6" xl="4">
          <MDBCard style={{ borderRadius: "15px" }}>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-overlay"
            >
              <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
              <MDBCardImage
                src={items.image}
                fluid
                style={{
                  borderTopLeftRadius: "15px",
                  borderTopRightRadius: "15px",
                  width:"200px"
                }}
              />
              </Box>
              <a href="#!">
                <div className="mask"></div>
              </a>
            </MDBRipple>
            <MDBCardBody className="pb-0">
              <div className="d-flex justify-content-between">
                <div>
                  <p>
                    <a href="#!" className="text-dark">
                      {items.title}
                    </a>
                  </p>
                </div>
                <div>
                  <div className="d-flex flex-row justify-content-end mt-1 mb-4 text-danger">
                    <MDBIcon fas icon="star" />
                    <MDBIcon fas icon="star" />
                    <MDBIcon fas icon="star" />
                    <MDBIcon fas icon="star" />
                  </div>
                  {/* <p className="small text-muted">Rating:- {items.rating.rate}/5</p> */}
                  <p className="small text-muted">Rating:-{items.rating && items.rating.rate}</p>
                </div>
              </div>
            </MDBCardBody>
            <hr className="my-0" />
            <MDBCardBody className="pb-0">
              <div className="d-flex justify-content-between">
                <p>
                  <a href="#!" className="text-dark">
                    ${items.price}
                  </a>
                </p>
              </div>
              <p className="small text-muted">VISA Platinum</p>
            </MDBCardBody>
            <hr className="my-0" />
            <p className="small text-muted p-2">Product Description:-{items.description}</p>
            <MDBCardBody className="pb-0">
              <div className="d-flex justify-content-between align-items-center pb-2 mb-4">
                {/* <a href="#!" className="text-dark fw-bold">
                  Cancel
                </a> */}
                <MDBBtn color="danger">Wishlist</MDBBtn>
                <MDBBtn color="success">Buy now</MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default SingleProduct;
