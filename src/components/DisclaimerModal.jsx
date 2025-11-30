import { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';

const DisclaimerModal = () => {
  const { disclaimerModal, acceptDisclaimer } = useApp();
  const [countdown, setCountdown] = useState(5);
  const [canAccept, setCanAccept] = useState(false);

  useEffect(() => {
    if (disclaimerModal) {
      document.body.style.overflow = 'hidden';
      const timer = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            setCanAccept(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => {
        clearInterval(timer);
        document.body.style.overflow = 'unset';
      };
    }
  }, [disclaimerModal]);

  if (!disclaimerModal) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[60] flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-gray-200 dark:border-gray-700">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
            <i className="fas fa-shield-alt"></i>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">免责声明</h2>
        </div>
        <div className="space-y-4 text-sm text-gray-600 dark:text-gray-300 max-h-60 overflow-y-auto custom-scrollbar p-2 bg-gray-50 dark:bg-gray-800 rounded-xl mb-6">
          <p><strong>1. 站点性质与非官方声明：</strong> 本站是慧智AI - Claude API专业服务商，为开发者和企业用户提供稳定、高效的Claude API接入服务。本站独立运营，与 Anthropic、OpenAI、Google (Alphabet)、Grok、Meta、DeepSeek、Kimi、智谱AI、阿里千问等任何主流 AI 厂商及第三方服务商无任何官方关联、商业合作或担保关系。本站所提供的服务不构成任何形式的合同、雇佣、合伙或委托关系。</p>
          <p><strong>2. 服务说明：</strong> 本站提供付费的Claude API接入服务，用户需要充值后方可使用。请通过本站官方渠道进行充值，谨防假冒网站或第三方诈骗。本站不会主动联系用户索要账号密码等敏感信息。</p>
          <p><strong>3. 合规使用与行为准则：</strong> 根据《生成式人工智能服务管理暂行办法》规定（自 2023 年 08 月 15 日起施行），用户在使用本站服务时必须严格遵守以下规定：合法用途：申请与使用须仅用于合法的商业开发、学术研究等正当目的。严禁用于违反中国法律法规、出口管制政策及相关平台服务条款的行为。内容规范：严禁生成违法、侵权、暴力、色情、政治敏感或侵犯他人隐私的内容。特别提示：使用 Claude 系列模型时，请务必注意内容合规，尽量避免涉及 NSFW（Not Safe For Work）内容，以免引发风控。禁止滥用：严禁进行恶意请求、DDoS 攻击、高频并发刷接口或其他任何可能导致服务器负载过高或损坏的行为。</p>
          <p><strong>4. 账户管理与违规处理机制：</strong> 沟通优先：若发现账户存在滥用或异常行为，本站会尝试与用户联系咨询情况。违规处理：对于严重违规行为，本站保留封禁账号、扣除额度或采取其他必要措施的权利。数据与责任：使用者需对其输入、上传的数据及产生的内容自行承担全部法律责任。请勿在 Prompt 中提交受法律保护的个人隐私或商业机密。</p>
          <p><strong>5. 服务变更与不可抗力：</strong> 服务调整：本站保留在不另行通知的情况下，对 API 接口进行调整、升级、维护或暂停服务的权利。费用说明：已充值的费用不予退还，请根据实际需求合理充值。免责条款：本站服务按"现状"提供，不作任何明示或默示的担保。在法律允许的最大范围内，运营方对因使用或无法使用本站服务所导致的直接或间接损失不承担责任。</p>
          <p><strong>6. 知识产权与协议效力：</strong> 产出归属：使用者应确保对提交素材拥有相应权利；产出的成果归用户所有。管辖法律：本声明受中华人民共和国法律管辖。同意条款：您注册或实际使用本站服务，即表示您已阅读并完全同意本声明及其后续更新。</p>
        </div>
        <button
          onClick={acceptDisclaimer}
          disabled={!canAccept}
          className={`w-full py-3 rounded-xl font-bold transition-all ${canAccept
              ? 'bg-blue-600 text-white hover:bg-blue-700 cursor-pointer'
              : 'bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed'
            }`}
        >
          {canAccept ? '我已阅读并同意' : `请阅读条款 (${countdown}s)`}
        </button>
      </div>
    </div>
  );
};

export default DisclaimerModal;
