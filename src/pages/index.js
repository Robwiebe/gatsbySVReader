import React from 'react';
import Link from 'gatsby-link'
import styles from './tocindex.module.css';
import SVLogo from '../images/SVLogo.jpeg';
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const BlogPage = ({data}) => (
    <div>
        <img src={SVLogo} className={styles.icons}/>
        <div className={styles.reader}>
            <p className={styles.svtitle}>SourceView</p><p className={styles.readertitle}>READER</p>
        </div>
        <div className={styles.changeLanguage}>
            <OutboundLink href={'https://robwiebe.github.io/'}>
                <p className={styles.switchlang}><span className={styles.switch}>&#x2261;</span>Change Language</p>
            </OutboundLink>
        </div>
        <details>
            <summary>{data.Matthew.edges.slice(0,1).map( post => (<span className={styles.bookTitle} key={post.node.id}>{post.node.bookName}</span>))}</summary>
                <ul>
                    {data.Matthew.edges.map(post => (
                        <li key={post.node.id}><Link to={post.node.path} className={styles.link}>
                            <p className={styles.title}>{post.node.title}</p>
                            <p className={styles.reference}>{post.node.bookName} {post.node.ref}</p>
                            <hr /></Link>
                        </li>
                    ))}
                </ul>
        </details>
        <details>
            <summary>{data.Mark.edges.slice(0,1).map( post => (<span className={styles.bookTitle} key={post.node.id}>{post.node.bookName}</span>))}</summary>
                <ul>
                    {data.Mark.edges.map(post => (
                        <li key={post.node.id}><Link to={post.node.path} className={styles.link}>
                            <p className={styles.title}>{post.node.title}</p>
                            <p className={styles.reference}>{post.node.bookName} {post.node.ref}</p>
                            <hr /></Link>
                        </li>
                    ))}
                </ul>
        </details>
        <details>
            <summary>{data.Luke.edges.slice(0,1).map( post => (<span className={styles.bookTitle} key={post.node.id}>{post.node.bookName}</span>))}</summary>
                <ul>
                    {data.Luke.edges.map(post => (
                        <li key={post.node.id}><Link to={post.node.path} className={styles.link}>
                            <p className={styles.title}>{post.node.title}</p>
                            <p className={styles.reference}>{post.node.bookName} {post.node.ref}</p>
                            <hr /></Link>
                        </li>
                    ))}
                </ul>
        </details>
        <details>
            <summary>{data.John.edges.slice(0,1).map( post => (<span className={styles.bookTitle} key={post.node.id}>{post.node.bookName}</span>))}</summary>
                <ul>
                    {data.John.edges.map(post => (
                        <li key={post.node.id}><Link to={post.node.path} className={styles.link}>
                            <p className={styles.title}>{post.node.title}</p>
                            <p className={styles.reference}>{post.node.bookName} {post.node.ref}</p>
                            <hr /></Link>
                        </li>
                    ))}
                </ul>
        </details>
        <details>
            <summary>{data.Acts.edges.slice(0,1).map( post => (<span className={styles.bookTitle} key={post.node.id}>{post.node.bookName}</span>))}</summary>
                <ul>
                    {data.Acts.edges.map(post => (
                        <li key={post.node.id}><Link to={post.node.path} className={styles.link}>
                            <p className={styles.title}>{post.node.title}</p>
                            <p className={styles.reference}>{post.node.bookName} {post.node.ref}</p>
                            <hr /></Link>
                        </li>
                    ))}
                </ul>
        </details>
        <details>
            <summary>{data.Romans.edges.slice(0,1).map( post => (<span className={styles.bookTitle} key={post.node.id}>{post.node.bookName}</span>))}</summary>
                <ul>
                    {data.Romans.edges.map(post => (
                        <li key={post.node.id}><Link to={post.node.path} className={styles.link}>
                            <p className={styles.title}>{post.node.title}</p>
                            <p className={styles.reference}>{post.node.bookName} {post.node.ref}</p>
                            <hr /></Link>
                        </li>
                    ))}
                </ul>
        </details>
        <details>
            <summary>{data.Corinthians1.edges.slice(0,1).map( post => (<span className={styles.bookTitle} key={post.node.id}>{post.node.bookName}</span>))}</summary>
                <ul>
                    {data.Corinthians1.edges.map(post => (
                        <li key={post.node.id}><Link to={post.node.path} className={styles.link}>
                            <p className={styles.title}>{post.node.title}</p>
                            <p className={styles.reference}>{post.node.bookName} {post.node.ref}</p>
                            <hr /></Link>
                        </li>
                    ))}
                </ul>
        </details>
        <details>
            <summary>{data.Corinthians2.edges.slice(0,1).map( post => (<span className={styles.bookTitle} key={post.node.id}>{post.node.bookName}</span>))}</summary>
                <ul>
                    {data.Corinthians2.edges.map(post => (
                        <li key={post.node.id}><Link to={post.node.path} className={styles.link}>
                            <p className={styles.title}>{post.node.title}</p>
                            <p className={styles.reference}>{post.node.bookName} {post.node.ref}</p>
                            <hr /></Link>
                        </li>
                    ))}
                </ul>
        </details>
        <details>
            <summary>{data.Galatians.edges.slice(0,1).map( post => (<span className={styles.bookTitle} key={post.node.id}>{post.node.bookName}</span>))}</summary>
                <ul>
                    {data.Galatians.edges.map(post => (
                        <li key={post.node.id}><Link to={post.node.path} className={styles.link}>
                            <p className={styles.title}>{post.node.title}</p>
                            <p className={styles.reference}>{post.node.bookName} {post.node.ref}</p>
                            <hr /></Link>
                        </li>
                    ))}
                </ul>
        </details>
        <details>
            <summary>{data.Ephesians.edges.slice(0,1).map( post => (<span className={styles.bookTitle} key={post.node.id}>{post.node.bookName}</span>))}</summary>
                <ul>
                    {data.Ephesians.edges.map(post => (
                        <li key={post.node.id}><Link to={post.node.path} className={styles.link}>
                            <p className={styles.title}>{post.node.title}</p>
                            <p className={styles.reference}>{post.node.bookName} {post.node.ref}</p>
                            <hr /></Link>
                        </li>
                    ))}
                </ul>
        </details>
        <details>
            <summary>{data.Philippians.edges.slice(0,1).map( post => (<span className={styles.bookTitle} key={post.node.id}>{post.node.bookName}</span>))}</summary>
                <ul>
                    {data.Philippians.edges.map(post => (
                        <li key={post.node.id}><Link to={post.node.path} className={styles.link}>
                            <p className={styles.title}>{post.node.title}</p>
                            <p className={styles.reference}>{post.node.bookName} {post.node.ref}</p>
                            <hr /></Link>
                        </li>
                    ))}
                </ul>
        </details>
        <details>
            <summary>{data.Colossians.edges.slice(0,1).map( post => (<span className={styles.bookTitle} key={post.node.id}>{post.node.bookName}</span>))}</summary>
                <ul>
                    {data.Colossians.edges.map(post => (
                        <li key={post.node.id}><Link to={post.node.path} className={styles.link}>
                            <p className={styles.title}>{post.node.title}</p>
                            <p className={styles.reference}>{post.node.bookName} {post.node.ref}</p>
                            <hr /></Link>
                        </li>
                    ))}
                </ul>
        </details>
        <details>
            <summary>{data.Thessalonians1.edges.slice(0,1).map( post => (<span className={styles.bookTitle} key={post.node.id}>{post.node.bookName}</span>))}</summary>
                <ul>
                    {data.Thessalonians1.edges.map(post => (
                        <li key={post.node.id}><Link to={post.node.path} className={styles.link}>
                            <p className={styles.title}>{post.node.title}</p>
                            <p className={styles.reference}>{post.node.bookName} {post.node.ref}</p>
                            <hr /></Link>
                        </li>
                    ))}
                </ul>
        </details>
        <details>
            <summary>{data.Thessalonians2.edges.slice(0,1).map( post => (<span className={styles.bookTitle} key={post.node.id}>{post.node.bookName}</span>))}</summary>
                <ul>
                    {data.Thessalonians2.edges.map(post => (
                        <li key={post.node.id}><Link to={post.node.path} className={styles.link}>
                            <p className={styles.title}>{post.node.title}</p>
                            <p className={styles.reference}>{post.node.bookName} {post.node.ref}</p>
                            <hr /></Link>
                        </li>
                    ))}
                </ul>
        </details>
        <details>
            <summary>{data.Timothy1.edges.slice(0,1).map( post => (<span className={styles.bookTitle} key={post.node.id}>{post.node.bookName}</span>))}</summary>
                <ul>
                    {data.Timothy1.edges.map(post => (
                        <li key={post.node.id}><Link to={post.node.path} className={styles.link}>
                            <p className={styles.title}>{post.node.title}</p>
                            <p className={styles.reference}>{post.node.bookName} {post.node.ref}</p>
                            <hr /></Link>
                        </li>
                    ))}
                </ul>
        </details>
        <details>
            <summary>{data.Timothy2.edges.slice(0,1).map( post => (<span className={styles.bookTitle} key={post.node.id}>{post.node.bookName}</span>))}</summary>
                <ul>
                    {data.Timothy2.edges.map(post => (
                        <li key={post.node.id}><Link to={post.node.path} className={styles.link}>
                            <p className={styles.title}>{post.node.title}</p>
                            <p className={styles.reference}>{post.node.bookName} {post.node.ref}</p>
                            <hr /></Link>
                        </li>
                    ))}
                </ul>
        </details>
        <details>
            <summary>{data.Titus.edges.slice(0,1).map( post => (<span className={styles.bookTitle} key={post.node.id}>{post.node.bookName}</span>))}</summary>
                <ul>
                    {data.Titus.edges.map(post => (
                        <li key={post.node.id}><Link to={post.node.path} className={styles.link}>
                            <p className={styles.title}>{post.node.title}</p>
                            <p className={styles.reference}>{post.node.bookName} {post.node.ref}</p>
                            <hr /></Link>
                        </li>
                    ))}
                </ul>
        </details>
        <details>
            <summary>{data.Philemon.edges.slice(0,1).map( post => (<span className={styles.bookTitle} key={post.node.id}>{post.node.bookName}</span>))}</summary>
                <ul>
                    {data.Philemon.edges.map(post => (
                        <li key={post.node.id}><Link to={post.node.path} className={styles.link}>
                            <p className={styles.title}>{post.node.title}</p>
                            <p className={styles.reference}>{post.node.bookName} {post.node.ref}</p>
                            <hr /></Link>
                        </li>
                    ))}
                </ul>
        </details>
        <details>
            <summary>{data.Hebrews.edges.slice(0,1).map( post => (<span className={styles.bookTitle} key={post.node.id}>{post.node.bookName}</span>))}</summary>
                <ul>
                    {data.Hebrews.edges.map(post => (
                        <li key={post.node.id}><Link to={post.node.path} className={styles.link}>
                            <p className={styles.title}>{post.node.title}</p>
                            <p className={styles.reference}>{post.node.bookName} {post.node.ref}</p>
                            <hr /></Link>
                        </li>
                    ))}
                </ul>
        </details>
        <details>
            <summary>{data.James.edges.slice(0,1).map( post => (<span className={styles.bookTitle} key={post.node.id}>{post.node.bookName}</span>))}</summary>
                <ul>
                    {data.James.edges.map(post => (
                        <li key={post.node.id}><Link to={post.node.path} className={styles.link}>
                            <p className={styles.title}>{post.node.title}</p>
                            <p className={styles.reference}>{post.node.bookName} {post.node.ref}</p>
                            <hr /></Link>
                        </li>
                    ))}
                </ul>
        </details>
        <details>
            <summary>{data.Peter1.edges.slice(0,1).map( post => (<span className={styles.bookTitle} key={post.node.id}>{post.node.bookName}</span>))}</summary>
                <ul>
                    {data.Peter1.edges.map(post => (
                        <li key={post.node.id}><Link to={post.node.path} className={styles.link}>
                            <p className={styles.title}>{post.node.title}</p>
                            <p className={styles.reference}>{post.node.bookName} {post.node.ref}</p>
                            <hr /></Link>
                        </li>
                    ))}
                </ul>
        </details>
        <details>
            <summary>{data.Peter2.edges.slice(0,1).map( post => (<span className={styles.bookTitle} key={post.node.id}>{post.node.bookName}</span>))}</summary>
                <ul>
                    {data.Peter2.edges.map(post => (
                        <li key={post.node.id}><Link to={post.node.path} className={styles.link}>
                            <p className={styles.title}>{post.node.title}</p>
                            <p className={styles.reference}>{post.node.bookName} {post.node.ref}</p>
                            <hr /></Link>
                        </li>
                    ))}
                </ul>
        </details>
        <details>
            <summary>{data.John1.edges.slice(0,1).map( post => (<span className={styles.bookTitle} key={post.node.id}>{post.node.bookName}</span>))}</summary>
                <ul>
                    {data.John1.edges.map(post => (
                        <li key={post.node.id}><Link to={post.node.path} className={styles.link}>
                            <p className={styles.title}>{post.node.title}</p>
                            <p className={styles.reference}>{post.node.bookName} {post.node.ref}</p>
                            <hr /></Link>
                        </li>
                    ))}
                </ul>
        </details>
        <details>
            <summary>{data.John2.edges.slice(0,1).map( post => (<span className={styles.bookTitle} key={post.node.id}>{post.node.bookName}</span>))}</summary>
                <ul>
                    {data.John2.edges.map(post => (
                        <li key={post.node.id}><Link to={post.node.path} className={styles.link}>
                            <p className={styles.title}>{post.node.title}</p>
                            <p className={styles.reference}>{post.node.bookName} {post.node.ref}</p>
                            <hr /></Link>
                        </li>
                    ))}
                </ul>
        </details>
        <details>
            <summary>{data.John3.edges.slice(0,1).map( post => (<span className={styles.bookTitle} key={post.node.id}>{post.node.bookName}</span>))}</summary>
                <ul>
                    {data.John3.edges.map(post => (
                        <li key={post.node.id}><Link to={post.node.path} className={styles.link}>
                            <p className={styles.title}>{post.node.title}</p>
                            <p className={styles.reference}>{post.node.bookName} {post.node.ref}</p>
                            <hr /></Link>
                        </li>
                    ))}
                </ul>
        </details>
        <details>
            <summary>{data.Jude.edges.slice(0,1).map( post => (<span className={styles.bookTitle} key={post.node.id}>{post.node.bookName}</span>))}</summary>
                <ul>
                    {data.Jude.edges.map(post => (
                        <li key={post.node.id}><Link to={post.node.path} className={styles.link}>
                            <p className={styles.title}>{post.node.title}</p>
                            <p className={styles.reference}>{post.node.bookName} {post.node.ref}</p>
                            <hr /></Link>
                        </li>
                    ))}
                </ul>
        </details>
        <details>
            <summary>{data.Revelation.edges.slice(0,1).map( post => (<span className={styles.bookTitle} key={post.node.id}>{post.node.bookName}</span>))}</summary>
                <ul>
                    {data.Revelation.edges.map(post => (
                        <li key={post.node.id}><Link to={post.node.path} className={styles.link}>
                            <p className={styles.title}>{post.node.title}</p>
                            <p className={styles.reference}>{post.node.bookName} {post.node.ref}</p>
                            <hr /></Link>
                        </li>
                    ))}
                </ul>
        </details>
        {/* <h5 className={styles.copyright}>พระคัมภีร์ ฉบับแปลใหม่ (NTV) ฉบับ 2016<br />สงวนลิขสิทธิ์ © 1998, 2012<br />โดย หน่วยงานพระคัมภีร์ฉบับแปลใหม่<br /><br />© 2018 SourceView LLC.</h5> */}
        <h5 className={styles.copyright}>World English Bible (WEB)<br />a Public Domain Modern English translation<br />of the Holy Bible.<br /><br />© 2018 SourceView LLC.</h5>
        {/* <h5 className={styles.copyright}>La Santa Biblia, Nueva Traducción Viviente,<br />© Tyndale House Foundation, 2010.<br />Todos los derechos reservados.<br /><br />© 2018 SourceView LLC.</h5> */}
    </div>
    
)

