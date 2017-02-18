import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { browserHistory } from 'react-router';

export default class Movie extends React.Component {
    /***
     * Data input form
     * @param e
     */

    form(e) {
        /***
         * Handle ajax
         */
        e.preventDefault();
        axios({
            method: 'post',
            url: '/api/movies/',
            data: {
                'movie' : {
                    'name': ReactDOM.findDOMNode(this.refs.name).value,
                    'imdb_rating': ReactDOM.findDOMNode(this.refs.imdb_rating).value,
                    'movie_type': ReactDOM.findDOMNode(this.refs.movie_type).value
                },
                'rating': ReactDOM.findDOMNode(this.refs.rating).value,
                'source': ReactDOM.findDOMNode(this.refs.source).value,
                'video_quality': ReactDOM.findDOMNode(this.refs.video_quality).value,
                'watched_at': ReactDOM.findDOMNode(this.refs.watched_at).value,
                'watched_full': ReactDOM.findDOMNode(this.refs.watched_full).value
            },
            headers: {
                'Authorization': "JWT " + sessionStorage.getItem('token')
            }
        }).then(function (response) {
            if(response.statusText === "Created") {
                sweetAlert("Saved", "New Movie Saved Successfully", "info");
                browserHistory.push('/dashboard/');
            }
        }).catch(function (error) {
            console.error(error);
            sweetAlert('Error', 'Check console!', 'error');
        })
    }

    
    render (){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-2">
                        <form className="form-horizontal pad-bg" onSubmit={this.form.bind(this)}>
                            <h1 className="text-center">Save New Movie</h1>
                            <div className="form-group">
                                <label className="control-label col-sm-3">Name</label>
                                <div className="col-sm-9">
                                    <input type="text" ref="name" required placeholder="Name of the movie" className="form-control input-lg" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-3">IMDB Rating</label>
                                <div className="col-sm-9">
                                    <input type="number" min="1" max="10" ref="imdb_rating" placeholder="Current IMDB rating" className="form-control input-lg" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-3">Rating</label>
                                <div className="col-sm-9">
                                    <input type="number" min="1" max="10" ref="rating" placeholder="Rating of yours" required className="form-control input-lg" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-3">Source</label>
                                <div className="col-sm-9">
                                    <input type="text" required placeholder="Where did you watched" ref="source" className="form-control input-lg" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-3">Video Quality</label>
                                <div className="col-sm-9">
                                    <select className="form-control input-lg" required ref="video_quality">
                                        <option value="HD">HD</option>
                                        <option value="Cam">Cam</option>
                                        <option value="Dvd">DVD</option>
                                        <option value="480">480</option>
                                        <option value="720">720</option>
                                        <option value="108">1080</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-3">Movie Type</label>
                                <div className="col-sm-9">
                                    <select className="form-control input-lg" required ref="movie_type">
                                        <option value="Act">Action</option>
                                        <option value="Ani">Animation</option>
                                        <option value="Com">Comedy</option>
                                        <option value="Doc">Documentary</option>
                                        <option value="Fam">Family</option>
                                        <option value="FN">Film-Noir</option>
                                        <option value="Hor">Horror</option>
                                        <option value="Mus">Musical</option>
                                        <option value="Rom">Romance</option>
                                        <option value="Spo">Sports</option>
                                        <option value="War">War</option>
                                        <option value="Adv">Adventure</option>
                                        <option value="Bio">Biography</option>
                                        <option value="Cri">Crime</option>
                                        <option value="Dra">Drama</option>
                                        <option value="Fan">Fantasy</option>
                                        <option value="His">History</option>
                                        <option value="Mus">Music</option>
                                        <option value="Mys">Mystery</option>
                                        <option value="Sci">Sci-Fi</option>
                                        <option value="Thr">Thriller</option>
                                        <option value="Wes">Western</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-3">Watched At</label>
                                <div className="col-sm-9">
                                    <input  data-provide="datepicker"  placeholder="Date" data-date-format="yyyy-mm-dd" required ref="watched_at" className="form-control input-lg" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-3">Watched Full</label>
                                <div className="col-sm-9">
                                    <select className="form-control input-lg" ref="watched_full">
                                        <option value="True"> Yes </option>
                                        <option value="False"> No</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-offset-3 col-sm-9">
                                    <button type="submit" className="btn btn-default btn-lg"><i className="fa fa-save"></i> Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
