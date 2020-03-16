import React from "react";
import { MoviesDbService } from "../../services/moviesDb/MovieDbService";
import { MoviesDbInterface } from "../../interfaces/moviesDb/MoviesDbInterface";
import Movies from "../../components/movies/Movies";
import Search from "../../components/search/Search";
import { SearchInterface } from "../../interfaces/search/SearchInterface";
import './HomePage.scss';
import loading from '../../assets/img/loading.gif';
import NoResultsFound from "../../components/no-results-found/NoResultsFound";

class HomePage extends React.Component<any, MoviesDbInterface> {

    private moviesDbService: MoviesDbService = new MoviesDbService();
    private searchQuery: SearchInterface = {
        query: '',
        pageNo: 1
    }
    private busy: boolean = false;
    

    private getList = () => {
        if (!this.busy && (!this.state.total_pages || this.searchQuery.pageNo <= this.state.total_pages)) {
            this.busy = true;
            this.setState({loading: true})
            this.moviesDbService.getList(this.searchQuery)
                .then((respone: MoviesDbInterface) => {
                    if (respone.results && respone.results.length > 0) {
                        this.setState({ 
                            results: this.state?.results?.concat(respone.results),
                            total_pages: respone.total_pages
                        })
                    } else {
                        this.setState({results: []})
                    }

                    this.busy = false;
                    this.setState({loading: false})
                });
            this.searchQuery.pageNo++;
        }

    }

    private handleScroll = () => {
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        const windowBottom = windowHeight + window.pageYOffset;
        if (windowBottom >= docHeight) {
            this.getList();
        }
    }

    constructor(props: MoviesDbInterface) {
        super(props);
        this.state = {
            results: [],
            loading: false
        }
        this.handleScroll = this.handleScroll.bind(this);
    }
    
    UNSAFE_componentWillMount() {
        const query = window.location.pathname.split('/')[1];
        this.searchQuery.query = query.replace(/%20/g, ' ');
        window.addEventListener("scroll", this.handleScroll);
        this.getList();
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    search = (search: SearchInterface) => {
        if(search.query && search.query.length > 0) {
            this.searchQuery = {
                query: search.query,
                pageNo: 1
            }
            this.getList();
            window.location.pathname = `/${this.searchQuery.query}`
        }
    }

    render() {
        return (
            <div className="search-movie-results">
                <Search onSearch={this.search} defaultSearch={this.searchQuery.query}/>
                <Movies result={this.state.results} />
                { this.state.loading ? <img src={loading} className="loading" alt="Loading..."/> : null}
                { !this.state.loading && this.state.results?.length === 0 ? <NoResultsFound /> : null }
            </div>
        );
    }
}

export default HomePage;