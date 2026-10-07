/**
 * ManoShakti — Auth Context
 * Simple auth state management using AsyncStorage
 */
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { demoUser, UserProfile } from '../data/sampleData';

interface AuthContextType {
  isLoggedIn: boolean;
  isLoading: boolean;
  user: UserProfile | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string, age: number) => Promise<boolean>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  isLoading: true,
  user: null,
  login: async () => false,
  signup: async () => false,
  logout: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const stored = await AsyncStorage.getItem('manoshakti_user');
      if (stored) {
        setUser(JSON.parse(stored));
        setIsLoggedIn(true);
      }
    } catch (e) {
      // Ignore
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    // Demo authentication — accepts demo credentials or any valid-looking input
    if (
      (email === 'demo@manoshakti.app' && password === 'password123') ||
      (email.includes('@') && password.length >= 6)
    ) {
      const loginUser: UserProfile =
        email === 'demo@manoshakti.app'
          ? demoUser
          : { name: email.split('@')[0], email, age: 20 };
      
      await AsyncStorage.setItem('manoshakti_user', JSON.stringify(loginUser));
      setUser(loginUser);
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  const signup = async (name: string, email: string, password: string, age: number): Promise<boolean> => {
    if (name && email.includes('@') && password.length >= 6) {
      const newUser: UserProfile = { name, email, age };
      await AsyncStorage.setItem('manoshakti_user', JSON.stringify(newUser));
      setUser(newUser);
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  const logout = async () => {
    await AsyncStorage.removeItem('manoshakti_user');
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, isLoading, user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
