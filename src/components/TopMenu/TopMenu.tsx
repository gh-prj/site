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
                    <li className={styles.hasch}>subitem_2
                        <ul className={styles.vmenu}>
                            <li><Link to="/site/one">111</Link></li>
                            <li>subsubitem_2</li>
                            <li>subsubitem_3</li>
                            <li>subsubitem_4</li>
                        </ul>
                    </li>
                    <li><Link to="/site/two">222</Link></li>
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
            <li>item_3
                <ul>
                    <li>subitem_1</li>
                    <li>subitem_2</li>
                    <li className={styles.hasch}>si_3
                        <ul className={styles.vmenu}>
                            <li>sub-subitem_1</li>
                            <li>sub-subitem_2</li>
                            <li className={styles.hasch}>sub-subitem_3
                                <ul className={styles.vmenu}>
                                    <li>sub-subitem_1</li>
                                    <li>sub-subitem_2</li>
                                    <li>sub-subitem_3</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>subitem_4</li>
                    <li>subitem_5</li>
                </ul>
            </li>
        </ul>
    );
}

export default TopMenu;
