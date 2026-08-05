import React, {
    createContext,
    useContext,
    useState,
    type ReactNode
} from 'react';
import type { SelectOption } from '../components/atoms/Select';

type BusinessContextType = {
    selectedBusiness: SelectOption | null;
    setSelectedBusiness: (business: SelectOption | null) => void;
};

const BusinessContext = createContext<BusinessContextType | undefined>(
    undefined
);

export function BusinessProvider({ children }: { children: ReactNode }) {
    const [selectedBusiness, setSelectedBusiness] =
        useState<SelectOption | null>(null);

    return (
        <BusinessContext.Provider
            value={{ selectedBusiness, setSelectedBusiness }}
        >
            {children}
        </BusinessContext.Provider>
    );
}

export function useBusiness() {
    const context = useContext(BusinessContext);
    if (!context) {
        throw new Error(
            'useBusiness должен использоваться внутри BusinessProvider'
        );
    }
    return context;
}
