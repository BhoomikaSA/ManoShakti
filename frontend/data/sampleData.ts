/**
 * ManoShakti — Sample Data
 * Realistic demo data for the prototype
 */

export type MoodType = 'happy' | 'good' | 'okay' | 'low' | 'very_low';

export interface MoodEntry {
  id: string;
  mood: MoodType;
  note?: string;
  date: string; // ISO date string
}

export interface JournalEntry {
  id: string;
  content: string;
  date: string;
}

export interface Activity {
  id: string;
  title: string;
  category: 'Breathing' | 'Meditation' | 'Relaxation' | 'Focus' | 'Movement';
  duration: number; // minutes
  description: string;
  instructions: string[];
  icon: string; // Ionicons name
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
  suggestions?: string[];
}

export interface UserProfile {
  name: string;
  email: string;
  age: number;
  avatar?: string;
}

// ─── Demo User ────────────────────────────────────
export const demoUser: UserProfile = {
  name: 'Ananya',
  email: 'demo@manoshakti.app',
  age: 20,
};

// ─── Mood Data ────────────────────────────────────
const today = new Date();
const getDate = (daysAgo: number): string => {
  const d = new Date(today);
  d.setDate(d.getDate() - daysAgo);
  return d.toISOString();
};

export const moodConfig: Record<MoodType, { emoji: string; label: string; color: string; message: string }> = {
  happy: { emoji: '😊', label: 'Happy', color: '#FFD93D', message: "That's wonderful! Keep spreading those good vibes." },
  good: { emoji: '🙂', label: 'Good', color: '#6BCB77', message: "You're feeling good. Keep it up!" },
  okay: { emoji: '😐', label: 'Okay', color: '#4EA8DE', message: "It's okay to feel just okay. Every day is different." },
  low: { emoji: '😟', label: 'Low', color: '#FF8C42', message: "It's brave of you to acknowledge how you feel." },
  very_low: { emoji: '😢', label: 'Very Low', color: '#E85D75', message: "Remember, it's okay to ask for help. You're not alone." },
};

export const sampleMoods: MoodEntry[] = [
  { id: '1', mood: 'good', note: 'Had a productive day at college.', date: getDate(0) },
  { id: '2', mood: 'happy', note: 'Spent time with friends, felt great!', date: getDate(1) },
  { id: '3', mood: 'okay', note: 'A regular day, nothing special.', date: getDate(2) },
  { id: '4', mood: 'good', note: 'Completed my assignment on time.', date: getDate(3) },
  { id: '5', mood: 'happy', note: 'Morning meditation really helped today.', date: getDate(4) },
  { id: '6', mood: 'okay', note: 'Felt a little tired but managed well.', date: getDate(5) },
  { id: '7', mood: 'good', note: 'Started my day with a walk.', date: getDate(6) },
];

// ─── Journal Data ─────────────────────────────────
export const sampleJournalEntries: JournalEntry[] = [
  {
    id: '1',
    content: 'Today was a really productive day. I completed my project milestone and felt a genuine sense of accomplishment. Taking small breaks between work sessions made a huge difference in my focus and energy.',
    date: getDate(0),
  },
  {
    id: '2',
    content: 'Spent the afternoon with my friends at the library. We studied together and then grabbed coffee. It felt nice to be around people who understand the pressure of college life.',
    date: getDate(1),
  },
  {
    id: '3',
    content: 'I felt a little overwhelmed today with all the deadlines approaching. But I sat down, made a list, and prioritized. Breaking things into smaller tasks helped me feel more in control.',
    date: getDate(2),
  },
  {
    id: '4',
    content: 'Tried the morning meditation activity today for the first time. It was only 10 minutes, but I felt noticeably calmer throughout the morning. I want to make this a daily habit.',
    date: getDate(3),
  },
  {
    id: '5',
    content: 'Had a conversation with my mentor about my progress. She was encouraging and suggested I focus on one thing at a time instead of multitasking. Good advice that I want to remember.',
    date: getDate(5),
  },
];

