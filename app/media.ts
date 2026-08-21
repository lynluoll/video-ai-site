const PROJECT_VIDEO_BASE_URL =
  "https://carey.tos-ap-southeast-1.bytepluses.com/video-ai-site/branch-solution-displays";

export const projectVideoUrl = (path: string) => {
  const normalizedPath = path.replace(/^\/+/, "");

  // Local previews should use the original files in /public directly instead of
  // making a slow round trip to the Singapore TOS origin. Production keeps the
  // external asset host so videos do not enter the application bundle.
  return import.meta.env.DEV
    ? `/${normalizedPath}`
    : `${PROJECT_VIDEO_BASE_URL}/${normalizedPath}`;
};
