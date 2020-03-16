export interface ResultsEntity {
    poster_path: string | null;
    popularity: number;
    vote_count: number;
    video: boolean;
    id: number;
    adult: boolean;
    backdrop_path: string | null;
    original_language: string;
    original_title: string;
    genre_ids?: Array<number> | null;
    title: string;
    vote_average: number;
    overview: string;
    release_date: string;
}
