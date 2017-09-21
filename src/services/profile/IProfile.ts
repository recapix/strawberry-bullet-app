import { ProfileModel, UserModel, ProfilePostModel } from "../../models";

export interface IProfileService {
    getData(): Promise<ProfileModel>;
    getProfileUser(uidProfile: string): Promise<UserModel>;
    getProfileFollowers(uidProfile: string): Promise<UserModel[]>;
    getProfileFollowing(uidProfile: string): Promise<UserModel[]>;
    getProfilePosts(uidProfile: string): Promise<ProfilePostModel[]>;
    deleteProfileFollowing(uidProfile: string, postId): Promise<void>;
}