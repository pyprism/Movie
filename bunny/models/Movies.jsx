import { observable, action, computed, autorun } from 'mobx';
import axios from 'axios';


export class Movies {
	@observable loaded = false;
	@observable movies = [];

	@action getMovies() {
		this.movies = [];
		axios({
			method: 'get',
			url: '/api/movies/',
			headers: {'Authorization': "JWT " + sessionStorage.getItem('token')}
		}).then(action('response action', (response) => {
			this.movies.push.apply(this.movies, response.data);
            this.loaded = true;
		})).catch(function(err) {
			sweetAlert("Oops!", err.data, "error");
		})
	}

    @computed get movieList() {
        return this.movies;
    }


}
