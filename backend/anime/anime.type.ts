export type TAnime = Readonly<{
  id: string;
  title: string;
  image: string;
  episodes: number;
  description: string;
  year: number;
  genre: string[];
  rating: number;
  status: "ongoing" | "completed" | "paused";
}>;
