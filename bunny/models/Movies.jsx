import { observable, action, computed } from 'mobx';
import axios from 'axios';


export class Movies {
	@observable loaded = false;
	@observable movies = [];

	@action getMovies() {
		axios({
			method: 'get',
			url: '/api/movies/',
			headers: {'Authorization': "JWT " + sessionStorage.getItem('token')}
		}).then(action('response action', (response) => {
			console.log(response.data);
			this.movies.push(response.data);
            this.loaded = true;
		})).catch(function(err) {
			sweetAlert("Oops!", err.data, "error");
		})
	}

    @computed get movieList() {
        return this.movies;
    }
}