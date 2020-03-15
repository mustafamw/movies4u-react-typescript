import { MoviesDbService } from './MovieDbService';
import { SearchInterface } from '../../interfaces/search/SearchInterface';

describe('MoviesDbService service', () => {

    const moviesDbService: MoviesDbService = new MoviesDbService();

    test('should call getList method', () => {

        const search: SearchInterface = {
            query: 'test',
            pageNo: 1
        }

        const fetch = spyOn(window, 'fetch').and.callThrough();
        const getList = spyOn(moviesDbService, 'getList').and.callThrough();

        expect(fetch).not.toHaveBeenCalled();
        expect(getList).not.toHaveBeenCalled();

        moviesDbService.getList(search);

        const url = "https://api.themoviedb.org/3/search/movie?page=1&api_key=b2f11a74d61ee3f7a78e42a3d278a8f7&language=en&query=test";
        const header = {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMmYxMWE3NGQ2MWVlM2Y3YTc4ZTQyYTNkMjc4YThmNyIsInN1YiI6IjVlNmFiODUxY2VkYWM0MDAxMzQ3Y2U2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h9_xLBdwUXYdUDzV6LEz6mwJq4mQ97uSwowv5XyzgUg"
            }
        };
        expect(getList).toHaveBeenCalledWith(search);
        expect(getList.calls.count()).toBe(1);
        expect(fetch).toHaveBeenCalledWith(url, header);
        expect(fetch.calls.count()).toBe(1);
    });

    test('should call getListId method', () => {


        const fetch = spyOn(window, 'fetch').and.callThrough();
        const getListId = spyOn(moviesDbService, 'getListId').and.callThrough();

        expect(fetch).not.toHaveBeenCalled();
        expect(getListId).not.toHaveBeenCalled();

        moviesDbService.getListId(2);

        const url = "https://api.themoviedb.org/3/movie/2?api_key=b2f11a74d61ee3f7a78e42a3d278a8f7&language=en-US";
        const header = {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMmYxMWE3NGQ2MWVlM2Y3YTc4ZTQyYTNkMjc4YThmNyIsInN1YiI6IjVlNmFiODUxY2VkYWM0MDAxMzQ3Y2U2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h9_xLBdwUXYdUDzV6LEz6mwJq4mQ97uSwowv5XyzgUg"
            }
        };
        expect(getListId).toHaveBeenCalledWith(2);
        expect(getListId.calls.count()).toBe(1);
        expect(fetch).toHaveBeenCalledWith(url, header);
        expect(fetch.calls.count()).toBe(1);
    });

});