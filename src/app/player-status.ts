import { Equipment } from "./equipment";
import { Brew } from "./brew";

export interface PlayerStatus {
    money: number;
    skill: number;
    equipment: Equipment;
    brews: Array<Brew>;
}
