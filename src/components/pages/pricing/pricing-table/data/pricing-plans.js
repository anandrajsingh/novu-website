import LINKS from 'constants/links';

const PLANS = {
  free: {
    title: 'Free',
    linkText: 'Get started',
    linkUrl: LINKS.getStarted.to,
    platform: {
      notifications: 'Unlimited',
      includes: '0',
      'maximum-events': '10K',
      'number-of-subscribers': 'Unlimited',
      'active-templates': '10',
      'active-providers': '6',
      channels: 'All',
      members: '2',
      api: true,
    },
    inApp: {
      ui: true,
      'remove-branding': false,
      feed_retention: '30 days',
      'feed-api': true,
    },
    advancedFeatures: {
      preferences: true,
      digest: true,
      awareness: true,
      testing: false,
      routing: false,
      internationalization: false,
      topics: true,
      emailCallback: false,
      monitoring: true,
      'log-retention': '7',
    },
    security: {
      sso: false,
      roles: false,
      soc: true,
      hippa: false,
      uptimeSla: '95%',
      initialSupportSla: '3 business days',
      'custom-sla': false,
      'audit-logs': false,
      hybridCloud: false,
      support: 'Community Discord',
      prioritySupport: false,
    },
  },
  indie: {
    title: 'Indie Dev',
    linkText: 'Get started',
    linkUrl: LINKS.getStarted.to,
    platform: {
      notifications: 'Unlimited',
      includes: '20K',
      'maximum-events': 'Up to 100K',
      'number-of-subscribers': 'Unlimited',
      'active-templates': '10',
      'active-providers': '6',
      channels: 'All',
      members: '2',
      api: true,
    },
    inApp: {
      ui: true,
      'remove-branding': false,
      feed_retention: '90 days',
      'feed-api': true,
    },
    advancedFeatures: {
      preferences: true,
      digest: true,
      awareness: true,
      testing: false,
      routing: false,
      internationalization: false,
      topics: true,
      emailCallback: false,
      monitoring: true,
      'log-retention': '7',
    },
    security: {
      sso: false,
      roles: false,
      soc: true,
      hippa: false,
      uptimeSla: '99.99%',
      initialSupportSla: '2 business days',
      'custom-sla': false,
      'audit-logs': false,
      hybridCloud: false,
      support: 'Email + Chat',
      prioritySupport: false,
    },
  },
  business: {
    title: 'Business',
    linkText: 'Get started',
    linkUrl: LINKS.getStarted.to,
    platform: {
      notifications: 'Unlimited',
      includes: '60K',
      'maximum-events': 'Up to 5M',
      'number-of-subscribers': 'Unlimited',
      'active-templates': 'Unlimited',
      'active-providers': 'Unlimited',
      channels: 'All',
      members: 'Unlimited',
      api: true,
    },
    inApp: {
      ui: true,
      'remove-branding': true,
      feed_retention: '1 year',
      'feed-api': true,
    },
    advancedFeatures: {
      preferences: true,
      digest: true,
      awareness: true,
      testing: true,
      routing: true,
      internationalization: true,
      topics: true,
      emailCallback: true,
      monitoring: true,
      'log-retention': '30',
    },
    security: {
      sso: false,
      roles: false,
      soc: true,
      hippa: false,
      uptimeSla: '99.99%',
      initialSupportSla: '2 business days',
      'custom-sla': false,
      'audit-logs': true,
      hybridCloud: false,
      support: 'Email + Chat',
      prioritySupport: 'At an additional price',
    },
  },
  enterprise: {
    title: 'Enterprise',
    linkText: 'Get started',
    linkUrl: LINKS.getStarted.to,
    platform: {
      notifications: 'Unlimited',
      includes: '1M',
      'maximum-events': 'Unlimited',
      'number-of-subscribers': 'Unlimited',
      'active-templates': 'Unlimited',
      'active-providers': 'Unlimited',
      channels: 'All',
      members: 'Unlimited',
      api: true,
    },
    inApp: {
      ui: true,
      'remove-branding': true,
      feed_retention: '3 years',
      'feed-api': true,
    },
    advancedFeatures: {
      preferences: true,
      digest: true,
      awareness: true,
      testing: true,
      routing: true,
      internationalization: true,
      topics: true,
      emailCallback: true,
      monitoring: true,
      'log-retention': '30+',
    },
    security: {
      sso: true,
      roles: true,
      soc: true,
      hippa: true,
      uptimeSla: 'Custom',
      initialSupportSla: 'Custom',
      'custom-sla': true,
      'audit-logs': true,
      hybridCloud: true,
      support:
        'Email + Chat + Team Training + Enterprise Support + Team Onboarding + Dedicated Discord/Slack channel',
      prioritySupport: 'At an additional price',
    },
  },
};

const LABELS = [
  {
    title: 'Platform',
    items: {
      notifications: 'Notifications',
      includes: 'Included Events',
      'maximum-events': 'Maximum Events',
      'number-of-subscribers': 'Number Of Subscribers',
      'active-templates': 'Active Templates',
      'active-providers': 'Active Providers',
      channels: 'Channels & Providers Library',
      members: 'Team members',
      api: 'Full API',
    },
  },
  {
    title: 'In-App',
    items: {
      ui: 'In-App UI',
      'remove-branding': 'Remove Novu Branding',
      feed_retention: 'Feed Retention',
      'feed-api': 'Feed API',
    },
  },
  {
    title: 'Advanced Features',
    items: {
      preferences: 'User Preferences',
      digest: 'Digest',
      awareness: 'Timezone Awareness',
      testing: 'Testing Templates',
      routing: 'Advanced Routing Engine',
      internationalization: 'Internationalization',
      topics: 'Topics',
      emailCallback: 'Email Callback',
      monitoring: 'Monitoring',
      'log-retention': 'Log Retention',
    },
  },
  {
    title: 'Security & Compliance',
    items: {
      sso: 'SSO',
      roles: 'User Roles & Permissions',
      soc: 'SOC II, ISO27001, GDPR',
      hippa: 'HIPAA, DPA',
      uptimeSla: 'Uptime SLA',
      initialSupportSla: 'Initial Support SLA',
      'custom-sla': 'Custom SLA’s',
      'audit-logs': 'Audit Logs',
      hybridCloud: 'Hybrid Cloud',
      support: 'Support',
      prioritySupport: 'Priority Support',
    },
  },
];

export { PLANS, LABELS };
