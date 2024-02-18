import "./Footer.css";

const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-center mt-5">
        <div className="row  text-light pt-5 pb-5">
            <div className="col-6">
                <a className="navbar-brand m-3" href="#"><span className="badge bg-light text-dark fs-2">BeroNews</span></a>
                <hr />
                <h3 className="m-3">Author: Berat Ozlu</h3>
                <h3 className="m-2">Email: Berat@ozlu.com</h3>
            </div>
            <div className="col-6">
                <h2 className="text-center m-2 fw-bold">Latest <span className="badge bg-danger">News</span></h2>
            </div>
        </div>
    </div>
  )
}

export default Footer