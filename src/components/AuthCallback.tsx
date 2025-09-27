import { useEffect, useState } from 'react';
import NotFound from '@/pages/NotFound';


const AuthCallback = () => {
  const [shouldShow404, setShouldShow404] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const error = searchParams.get('error');
    const code = searchParams.get('code');
    const state = searchParams.get('state');

    if (error || !code) {
      setShouldShow404(true);
      return;
    }

    const deeplinkUrl = `hovrlay://auth/callback?code=${code}${state ? `&state=${state}` : ''}`;
    window.location.href = deeplinkUrl;
  }, []);

  if (shouldShow404) {
    return <NotFound />;
  }
  return null;
};

export default AuthCallback;
