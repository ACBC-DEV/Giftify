interface GifImage {
  height: string;
  width: string;
  size: string;
  url: string;
  mp4_size?: string;
  mp4?: string;
  webp_size?: string;
  webp?: string;
  frames?: string;
  hash?: string;
}

interface GifImages {
  original: GifImage;
  downsized: GifImage;
  downsized_large: GifImage;
  downsized_medium: GifImage;
  downsized_small: GifImage;
  downsized_still: GifImage;
  fixed_height: GifImage;
  fixed_height_downsampled: GifImage;
  fixed_height_small: GifImage;
  fixed_height_small_still: GifImage;
  fixed_height_still: GifImage;
  fixed_width: GifImage;
  fixed_width_downsampled: GifImage;
  fixed_width_small: GifImage;
  fixed_width_small_still: GifImage;
  fixed_width_still: GifImage;
  looping: { mp4_size: string; mp4: string };
  original_still: GifImage;
  original_mp4: GifImage;
  preview: GifImage;
  preview_gif: GifImage;
  preview_webp: GifImage;
  "480w_still": GifImage;
}

interface GifAnalytics {
  onload: { url: string };
  onclick: { url: string };
  onsent: { url: string };
}

export interface GifData {
  type: string;
  id: string;
  url: string;
  slug: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  title: string;
  rating: string;
  content_url: string;
  source_tld: string;
  source_post_url: string;
  is_sticker: number;
  import_datetime: string;
  trending_datetime: string;
  images: GifImages;
  analytics_response_payload: string;
  analytics: GifAnalytics;
}

export interface ResponseData {
  data: GifData[];
  meta: {
    status: number;
    msg: string;
    response_id: string;
  };
  pagination: {
    total_count: number;
    count: number;
    offset: number;
  };
}
