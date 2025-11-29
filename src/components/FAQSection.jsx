const FAQSection = () => {
  const faqs = [
    {
      icon: 'fa-gift',
      iconColor: 'text-blue-500',
      hoverBorder: 'hover:border-blue-100 dark:hover:border-blue-900',
      question: '是否完全免费？',
      answer: (
        <>
          <span className="font-semibold text-green-600 dark:text-green-400">是，永久免费。</span>
          采用公平限流策略以保障服务稳定。致力于让每个人都能体验前沿的人工智能技术。
        </>
      ),
    },
    {
      icon: 'fa-hands-helping',
      iconColor: 'text-purple-500',
      hoverBorder: 'hover:border-purple-100 dark:hover:border-purple-900',
      question: '如何参与贡献？',
      answer: '可以在投喂站进行投喂，欢迎开源用户共同参与项目建设。',
    },
    {
      icon: 'fa-user-plus',
      iconColor: 'text-green-500',
      hoverBorder: 'hover:border-green-100 dark:hover:border-green-900',
      question: '什么时候开放注册？',
      answer: (
        <>
          <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-0.5 rounded text-xs font-bold">
            每周四
          </span>
          会定时开放注册，或关注公告获取其他开放时间。
        </>
      ),
    },
    {
      icon: 'fa-exclamation-circle',
      iconColor: 'text-red-500',
      hoverBorder: 'hover:border-red-100 dark:hover:border-red-900',
      question: '报错 No active API keys...？',
      answer: '通常是因为 GPT-Load 的 Key Pool 暂时失效。请尝试更换模型，或等待一段时间后重试。',
    },
    {
      icon: 'fa-ban',
      iconColor: 'text-yellow-500',
      hoverBorder: 'hover:border-yellow-100 dark:hover:border-yellow-900',
      question: '是否可以 NSFW？',
      answer: (
        <>
          <span className="font-bold text-red-500">不可以。</span>
          严禁生成色情、暴力等违规内容，违者封号。哒咩呦！
        </>
      ),
    },
    {
      icon: 'fa-tachometer-alt',
      iconColor: 'text-indigo-500',
      hoverBorder: 'hover:border-indigo-100 dark:hover:border-indigo-900',
      question: '可以开启高并发吗？',
      answer: '默认限制 12 RPM。如有特殊场景需求，请联系管理员申请。',
    },
    {
      icon: 'fa-share-alt',
      iconColor: 'text-orange-500',
      hoverBorder: 'hover:border-orange-100 dark:hover:border-orange-900',
      question: '可以将 Key 分享给朋友吗？',
      answer: (
        <>
          <span className="font-bold text-red-500">不可以。</span>
          二次分发会导致滥用，影响其他用户的正常使用。请让朋友自行注册获取 Key。
        </>
      ),
      colSpan: 'md:col-span-2',
    },
  ];

  return (
    <div id="faq-section" className="col-span-1 md:col-span-4 lg:col-span-6 bg-gray-100 dark:bg-gray-800/50 rounded-3xl p-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">常见问题</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-sm border border-transparent ${faq.hoverBorder} transition-colors ${faq.colSpan || ''}`}
          >
            <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center">
              <i className={`fas ${faq.icon} ${faq.iconColor} mr-2`}></i> {faq.question}
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
