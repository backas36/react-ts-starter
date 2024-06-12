export interface IResource<Payload> {
    read: () => Payload;
    printStatus: () => void;
}

type status = "init" | "success" | "error";

export const promiseStatusHelper = <Payload>(asyncFn: () => Promise<Payload>): IResource<Payload> => {
    let status: status = "init";

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let result: any;

    const promise = asyncFn().then(
        (r: Payload) => {
            status = "success";
            result = r;
        },
        (e: Error) => {
            status = "error";
            result = e;
        }
    );

    return {
        read(): Payload {
            switch (status) {
                case "init":
                    throw promise;
                case "error":
                    throw result;
                case "success":
                    return result;
                default:
                    throw new Error("Invalid status");
            }
        },
        printStatus() {
            console.log(status);
            //console.log(new Date().toLocaleString());
        },
    };
};
