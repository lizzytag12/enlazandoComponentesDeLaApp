import React from "react";
import TopBar from "./TopBar";
import ContentRowTop from "./ContentRowTop";
import GenresInDb from './GenresInDb'
import LastMovieInDb from "./LastMovieInDb";
import ContentRowMovies from "./ContentRowMovies";
import NotFound from "./NotFound";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
function ContentWrapper() {
  return (
    <React.Fragment>
      {/*<!-- Content Wrapper -->*/}
      <div id="content-wrapper" className="d-flex flex-column">
        {/*<!-- Main Content -->*/}
        <div id="content">
          <TopBar />

          <Routes>
            <Route exact path="/" element={<ContentRowTop />} />
            <Route exact path="/GenresInDb" element={<GenresInDb />} />
            <Route exact path="/LastMovieInDb" element={<LastMovieInDb />} />
            <Route exact path="/ContentRowMovies" element={<ContentRowMovies />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}
export default ContentWrapper;
