type TwitterDesigner = {
  name: string;
  username: string;
  verified: boolean;
  location: string;
  created_at: string;
  description: string;
  id: string;
  url: string;
  profile_image_url: string;
  entities: {
    url: {
      urls: {
        display_url: string;
        expanded_url: string;
        url: string;
      }[];
    };
  };
};
type Designer = TwitterDesigner & {
  position: string[];
};
type Position = {
  id: string;
  value: string[];
  label: string;
  translationKey: string;
};

export type { TwitterDesigner, Designer, Position };