// ─── Activities Data ──────────────────────────────
export const sampleActivities: Activity[] = [
  {
    id: '1',
    title: '5-Minute Breathing',
    category: 'Breathing',
    duration: 5,
    description: 'Take a short break and focus on slow, comfortable breathing to reset your mind.',
    instructions: [
      'Find a comfortable seated position.',
      'Gently close your eyes or soften your gaze.',
      'Inhale slowly through your nose for 4 counts.',
      'Hold your breath gently for 4 counts.',
      'Exhale slowly through your mouth for 6 counts.',
      'Repeat this cycle for the full duration.',
    ],
    icon: 'leaf-outline',
  },
  {
    id: '2',
    title: 'Morning Meditation',
    category: 'Meditation',
    duration: 10,
    description: 'Start your day with a calm, guided mindfulness session to set a positive intention.',
    instructions: [
      'Sit comfortably with your back straight.',
      'Close your eyes and take three deep breaths.',
      'Focus on the sensation of breathing.',
      'When your mind wanders, gently bring attention back.',
      'Set an intention for your day.',
      'Slowly open your eyes when the timer ends.',
    ],
    icon: 'sunny-outline',
  },
  {
    id: '3',
    title: 'Deep Relaxation',
    category: 'Relaxation',
    duration: 15,
    description: 'Release tension from your entire body with this guided relaxation practice.',
    instructions: [
      'Lie down or sit in a reclined position.',
      'Close your eyes and relax your jaw.',
      'Starting from your toes, consciously relax each muscle group.',
      'Move slowly up through your legs, torso, arms, and face.',
      'Breathe naturally and let go of any tension.',
      'Rest in this relaxed state for a few minutes.',
    ],
    icon: 'water-outline',
  },
  {
    id: '4',
    title: 'Positive Affirmations',
    category: 'Focus',
    duration: 5,
    description: 'Build self-confidence and positivity with simple daily affirmations.',
    instructions: [
      'Find a quiet moment and sit comfortably.',
      'Take a few deep breaths to center yourself.',
      'Repeat each affirmation slowly and with conviction.',
      '"I am capable and strong."',
      '"I deserve kindness, from myself and others."',
      '"I am making progress, even if it feels slow."',
      '"Today I choose peace over worry."',
    ],
    icon: 'heart-outline',
  },
  {
    id: '5',
    title: 'Focus Reset',
    category: 'Focus',
    duration: 10,
    description: 'Regain concentration and clarity when your mind feels scattered.',
    instructions: [
      'Step away from what you were working on.',
      'Close your eyes and take 5 slow breaths.',
      'Name 5 things you can see, 4 you can hear, 3 you can touch.',
      'Write down your most important task for right now.',
      'Set a timer for 10 minutes of focused work.',
      'Start with just one small step.',
    ],
    icon: 'bulb-outline',
  },
  {
    id: '6',
    title: 'Gentle Stretch',
    category: 'Movement',
    duration: 10,
    description: 'Release physical tension with simple stretching exercises you can do anywhere.',
    instructions: [
      'Stand up and roll your shoulders back and forth.',
      'Gently tilt your head to each side, holding for 10 seconds.',
      'Reach your arms overhead and stretch tall.',
      'Twist gently to each side from your waist.',
      'Bend forward slowly, reaching toward your toes.',
      'Shake out your hands and arms to release tension.',
    ],
    icon: 'body-outline',
  },
  {
    id: '7',
    title: 'Mindful Break',
    category: 'Relaxation',
    duration: 5,
    description: 'A quick mindful pause to reduce stress during a busy day.',
    instructions: [
      'Pause whatever you are doing.',
      'Take three deep, slow breaths.',
      'Notice how your body feels right now.',
      'Acknowledge any stress without judging it.',
      'Choose one positive thought to carry forward.',
      'Return to your activity with renewed calm.',
    ],
    icon: 'pause-circle-outline',
  },
  {
    id: '8',
    title: 'Sleep Preparation',
    category: 'Relaxation',
    duration: 15,
    description: 'Wind down your mind and body to prepare for restful sleep.',
    instructions: [
      'Dim the lights and put away screens.',
      'Lie in bed and close your eyes.',
      'Take slow breaths, counting each exhale.',
      'Scan your body from head to toe, releasing tension.',
      'Think of three things you are grateful for today.',
      'Let your thoughts drift without holding onto any.',
    ],
    icon: 'moon-outline',
  },
  {
    id: '9',
    title: 'Body Scan',
    category: 'Meditation',
    duration: 10,
    description: 'Develop body awareness and release tension through a systematic scan.',
    instructions: [
      'Lie down comfortably on your back.',
      'Close your eyes and breathe naturally.',
      'Bring attention to the top of your head.',
      'Slowly move your awareness down through your body.',
      'Notice sensations without trying to change them.',
      'When you reach your toes, take a deep breath and rest.',
    ],
    icon: 'person-outline',
  },
  {
    id: '10',
    title: 'Gratitude Journaling',
    category: 'Focus',
    duration: 5,
    description: 'Cultivate a positive mindset by reflecting on what you are grateful for.',
    instructions: [
      'Take a moment to sit quietly.',
      'Think about your day so far.',
      'Write down three things you are grateful for.',
      'They can be small — a good meal, a kind word, sunshine.',
      'Reflect on why each one matters to you.',
      'Carry this feeling of gratitude into the rest of your day.',
    ],
    icon: 'star-outline',
  },
  {
    id: '11',
    title: 'Walking Meditation',
    category: 'Movement',
    duration: 15,
    description: 'Combine gentle movement with mindfulness for a refreshing experience.',
    instructions: [
      'Find a quiet path or open space.',
      'Begin walking at a slow, comfortable pace.',
      'Focus on the sensation of each step.',
      'Notice the ground beneath your feet.',
      'Breathe naturally and stay present.',
      'If your mind wanders, return focus to your steps.',
    ],
    icon: 'walk-outline',
  },
  {
    id: '12',
    title: 'Progressive Muscle Relaxation',
    category: 'Relaxation',
    duration: 20,
    description: 'Systematically tense and release muscle groups to achieve deep physical relaxation.',
    instructions: [
      'Sit or lie in a comfortable position.',
      'Start by tensing the muscles in your feet for 5 seconds.',
      'Release and notice the feeling of relaxation.',
      'Move to your calves, thighs, abdomen, hands, arms.',
      'Tense each group for 5 seconds, then release.',
      'End by relaxing your shoulders, neck, and face.',
    ],
    icon: 'fitness-outline',
  },
];

