import Work from "./Work";

type User = {
    userId?: string;
    name?: string;
    age?: number;
    phone?: string;
    email?: string;
    education?: string;
    address?: string;
    skills?: string,
    description?: string;
    favorites?: string;
    jobTitle?: string;
    works: Array<Work>
}
export default User;