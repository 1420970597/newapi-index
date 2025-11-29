export const API_CONFIG = {
  url: 'https://quiet-darkness-94e7.kyxjames23.workers.dev/v1/models',
  keys: [
    'sk-7IyfmJMIoN14FkZ0jQMj49zzHUPx70gahWuOX789hwQA2ZqE',
    'sk-OrV3NW0dmTln3IcWegJEkSqcsPl5qipVnUWbKv4fpEiUHSoc'
  ]
};

export const FALLBACK_MODELS = [
  "gpt-4.1-mini", "gpt-4.1-nano", "gpt-4o", "gpt-4o-mini", "gpt-oss-120b", "gpt-oss-20b",
  "claude-3-5-sonnet", "claude-3-haiku",
  "cursor2-claude-4-sonnet", "cursor2-claude-4.1-opus", "cursor2-claude-4.5-sonnet",
  "cursor2-gpt-5", "cursor2-gpt-5-codex", "cursor2-gpt-5-mini",
  "cursor2-grok-3", "cursor2-grok-3-mini", "cursor2-grok-4",
  "DeepSeek-V3.1", "DeepSeek-V3.1-Terminus", "DeepSeek-V3.2-Exp",
  "gemini-2.0-flash", "gemini-2.0-flash-lite-preview", "gemini-2.5-flash", "gemini-2.5-flash-lite",
  "gemini-2.5-flash-lite-preview-09-2025", "gemini-2.5-pro", "gemini-2.5-pro-preview-03-25",
  "gemini-2.5-pro-preview-03-25-search", "gemini-2.5-pro-preview-05-06", "gemini-2.5-pro-preview-05-06-search",
  "gemini-2.5-pro-preview-06-05", "gemini-2.5-pro-preview-06-05-search", "gemini-3-pro-preview",
  "GLM-4.5", "GLM-4.5-Air", "GLM-4.5V", "GLM-4.6",
  "grok-4.1-fast",
  "Kimi-K2-Instruct-0905",
  "MiniMax-M2",
  "Qwen/Qwen3-8B", "Qwen3-235B-A22B-Instruct-2507", "Qwen3-235B-A22B-Thinking-2507",
  "Qwen3-Coder-Plus", "Qwen3-Max", "Qwen3-Next-80B-A3B-Instruct", "Qwen3-Next-80B-A3B-Thinking",
  "Qwen3-VL-235B-A22B-Instruct", "Qwen3-VL-235B-A22B-Thinking", "Qwen3-VL-30B-A3B-Instruct", "Qwen3-VL-30B-A3B-Thinking",
  "tencent/Hunyuan-MT-7B",
  "THUDM/glm-4-9b-chat"
];

export const categorizeModel = (modelName) => {
  const name = modelName.toLowerCase();
  if (name.startsWith('gpt') || name.includes('/gpt')) return 'gpt';
  if (name.startsWith('claude') || name.includes('/claude')) return 'claude';
  if (name.startsWith('gemini') || name.includes('/gemini')) return 'gemini';
  if (name.startsWith('glm') || name.includes('/glm')) return 'glm';
  if (name.startsWith('qwen') || name.includes('/qwen')) return 'qwen';
  if (name.startsWith('deepseek') || name.includes('/deepseek')) return 'deepseek';
  if (name.startsWith('grok') || name.includes('/grok') || name.includes('grok-')) return 'grok';
  if (name.startsWith('kimi') || name.includes('/kimi') || name.includes('moonshot')) return 'kimi';
  return 'other';
};

export const scrollToElement = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
