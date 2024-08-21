import withLoading, { LoadingProps } from "./withLoading";

interface ILoadingWithTxtProps extends LoadingProps {
    isLoading?: boolean;
    txt?: string;
}
const Loading = ({ isLoading, txt }: ILoadingWithTxtProps) => {
    if (!isLoading) return <></>;
    return (
        <div className='flex  items-center justify-center'>
            <div className='h-16 w-16 animate-spin rounded-full border-t-4 border-solid border-blue-500'></div>
            <span className='ml-4 text-lg font-semibold text-gray-700'>{txt || "Loading..."}</span>
        </div>
    );
};

export const EnhancedLoading = withLoading(Loading);
