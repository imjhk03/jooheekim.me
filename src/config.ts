export const SITE = {
  website: "https://jooheekim.me/", // replace this with your deployed domain
  author: "Joohee Kim",
  profile: "https://jooheekim.me/",
  desc: "Personal blog of Joohee Kim",
  title: "Joohee Kim",
  ogImage: "assets/jhk-avatar.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false, // disabled for personal blog
    text: "Edit page",
    url: "",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "ko", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Seoul", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
