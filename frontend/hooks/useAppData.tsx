/**
 * ManoShakti — App Data Context
 * Manages mood, journal, activity, and chat data locally
 */
import React, { createContext, useContext, useState, ReactNode } from 'react';
import {
  MoodEntry,
  JournalEntry,
  ChatMessage,
  MoodType,
  sampleMoods,
  sampleJournalEntries,
  initialChatMessage,
  getChatResponse,
} from '../data/sampleData';

interface AppDataContextType {
  // Moods
  moods: MoodEntry[];
  addMood: (mood: MoodType, note?: string) => void;

  // Journal
  journalEntries: JournalEntry[];
  addJournalEntry: (content: string) => void;
  deleteJournalEntry: (id: string) => void;

  // Activities
  completedActivities: string[];
  completeActivity: (activityId: string) => void;

  // Chat
  chatMessages: ChatMessage[];
  sendChatMessage: (text: string) => void;

  // Stats
  currentStreak: number;
}

const AppDataContext = createContext<AppDataContextType>({} as AppDataContextType);

export const useAppData = () => useContext(AppDataContext);

export const AppDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [moods, setMoods] = useState<MoodEntry[]>(sampleMoods);
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>(sampleJournalEntries);
  const [completedActivities, setCompletedActivities] = useState<string[]>(['1', '2', '4']);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([initialChatMessage]);

  // ─── Moods ─────────────────────────────────
  const addMood = (mood: MoodType, note?: string) => {
    const newMood: MoodEntry = {
      id: Date.now().toString(),
      mood,
      note,
      date: new Date().toISOString(),
    };
    setMoods(prev => [newMood, ...prev]);
  };

  // ─── Journal ───────────────────────────────
  const addJournalEntry = (content: string) => {
    const newEntry: JournalEntry = {
      id: Date.now().toString(),
      content,
      date: new Date().toISOString(),
    };
    setJournalEntries(prev => [newEntry, ...prev]);
  };

  const deleteJournalEntry = (id: string) => {
    setJournalEntries(prev => prev.filter(e => e.id !== id));
  };

  // ─── Activities ────────────────────────────
  const completeActivity = (activityId: string) => {
    if (!completedActivities.includes(activityId)) {
      setCompletedActivities(prev => [...prev, activityId]);
    }
  };

  // ─── Chat ──────────────────────────────────
  const sendChatMessage = (text: string) => {
    // Add user message
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date().toISOString(),
    };

    setChatMessages(prev => [...prev, userMsg]);

    // Generate bot response after a short delay (simulate typing)
    setTimeout(() => {
      const { response, suggestions } = getChatResponse(text);
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'bot',
        timestamp: new Date().toISOString(),
        suggestions,
      };
      setChatMessages(prev => [...prev, botMsg]);
    }, 1200);
  };

  // ─── Stats ─────────────────────────────────
  const calculateStreak = (): number => {
    if (moods.length === 0) return 0;
    let streak = 0;
    const sorted = [...moods].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = 0; i < sorted.length; i++) {
      const moodDate = new Date(sorted[i].date);
      moodDate.setHours(0, 0, 0, 0);
      const expected = new Date(today);
      expected.setDate(expected.getDate() - i);
      
      if (moodDate.getTime() === expected.getTime()) {
        streak++;
      } else {
        break;
      }
    }
    return Math.max(streak, 4); // Show at least 4 for demo
  };

  return (
    <AppDataContext.Provider
      value={{
        moods,
        addMood,
        journalEntries,
        addJournalEntry,
        deleteJournalEntry,
        completedActivities,
        completeActivity,
        chatMessages,
        sendChatMessage,
        currentStreak: calculateStreak(),
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
};
