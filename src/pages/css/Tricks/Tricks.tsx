import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Tricks.module.scss'

const Tricks = () => {
    const [value, setValue] = useState<number>(0);
    const [peDisabled, setPeDisabled] = useState(false);
    const [fade, setFade] = useState(false);

    return (
        <div className={styles.container}>
            <div>
                <label>Postage Stamp</label>
                <div className={styles.stamp}>
                    <div></div>
                </div>
            </div>
            <div>
                <label>columns</label>
                <div className={styles.columns}>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, necessitatibus.</p>
                    </div>
                    <div>
                        <p>Sit amet consectetur, adipisicing elit. Illum, necessitatibus.</p>
                    </div>
                    <div>
                        <p>Ipsum dolor sit amet consectetur, adipisicing necessitatibus elit. Illum, sit amet ipsum adipisicing elit necessitatibus.</p>
                    </div>
                    <div>
                        <p>Dolor sit amet ipsum consectetur, adipisicing elit. Illum, necessitatibus.</p>
                    </div>
                    <div>
                        <p>Adipisicing ipsum dolor sit amet consectetur, elit. Illum, necessitatibus.</p>
                    </div>
                </div>
            </div>
            <div>
                <label>mix-blend-mode</label>
                <div className={styles.mixBlendMode}>
                    <p>Move cursor <a href="#">over here</a></p>
                </div>
            </div>
            <div>
                <label>open-quote</label>
                <div className={styles.quotes}>
                    <p>This is a <q>quote</q> (&lt;q&gt;quote&lt;/q&gt;). Quote marks look different depending on the <b>lang</b> attribute.
                        <q lang="">lang=&#39;&#39; (empty)</q><span> </span>
                        <q lang="en">lang=&#39;en&#39;</q><span> </span>
                        <q lang="fr">lang=&#39;fr&#39;</q><span> </span>
                        <q lang="de">lang=&#39;de&#39;</q><span> </span>
                        <q lang="pl">lang=&#39;pl&#39;</q><span> </span>
                        <q lang="ja">lang=&#39;ja&#39;</q><span> </span>
                    </p>
                    <blockquote lang="en">This is a blockquote.</blockquote>
                    <blockquote lang="fr">This is a blockquote.</blockquote>
                </div>
            </div>
            <div>
                <label>currentColor</label>
                <div className={styles.currentColor}>
                    <p>Lorem ipsum dolor sit amet consectetur! Animi earum dicta quam culpa dolorum adipisci.</p>
                    <blockquote>blockquote::before element has color &#39;currentColor&#39;</blockquote>
                    <p>Repellendus esse voluptates iste vitae.</p>
                </div>
            </div>
            <div>
                <label>Triangle</label>
                <div className={styles.triangle}>
                    <div></div>
                </div>
            </div>
            <div>
                <label>scrollPaddingTop</label>
                <div className={styles.scrollPaddingTop}>
                    <header><a href="#p2" onClick={(e) => {
                        e.preventDefault()
                        const target = document.getElementById('p2') as HTMLElement
                        const container = target.closest('div')?.parentElement as HTMLDivElement
                        const header = container.firstChild as HTMLHeadingElement
                        container.scroll(0, target.offsetTop - header.clientHeight)
                        // document.getElementById('p2')?.scrollIntoView({ block: 'nearest' })
                    }}>Jump to Part II</a></header>
                    <div>
                        <h6 id="p1">Part I</h6>
                        Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Quia magnam rem natus,
                        quibusdam assumenda dolorum repellat officiis?
                        Quibusdam illo magni, mollitia, quaerat quos
                        eveniet aperiam reiciendis sit laboriosam quae
                        unde consectetur hic debitis qui modi. Incidunt
                        cumque mollitia porro facilis, sint totam, eum
                        aspernatur expedita maxime assumenda quam.
                        <h6 id="p2">Part II</h6>
                        Eveniet voluptas dicta, reiciendis provident
                        cupiditate est ipsum! Vero corrupti quam quaerat.
                        Commodi ratione tempore quaerat quia. Magni
                        dolorem doloremque debitis repellat consequatur
                        molestiae. Officia delectus dolorem excepturi
                        incidunt porro ad qui aperiam illo repellendus
                        nihil eveniet fugit recusandae saepe, natus
                        temporibus minima. Temporibus vitae earum minus
                        necessitatibus sint iste labore laborum.
                    </div>
                </div>
            </div>
            <div>
                <label>calc</label>
                <div className={styles.calc}>
                    <div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div>
                <label>aspect-ratio</label>
                <div className={styles.aspectRatio}>
                    <div className={styles.old}>4x3</div>
                    <div className={styles.new}>16x9</div>
                </div>
            </div>
            <div>
                <label>pointer-events</label>
                <div className={styles.pointerEvents}>
                    <span>{value}</span>
                    <div className={styles.outerDiv} style={{ color: fade ? "black" : "transparent" }}>
                        Still clickable
                        <div className={styles.innerDiv}>
                            <button
                                onClick={() => setValue(x => x + 1)}
                                className={fade ? styles.plusOne : ""}
                            >+1</button>
                        </div>
                    </div>
                    <div className={styles.outerDiv} style={{ color: fade ? "black" : "transparent" }}>
                        Not clickable
                        <div className={styles.innerDiv}>
                            <button
                                onClick={() => setValue(x => x + 1)}
                                className={fade ? `${styles.plusOne} ${styles.disableEvents}` : ""}
                            >+1</button>
                        </div>
                    </div>
                    <br />
                    <button
                        style={{ margin: "5px 0" }}
                        onClick={() => { console.log('click'); setFade(!fade) }}
                    >{fade ? "Show" : "Fade out"}</button>
                </div>
            </div>
            <div>
                <label>margin: auto</label>
                <div className={styles.marginAuto}>
                    <div style={{ margin: '0 auto 0 0' }}>
                        0 auto 0 0
                    </div>
                    <div style={{ margin: '2px 0 0 auto' }}>
                        2px 0 0 auto
                    </div>
                    <div style={{ margin: '2px auto 0' }}>
                        2px auto 0 auto
                    </div>
                    <div style={{ margin: '2px auto 0', height: 40, lineHeight: '40px' }}>
                        line-height
                    </div>
                </div>
            </div>
            <div>
                <label>::selection</label>
                <div className={styles.selection}>
                    <pre>
                        {`p::selection {
    background-color: green;
    color: white;
}`}
                    </pre>
                </div>
            </div>
            <div>
                <label>Custom checkbox</label>
                <div className={styles.customcheckbox}>
                    <input type="checkbox" /> Original
                    <label className={styles.checkbox}>Custom
                        <input type="checkbox" />
                        <span className={styles.checkmark}></span>
                    </label>
                </div>
            </div>
            <div>
                <label>Invert colors</label>
                <div className={styles.invert}>
                    <div>
                        <p>Lorem ipsum, sit amet
                        elit. Deserunt, sit.</p>
                        <a>Anchor</a>
                    </div>
                    <div>
                        <p>Lorem ipsum, sit amet
                        elit. Deserunt, sit.</p>
                        <a>Anchor</a>
                    </div>
                </div>
            </div>
            <div>
                <label>Adapt text</label>
                <div className={styles.adaptText}>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Quia expedita dolorum,
                        voluptates quos velit nam soluta doloremque
                        fuga tenetur nisi?
                    </div>
                </div>
            </div>
            <div>
                <label>Double box-shadow</label>
                <div className={styles.shadows}>
                    <h4>shadows</h4>
                </div>
            </div>
            <div>
                <label>background-clip</label>
                <div className={styles.background}>
                    {/* <h3>Lorem ipsum</h3> */}
                    <h3>TIGER</h3><br />
                    <h1>Firework</h1>
                </div>
            </div>
            <div>
                <label>Custom tooltip</label>
                <div className={styles.tooltip}>
                    <button data-tooltip="Some text">Hover Me</button>
                </div>
            </div>
            <div>
                <label>:is()</label>
                <div className={styles.is}>
                    <ul>
                        <li>
                            List #1
                            <ol>
                                <li>Item 1</li>
                                <li>Item 2</li>
                            </ol>
                        </li>
                        <li>
                            List #2
                            <ul>
                                <li>Item 1</li>
                                <li>Item 2</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <label>Counters</label>
                <div className={styles.counters}>
                    <h5>First</h5>
                    <h5>Second</h5>
                    <h5>Third</h5>
                    <ol>
                        <li>list item</li>
                        <li>list item
                        <ol>
                                <li>list item</li>
                                <li>list item
                                <ol>
                                        <li>list item</li>
                                        <li>list item</li>
                                        <li>list item</li>
                                    </ol>
                                </li>
                                <li>list item</li>
                            </ol>
                        </li>
                        <li>list item
                        <ol>
                                <li>list item</li>
                                <li>list item</li>
                            </ol>
                        </li>
                    </ol>
                </div>
            </div>
            <div>
                <label>conic-gradient</label>
                <div className={styles.conicGradient}>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div>
                <label>ellipsis</label>
                <div className={styles.ellipsis}>
                    <div>Lorem ipsum dolor sit amet.</div>
                    <div>Lorem ipsum dolor sit amet.</div>
                </div>
            </div>
            <div>
                <label>text-shadow</label>
                <div className={styles.textShadow}>
                    <h1>Lorem.</h1>
                </div>
            </div>
            <div>
                <label>all: initial</label>
                <div className={styles.all}>
                    <h3>Example</h3>
                    <h3>Example</h3>
                </div>
            </div>
            <div>
                <label>border-radius</label>
                <div className={styles.radius}>
                    <div>50%</div>
                    <div>50%</div>
                    <div>9999px</div>
                </div>
            </div>
            <div>
                <label>transform</label>
                <div className={styles.transform}>
                    <button className={`${styles.btn}`}></button>
                    <button className={`${styles.btn} ${styles.big}`}></button>
                    <button className={`${styles.btn} ${styles.down}`}></button>
                    <button className={`${styles.btn} ${styles.big} ${styles.down}`}></button>
                </div>
            </div>
            <div>
                <label>resize</label>
                <div className={styles.resizable}>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis eos necessitatibus explicabo, amet laboriosam laborum voluptatem numquam eum deserunt error!</div>
                </div>
            </div>
            <div>
                <label>test</label>
                <div className={styles.test}>
                    test
                </div>
            </div>
        </div>
    );
}

export default Tricks;
