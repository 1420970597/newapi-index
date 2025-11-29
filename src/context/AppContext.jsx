import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [toast, setToast] = useState({ show: false, message: '', icon: 'fa-check-circle' });
  const [guideModal, setGuideModal] = useState({ show: false, type: '' });
  const [disclaimerModal, setDisclaimerModal] = useState(false);

  // 初始化主题
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // 切换主题
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);

    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // 显示 Toast
  const showToast = (message, icon = 'fa-check-circle') => {
    setToast({ show: true, message, icon });
    setTimeout(() => {
      setToast({ show: false, message: '', icon });
    }, 2000);
  };

  // 复制到剪贴板
  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      showToast('已复制到剪贴板', 'fa-check-circle');
    } catch (err) {
      console.error('Failed to copy:', err);
      showToast('复制失败，请手动复制', 'fa-exclamation-circle');
    }
  };

  // 打开指南 Modal
  const openGuideModal = (type) => {
    setGuideModal({ show: true, type });
  };

  // 关闭指南 Modal
  const closeGuideModal = () => {
    setGuideModal({ show: false, type: '' });
  };

  // 检查免责声明
  useEffect(() => {
    const agreed = localStorage.getItem('agreed_v2');
    if (!agreed) {
      setDisclaimerModal(true);
    }
  }, []);

  // 同意免责声明
  const acceptDisclaimer = () => {
    localStorage.setItem('agreed_v2', 'true');
    setDisclaimerModal(false);
  };

  const value = {
    theme,
    toggleTheme,
    toast,
    showToast,
    copyToClipboard,
    guideModal,
    openGuideModal,
    closeGuideModal,
    disclaimerModal,
    acceptDisclaimer,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
