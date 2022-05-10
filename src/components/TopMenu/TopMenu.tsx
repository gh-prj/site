/* eslint no-unused-vars: "off" */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./TopMenu.module.scss"

const TopMenu = () => {
    return (
        <ul className={styles.top_menu}>
            <li><Link to="/site">Home</Link></li>
            <li>Test
                <ul >
                    <li>
                        <Link to="/site/test" >Test</Link>
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
                            <li>useMemo</li>
                            <li><Link to="/site/usecallback">useCallback</Link></li>
                        </ul>
                    </li>
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
            <li>CSS
                <ul>
                    <li className={styles.hasch}>Animations
                        <ul className={styles.vmenu}>
                            <li>1</li>
                            <li>2</li>
                        </ul>
                    </li>
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
