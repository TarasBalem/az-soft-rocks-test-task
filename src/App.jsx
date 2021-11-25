import React, {lazy, Suspense} from "react";
import {Routes, Route} from "react-router-dom";
import Navigation from "components/Navigation";
import Loading from "components/Loading";
import ContactsPage from "pages/contactsPage/ContactsPage";

const AboutPage = lazy(() => import("pages/aboutPage/AboutPage"));
const PageNotFound = lazy(() => import("components/PageNotFound"));
const ContactItem = lazy(() =>
  import("pages/contactsPage/components/ContactItem"),
);
const ContactForm = lazy(() =>
  import("pages/contactsPage/components/ContactForm"),
);

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route path="contacts/" element={<ContactsPage />} />
            <Route path={`contact/:id`} element={<ContactItem />} />
            <Route path={`contacts/:new`} element={<ContactForm />} />
            <Route path={`contacts/edit/:id`} element={<ContactForm />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </div>
    </Suspense>
  );
};

export default App;
