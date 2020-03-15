import { ResultsEntity } from "./ResultsEntityInterface";

export interface MoviesDbInterface {
    page?: number;
    total_results?: number;
    total_pages?: number;
    results?: Array<ResultsEntity>;
    loading: boolean;
}
