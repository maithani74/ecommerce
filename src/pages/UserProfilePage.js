import Nav from "../features/navbar/Nav";
import UserProfile from "../features/user/component/UserProfile";

export default function UserProfilePage() {
  return (
    <div>
      <Nav>
        <h1 className="mx-auto text-2xl">My Profile</h1>
        <UserProfile />
      </Nav>
    </div>
  );
}
