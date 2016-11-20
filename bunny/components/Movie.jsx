import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class Movie extends React.Component {
    
    componentDidMount() {
        
    }
    
    render (){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-2">
                        <form action="" className="form-horizontal pad-bg">
                            <h1 className="text-center">Save New Movie</h1>
                            <div className="form-group">
                                <label className="control-label col-sm-3">Name</label>
                                <div className="col-sm-9">
                                    <input type="text" name="name" required className="form-control input-lg" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-3">IMDB Rating</label>
                                <div className="col-sm-9">
                                    <input type="number" min="1" max="10" name="imdb_rating" className="form-control input-lg" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-3">Rating</label>
                                <div className="col-sm-9">
                                    <input type="number" min="1" max="10" name="rating" required className="form-control input-lg" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-3">Source</label>
                                <div className="col-sm-9">
                                    <input type="text" required name="source" className="form-control input-lg" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-3">Video Quality</label>
                                <div className="col-sm-9">
                                    <select className="form-control input-lg" required name="video_quality">
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
                                    <select className="form-control input-lg" required name="movie_type">
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
                                        <option value="Mci">Sci-Fi</option>
                                        <option value="Thr">Thriller</option>
                                        <option value="Wes">Western</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-3">Watched At</label>
                                <div className="col-sm-9">
                                    <input  data-provide="datepicker" data-date-format="dd/mm/yyyy" required name="imdb_rating" className="form-control input-lg" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-offset-3 col-sm-9">
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox" name="watched_full" /> Watched Full
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-offset-3 col-sm-9">
                                    <button className="btn btn-default btn-lg"><i className="fa fa-save"></i> Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}