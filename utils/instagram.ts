export interface InstagramMedia {
    id: string;
    caption?: string;
    media_type: string;
    media_url: string;
    permalink: string;
    thumbnail_url?: string;
    timestamp: string;
  }
  
  export const fetchInstagramUserMedia = async (accessToken: string): Promise<InstagramMedia[]> => {
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${accessToken}`;
  
    const response = await fetch(url);
    const data = await response.json();
  
    if (data.error) {
      throw new Error(data.error.message);
    }
  
    return data.data as InstagramMedia[];
  };
  

  // export interface InstagramReel {
  //   id: string;
  //   caption: string;
  //   media_type: string;
  //   media_url: string;
  //   permalink: string;
  //   thumbnail_url: string;
  //   timestamp: string;
  // }
  
  // export const fetchInstagramReel = async (mediaId: string, accessToken: string): Promise<InstagramReel> => {
  //   const url = `https://graph.instagram.com/${mediaId}?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${accessToken}`;
  
  //   const response = await fetch(url);
  //   const data = await response.json();
  
  //   if (data.error) {
  //     throw new Error(data.error.message);
  //   }
  
  //   return data as InstagramReel;
  // };
  