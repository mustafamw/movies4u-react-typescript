export interface ResultsEntity {
    poster_path: string;
    popularity: number;
    vote_count: number;
    video: boolean;
    media_type: string;
    id: number;
    adult: boolean;
    backdrop_path: string;
    original_language: string;
    original_title: string;
    genre_ids?: Array<number> | null;
    title: string;
    vote_average: number;
    overview: string;
    name: string;
}
