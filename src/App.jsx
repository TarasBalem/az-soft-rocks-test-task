import React, {lazy, Suspense} from "react";
import {Routes, Route} from "react-router-dom";
import Navigation from "components/navigation/Navigation";
import Loading from "components/loading/Loading";
import ContactsPage from "pages/contacts/ContactsPage";

const PageNotFound = lazy(() => import("pages/notFound/PageNotFound"));
const ContactItem = lazy(() => import("pages/contact/ContactItem"));
const ContactForm = lazy(() => import("pages/contact/components/form/ContactForm"));

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route path="/" element={<ContactsPage />} />
            <Route path={`contact/:id`} element={<ContactItem />} />
            <Route path={`:new`} element={<ContactForm />} />
            <Route path={`edit/:id`} element={<ContactForm />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </div>
    </Suspense>
  );
};

export default App;
