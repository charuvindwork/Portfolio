// src/constants/data.js
// v(link, title, description, orientation)
//   link: full Instagram reel or YouTube URL (watch?v=, youtu.be, or /shorts/)
//   orientation: 'vertical' (default, 9:16) or 'horizontal' (16:9 preview)
// Optional: add `thumbnail: '/path/to/image.jpg'` to any entry to override the cover.
const v = (link, title, description, orientation = 'vertical') => ({
  link,
  title,
  description,
  orientation,
});

export const portfolioData = {
  Fashion: [
    {
      company: "Vogue Styles",
      logo: "👗",
      projects: [
        v("https://www.instagram.com/reel/REPLACE_FASHION_IG1/", "Fashion Reel 01", "Color-graded lookbook cut"),
        v("https://www.instagram.com/reel/REPLACE_FASHION_IG2/", "Fashion Reel 02", "Runway highlights edit"),
        v("https://www.youtube.com/shorts/REPLACE_FASHION_YT1", "Fashion Short 01", "Campaign teaser"),
        v("https://www.youtube.com/watch?v=REPLACE_FASHION_YT2", "Fashion Film 01", "Editorial brand film", "horizontal"),
      ],
    },
  ],
  Hospitality: [
    {
      company: "Grand Hotels",
      logo: "🏨",
      projects: [
        v("https://www.instagram.com/reel/REPLACE_HOSP_IG1/", "Hospitality Reel 01", "Hotel walkthrough"),
        v("https://www.instagram.com/reel/REPLACE_HOSP_IG2/", "Hospitality Reel 02", "Dining experience cut"),
        v("https://www.youtube.com/shorts/REPLACE_HOSP_YT1", "Hospitality Short 01", "Suite showcase"),
        v("https://www.youtube.com/watch?v=REPLACE_HOSP_YT2", "Hospitality Film 01", "Property promo", "horizontal"),
      ],
    },
  ],
  Wedding: [
    {
      company: "Wedding Films",
      logo: "💍",
      projects: [
        v("https://www.instagram.com/reel/REPLACE_WEDDING_IG1/", "Wedding Reel 01", "Ceremony highlights"),
        v("https://www.instagram.com/reel/REPLACE_WEDDING_IG2/", "Wedding Reel 02", "Sangeet recap"),
        v("https://www.youtube.com/shorts/REPLACE_WEDDING_YT1", "Wedding Short 01", "Save-the-date teaser"),
        v("https://www.youtube.com/watch?v=REPLACE_WEDDING_YT2", "Wedding Film 01", "Full highlight film", "horizontal"),
      ],
    },
  ],
  Gaming: [
    {
      company: "Gaming Creators",
      logo: "🎮",
      projects: [
        v("https://www.instagram.com/reel/REPLACE_GAMING_IG1/", "Gaming Reel 01", "Clutch moments montage"),
        v("https://www.instagram.com/reel/REPLACE_GAMING_IG2/", "Gaming Reel 02", "Creator reveal teaser"),
        v("https://www.youtube.com/shorts/REPLACE_GAMING_YT1", "Gaming Short 01", "Fast-cut highlight"),
        v("https://www.youtube.com/watch?v=REPLACE_GAMING_YT2", "Gaming Video 01", "Long-form creator edit", "horizontal"),
      ],
    },
  ],
  Advertisement: [
    {
      company: "Brand Campaigns",
      logo: "📣",
      projects: [
        v("https://www.instagram.com/reel/REPLACE_ADS_IG1/", "Ad Reel 01", "Product launch spot"),
        v("https://www.instagram.com/reel/REPLACE_ADS_IG2/", "Ad Reel 02", "Social-first campaign"),
        v("https://www.youtube.com/shorts/REPLACE_ADS_YT1", "Ad Short 01", "15-second cut-down"),
        v("https://www.youtube.com/watch?v=REPLACE_ADS_YT2", "Ad Film 01", "Brand commercial", "horizontal"),
      ],
    },
  ],
  "Personal Projects": [
    {
      company: "Personal Work",
      logo: "🎬",
      projects: [
        v("https://www.instagram.com/reel/REPLACE_PERSONAL_IG1/", "Personal Reel 01", "Experimental motion piece"),
        v("https://www.instagram.com/reel/REPLACE_PERSONAL_IG2/", "Personal Reel 02", "Color grading study"),
        v("https://www.youtube.com/shorts/REPLACE_PERSONAL_YT1", "Personal Short 01", "Generative AI test"),
        v("https://www.youtube.com/watch?v=REPLACE_PERSONAL_YT2", "Personal Film 01", "Short film", "horizontal"),
      ],
    },
  ],
};

export const niches = Object.keys(portfolioData);