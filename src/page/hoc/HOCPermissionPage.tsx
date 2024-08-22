import { ProtectedComponent } from "@/feature/auth/component/ProtectedComponent";

const HOCPermissionPage = () => {
    return (
        <div>
            <ProtectedComponent role='admin' />
            <ProtectedComponent role='user' />
        </div>
    );
};
export default HOCPermissionPage;
