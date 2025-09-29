import { useEffect, useState } from 'react';
import NotFound from '@/pages/NotFound';

const AuthCallback = () => {
  const [shouldShow404, setShouldShow404] = useState(false);
  const [deeplinkUrl, setDeeplinkUrl] = useState('');

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const error = searchParams.get('error');
    const code = searchParams.get('code');
    
    if (error || !code) { setShouldShow404(true); return; }
    setDeeplinkUrl(`hovrlay://auth/callback?code=${code}`);
  }, []);

  if (shouldShow404) {
    return <NotFound />;
  }

  return (
    <div className="flex items-center justify-center bg-red-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6 my-24">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Authentication Callback</h1>
        <p className="text-gray-600 mb-4">Complete URL:</p>
        <div className="bg-gray-100 p-3 rounded border">
          <code className="text-sm break-all">{deeplinkUrl}</code>
        </div>
      </div>
    </div>
  );
};

export default AuthCallback;
