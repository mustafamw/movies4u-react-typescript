import { SearchInterface } from "../search/SearchInterface";

export interface SearchProps {
    onSearch?: (search: SearchInterface) => void;
    defaultSearch?: string;
}