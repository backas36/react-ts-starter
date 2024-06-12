import { IResource, promiseStatusHelper } from "./promiseStatusHelper";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const asyncImagePool = new Map<string, any>();

export const loadImage = (source: string): IResource<string> => {
    let resource = asyncImagePool.get(source);

    if (resource) {
        //console.log(resource.printStatus());

        return resource;
    }

    resource = promiseStatusHelper<string>(
        () =>
            new Promise((resolve, reject) => {
                const img = new window.Image();
                img.src = source;

                img.addEventListener("load", () => {
                    resolve(source);
                });
                img.addEventListener("error", (e) => reject(e));
            })
    );
    //console.log(resource.printStatus());

    asyncImagePool.set(source, resource);
    return resource;
};
