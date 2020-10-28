import { Clip } from "./clip";
import { ParentPlatform } from "./parent-platform";

export type Game = {
    id: number;
    name: string;
    background_image: string;
    background_image_additional: string;
    parent_platforms: Array<ParentPlatform>;
    clip: Clip;
    description_raw: string;
}