import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import header1 from '../../../assets/images/header1.png';
import header2 from '../../../assets/images/header2.png';
import header3 from '../../../assets/images/header3.png';
import header4 from '../../../assets/images/header4.png';
import header5 from '../../../assets/images/header5.png';

function Header() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        handleResize();
    }, []);

    return (
        <section className={`${screenWidth > 992 ? ' pt-5' : 'pt-0'} mt-5`}>
            <div className="d-flex flex-column gap-3 container align-items-center">
                <h1 className="display-5 fw-bold">Capture your infinite mind, securely.</h1>
                <p
                    className={`fw-normal text-secondary fs-5 ${
                        screenWidth > 992 ? 'w-50 text-center' : null
                    } mx-auto`}
                >
                    Note It is an end-to-end{' '}
                    <span className="border-bottom border-warning text-dark">encrypted</span>{' '}
                    note-taking web-app for digitalists and professionals. Capture your notes,
                    files, and life&apos;s work all in one secure place.
                </p>
                <Link to="/notes">
                    <Button
                        className={`py-2 ${screenWidth > 992 ? 'px-4' : 'w-100'}`}
                        variant="primary fw-bold"
                    >
                        Take Notes
                    </Button>
                </Link>
            </div>
            <div
                className="d-flex justify-content-center gap-1 overflow-hidden mt-5"
                style={{ height: screenWidth > 600 ? '300px' : '200px' }}
            >
                <img className="fluid" src={header1} alt="Header" />
                <img className="fluid" src={header2} alt="Header" />
                <img className="fluid" src={header3} alt="Header" />
                <img className="fluid" src={header4} alt="Header" />
                <img className="fluid" src={header5} alt="Header" />
            </div>
        </section>
    );
}

export default Header;
