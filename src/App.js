import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
          <Route
              exact
              path="/"
              element={
                <div className="container my-6">
                  <News
                    key="general"
                    country="in"
                    pageSize="5"
                    category="general"
                  />
                </div>
              }
            />
            <Route
              exact
              path="/General"
              element={
                <div className="container my-6">
                  <News
                    key="general"
                    country="in"
                    pageSize="5"
                    category="general"
                  />
                </div>
              }
            />
            <Route
              exact
              path="/Business"
              element={
                <div className="container my-6">
                  <News
                    key="business"
                    country="in"
                    pageSize="5"
                    category="business"
                  />
                </div>
              }
            />

            <Route
              exact
              path="/Entertainment"
              element={
                <div className="container my-6">
                  <News
                    key="entertainment"
                    country="in"
                    pageSize="5"
                    category="entertainment"
                  />
                </div>
              }
            />

            <Route
              exact
              path="/Health"
              element={
                <div className="container my-6">
                  <News
                    key="health"
                    country="in"
                    pageSize="5"
                    category="health"
                  />
                </div>
              }
            />

            <Route
              exact
              path="/Science"
              element={
                <div className="container my-6">
                  <News
                    key="science"
                    country="in"
                    pageSize="5"
                    category="science"
                  />
                </div>
              }
            />

            <Route
              exact
              path="/Sports"
              element={
                <div className="container my-6">
                  <News
                    key="sports"
                    country="in"
                    pageSize="5"
                    category="sports"
                  />
                </div>
              }
            />

            <Route
              exact
              path="/Technology"
              element={
                <div className="container my-6">
                  <News
                    key="technology"
                    country="in"
                    pageSize="5"
                    category="technology"
                  />
                </div>
              }
            />

            <Route
              exact
              path="/General"
              element={
                <div className="container my-6">
                  <News
                    key="general"
                    country="in"
                    pageSize="5"
                    category="general"
                  />
                </div>
              }
            />
          </Routes>
        </Router>
      </>
    );
  }
}
