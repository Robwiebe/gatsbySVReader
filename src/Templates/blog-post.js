import React from 'react'
import Link from 'gatsby-link'
import styles from './blog-post.module.css'
import readTogether from '../images/SVB-Read-together.png';
import discussTogether from '../images/SVB-Discuss-together.png';
import divider from '../images/divider.png';

export default function Template ({data}) {
    const post = data.postsJson

    const toggleVisibility1 = (tagName) => {
        const elements = document.getElementsByTagName(tagName);
        for (var i = 0; i < elements.length; i++){
          elements[i].style.display = elements[i].style.display == 'inline' ? 'none' : 'inline';
        }
      }

    const toggleColor = () => {
        let x = document.getElementById('verse');

        if (x.style.backgroundColor !== 'lightgreen') {
            x.style.backgroundColor = 'lightgreen';
            console.log('color changed to green');
        } else {
            x.style.backgroundColor = 'lightcoral';
            console.log('color changed to red');
        }
    }

    const toggleVisibility = () => {
        toggleVisibility1("u");
        toggleVisibility1("strong");
        toggleColor();
    }

    return (
        <div>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.ref} style={{ display: post.display }}>{post.bookName} {post.ref}</p>
            <img className={styles.icons} src={readTogether} style={{ display: post.display }} />
            <div dangerouslySetInnerHTML={{__html: post.html}} />
            <img className={styles.icons} src={divider} style={{ display: post.display }}  />
            <img className={styles.icons} src={discussTogether} style={{ display: post.display }}  />
            <div className={styles.questions} style={{ display: post.display }}>
                <p className={styles.questionsTitle} >{post.questionsTitle}</p>
                <ul>
                    <li className={styles.question}>{post.Question1}</li>
                    <li className={styles.question}>{post.Question2}</li>
                    <li className={styles.question}>{post.Question3}</li>
                    <li className={styles.question}>{post.Question4}</li>
                </ul>
            </div>
            <h5 className={styles.copyright}>World English Bible (WEB)<br />a Public Domain Modern English translation<br />of the Holy Bible.<br /><br />© 2018 SourceView LLC.</h5>

            {/* ----------------------------------------
                            NAV BAR
            ---------------------------------------- */}

            <div className={styles.navbar}>
                <div className={styles.buttons}><Link to={post.prevPath}  className={styles.link}>&#x21E6;</Link></div>
                <div className={styles.menu}><Link to="/"  className={styles.link}>&#x2261;</Link></div>
                <div className={styles.buttons}>
                    <div id='verse' className={styles.verse}
                    onClick={toggleVisibility}>1<span className={styles.sup}>1</span></div>
                </div>
                <div className={styles.buttons}><Link to={post.nextPath}  className={styles.link}>&#x21E8;</Link></div>
            </div>
        </div>
    )
}


export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        postsJson ( path: { eq: $path } ) {
            path
            title
            display
            bookName
            ref
            html
            questionsTitle
            Question1
            Question2
            Question3
            Question4
            prevPath
            nextPath
        }
    }
`