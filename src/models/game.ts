import { Clip } from "./clip";
import { ParentPlatform } from "./parent-platform";

export type Game = {
    name: string;
    background_image: string;
    parent_platforms: Array<ParentPlatform>;
    clip: Clip;
    description: string;
}