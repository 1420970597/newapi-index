export const API_CONFIG = {
  url: 'https://your-api-url.com/v1/models', // 请替换为实际的API地址
  keys: ['your-api-key'] // 请替换为实际的API密钥
};

// 慧智AI Claude 模型列表
export const FALLBACK_MODELS = [
  {
    id: "claude-3-5-haiku-20241022",
    name: "Claude 3.5 Haiku",
    input: "¥0.8000/M",
    output: "¥4.0000/M",
    context: "200K",
    features: ["快速响应", "高性价比"]
  },
  {
    id: "claude-3-5-sonnet-20241022",
    name: "Claude 3.5 Sonnet",
    input: "¥3.0000/M",
    output: "¥15.0000/M",
    context: "200K",
    features: ["平衡性能", "推荐使用"]
  },
  {
    id: "claude-3-7-sonnet-20250219",
    name: "Claude 3.7 Sonnet",
    input: "¥3.0000/M",
    output: "¥15.0000/M",
    context: "200K",
    features: ["最新版本", "性能提升"]
  },
  {
    id: "claude-haiku-4-5-20251001",
    name: "Claude Haiku 4.5",
    input: "¥1.0000/M",
    output: "¥5.0000/M",
    context: "1M",
    features: ["超长上下文", "思考模式"]
  },
  {
    id: "claude-opus-4-1-20250805",
    name: "Claude Opus 4.1",
    input: "¥15.0000/M",
    output: "¥75.0000/M",
    context: "1M",
    features: ["顶级性能", "思考模式", "超长上下文"]
  },
  {
    id: "claude-opus-4-20250514",
    name: "Claude Opus 4",
    input: "¥15.0000/M",
    output: "¥75.0000/M",
    context: "1M",
    features: ["旗舰模型", "思考模式"]
  },
  {
    id: "claude-opus-4-5-20251101",
    name: "Claude Opus 4.5",
    input: "¥5.0000/M",
    output: "¥25.0000/M",
    context: "1M",
    features: ["最新旗舰", "思考模式", "超长上下文"]
  },
  {
    id: "claude-sonnet-4-20250514",
    name: "Claude Sonnet 4",
    input: "¥15.0000/M",
    output: "¥75.0000/M",
    context: "1M",
    features: ["高级模型", "思考模式"]
  },
  {
    id: "claude-sonnet-4-5",
    name: "Claude Sonnet 4.5",
    input: "¥3.0000/M",
    output: "¥15.0000/M",
    context: "1M",
    features: ["推荐", "思考模式", "超长上下文"]
  },
  {
    id: "claude-sonnet-4-5-20250929",
    name: "Claude Sonnet 4.5",
    input: "¥3.0000/M",
    output: "¥15.0000/M",
    context: "1M",
    features: ["最新版", "思考模式", "超长上下文"]
  }
];

export const categorizeModel = (modelName) => {
  const name = modelName.toLowerCase();
  if (name.includes('haiku')) return 'haiku';
  if (name.includes('sonnet')) return 'sonnet';
  if (name.includes('opus')) return 'opus';
  return 'other';
};

export const scrollToElement = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
