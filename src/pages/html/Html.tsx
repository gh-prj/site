import React, { useState } from 'react';
import styles from './Html.module.scss'
import imgLarge from './large.png'
import imgMedium from './medium.png'
import imgSmall from './small.png'

const Html = () => {
    const [rangeValue, setRangeValue] = useState("1.7");
    return (
        <div className={styles.container}>
            <div>
                <label>abbr</label>
                <p>
                    What is <abbr title="Single Page Application">SPA</abbr>?
                </p>
            </div>
            <div>
                <label>bdo</label>
                <p>
                    <bdo dir="ltr">Abcde</bdo><br />
                    <bdo dir="rtl">Abcde</bdo>
                </p>
            </div>
            <div>
                <label>kbd</label>
                <p>
                    Press <kbd>Ctrl</kbd> + <kbd>C</kbd>
                </p>
            </div>
            <div>
                <label>samp</label>
                <p>
                    <samp>PRESS ANY KEY...</samp>
                </p>
            </div>
            <div>
                <label>details</label>
                <p>
                    <details>
                        <summary>Days</summary>
                        Monday
                        Wednesday
                        Friday
                    </details>
                    <details open>
                        <summary>Summary</summary>
                        Visible
                    </details>
                </p>
            </div>
            <div>
                <label>meter</label>
                <p>
                    <meter min="0" low={20} value="15" max="100" />15 out of 100<br />
                    <meter min="0" low={20} value="65" max="100" />65%
                </p>
            </div>
            <div>
                <label>progress</label>
                <p>Done:
                    <progress value="77" max="100" /> 77%
                </p>
            </div>
            <div>
                <label>blockquote</label>
                <p>
                    <blockquote cite="http://www.johndoe.edu/index.html">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </blockquote>
                    <figcaption>John Doe,
                        <cite> My Book</cite>
                    </figcaption>
                </p>
            </div>
            <div>
                <label>del, ins</label>
                <p>
                    Total:
                    <del> 2 </del>
                    <ins> 5 </ins>
                    7
                </p>
            </div>
            <div>
                <label>legend</label>
                <form>
                    <fieldset>
                        <legend>Details</legend>
                        <label>Name: </label>
                        <input type="text" /><br />
                        <label>Date: </label>
                        <input type="date" />
                        <button type="submit" onClick={(e) => e.preventDefault()}>Send</button>
                    </fieldset>
                </form>
            </div>
            <div>
                <label>datalist</label>
                <p>
                    <input list="color" placeholder="Select color" />
                    <datalist id="color">
                        <option value="Red">#FF0000</option>
                        <option value="Green">rgb(0, 255, 0)</option>
                        <option value="Blue">hsl(240, 100%, 50%)</option>
                    </datalist>
                </p>
            </div>
            <div>
                <label>optgroup</label>
                <p>
                    <select>
                        <option value="" selected>Choose your size</option>
                        <optgroup label="short">
                            <option value="1">7cm</option>
                            <option value="2">10cm</option>
                        </optgroup>
                        <optgroup label="long">
                            <option value="3">22cm</option>
                            <option value="4">25cm</option>
                        </optgroup>
                    </select>
                </p>
            </div>
            <div>
                <label>pattern</label>
                {/* <form onSubmit={(e) => { e.preventDefault(); return false; }}> */}
                <form action="#">
                    <label htmlFor="fname">Name: </label>
                    <input type="text" id="fname" placeholder="3-10 characters"
                        pattern="[A-Za-z]{3,10}" autoFocus required />
                    <button type="submit">Send</button>
                </form>
            </div>
            <div>
                <label>contenteditable</label>
                <p>
                    <h4 contentEditable>This text is editable.</h4>
                    <p contentEditable spellCheck="false">
                        Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Repudiandae, voluptates?
                    </p>
                </p>
            </div>
            <div>
                <label>sub, sup</label>
                <p>
                    <span>H<sub>2</sub>O</span><br />
                    <span>x<sup>3</sup>+y<sup>4</sup></span>
                </p>
            </div>
            <div>
                <label>picture</label>
                <p>
                    <p style={{ maxWidth: 250, margin: 0 }}>Resizing the window will result in showing different pictures.</p>
                    <picture>
                        <source srcSet={imgLarge} media="(min-width: 900px)" />
                        <source srcSet={imgMedium} media="(min-width: 600px)" />
                        <img src={imgSmall} />
                    </picture>
                </p>
            </div>
            <div>
                <label>template</label>
                <p id="tmpl">
                    <label>Name: </label>
                    <input type="text" placeholder="Tom" />
                    <button onClick={() => {
                        const template = document.querySelector('template') as HTMLTemplateElement
                        const content = template.children[0].cloneNode(true) as HTMLElement
                        const dest = document.querySelector('#tmpl') as Element
                        const name = dest.querySelector('input')?.value || "Tom";
                        (content.querySelector('span') as HTMLSpanElement).innerText = name
                        dest.querySelector('h4')?.remove()
                        dest.append(content)
                    }}>Say Hello</button>
                </p>
                <template>
                    <h4>Hello <span>Tom</span>!</h4>
                </template>
            </div>
            <div>
                <label>range</label>
                <p>
                    <input type="range" min="0" max="5" step="0.1"
                        value={rangeValue} onChange={(e) => setRangeValue(e.target.value)} />
                    <span>  {rangeValue}</span>
                </p>
            </div>
            <div>
                <label>white-space: pre</label>
                <p>
                    <div style={{ whiteSpace: 'pre' }}>
                        {`+x   x   x
    x   x   x   x   x
+x   x   x`}
                    </div>
                </p>
            </div>
        </div >
    );
}

export default Html;
