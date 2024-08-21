import { useEffect, useState } from "react";

export interface LoadingProps {
    isLoading?: boolean;
}
const withLoading = <T extends LoadingProps>(WrapperComponent: React.ComponentType<T>) => {
    const WithLoading = (props: T) => {
        const [isLoading, setIsLoading] = useState(false);

        useEffect(() => {
            setIsLoading(true);
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 2000);
            return () => clearTimeout(timer);
        }, []);

        return <WrapperComponent {...props} isLoading={isLoading} />;
    };
    return WithLoading;
};
export default withLoading;