export const pageQuery = graphql`
    query BlogIndexQuery {
        Matthew: allPostsJson(filter: {bookId: {eq: 40}}) {
            edges {
              node {
                id
                bookId
                bookName
                ref
                path
                title
              }
            }
        },
        Mark: allPostsJson(filter: {bookId: {eq: 41}}) {
        edges {
            node {
                id
                bookId
                bookName
                ref
                path
                title
            }
        }
        },
        Luke: allPostsJson(filter: {bookId: {eq: 42}}) {
            edges {
              node {
                id
                bookId
                bookName
                ref
                path
                title
              }
            }
        },
        John: allPostsJson(filter: {bookId: {eq: 43}}) {
        edges {
            node {
            id
            bookId
            bookName
            ref
            path
            title
            }
        }
        },
        Acts: allPostsJson(filter: {bookId: {eq: 44}}) {
            edges {
              node {
                id
                bookId
                bookName
                ref
                path
                title
              }
            }
        },
        Romans: allPostsJson(filter: {bookId: {eq: 45}}) {
        edges {
            node {
            id
            bookId
            bookName
            ref
            path
            title
            }
        }
        },
        Corinthians1: allPostsJson(filter: {bookId: {eq: 46}}) {
            edges {
              node {
                id
                bookId
                bookName
                ref
                path
                title
              }
            }
        },
        Corinthians2: allPostsJson(filter: {bookId: {eq: 47}}) {
        edges {
            node {
            id
            bookId
            bookName
            ref
            path
            title
            }
        }
        },
        Galatians: allPostsJson(filter: {bookId: {eq: 48}}) {
            edges {
              node {
                id
                bookId
                bookName
                ref
                path
                title
              }
            }
        },
        Ephesians: allPostsJson(filter: {bookId: {eq: 49}}) {
        edges {
            node {
            id
            bookId
            bookName
            ref
            path
            title
            }
        }
        },
        Philippians: allPostsJson(filter: {bookId: {eq: 50}}) {
            edges {
              node {
                id
                bookId
                bookName
                ref
                path
                title
              }
            }
        },
        Colossians: allPostsJson(filter: {bookId: {eq: 51}}) {
        edges {
            node {
            id
            bookId
            bookName
            ref
            path
            title
            }
        }
        },
        Thessalonians1: allPostsJson(filter: {bookId: {eq: 52}}) {
            edges {
              node {
                id
                bookId
                bookName
                ref
                path
                title
              }
            }
        },
        Thessalonians2: allPostsJson(filter: {bookId: {eq: 53}}) {
        edges {
            node {
            id
            bookId
            bookName
            ref
            path
            title
            }
        }
        },
        Timothy1: allPostsJson(filter: {bookId: {eq: 54}}) {
            edges {
              node {
                id
                bookId
                bookName
                ref
                path
                title
              }
            }
        },
        Timothy2: allPostsJson(filter: {bookId: {eq: 55}}) {
        edges {
            node {
            id
            bookId
            bookName
            ref
            path
            title
            }
        }
        },
        Titus: allPostsJson(filter: {bookId: {eq: 56}}) {
            edges {
              node {
                id
                bookId
                bookName
                ref
                path
                title
              }
            }
        },
        Philemon: allPostsJson(filter: {bookId: {eq: 57}}) {
        edges {
            node {
            id
            bookId
            bookName
            ref
            path
            title
            }
        }
        },
        Hebrews: allPostsJson(filter: {bookId: {eq: 58}}) {
            edges {
              node {
                id
                bookId
                bookName
                ref
                path
                title
              }
            }
        },
        James: allPostsJson(filter: {bookId: {eq: 59}}) {
        edges {
            node {
            id
            bookId
            bookName
            ref
            path
            title
            }
        }
        },
        Peter1: allPostsJson(filter: {bookId: {eq: 60}}) {
            edges {
              node {
                id
                bookId
                bookName
                ref
                path
                title
              }
            }
        },
        Peter2: allPostsJson(filter: {bookId: {eq: 61}}) {
        edges {
            node {
            id
            bookId
            bookName
            ref
            path
            title
            }
        }
        },
        John1: allPostsJson(filter: {bookId: {eq: 62}}) {
            edges {
              node {
                id
                bookId
                bookName
                ref
                path
                title
              }
            }
        },
        John2: allPostsJson(filter: {bookId: {eq: 63}}) {
        edges {
            node {
            id
            bookId
            bookName
            ref
            path
            title
            }
        }
        },
        John3: allPostsJson(filter: {bookId: {eq: 64}}) {
            edges {
              node {
                id
                bookId
                bookName
                ref
                path
                title
              }
            }
        },
        Jude: allPostsJson(filter: {bookId: {eq: 65}}) {
        edges {
            node {
            id
            bookId
            bookName
            ref
            path
            title
            }
        }
        },
        Revelation: allPostsJson(filter: {bookId: {eq: 66}}) {
            edges {
              node {
                id
                bookId
                bookName
                ref
                path
                title
              }
            }
        }
    }
`;

export default BlogPage;