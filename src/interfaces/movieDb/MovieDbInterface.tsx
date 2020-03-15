import { GenreInterface } from "./GenreInterface";
import { ProductionCompanyInterface } from "./ProductionCompanyInterface";
import { ProductionCountryInterface } from "./ProductionCountryInterface";
import { SpokenLanguageInterface } from "./SpokenLanguageInterface";

export interface MovieDbInterface {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection?: any;
    budget: number;
    genres: Array<GenreInterface>;
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path?: any;
    production_companies: Array<ProductionCompanyInterface>;
    production_countries: Array<ProductionCountryInterface>;
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: Array<SpokenLanguageInterface>;
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    loading: boolean;
    loaded: boolean;
    status_code: number;
}