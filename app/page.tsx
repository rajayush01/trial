"use client"
import { useEffect, useState } from 'react';
import { fetchInstagramUserMedia, InstagramMedia } from '../utils/instagram';

const HomePage = () => {
  const [media, setMedia] = useState<InstagramMedia[]>([]);
  const accessToken = 'IGQWRQdEItSmp0a0FHeDFudWZATeWp2MmkzMG91ajl3NXRvajBaMy14YkhKUWpFZAnlFV08wXzhnVmtiNm5kRU45UENtcVdITnlaUE0yY0VaaUdzZAzVLNUFocUh4RTR3YUswOU1adWcwNmROZA0JSa1VmR3FEd1NrUzgZD';

  useEffect(() => {
    const getMedia = async () => {
      try {
        const mediaItems = await fetchInstagramUserMedia(accessToken);
        setMedia(mediaItems);
        console.log('Media Items:', mediaItems); // Log media items to identify the ID
      } catch (error) {
        console.error('Error fetching Instagram media:', error);
      }
    };

    getMedia();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Instagram Media</h1>
      {media.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {media.map((item) => (
            <div key={item.id} className="media-item">
              {item.media_type === 'VIDEO' ? (
                <video controls className="w-full h-auto rounded-lg shadow-md">
                  <source src={item.media_url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img src={item.media_url} alt={item.caption} className="w-full h-auto rounded-lg shadow-md" />
              )}
              <p className="mt-2">{item.caption}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default HomePage;

// "use client"
// import { useEffect, useState } from 'react';
// import { fetchInstagramReel, InstagramReel } from '../utils/instagram';

// const HomePage = () => {
//   const [reel, setReel] = useState<InstagramReel | null>(null);
//   const accessToken = 'IGQWROZAkNhVS1iQUp1SGtTNmhUUjEtd1EtQy1UcmlVdk5tMUN2ZATBybFJudGJaVzJoOUY3eWZA1b3VYWFdoRXRNTVRISFhQcC1hVGo1NGZACUDl5NkYybEtvT3hXVWxLODZABbEFxdWlyTW9zbVFheVdFdUtQbFo5V0UZD';
//   const mediaId = '18011988557452487';

//   useEffect(() => {
//     const getReel = async () => {
//       try {
//         const reelData = await fetchInstagramReel(mediaId, accessToken);
//         setReel(reelData);
//       } catch (error) {
//         console.error('Error fetching Instagram reel:', error);
//       }
//     };

//     getReel();
//   }, []);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-4xl font-bold text-center mb-8">Instagram Reel</h1>
//       {reel ? (
//         <div className="reel">
//           {reel.media_type === 'VIDEO' ? (
//             <video controls className="w-full h-auto rounded-lg shadow-md">
//               <source src={reel.media_url} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           ) : (
//             <img src={reel.media_url} alt={reel.caption} className="w-full h-auto rounded-lg shadow-md" />
//           )}
//           <p className="mt-4">{reel.caption}</p>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default HomePage;

