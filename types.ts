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
};
type Designer = {
  name: string;
  username: string;
  verified: boolean;
  location: string;
  created_at: string;
  description: string;
  id: string;
  url: string;
  profile_image_url: string;
  position: string[];
};
type Position = {
  id: string;
  value: string[];
  label: string;
};

export type { TwitterDesigner, Designer, Position };
