export interface User {
    id: number;
    name: string;
    avatar_url: string;
    html_url: string;
    followers: number;
    following: number;
    login: string;
    bio: string;
    location: string;
    public_repos: number;
    email: string;
    twitter_username: string;

};
export interface UserRepo {
    id: number;
    name: string;
    full_name: string;
    private: boolean;
    html_url: string;
    description: string;
    language: string;
    topics: string[];
    stargaazers_count: number;
    forks_count: number;

}