export default function Home() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <div className="card shadow-lg border-0">
            <div className="card-body p-5">
              <h1 className="display-4 mb-4 text-primary fw-bold">Welcome Home!</h1>
              <p className="lead mb-5">This is the home page. Here you can find a quick overview and navigate to other sections of the site.</p>
              <div className="d-flex justify-content-center gap-4 mt-4">
                <a href="/about" className="btn btn-primary btn-lg px-5">About</a>
                <a href="/contact" className="btn btn-outline-secondary btn-lg px-5">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
