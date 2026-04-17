import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/MyNavBar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import EmpList from "./pages/EmpList.jsx";
import Footer from "./components/Footer.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import { Suspense } from "react";
import Protected from "./components/Protected.jsx";
import { AuthProvider } from "./components/AuthContext.jsx";

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <MyNavbar />
        <div className="flex-grow-1">
          <ErrorBoundary>
            <Suspense
              fallback={<h3 className="text-center mt-5">⏳ Loading...</h3>}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route
                  path="/emplist"
                  element={
                    <Protected>
                      <EmpList />
                    </Protected>
                  }
                />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
      </AuthProvider>
  );
}

export default App;
