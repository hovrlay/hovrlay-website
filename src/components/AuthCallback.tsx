import { useEffect, useState } from 'react';
import NotFound from '@/pages/NotFound';

const AuthCallback = () => {
  const [shouldShow404, setShouldShow404] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const error = searchParams.get('error');
    const code = searchParams.get('code');
    
    if (error || !code) { setShouldShow404(true); return; }
    const deeplinkUrl = `hovrlay://auth/callback?code=${code}`;
    window.location.href = deeplinkUrl;
  }, []);

  if (shouldShow404) { return <NotFound />; }
  return (
    <div className="flex items-center justify-center my-20 py-20">
      <div className="text-center my-20 py-20">
        <h1 className="text-xl font-semibold text-foreground mb-2">Redirecting...</h1>
        <p className="text-muted-foreground">Opening Hovrlay app...</p>
      </div>
    </div>
  );
};

export default AuthCallback;
