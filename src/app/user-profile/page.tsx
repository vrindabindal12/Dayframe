import { UserProfile } from "@clerk/nextjs";

export default function UserProfilePage(){
    return (
        <div className="flex justify-center items-center py-12 top-30">
            <UserProfile path="/user-profile"/>
        </div>
    )
}