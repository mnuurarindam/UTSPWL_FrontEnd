import "../index.css"; // Import the appropriate CSS file

function Checkout() {
  return (
    <>
      {/* <!-- Header--> */}
      <header className="bg-dark bg-gradient  py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">
              Shop Cars Hotwheels LibertyWalk in style
            </h1>
            <p className="lead fw-normal text-white-50 mb-0">
              This is the Hotwheels LibertyWalk Car Checkout process
            </p>
            <div className="card">
              <div className="row">
                <div className="col-md-8 cart">
                  <div className="title">
                    <div className="row">
                      <div className="col">
                        <h4>
                          <b>Shopping Cart Hotwheels LibertyWalk</b>
                        </h4>
                      </div>
                      <div className="col align-self-center text-right text-muted">
                        3 items
                      </div>
                    </div>
                  </div>
                  <div className="row border-top border-bottom">
                    <div className="row main align-items-center">
                      <div className="col-2">
                        <img
                          className="img-fluid"
                          src="https://images.wallpaperscraft.com/image/single/mercedesbenz_sclass_w222_112850_1280x720.jpg"
                          alt="Product"
                        />
                      </div>
                      <div className="col">
                        <div className="row text-muted">Hotwheels</div>
                        <div className="row">Mercedez Benz</div>
                      </div>
                      <div className="col">
                        <a href="#">-</a>
                        <a href="#" className="border">
                          1
                        </a>
                        <a href="#">+</a>
                      </div>
                      <div className="col">
                        Rp. 40.000 <span className="close">&#10005;</span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="row main align-items-center">
                      <div className="col-2">
                        <img
                          className="img-fluid"
                          src="https://images.wallpaperscraft.com/image/single/bmw_i8_white_105881_1280x720.jpg"
                          alt="Product"
                        />
                      </div>
                      <div className="col">
                        <div className="row text-muted">Hotwheels</div>
                        <div className="row">BMW 8i</div>
                      </div>
                      <div className="col">
                        <a href="#">-</a>
                        <a href="#" className="border">
                          1
                        </a>
                        <a href="#">+</a>
                      </div>
                      <div className="col">
                        Rp. 40.000 <span className="close">&#10005;</span>
                      </div>
                    </div>
                  </div>
                  <div className="row border-top border-bottom">
                    <div className="row main align-items-center">
                      <div className="col-2">
                        <img
                          className="img-fluid"
                          src="https://libertywalk.co.jp/wp-content/uploads/2023/09/370485971_18380075542006105_5982892675257902614_n.jpg"
                          alt="Product"
                        />
                      </div>
                      <div className="col">
                        <div className="row text-muted">Hotwheels</div>
                        <div className="row">Lamborghini</div>
                      </div>
                      <div className="col">
                        <a href="#">-</a>
                        <a href="#" className="border">
                          1
                        </a>
                        <a href="#">+</a>
                      </div>
                      <div className="col">
                        Rp. 40.000 <span className="close">&#10005;</span>
                      </div>
                    </div>
                  </div>
                  <div className="back-to-shop">
                    <a href="#">
                      <span className="text-muted">Back to shop</span>
                    </a>
                  </div>
                </div>
                <div className="col-md-4 summary">
                  <div>
                    <h5>
                      <b>Summary</b>
                    </h5>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col" style={{ paddingLeft: 0 }}>
                      ITEMS 3
                    </div>
                    <div className="col text-right">Rp. 132.000</div>
                  </div>
                  <form>
                    <p>SHIPPING</p>
                    <select>
                      <option className="text-muted">
                        Standard-Delivery - Rp.5.000
                      </option>
                    </select>
                    <p>GIVE CODE</p>
                    <input id="code" placeholder="Masukkan Code" />
                  </form>
                  <div
                    className="row"
                    style={{
                      borderTop: "1px solid rgba(0,0,0,.1)",
                      padding: "2vh 0",
                    }}
                  >
                    <div className="col">TOTAL Harga</div>
                    <div className="col text-right">Rp. 137.000</div>
                  </div>
                  <button className="btn">CHECKOUT</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Checkout;