import { ComponentType } from "react";

interface IWithAuthProps {
    role: string;
}

const withAuthorization = <T extends IWithAuthProps>(
    WrappedComponent: ComponentType<T>,
    checkPermission: (role: string) => boolean
) => {
    const WithAuth = (props: T) => {
        return checkPermission(props.role) ? (
            <WrappedComponent {...props} />
        ) : (
            <p>Please Login with appropriate role</p>
        );
    };

    return WithAuth;
};
export default withAuthorization;
