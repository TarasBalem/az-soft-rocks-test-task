import React, {lazy, Suspense} from "react";
import {Routes, Route} from "react-router-dom";
import Navigation from "components/Navigation";
import Loading from "components/Loading";
import ContactsPage from "pages/contactsPage/ContactsPage";

const AboutPage = lazy(() => import("pages/aboutPage/AboutPage"));
const PageNotFound = lazy(() => import("components/PageNotFound"));

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="container">
        <Navigation />
        <Routes>
          <Route path="/*" element={<ContactsPage />} />;
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Suspense>
  );
};

export default App;
