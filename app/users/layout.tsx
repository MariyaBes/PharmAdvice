import getCurrentUser from "../actions/getCurrentUser";
import getUsers from "../actions/getUsers";
import Sidebar from "../components/sidebar/Sidebar";
import UserInfo from "./components/UserInfo";
import UserList from "./components/UserList";

export default async function UsersLayout ({
    children
}: {
    children: React.ReactNode,
}) {
    const users = await getUsers();
    const currentUser = await getCurrentUser();

    return (
        // @ts-expect-error Server Component
        <Sidebar>
            <div className="h-full">
                {currentUser && <UserInfo data={currentUser} />}
                <UserList items={users}/>
                {children}
            </div>
        </Sidebar>
    );
};