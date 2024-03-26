export interface User {
    id?: number | null | undefined;
    firstName: string;
    lastName: string;
    email: string;
    userType: string;
    active: boolean;
    score: number;
    country: string;
    phone: string;
    website: string;
    company: string;
    details: string;
}

export function filterArrayByInputText<User>(
    array: User[],
    searchText: string | undefined,
    keysToMatch: string[]
): User[] {
    return array.filter((item) => {
        return keysToMatch.some((key) => {
            const value = (item as any)[key];
            if (
                value !== undefined &&
                (typeof value === "string" || typeof value === "number")
            ) {
                if (typeof value === "string") {
                    return value
                        ?.toLowerCase()
                        .toString()
                        .includes(searchText?.toLowerCase() ?? "");
                }
                return value.toString().includes(searchText?.toLowerCase() ?? "");
            }
            return false;
        });
    });
}

