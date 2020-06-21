import React, {Component} from 'react';
import api from '../../services/api';
import Moment from 'react-moment';
import 'moment/locale/pt-br';
import'./style.css';


Moment.globalFormat = ("DD, MMMM YYYY");
Moment.glogalLocale =('pt-br');


export default class Main extends Component {

    state = {
        posts: [],
    }

    componentDidMount(){
        this.loadPosts();
    }

    loadPosts = async () => {
        const response = await api.get('/posts');

        this.setState({posts: response.data.docs})
    };
  

    render ()
    {   
        const {posts} = this.state;

        return (
                <div>

                {posts.map(post => (

                    <article  key={post._id}  className="post-list">
                        <div className="post-list-image">
                          <img width={320} height={240} src={post.imageUrl} className="post-image" alt={post.title} srcSet={post.imageUrl} sizes="(max-width: 320px) 100vw, 320px" />
                          <div className="post-more">
                            <a href={post.url} className="button-link">
                              <span>Leia mais</span>
                            </a>
                          </div>
                          <a href={post.imageUrl} />
                        </div>
                        <div className="post-list">
                          <h2>{post.title}</h2>
                          <ul className="post-categories">
                              <Moment fromNow>
                              <li>{post.date}</li>
                              </Moment>

                          </ul>
                        
                        <ul className="post-categories">
                            <a href={post.category}>
                                <li>{post.category}</li>
                            </a>
                        </ul>
                    <div className="post-description">{post.description}</div>
                    <div className="post-share">
                          <span className="title-share">Compartilhe <i className="cs-icon cs-icon-arrow-right" /></span>
                          <div className="share-buttons-wrap" data-post-id={4048} data-share-url={post.url}>
                            <div className="share-buttons-items">
                              <div className="share-buttons-facebook" data-id="facebook">
                                <a href={`https://www.facebook.com/sharer.php?u=${post.url}`} className="share-buttons-link" target="_blank">
                                  <i className="share-buttons-icon icon-facebook" />
                                </a>
                              </div>
                              <div className="share-buttons-twitter" data-id="twitter">
                                <a href={`https://twitter.com/share?&text=${post.title}&url=${post.url}`} className="share-buttons-link" target="_blank">
                                  <i className="share-buttons-icon icon-twitter" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        </div>
                    </article>

                ))}
                </div>



        );
    }
}