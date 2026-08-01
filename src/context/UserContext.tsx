import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode
} from 'react';

type UserData = { email: string; id: number; phone: string; role: string };

interface UserContextType {
    user: UserData | null;
    setUser: (user: UserData | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<UserData | null>(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser должен использоваться внутри UserProvider');
    }
    return context;
};