// ─── Daily Quotes ─────────────────────────────────
export const dailyQuotes: string[] = [
  'Small steps every day can create meaningful change.',
  'You are stronger than you think, and braver than you feel.',
  'Taking care of yourself isn't selfish — it's essential.',
  'Progress, not perfection, is what matters.',
  'Your feelings are valid. Every single one.',
  'Rest is productive. Your mind deserves a break.',
  'You don't have to have it all figured out right now.',
  'Be gentle with yourself. You're doing the best you can.',
  'Every sunrise is a new opportunity to begin again.',
  'The strongest people are those who ask for help when they need it.',
];

export const getDailyQuote = (): string => {
  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000
  );
  return dailyQuotes[dayOfYear % dailyQuotes.length];
};

// ─── Support Contacts (Demo Placeholders) ─────────
export interface SupportContact {
  id: string;
  name: string;
  phone: string;
  description: string;
  category: 'helpline' | 'professional' | 'trusted';
  isPlaceholder: boolean;
}

export const supportContacts: SupportContact[] = [
  {
    id: '1',
    name: 'Vandrevala Foundation',
    phone: '1860 2662 345',
    description: '24/7 mental health support helpline',
    category: 'helpline',
    isPlaceholder: false,
  },
  {
    id: '2',
    name: 'AASRA',
    phone: '91 22 27546669',
    description: 'Crisis intervention and suicide prevention',
    category: 'helpline',
    isPlaceholder: false,
  },
  {
    id: '3',
    name: 'iCall',
    phone: '9152987821',
    description: 'Psychosocial helpline by TISS',
    category: 'helpline',
    isPlaceholder: false,
  },
  {
    id: '4',
    name: 'Sneha Foundation',
    phone: '91 44 2464 0050',
    description: 'Emotional support and crisis helpline',
    category: 'helpline',
    isPlaceholder: false,
  },
  {
    id: '5',
    name: 'Campus Counselor',
    phone: 'Contact your college',
    description: 'Reach out to your campus counseling center',
    category: 'professional',
    isPlaceholder: true,
  },
  {
    id: '6',
    name: 'Trusted Friend or Family',
    phone: '',
    description: 'Talk to someone you trust about how you feel',
    category: 'trusted',
    isPlaceholder: true,
  },
];

