import { Clip } from "./clip";
import { Genre } from "./genre";
import { ParentPlatform } from "./parent-platform";

export type Game = {
    id: number;
    name: string;
    background_image: string;
    background_image_additional: string;
    parent_platforms: ParentPlatform[];
    clip: Clip;
    metacritic: number;
    released: string;
    genres: Genre[];
    description_raw: string;
}