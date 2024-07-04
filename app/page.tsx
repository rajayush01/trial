"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchInstagramUserMedia, InstagramMedia } from '../utils/instagram';

const HomePage = () => {
  const [media, setMedia] = useState<InstagramMedia[]>([]);
  const accessToken = 'IGQWROZAkNhVS1iQUp1SGtTNmhUUjEtd1EtQy1UcmlVdk5tMUN2ZATBybFJudGJaVzJoOUY3eWZA1b3VYWFdoRXRNTVRISFhQcC1hVGo1NGZACUDl5NkYybEtvT3hXVWxLODZABbEFxdWlyTW9zbVFheVdFdUtQbFo5V0UZD';

  useEffect(() => {
    const getMedia = async () => {
      try {
        const mediaItems = await fetchInstagramUserMedia(accessToken);
        setMedia(mediaItems);
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
            <Link href={`/media/${item.id}`} key={item.id}>
              <div className="media-item cursor-pointer">
                {item.media_type === 'VIDEO' ? (
                  <video className="w-full h-auto rounded-lg shadow-md">
                    <source src={item.media_url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img src={item.media_url} alt={item.caption} className="w-full h-auto rounded-lg shadow-md" />
                )}
                <p className="mt-2">{item.caption?.substring(0, 100)}...</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default HomePage;