import { React, Link } from "../../Utils/CustomUtils";
import "../../Utils/CustomCSSUtils.css";
import { useCatagoriesFilterContext } from "../../Context/CatagoriesFilterContext";

function FeaturedBrands() {
  const { searchbarData } = useCatagoriesFilterContext();
  const featuredCars = searchbarData.slice(6, 10);
  const carsCatagory = searchbarData.slice(5, 8);

  return (
    <div>
      <section class="icons-container">
        <div class="icons">
          <span class="material-icons fbmi">check_circle</span>
          <div class="content">
            <h3>150+</h3>
            <p>branches</p>
          </div>
        </div>

        <div class="icons">
          <span class="material-icons fbmi">local_shipping</span>
          <div class="content">
            <h3>4770+</h3>
            <p>cars sold</p>
          </div>
        </div>

        <div class="icons">
          <span class="material-icons fbmi">groups</span>
          <div class="content">
            <h3>320+</h3>
            <p>happy clients</p>
          </div>
        </div>

        <div class="icons">
          <span class="material-icons fbmi">directions_car</span>
          <div class="content">
            <h3>1500+</h3>
            <p>news cars</p>
          </div>
        </div>
      </section>

      <div class="featured-products">
        <div class="featured-catagories">
          <div class="h1"> Catagories</div>
        </div>

        <div class="catagory-choice">
          {carsCatagory.map((car) => (
            <div>
              <Link
                to={`/ProductListingPage/${car.categoryName}`}
                style={{ textDecoration: "none" }}
              >
                <div class="first-catagory box">
                  <img
                    src={car.image}
                    alt="car"
                    className="catagory-cars-image"
                  />
                  <h3 style={{ textTransform: "uppercase", padding: "0.5rem" }}>
                    {car.categoryName}
                  </h3>
                </div>
              </Link>
            </div>
          ))}

          {/* <Link to="/" style={{ textDecoration: "none" }}>
            <div class="second-catagory box">
              <img
                src="https://raw.githubusercontent.com/iprankurpandey/github-imagehosting/main/image/car-2.png"
                alt="car"
              />
              Diesel ⛽️
            </div>
          </Link> */}
          {/* <Link
            to={`/ProductListingPage/${carsCatagory.categoryName}`}
            style={{ textDecoration: "none" }}
          >
            <div class="fourth-catagory box">
              <img
                src="https://raw.githubusercontent.com/iprankurpandey/github-imagehosting/main/image/car-5.png"
                alt="car"
              />
              EV ⚡️
            </div>
          </Link> */}
        </div>

        <div class="featured-brands">
          <div class="h1">Featured Cars</div>
        </div>

        {/* featured cars  */}

        <div class="featured-cars">
          {featuredCars.map((car) => (
            <div class="car" key={car._id}>
              <img src={car.image} alt="car" class="car-image" />
              <div class="car-info">
                <div class="car-name">{car.title}</div>
                <div class="car-price">₹{car.price}K</div>
                <Link to={`/Productdetails/${car._id}`}>
                  <button className="btn btn-primary-outline">View</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { FeaturedBrands };