// ─── Chatbot Responses ────────────────────────────
interface ChatResponseData {
  keywords: string[];
  response: string;
  suggestions: string[];
}

export const chatResponses: ChatResponseData[] = [
  {
    keywords: ['stress', 'stressed', 'pressure', 'overwhelm', 'overwhelming'],
    response: "I understand that things feel stressful right now. Stress is your mind's way of telling you it needs attention. Try stepping back for a moment — even a few slow breaths can help you regain clarity.",
    suggestions: ['Try Breathing', 'Mindful Break', 'Wellness Activities'],
  },
  {
    keywords: ['exam', 'test', 'study', 'studying', 'assignment', 'deadline'],
    response: "Exam pressure can feel intense, but remember — you've prepared for this. Break your study sessions into smaller chunks, take regular breaks, and stay hydrated. You've got this.",
    suggestions: ['Focus Reset', 'Create Study Plan', 'Try Breathing'],
  },
  {
    keywords: ['sleep', 'tired', 'exhausted', 'insomnia', 'can\'t sleep'],
    response: "It sounds like your body and mind need rest. Try reducing screen time before bed, keeping your room dark and cool, and doing a gentle relaxation exercise. Good sleep is one of the best things you can do for your wellbeing.",
    suggestions: ['Sleep Preparation', 'Deep Relaxation', 'Body Scan'],
  },
  {
    keywords: ['anxious', 'anxiety', 'nervous', 'worried', 'worry', 'panic'],
    response: "Anxiety can feel overwhelming, but it's more common than you think. Try grounding yourself: name 5 things you can see, 4 you can touch, 3 you can hear. This helps bring you back to the present moment.",
    suggestions: ['Try Breathing', 'Focus Reset', 'Talk to Someone'],
  },
  {
    keywords: ['sad', 'unhappy', 'depressed', 'down', 'crying', 'cry'],
    response: "I'm sorry you're feeling this way. It takes courage to acknowledge difficult emotions. Remember that it's okay to not be okay sometimes. Consider talking to someone you trust — you don't have to carry this alone.",
    suggestions: ['Talk to Someone', 'Journal Your Feelings', 'Positive Affirmations'],
  },
  {
    keywords: ['lonely', 'alone', 'isolated', 'no friends'],
    response: "Feeling lonely can be really tough. Know that wanting connection is completely natural. Sometimes reaching out to even one person — a friend, family member, or counselor — can make a difference.",
    suggestions: ['Talk to Someone', 'Journal Your Feelings', 'Walking Meditation'],
  },
  {
    keywords: ['angry', 'frustrated', 'annoyed', 'irritated', 'furious'],
    response: "It's natural to feel angry sometimes. The key is how we process it. Try taking a few deep breaths, stepping away from the situation, and giving yourself space to cool down before responding.",
    suggestions: ['Try Breathing', 'Gentle Stretch', 'Mindful Break'],
  },
  {
    keywords: ['relax', 'calm', 'peace', 'peaceful', 'chill'],
    response: "Let's take a moment to find some calm. Sit comfortably, relax your shoulders, and take a few slow, deep breaths. You deserve this moment of peace.",
    suggestions: ['Deep Relaxation', 'Body Scan', '5-Minute Breathing'],
  },
  {
    keywords: ['breathe', 'breathing', 'breath'],
    response: "Great choice! Breathing exercises are one of the quickest ways to feel calmer. Try the 4-4-6 technique: inhale for 4 counts, hold for 4, exhale for 6. Let's do it together.",
    suggestions: ['5-Minute Breathing', 'Deep Relaxation', 'Mindful Break'],
  },
  {
    keywords: ['focus', 'concentrate', 'distracted', 'attention', 'procrastinate'],
    response: "Having trouble focusing is very common. Try removing distractions, working in short focused bursts, and taking a brief break between sessions. The Focus Reset activity can also help.",
    suggestions: ['Focus Reset', 'Mindful Break', '5-Minute Breathing'],
  },
  {
    keywords: ['confidence', 'self-esteem', 'worth', 'not good enough', 'doubt'],
    response: "Self-doubt is something everyone experiences. Remember: you are capable, you are enough, and your worth is not defined by any single outcome. Practicing positive affirmations can help build inner confidence over time.",
    suggestions: ['Positive Affirmations', 'Gratitude Journaling', 'Journal Your Feelings'],
  },
  {
    keywords: ['friend', 'relationship', 'social', 'people', 'conflict'],
    response: "Relationships can be a source of both joy and stress. If a relationship is causing you worry, try communicating your feelings honestly and calmly. And remember — it's okay to set boundaries.",
    suggestions: ['Talk to Someone', 'Journal Your Feelings', 'Mindful Break'],
  },
  {
    keywords: ['exercise', 'movement', 'fitness', 'workout', 'run', 'walk'],
    response: "Physical activity is amazing for mental health! Even a 10-minute walk can boost your mood. Start small and be consistent — your body and mind will thank you.",
    suggestions: ['Gentle Stretch', 'Walking Meditation', 'Wellness Activities'],
  },
  {
    keywords: ['grateful', 'gratitude', 'thankful', 'appreciate'],
    response: "Practicing gratitude is a powerful way to shift your perspective. Even on tough days, there are small things to appreciate. Writing them down can help reinforce this positive habit.",
    suggestions: ['Gratitude Journaling', 'Positive Affirmations', 'Journal Your Feelings'],
  },
  {
    keywords: ['motivation', 'motivated', 'inspire', 'lazy', 'energy', 'unmotivated'],
    response: "Motivation comes and goes — and that's perfectly normal. Start with something small and achievable. Sometimes the hardest part is simply beginning. Be kind to yourself and celebrate even tiny wins.",
    suggestions: ['Positive Affirmations', 'Focus Reset', 'Gentle Stretch'],
  },
  {
    keywords: ['hello', 'hi', 'hey', 'good morning', 'good evening'],
    response: "Hello! 😊 I'm glad you're here. How are you feeling today? You can tell me what's on your mind, or try one of the wellness activities.",
    suggestions: ['How I\'m Feeling', 'Wellness Activities', 'Just Exploring'],
  },
  {
    keywords: ['thank', 'thanks', 'helpful', 'appreciate'],
    response: "You're welcome! I'm always here whenever you need a moment of support. Remember, taking time for yourself is a sign of strength. 💪",
    suggestions: ['Wellness Activities', 'Track My Mood', 'Write in Journal'],
  },
];

export const defaultChatResponse = {
  response: "I'm here to listen and support you. You can tell me a little more about what's on your mind, or try one of our wellness activities.",
  suggestions: ['Wellness Activities', 'Track My Mood', 'Talk to Someone'],
};

export const getChatResponse = (message: string): { response: string; suggestions: string[] } => {
  const lower = message.toLowerCase();
  
  for (const item of chatResponses) {
    if (item.keywords.some(keyword => lower.includes(keyword))) {
      return { response: item.response, suggestions: item.suggestions };
    }
  }
  
  return defaultChatResponse;
};

// ─── Initial Chat Message ─────────────────────────
export const initialChatMessage: ChatMessage = {
  id: 'initial',
  text: "Hi! I'm ManoShakti AI 👋\n\nI'm here to listen and support you with general wellness guidance. I can help you with stress management, relaxation techniques, mood tracking, and more.\n\nHow are you feeling today?",
  sender: 'bot',
  timestamp: new Date().toISOString(),
  suggestions: ["I'm feeling stressed", "I can't focus", "Help me relax", "I'm feeling low", "Just exploring"],
};
