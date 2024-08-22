const checkPermission = (role: string) => {
    return role === "admin";
};

export default checkPermission;
