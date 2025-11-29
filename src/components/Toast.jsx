import { useApp } from '../context/AppContext';

const Toast = () => {
  const { toast } = useApp();

  return (
    <div
      className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-full shadow-xl flex items-center gap-3 transition-all duration-300 z-50 ${toast.show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
    >
      <i className={`fas ${toast.icon} text-green-500`}></i>
      <span className="font-medium">{toast.message}</span>
    </div>
  );
};

export default Toast;
