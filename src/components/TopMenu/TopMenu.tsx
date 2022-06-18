/* eslint no-unused-vars: "off" */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./TopMenu.module.scss"

const TopMenu = () => {
    return (
        <ul className={styles.top_menu}>
            <li className={styles.link}><Link to="/site">Home</Link></li>
            <li>Test
                <ul>
                    <li>
                        <Link to="/site/test">Test</Link>
                    </li>
                </ul>
            </li>
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
                    <li><Link to="/site/redux/users">Redux</Link></li>
                    <li><Link to="/site/ts/props">TypeScript</Link></li>
                </ul>
            </li>
            <li className={styles.link}><Link to="/site/html">HTML</Link></li>
            <li>CSS
                <ul>
                    <li className={styles.hasch}>Animations
                        <ul className={styles.vmenu}>
                            <li><Link to="/site/checkbox">Checkbox</Link></li>
                            <li><Link to="/site/text_typing">Text Typing</Link></li>
                            <li><Link to="/site/creative">Creative</Link></li>
                            <li><Link to="/site/water">Water</Link></li>
                            <li><Link to="/site/airplane">Airplane</Link></li>
                            <li><Link to="/site/cubes">Cubes</Link></li>
                            <li><Link to="/site/cube3d">3D Cube</Link></li>
                            <li><Link to="/site/tetrahedron">Tetrahedron</Link></li>
                            <li><Link to="/site/folding">Folding Cube</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/site/css_tricks">Tricks</Link></li>
                    <li>Grid</li>
                    <li>Flexbox</li>
                </ul>
            </li>
        </ul>
    );
}

export default TopMenu;
