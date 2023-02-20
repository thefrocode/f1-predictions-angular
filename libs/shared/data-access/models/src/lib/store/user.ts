import { SocialUser } from "@abacritt/angularx-social-login";

export interface User extends SocialUser{
    access_token: string;
    player_id: number;
}