import React, { createContext, useContext, useState, ReactNode } from 'react';
interface RouterContextType {
  currentPage: string;
  navigateTo: (page: string, pageParams?: Record<string, string>) => void;
  params: Record<string, string>;
}
const RouterContext = createContext<RouterContextType>({
  currentPage: 'home',
  navigateTo: () => {},
  params: {},
});
export const useRouter = () => useContext(RouterContext);
interface RouterProviderProps {
  children: ReactNode;
}
export const RouterProvider: React.FC<RouterProviderProps> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('home');
  const [params, setParams] = useState<Record<string, string>>({});
  const navigateTo = (page: string, pageParams?: Record<string, string>) => {
    setCurrentPage(page);
    if (pageParams) {
      setParams(pageParams);
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <RouterContext.Provider
      value={{
        currentPage,
        navigateTo,
        params,
      }}
    >
      {children}
    </RouterContext.Provider>
  );
};
