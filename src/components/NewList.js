import React from "react";

class NewList extends React.Component {
  componentDidMount() {
    if (this.props.category === 0) {
      this.props.onGetNews();
    } else {
      this.props.onGetNewsCategory(this.props.category);
    }
  }

  render() {
    const { news, hasError, isLoading } = this.props;
    if (hasError) {
      return (
        <div className="container">
          <h6>Failed to search the News.</h6>
        </div>
      );
    }

    if (isLoading) {
      return (
        <div className="container">
          <h6>Loading…</h6>
        </div>
      );
    }

    return (
      <div className="container mt-6">
        <div className="row py-3 mt-3">
          {news.map((nw, i) => (
            <div className="col-lg-4 col-md-6 col-sm-12 py-3" key={i}>
              <div
                className="card shadow mb-5 p-2 bg-white rounded" /* style={{maxHeight:"400px" , overflow:"auto"}} */
              >
                {console.log(this.props.nameHotel)}
                <img src={nw.img_url} className="card-img-top" alt="IMG" />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontFamily: "Georgia" }}>
                    {nw.title}
                  </h5>
                  <p className="card-text">
                    {nw.source_name} - {nw.category}
                  </p>

                  <br />
                  <a
                    href={nw.url}
                    className="btn btn-primary btn-block"
                    target="_blank"
                  >
                    Ver mas Información
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default NewList;
