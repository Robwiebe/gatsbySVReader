import React from 'react'
import { Link } from "gatsby"
import styles from './blog-post.module.css'
// import styles from './Hebrew.module.css'
import readTogether from '../images/SVB-Read-together.png';
import discussTogether from '../images/SVB-Discuss-together.png';
import divider from '../images/divider.png';
import { graphql } from 'gatsby';

export default function Template ({data}) {
    const post = data.english

    const toggleVisibility1 = (tagName) => {
        const elements = document.getElementsByTagName(tagName);
        for (var i = 0; i < elements.length; i++){
          elements[i].style.display = elements[i].style.display === 'inline' ? 'none' : 'inline';
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
            <img className={styles.icons} src={readTogether} style={{ display: post.display }} alt="img"/>
            <div dangerouslySetInnerHTML={{__html: post.html}} />
            <img className={styles.icons} src={divider} style={{ display: post.display }}  alt="img" />
            <img className={styles.icons} src={discussTogether} style={{ display: post.display }}  alt="img" />
            <div className={styles.questions} style={{ display: post.display }}>
                <p className={styles.questionsTitle} >{post.questionsTitle}</p>
                <ul>
                    <li className={styles.question}>{post.Question1}</li>
                    <li className={styles.question}>{post.Question2}</li>
                    <li className={styles.question}>{post.Question3}</li>
                    <li className={styles.question}>{post.Question4}</li>
                </ul>
            </div>
            {/* <h5 className={styles.copyright}>พระคัมภีร์ ฉบับแปลใหม่ (NTV) ฉบับ 2016<br />สงวนลิขสิทธิ์ © 1998, 2012<br />โดย หน่วยงานพระคัมภีร์ฉบับแปลใหม่<br /><br />© 2018 SourceView LLC.</h5> */}
            {/* <h5 className={styles.copyright}>World English Bible (WEB)<br />a Public Domain Modern English translation<br />of the Holy Bible.<br /><br />© 2018 SourceView LLC.</h5> */}
            {/* <h5 className={styles.copyright}>Chinese Union Version (Simplified) (CUVS)<br />by Public Domain<br /><br />© 2018 SourceView LLC.</h5> */}
            {/* <h5 className={styles.copyright}>A provisional demo of the Uniskript WEB in the SourceView format<br />World English Bible (WEB)<br />a Public Domain Modern English translation<br />of the Holy Bible.<br /><br />© 2018 SourceView LLC.</h5> */}
            {/* <h5 className={styles.copyright}>La Santa Biblia, Nueva Traducción Viviente,<br />© Tyndale House Foundation, 2010.<br />Todos los derechos reservados.<br /><br />© 2018 SourceView LLC.</h5> */}
            {/* <h5 className={styles.copyright}>Kurt Aland et al., Novum Testamentum Graece<br />(28th Edition.; Stuttgart: Deutsche Bibelgesellschaft, 2012)<br /><br />© 2018 SourceView LLC.</h5> */}
            {/* <h5 className={styles.copyright}>Biblia Hebraica Stuttgartensia:<br />With Westminster Hebrew Morphology.<br />(electronic ed.; Stuttgart; Glenside PA:<br />German Bible Society;<br />Westminster Seminary, 1996)<br /><br />© 2018 SourceView LLC.</h5> */}
            {/* <h5 className={styles.copyright}>Temporary demo of the NTLH in the SourceView format<br />Copyright permission in process<br />Nova Tradução na Linguagem de Hoje<br />Copyright 2000 Sociedade Bíblica do Brasil.<br />Todos os direitos reservados<br /><br />© 2018 SourceView LLC.</h5> */}
            {/* <h5 className={styles.copyright}>La Bible Du Semeur (The Bible of the Sower)<br />Copyright © 1992, 1999 by Biblica, Inc.®<br /><br />© 2018 SourceView LLC.</h5> */}
            {/* <h5 className={styles.copyright}>Temporary demo of the KRV in the SourceView format<br />Copyright permission in process<br />The Holy Bible:<br />Korean Revised Version KRV 개역한글<br /><br />© 2018 SourceView LLC.</h5> */}
            {/* <h5 className={styles.copyright}>Russian Synodal Version (RUSV)<br />by Public Domain<br /><br />© 2018 SourceView LLC.</h5> */}
            {/* <h5 className={styles.copyright}>FINNISH<br /><br />© 2018 SourceView LLC.</h5> */}
            <h5 className={styles.copyright}>AFRIKAANS<br /><br />© 2018 SourceView LLC.</h5>

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
        english ( path: { eq: $path } ) {
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