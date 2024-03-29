/* eslint no-unused-vars: "off" */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./TopMenu.module.scss"

const TopMenu = () => {
    return (
        <ul className={styles.top_menu}>
            <li className={styles.link}><Link to="/site">Home</Link></li>
            <li className={styles.link}><Link to="/site/mobx/dondals">McDondal&apos;s</Link></li>
            {/* <li className={styles.link}><Link to="/site/testcontext">Context Test</Link></li> */}

            {/* <li>Test
                <ul>
                    <li>
                        <Link to="/site/test">Test</Link>
                    </li>
                </ul>
            </li> */}
            <li>React
                <ul>
                    <li className={styles.hasch}>Hooks
                        <ul className={styles.vmenu}>
                            <li><Link to="/site/usestate">useState</Link></li>
                            <li><Link to="/site/useref">useRef</Link></li>
                            <li><Link to="/site/useeffect">useEffect</Link></li>
                            <li><Link to="/site/usememo">useMemo</Link></li>
                            <li><Link to="/site/usecallback">useCallback</Link></li>
                            <li><Link to="/site/usecontext">useContext</Link></li>
                            <li><Link to="/site/usereducer">useReducer</Link></li>
                            <li><Link to="/site/usetransition">useTransition</Link></li>
                        </ul>
                    </li>
                    <li className={styles.hasch}>Debouncing
                        <ul className={styles.vmenu}>
                            <li><Link to="/site/deb_v">Value</Link></li>
                            <li><Link to="/site/deb_c">Callback</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/site/scroll">Infinite Scroll</Link></li>
                    <li><Link to="/site/redux">Redux</Link></li>
                    <li><Link to="/site/reduxthunk/users">Redux Thunk</Link></li>
                    <li><Link to="/site/saga">Redux-Saga</Link></li>
                    <li className={styles.hasch}>MobX
                        <ul className={styles.vmenu}>
                            <li><Link to="/site/mobx/observable">Core</Link></li>
                            {/* <li><Link to="/site/mobx/dondals">McDondal&apos;s</Link></li> */}
                        </ul>
                    </li>
                    <li><Link to="/site/ts/props">TypeScript</Link></li>
                </ul>
            </li>
            <li>CSS
                <ul>
                    <li className={styles.hasch}>Animations
                        <ul className={styles.vmenu}>
                            <li><Link to="/site/text_typing">Text Typing</Link></li>
                            <li><Link to="/site/creative">Creative</Link></li>
                            <li><Link to="/site/water">Water</Link></li>
                            <li><Link to="/site/airplane">Airplane</Link></li>
                            <li><Link to="/site/cubes">Cubes</Link></li>
                            <li><Link to="/site/cube3d">3D Cube</Link></li>
                            <li><Link to="/site/tetrahedron">Tetrahedron</Link></li>
                            <li><Link to="/site/text3d">3D Text</Link></li>
                            <li><Link to="/site/folding">Folding Cube</Link></li>
                            <li><Link to="/site/gallery3D">3D Gallery</Link></li>
                            <li><Link to="/site/parallax">Parallax</Link></li>
                            <li><Link to="/site/scene3D">3D Scene</Link></li>
                        </ul>
                    </li>
                    <li className={styles.hasch}>UI
                        <ul className={styles.vmenu}>
                            <li><Link to="/site/checkbox">Checkbox</Link></li>
                            <li><Link to="/site/triangle">Triangle</Link></li>
                            <li><Link to="/site/menu3d">3D Menu</Link></li>
                            <li><Link to="/site/navbar">Navigation Bar</Link></li>
                            <li><Link to="/site/checkbox2">Checkbox</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/site/css_tricks">Tricks</Link></li>
                    {/* <li>Grid</li>
                    <li>Flexbox</li> */}
                </ul>
            </li>
            <li className={styles.link}><Link to="/site/html">HTML</Link></li>
        </ul>
    );
}

export default TopMenu;
