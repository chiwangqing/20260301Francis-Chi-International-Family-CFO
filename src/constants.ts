export const REMOTE_BASE = 'https://raw.githubusercontent.com/chiwangqing/Francis-Assets/main';
export const CACHE_BUST = `?v=${new Date().getTime()}`;

export const ASSETS = {
  WECHAT: `${REMOTE_BASE}/Contact%20Info/wechat.png${CACHE_BUST}`,
  WHATSAPP: `${REMOTE_BASE}/Contact%20Info/whatsapp.png${CACHE_BUST}`,
  WORKING_SCENE: (i: number) => `${REMOTE_BASE}/WorkingScenario/${i}.png${CACHE_BUST}`,
  STORY_IMAGE: (name: string) => `${REMOTE_BASE}/gallery-story/${name}.png${CACHE_BUST}`,
};
