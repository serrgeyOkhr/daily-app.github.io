import type { IWebsite } from "@/const";
const NASA_API_KEY = __APP_ENV__.NASA_API_KEY ?? "DEMO_KEY";

export const RANDOM_FACT_URL = "https://uselessfacts.jsph.pl/api/v2/facts/random";
export const NASA_IMAGE_URL = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`;

export const generalWebsites: IWebsite[] = [
  {
    name: "YouTube",
    url: "https://www.youtube.com/",
    image: "youtube",
  },
  {
    name: "Movies",
    url: "https://www1.movies2watch.biz/home/",
    image: "movies2watch",
  },
  {
    name: "Music",
    url: "https://music.yandex.ru/home/",
    image: "yandex_music.svg",
  },
  {
    name: "Twitch",
    url: "https://www.twitch.tv/",
    image: "twitch.svg",
  },
];
export const workWebsites: IWebsite[] = [
  {
    name: "Toggl",
    url: "https://track.toggl.com/timer",
    image: "toggle.svg",
  },
  {
    name: "Jira",
    url: "https://scrile.atlassian.net/jira/software/c/projects/CO/boards/83",
    image: "jira",
  },
  {
    name: "Wiki",
    url: "https://scrile.atlassian.net/wiki/spaces/ID/pages/733708301/CONNECT",
    image: "jira_wiki",
  },
  {
    name: "gitlab",
    url: "https://gitlab.com/webvideo/",
    image: "gitlab.svg",
  },
  {
    name: "Retra",
    url: "https://miro.com/app/board/o9J_lhIWCUw=/",
    image: "miro.svg",
  },
];
