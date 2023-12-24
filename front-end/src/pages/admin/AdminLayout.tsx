import { ReactNode } from "react";
import UserHeader from "../../components/Header/UserHeader/UserHeader";

interface AdminLayoutProps {
  children: ReactNode;
}
const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div>
      <UserHeader />
      {children}
    </div>
  );
};
export default AdminLayout;
