import { Configs } from "../../config/Config";
import { MoviesDbInterface } from "../../interfaces/moviesDb/MoviesDbInterface";
import { SearchInterface } from "../../interfaces/search/SearchInterface";
import { MovieDbInterface } from "../../interfaces/movieDb/MovieDbInterface";

export class MoviesDbService {

    private api: string = Configs.api;
    private key: string = Configs.key;
    private token: string = Configs.token;
    private headers: any = {
        Authorization: `Bearer ${this.token}`
    };

    getList = (search: SearchInterface) : Promise<MoviesDbInterface> => {
        return fetch(`${this.api}/search/movie?page=${search.pageNo}&api_key=${this.key}&language=en&query=${search.query}`, {
            headers: this.headers
        })
        .then(res => res.json());
    }

    getListId = (id: number) : Promise<MovieDbInterface> => {
        return fetch(`${this.api}/movie/${id}?api_key=${this.key}&language=en-US`, {
            headers: this.headers
        })
        .then(res => res.json());
    }
    
}