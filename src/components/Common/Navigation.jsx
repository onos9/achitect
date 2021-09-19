import React from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {

    componentDidMount() {
        function loadScript(src) {

            return new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                script.src = src;
                script.addEventListener('load', function () {
                    resolve();
                });
                script.addEventListener('error', function (e) {
                    reject(e);
                });
                document.body.appendChild(script);
                document.body.removeChild(script);
            })
        };

        loadScript('./assets/js/masonary.js');

    };

    render() {
        return (
            <>
                <div className={(this.props.bgcolor !== '') ? `header-nav navbar-collapse collapse ${this.props.bgcolor}` : 'header-nav navbar-collapse collapse'}>
                    <ul className="nav navbar-nav">
                        <li className="active">
                            <NavLink to={""}>Home</NavLink>
                        </li>
                        <li>
                        <NavLink to={"/about"}>About us</NavLink>
                        </li>
                        <li>
                        <NavLink to={"/services"}>Services</NavLink>
                        </li>
                        <li>
                        <NavLink to={"/blog-listing"}>Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/project-grid"}>Projects</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/contactus"}>Contact Us</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/faq"}>FAQ</NavLink>
                        </li>
                        <li className="submenu-direction">
                            <NavLink to={"/accordian"}>Shortcodes</NavLink>
                        </li>
                    </ul>
                </div>
            </>
        );
    };
};

export default Navigation;