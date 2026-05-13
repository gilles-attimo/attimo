var klaroConfig = {
  version: 1,
  storageMethod: 'cookie',
  cookieName: 'klaro',
  cookieExpiresAfterDays: 365,
  default: false,
  mustConsent: false,
  acceptAll: true,
  hideDeclineAll: false,
  styling: { theme: ['light', 'bottom'] },
  lang: 'en',
  translations: {
    en: {
      consentNotice: {
        description: 'We use cookies and similar tracking technologies to analyse site traffic and measure the performance of our marketing campaigns. By clicking "That\'s ok" you consent to the use of these technologies. You can withdraw your consent at any time by clicking "Let me choose".',
      },
      acceptAll: 'That\'s ok',
      declineAll: 'I decline',
      acceptSelected: 'Accept selected',
      purposes: { analytics: 'Analytics', marketing: 'Marketing' },
    },
  },
  services: [
    {
      name: 'google-tag-manager',
      title: 'Google Tag Manager',
      purposes: ['analytics', 'marketing'],
      onAccept: function() {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('consent', 'update', { ad_storage: 'granted', ad_personalization: 'granted', ad_user_data: 'granted', analytics_storage: 'granted', functionality_storage: 'granted', personalization_storage: 'granted' });
      },
      onDecline: function() {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('consent', 'update', { ad_storage: 'denied', ad_personalization: 'denied', ad_user_data: 'denied', analytics_storage: 'denied', functionality_storage: 'denied', personalization_storage: 'denied' });
      },
    },
  ],
};
