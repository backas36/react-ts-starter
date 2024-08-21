interface IWithClickTrackingProps extends React.PropsWithChildren {
    trackingInfo: string;
}
export const WithClickTracking = ({ trackingInfo, children }: IWithClickTrackingProps) => {
    const handleClick = () => {
        console.log("click tracked: ", trackingInfo);
    };
    return <div onClick={handleClick}>{children}</div>;
};
