import { PACKAGE_MANAGER } from "@/constants";

export const getInstallCommand = (
    packageManager: (typeof PACKAGE_MANAGER)[keyof typeof PACKAGE_MANAGER]
) => {
    switch (packageManager) {
        case PACKAGE_MANAGER.PNPM:
            return "pnpm add";
        case PACKAGE_MANAGER.NPM:
            return "npm install";
        case PACKAGE_MANAGER.YARN:
            return "yarn add";
        case PACKAGE_MANAGER.BUN:
            return "bun add";
        default:
            return "npm install";
    }
};
