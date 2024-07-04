"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchInstagramUserMedia, InstagramMedia } from '../../../utils/instagram';

const MediaPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [media, setMedia] = useState<InstagramMedia | null>(null);
  const accessToken = 'YOUR_ACCESS_TOKEN';

  useEffect(() => {
    const getMedia = async () => {
      if (id) {
        try {
          const mediaItems = await fetchInstagramUserMedia(accessToken);
          const selectedMedia = mediaItems.find(item => item.id === id);
          setMedia(selectedMedia || null);
        } catch (error) {
          console.error('Error fetching Instagram media:', error);
        }
      }
    };

    getMedia();
  }, [id]);

  if (!media) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Instagram Media</h1>
      <div className="media-item">
        {media.media_type === 'VIDEO' ? (
          <video controls className="w-full h-auto rounded-lg shadow-md">
            <source src={media.media_url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={media.media_url} alt={media.caption} className="w-full h-auto rounded-lg shadow-md" />
        )}
        <p className="mt-4">{media.caption}</p>
      </div>
    </div>
  );
};

export default MediaPage;