import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Error404Content = () => {
    return (
        <>
            <div className="error-page-area pt-120 text-center bg-dark" >
                <div className="shape-left" style={{ background: `url(/img/shape/44-left.png)` }}></div>
                <div className="shape-right" style={{ background: `url(/img/shape/44-right.png)` }}></div>
                <div className="container ">
                    <div className="error-box">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <h1 className='text-light'>404</h1>
                                <h2 className=''>Sorry Page Was Not Found!</h2>
                                <p>
                                    Household shameless incommode at no objection behaviour. Especially do at he possession insensible sympathize boisterous it. Songs he on an widen me event truth.
                                </p>
                                <Link className="btn mt-20 btn-md btn-theme" to="/#">Back to home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Error404Content;