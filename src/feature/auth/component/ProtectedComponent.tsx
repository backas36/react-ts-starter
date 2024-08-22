import checkPermission from "../util/checkPermission";
import withAuthorization from "./withAuthorization";

const PrivateComponent = () => {
    return (
        <div className='rounded-md border-l-4 border-yellow-500 bg-yellow-100 p-4 text-yellow-700 shadow-md'>
            <p className='font-bold'>Private Access Warning</p>
            <p>This is a Private Component, only visible to Admin Users.</p>
        </div>
    );
};

export const ProtectedComponent = withAuthorization(PrivateComponent, checkPermission);
