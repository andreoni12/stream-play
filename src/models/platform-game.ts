import { ParentPlatform } from "./parent-platform";

export type PlatformGame = {
    id: number;
    metacritic: number;
    name: string;
    parent_platforms: Array<ParentPlatform>;
    released: string;
    background_image: string;
}