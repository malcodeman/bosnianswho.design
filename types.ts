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
type NotionDesigner = {
  id: string;
  username: string;
  position: string[];
};
type NotionPosition = {
  id: string;
  name: string;
  count: number;
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

export type { TwitterDesigner, NotionDesigner, NotionPosition, Designer };
