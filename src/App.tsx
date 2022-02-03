import React, { FunctionComponent, lazy, Suspense } from "react";
import "./App.css";
import Navigation from "./component/navigation/navigation.component";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/home.page";
import Spinner from "./component/spinner/spinner.component";
import CustomModal from "./component/custom-modal/custom-modal.component";
import CartMobile from "./component/cart/cart-mobile.component";
import ErrorBoundary from "./component/error-boundary/error-boundary.component";

const ProductPage = lazy(() => import("./pages/product.page"));
const SigninPage = lazy(() => import("./pages/signin.page"));
const SignupPage = lazy(() => import("./pages/signup.page"));

const App: FunctionComponent<any> = () => {
  return (
    <div>
      <BrowserRouter>
        <ErrorBoundary>
          <section className="main-app-container">
            <Suspense fallback={<Spinner />}>
              <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/products" element={<ProductPage />}></Route>
                <Route path="/signup" element={<SignupPage />}></Route>
                <Route path="/signin" element={<SigninPage />}></Route>
              </Routes>
            </Suspense>
          </section>
          <Navigation />
          <CustomModal />
          <CartMobile />
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
};

export default App;
