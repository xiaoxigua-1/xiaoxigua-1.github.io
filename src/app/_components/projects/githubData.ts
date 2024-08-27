import axios from "axios";

export const GitHubAPI = axios.create({ baseURL: "https://api.github.com/" });

export interface RepoData {
  owner: OwnerData;
  description: string;
  stargazers_count: number;
  forks: number;
  open_issues: number;
  language: string;
}

interface OwnerData {
  avatar_url: string;
  html_url: string;
}

export interface RepoLanguages {
  [key: string]: number;
}
