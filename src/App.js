import React, { Fragment } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import { privateRoute, publicRoute } from './routes';

function App() {
    return (
        <Routes>
            {publicRoute.map((route, index) => {
                const path = route.path;
                const Page = route.page;
                let Layout = route.layout;

                if (Layout === null) {
                    Layout = Fragment;
                }

                return (
                    <Route
                        key={index}
                        path={path}
                        element={
                            <Layout>
                                <Page />
                            </Layout>
                        }
                    />
                );
            })}
            {privateRoute.map((route, index) => {
                const path = route.path;
                const Page = route.page;
                let Layout = route.layout;

                if (Layout === null) {
                    Layout = Fragment;
                }

                return (
                    <Route
                        key={index}
                        path={path}
                        element={
                            <Layout>
                                <Page />
                            </Layout>
                        }
                    />
                );
            })}
        </Routes>
    );
}

export default App;
