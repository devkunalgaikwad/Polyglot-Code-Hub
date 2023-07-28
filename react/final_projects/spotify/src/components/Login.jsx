import { Box, Button, Image } from '@chakra-ui/react';
import React from 'react';

const Login = () => {
    const handleClick = () => {
        const client_id = 'bfe1737d67284e9e9908ff545ff836a5';
        const redirectUrl = 'http://localhost:5173/';
        const apiUrl = 'https://accounts.spotify.com/authorize';
        const scope = [
          'user-read-email',
          'user-read-private',
          'user-read-playback-state',
          'user-modify-playback-state',
          'user-read-currently-playing',
          'user-read-playback-position',
          'user-top-read',
          'user-read-recently-played',
        ];
      
        window.location.href = `${apiUrl}?client_id=${client_id}&redirect_uri=${redirectUrl}&scope=${scope.join(
          " "
        )}&response_type=token&show_daialog=true`;
      };
      
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh" width="100vw" backgroundColor="#1db954" gap="5"> 
      <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" alt="Spotify" width="500vw" className="p-5 rounded-5"/>
      <Button onClick={handleClick} backgroundColor={'blackAlpha.900'} textColor={'white'} cursor={'pointer'} width="15vw" borderRadius="20px">
        Connect
      </Button>
    </Box>
  );
};

export default Login;
