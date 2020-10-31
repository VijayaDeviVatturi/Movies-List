export interface Movie {
    backdrop_path: string;
    title: string;
    release_date: string;
    vote_average: number;
}
export interface MovieDataResponse {
    results: Movie[]
}

