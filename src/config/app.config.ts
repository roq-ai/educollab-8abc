interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['School Administrator'],
  customerRoles: ['Freelance Educator'],
  tenantRoles: ['School Administrator'],
  tenantName: 'School',
  applicationName: 'EduCollab',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage own user information',
    'Create, edit and delete lesson plans',
    'Create, edit and delete learning modules',
    'Create, edit and delete educational content',
  ],
  ownerAbilities: ['Manage users', 'Manage school information', 'Manage lesson plans', 'Manage educational content'],
  getQuoteUrl: 'https://app.roq.ai/proposal/7238df1b-858b-4701-9bef-3a0d17c09082',
};
