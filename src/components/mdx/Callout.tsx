import React from 'react';
import { Info, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

interface CalloutProps {
  type?: 'info' | 'warning' | 'success' | 'error';
  children: React.ReactNode;
}

const Callout: React.FC<CalloutProps> = ({ type = 'info', children }) => {
  const styles = {
    info: {
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/20',
      icon: <Info className="h-5 w-5 text-blue-500" />,
    },
    warning: {
      bg: 'bg-yellow-500/10',
      border: 'border-yellow-500/20',
      icon: <AlertTriangle className="h-5 w-5 text-yellow-500" />,
    },
    success: {
      bg: 'bg-green-500/10',
      border: 'border-green-500/20',
      icon: <CheckCircle className="h-5 w-5 text-green-500" />,
    },
    error: {
      bg: 'bg-red-500/10',
      border: 'border-red-500/20',
      icon: <XCircle className="h-5 w-5 text-red-500" />,
    },
  };

  return (
    <div className={`my-6 rounded-xl ${styles[type].bg} border ${styles[type].border} p-4`}>
      <div className="flex items-start space-x-3">
        {styles[type].icon}
        <div className="flex-1 [&>:first-child]:mt-0 [&>:last-child]:mb-0">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Callout; 