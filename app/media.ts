const PROJECT_VIDEO_BASE_URL =
  "https://carey.tos-ap-southeast-1.bytepluses.com/video-ai-site/branch-solution-displays";

export const projectVideoUrl = (path: string) =>
  `${PROJECT_VIDEO_BASE_URL}/${path.replace(/^\/+/, "")}`;
